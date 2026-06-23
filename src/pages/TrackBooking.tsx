import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaStar, FaPhoneAlt, FaCheckCircle } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'
import { useBookings } from '../context/BookingContext'
import LiveTrackingMap from '../components/booking/LiveTrackingMap'
import {
    STATUS_FLOW,
    STATUS_LABELS,
    type BookingStatus,
} from '../types/booking'
import { formatINR } from '../utils/format'

function deriveStatus(progress: number): BookingStatus {
    if (progress >= 100) return 'completed'
    if (progress >= 80) return 'in_progress'
    if (progress >= 70) return 'arrived'
    if (progress >= 35) return 'on_the_way'
    if (progress >= 15) return 'assigned'
    return 'confirmed'
}

const TrackBooking: React.FC = () => {
    const { id } = useParams<{ id: string }>()
    const { getBooking, advanceStatus, setTracking } = useBookings()
    const booking = id ? getBooking(id) : undefined

    const [progress, setProgress] = useState(0)
    const [status, setStatus] = useState<BookingStatus>('confirmed')
    const [eta, setEta] = useState(0)
    const [ready, setReady] = useState(false)

    const progressRef = useRef(0)
    const statusRef = useRef<BookingStatus>('confirmed')
    const initRef = useRef(false)

    // Grace period before declaring "not found" (allows localStorage hydrate).
    useEffect(() => {
        const t = setTimeout(() => setReady(true), 700)
        return () => clearTimeout(t)
    }, [])

    // Initialise local state once the booking is available.
    useEffect(() => {
        if (booking && !initRef.current) {
            initRef.current = true
            const p = booking.trackingProgress ?? 0
            progressRef.current = p
            statusRef.current = booking.status
            setProgress(p)
            setStatus(booking.status)
            setEta(booking.etaMinutes ?? 0)
        }
    }, [booking])

    // Live simulation of the professional travelling to the patient.
    const isEmergency = booking?.category === 'emergency'
    const bookingId = booking?.id
    const terminal =
        booking?.status === 'completed' || booking?.status === 'cancelled'

    useEffect(() => {
        if (!bookingId || terminal) return
        const stepMs = isEmergency ? 1200 : 1600
        const inc = isEmergency ? 8 : 5
        const totalEta = isEmergency ? 18 : 35

        const timer = setInterval(() => {
            const np = Math.min(progressRef.current + inc, 100)
            progressRef.current = np
            setProgress(np)

            const ns = deriveStatus(np)
            if (ns !== statusRef.current) {
                statusRef.current = ns
                setStatus(ns)
                advanceStatus(bookingId, ns)
            }
            const remaining = Math.max(
                0,
                Math.round(((100 - np) / 100) * totalEta)
            )
            setEta(remaining)
            setTracking(bookingId, np, remaining)

            if (np >= 100) clearInterval(timer)
        }, stepMs)

        return () => clearInterval(timer)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [bookingId, terminal, isEmergency])

    if (!booking) {
        return (
            <div className="contain py-20 text-center">
                {!ready ? (
                    <div className="flex flex-col items-center">
                        <span className="loader" />
                        <p className="mt-4 text-black-200">Loading booking…</p>
                    </div>
                ) : (
                    <>
                        <h1 className="text-head font-bold">
                            Booking not found
                        </h1>
                        <Link
                            to="/my-bookings"
                            className="mt-5 inline-block rounded-full bg-blue px-6 py-2.5 font-semibold text-white"
                        >
                            View My Bookings
                        </Link>
                    </>
                )}
            </div>
        )
    }

    const accent = isEmergency ? '#E11D48' : '#0065B2'
    const currentIndex = STATUS_FLOW.indexOf(status)
    const completed = status === 'completed'

    return (
        <div className="contain py-6">
            <h1 className="font-roboto text-head font-bold text-blue">
                {isEmergency ? 'Emergency Tracking' : 'Track Your Service'}
            </h1>
            <p className="text-black-200">
                Booking ID <span className="font-semibold">{booking.id}</span>
            </p>

            <div className="mt-4 grid grid-cols-1 gap-5 lg:grid-cols-[1fr_360px]">
                {/* Map + ETA */}
                <div>
                    <div
                        className="mb-3 flex items-center justify-between rounded-2xl p-4 text-white"
                        style={{ backgroundColor: accent }}
                    >
                        <div>
                            <p className="text-[13px] opacity-90">
                                {completed
                                    ? 'Service completed'
                                    : STATUS_LABELS[status]}
                            </p>
                            <p className="text-[22px] font-bold">
                                {completed
                                    ? 'Thank you!'
                                    : eta > 0
                                      ? `ETA ${eta} min`
                                      : 'Arriving now'}
                            </p>
                        </div>
                        <MdLocationOn className="text-4xl opacity-90" />
                    </div>

                    <LiveTrackingMap
                        progress={progress}
                        accent={accent}
                        markerEmoji={isEmergency ? '🚑' : '🛵'}
                    />

                    {/* progress bar */}
                    <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-gray-200">
                        <div
                            className="h-full rounded-full transition-all duration-700"
                            style={{
                                width: `${progress}%`,
                                backgroundColor: accent,
                            }}
                        />
                    </div>
                </div>

                {/* Right column */}
                <div className="space-y-4">
                    {/* Caregiver */}
                    {booking.caregiver && (
                        <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                            <div className="flex items-center gap-3">
                                <span
                                    className="flex h-12 w-12 items-center justify-center rounded-full text-[16px] font-bold text-white"
                                    style={{ backgroundColor: accent }}
                                >
                                    {booking.caregiver.initials}
                                </span>
                                <div className="flex-1">
                                    <p className="font-semibold">
                                        {booking.caregiver.name}
                                    </p>
                                    <p className="text-[12px] text-black-200">
                                        {booking.caregiver.role}
                                    </p>
                                    {booking.caregiver.vehicle && (
                                        <p className="text-[11px] text-black-200">
                                            {booking.caregiver.vehicle}
                                        </p>
                                    )}
                                </div>
                                <span className="flex items-center gap-1 text-[13px] font-semibold text-green">
                                    <FaStar /> {booking.caregiver.rating}
                                </span>
                            </div>
                            <a
                                href={`tel:${booking.caregiver.phone}`}
                                className="mt-3 flex items-center justify-center gap-2 rounded-full py-2.5 font-semibold text-white"
                                style={{ backgroundColor: accent }}
                            >
                                <FaPhoneAlt /> Call{' '}
                                {isEmergency ? 'Crew' : 'Professional'}
                            </a>
                        </div>
                    )}

                    {/* Timeline */}
                    <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                        <p className="mb-3 font-semibold">Status</p>
                        <ol className="relative space-y-4">
                            {STATUS_FLOW.map((st, i) => {
                                const done =
                                    completed || i <= currentIndex
                                return (
                                    <li
                                        key={st}
                                        className="flex items-center gap-3"
                                    >
                                        {done ? (
                                            <FaCheckCircle
                                                className="text-lg"
                                                style={{ color: accent }}
                                            />
                                        ) : (
                                            <span className="h-4 w-4 rounded-full border-2 border-gray-300" />
                                        )}
                                        <span
                                            className={`text-[14px] ${
                                                done
                                                    ? 'font-semibold text-black-100'
                                                    : 'text-black-200'
                                            }`}
                                        >
                                            {STATUS_LABELS[st]}
                                        </span>
                                    </li>
                                )
                            })}
                        </ol>
                    </div>

                    {/* Summary */}
                    <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm text-[14px]">
                        <div className="flex justify-between">
                            <span className="text-black-200">Service</span>
                            <span className="font-medium">
                                {booking.service.title}
                            </span>
                        </div>
                        <div className="mt-1 flex justify-between">
                            <span className="text-black-200">Amount</span>
                            <span className="font-bold text-blue">
                                {formatINR(booking.amount)}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrackBooking
