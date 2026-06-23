import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react'
import type { ReactNode } from 'react'
import type {
    Booking,
    BookingStatus,
    Caregiver,
    PatientDetails,
    PaymentMethod,
    ScheduleInfo,
    ServiceCategory,
    TimelineEntry,
} from '../types/booking'
import { STATUS_LABELS } from '../types/booking'
import { ambulanceCrew, caregiverPool } from '../data/catalog'
import { generateBookingId } from '../utils/format'

const STORAGE_KEY = 'mydr24_bookings_v1'

interface NewBookingInput {
    category: ServiceCategory
    service: Booking['service']
    patient: PatientDetails
    address: string
    schedule: ScheduleInfo
    amount: number
}

interface BookingContextValue {
    bookings: Booking[]
    createBooking: (input: NewBookingInput) => Booking
    getBooking: (id: string) => Booking | undefined
    markPaid: (id: string, method: PaymentMethod) => Booking | undefined
    advanceStatus: (id: string, status: BookingStatus) => void
    setTracking: (id: string, progress: number, etaMinutes: number) => void
    cancelBooking: (id: string) => void
}

const BookingContext = createContext<BookingContextValue | undefined>(undefined)

function loadBookings(): Booking[] {
    try {
        const raw = localStorage.getItem(STORAGE_KEY)
        if (!raw) return []
        const parsed = JSON.parse(raw)
        return Array.isArray(parsed) ? (parsed as Booking[]) : []
    } catch {
        return []
    }
}

function pushTimeline(
    booking: Booking,
    status: BookingStatus
): TimelineEntry[] {
    // Avoid duplicate consecutive statuses.
    if (booking.timeline.some((t) => t.status === status)) {
        return booking.timeline
    }
    return [
        ...booking.timeline,
        { status, label: STATUS_LABELS[status], at: Date.now() },
    ]
}

function pickCaregiver(category: ServiceCategory): Caregiver {
    const pool = category === 'emergency' ? ambulanceCrew : caregiverPool
    return pool[Math.floor(Math.random() * pool.length)]
}

export function BookingProvider({ children }: { children: ReactNode }) {
    const [bookings, setBookings] = useState<Booking[]>([])

    // Hydrate from localStorage on mount.
    useEffect(() => {
        setBookings(loadBookings())
    }, [])

    // Persist on every change.
    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings))
        } catch {
            /* ignore quota errors */
        }
    }, [bookings])

    const createBooking = useCallback((input: NewBookingInput): Booking => {
        const now = Date.now()
        const booking: Booking = {
            id: generateBookingId(),
            category: input.category,
            service: input.service,
            patient: input.patient,
            address: input.address,
            schedule: input.schedule,
            amount: input.amount,
            paymentStatus: 'unpaid',
            status: 'pending_payment',
            createdAt: now,
            timeline: [
                {
                    status: 'pending_payment',
                    label: STATUS_LABELS.pending_payment,
                    at: now,
                },
            ],
        }
        setBookings((prev) => [booking, ...prev])
        return booking
    }, [])

    const getBooking = useCallback(
        (id: string) => bookings.find((b) => b.id === id),
        [bookings]
    )

    const markPaid = useCallback(
        (id: string, method: PaymentMethod): Booking | undefined => {
            let updated: Booking | undefined
            setBookings((prev) =>
                prev.map((b) => {
                    if (b.id !== id) return b
                    const caregiver = pickCaregiver(b.category)
                    const next: Booking = {
                        ...b,
                        paymentMethod: method,
                        paymentStatus: method === 'cod' ? 'cod' : 'paid',
                        status: 'confirmed',
                        caregiver,
                        timeline: pushTimeline(b, 'confirmed'),
                    }
                    updated = next
                    return next
                })
            )
            return updated
        },
        []
    )

    const advanceStatus = useCallback((id: string, status: BookingStatus) => {
        setBookings((prev) =>
            prev.map((b) =>
                b.id === id
                    ? { ...b, status, timeline: pushTimeline(b, status) }
                    : b
            )
        )
    }, [])

    const setTracking = useCallback(
        (id: string, progress: number, etaMinutes: number) => {
            setBookings((prev) =>
                prev.map((b) =>
                    b.id === id
                        ? { ...b, trackingProgress: progress, etaMinutes }
                        : b
                )
            )
        },
        []
    )

    const cancelBooking = useCallback((id: string) => {
        setBookings((prev) =>
            prev.map((b) =>
                b.id === id
                    ? {
                          ...b,
                          status: 'cancelled',
                          timeline: pushTimeline(b, 'cancelled'),
                      }
                    : b
            )
        )
    }, [])

    const value = useMemo<BookingContextValue>(
        () => ({
            bookings,
            createBooking,
            getBooking,
            markPaid,
            advanceStatus,
            setTracking,
            cancelBooking,
        }),
        [
            bookings,
            createBooking,
            getBooking,
            markPaid,
            advanceStatus,
            setTracking,
            cancelBooking,
        ]
    )

    return (
        <BookingContext.Provider value={value}>
            {children}
        </BookingContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useBookings(): BookingContextValue {
    const ctx = useContext(BookingContext)
    if (!ctx) {
        throw new Error('useBookings must be used within a BookingProvider')
    }
    return ctx
}
