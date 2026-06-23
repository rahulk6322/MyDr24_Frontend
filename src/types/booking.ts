// Shared types for the MYDR24 dynamic booking system.

export type ServiceCategory =
    | 'home_healthcare'
    | 'doctor_consultation'
    | 'emergency'

export type BookingStatus =
    | 'pending_payment'
    | 'confirmed'
    | 'assigned'
    | 'on_the_way'
    | 'arrived'
    | 'in_progress'
    | 'completed'
    | 'cancelled'

export type PaymentStatus = 'unpaid' | 'paid' | 'cod'

export type PaymentMethod = 'upi' | 'card' | 'netbanking' | 'cod'

export interface CatalogService {
    id: string
    category: ServiceCategory
    title: string
    description: string
    price: number // in INR
    unit?: string // e.g. "per visit", "per day"
    duration?: string // e.g. "45-60 min"
    icon?: string // emoji or short label used in cards
    popular?: boolean
}

export interface PatientDetails {
    name: string
    phone: string
    age?: string
    gender?: string
    notes?: string
}

export interface ScheduleInfo {
    type: 'asap' | 'scheduled'
    date?: string // yyyy-mm-dd
    slot?: string // e.g. "10:00 AM - 11:00 AM"
}

export interface Caregiver {
    name: string
    role: string
    rating: number
    phone: string
    vehicle?: string
    initials: string
    experience: string
}

export interface TimelineEntry {
    status: BookingStatus
    label: string
    at: number // epoch ms
}

export interface Booking {
    id: string
    category: ServiceCategory
    service: Pick<CatalogService, 'id' | 'title' | 'price' | 'unit'>
    patient: PatientDetails
    address: string
    schedule: ScheduleInfo
    amount: number
    paymentMethod?: PaymentMethod
    paymentStatus: PaymentStatus
    status: BookingStatus
    caregiver?: Caregiver
    createdAt: number
    timeline: TimelineEntry[]
    // Tracking helpers (0-100). Only meaningful while en route.
    trackingProgress?: number
    etaMinutes?: number
}

export const STATUS_LABELS: Record<BookingStatus, string> = {
    pending_payment: 'Pending Payment',
    confirmed: 'Booking Confirmed',
    assigned: 'Professional Assigned',
    on_the_way: 'On the Way',
    arrived: 'Arrived at Location',
    in_progress: 'Service in Progress',
    completed: 'Completed',
    cancelled: 'Cancelled',
}

// Ordered status flow used for progress timelines (non-emergency).
export const STATUS_FLOW: BookingStatus[] = [
    'confirmed',
    'assigned',
    'on_the_way',
    'arrived',
    'in_progress',
    'completed',
]
