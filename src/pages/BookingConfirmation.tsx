import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { FaCheckCircle, FaStar } from 'react-icons/fa'
import { MdLocationOn, MdAccessTime } from 'react-icons/md'
import { useBookings } from '../context/BookingContext'
import { formatINR, formatDateTime } from '../utils/format'
import { STATUS_LABELS } from '../types/booking'

const BookingConfirmation: React.FC = () => {
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()
    const { getBooking } = useBookings()
    const booking = id ? getBooking(id) : undefined

    if (!booking) {
        return (
            <div className="contain py-20 text-center">
                <h1 className="text-head font-bold">Booking not found</h1>
                <p className="mt-2 text-black-200">
                    We couldn&apos;t find this booking on this device.
                </p>
                <Link
                    to="/my-bookings"
                    className="mt-5 inline-block rounded-full bg-blue px-6 py-2.5 font-semibold text-white"
                >
                    View My Bookings
                </Link>
            </div>
        )
    }

    const paymentLabel =
        booking.paymentStatus === 'paid'
            ? `Paid • ${booking.paymentMethod?.toUpperCase()}`
            : booking.paymentStatus === 'cod'
              ? 'Pay after service (COD)'
              : 'Unpaid'

    return (
        <div className="contain py-8">
            <div className="mx-auto max-w-[680px]">
                {/* Success banner */}
                <div className="flex flex-col items-center rounded-2xl bg-gradient-to-b from-[#eaf9ec] to-white p-8 text-center">
                    <FaCheckCircle className="text-[64px] text-green" />
                    <h1 className="mt-4 font-roboto text-head font-bold text-black-100">
                        Booking Confirmed!
                    </h1>
                    <p className="mt-1 text-black-200">
                        Your booking ID is{' '}
                        <span className="font-bold text-blue">
                            {booking.id}
                        </span>
                    </p>
                    <p className="mt-1 text-[13px] text-black-200">
                        {formatDateTime(booking.createdAt)}
                    </p>
                </div>

                {/* Details card */}
                <div className="mt-5 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                        <h2 className="font-semibold">Booking Details</h2>
                        <span className="rounded-full bg-blue/10 px-3 py-1 text-[12px] font-semibold text-blue">
                            {STATUS_LABELS[booking.status]}
                        </span>
                    </div>

                    <div className="mt-4 space-y-2 text-[14px]">
                        <Row label="Service" value={booking.service.title} />
                        <Row
                            label="When"
                            value={
                                booking.schedule.type === 'asap'
                                    ? 'As soon as possible'
                                    : `${booking.schedule.date} • ${booking.schedule.slot}`
                            }
                        />
                        <Row label="Patient" value={booking.patient.name} />
                        <Row label="Phone" value={booking.patient.phone} />
                        <Row label="Address" value={booking.address} />
                        <Row label="Payment" value={paymentLabel} />
                        <div className="my-2 border-t border-gray-200" />
                        <div className="flex justify-between text-[16px] font-bold text-blue">
                            <span>Amount</span>
                            <span>{formatINR(booking.amount)}</span>
                        </div>
                    </div>
                </div>

                {/* Caregiver */}
                {booking.caregiver && (
                    <div className="mt-5 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                        <h2 className="mb-3 font-semibold">
                            Your Assigned Professional
                        </h2>
                        <div className="flex items-center gap-3">
                            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue text-[16px] font-bold text-white">
                                {booking.caregiver.initials}
                            </span>
                            <div className="flex-1">
                                <p className="font-semibold">
                                    {booking.caregiver.name}
                                </p>
                                <p className="text-[12px] text-black-200">
                                    {booking.caregiver.role} •{' '}
                                    {booking.caregiver.experience}
                                </p>
                            </div>
                            <span className="flex items-center gap-1 text-[13px] font-semibold text-green">
                                <FaStar /> {booking.caregiver.rating}
                            </span>
                        </div>
                    </div>
                )}

                {/* Actions */}
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <button
                        onClick={() => navigate(`/track/${booking.id}`)}
                        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-blue py-3 font-semibold text-white"
                    >
                        <MdLocationOn className="text-lg" /> Track Live
                    </button>
                    <Link
                        to="/my-bookings"
                        className="flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-blue py-3 font-semibold text-blue"
                    >
                        <MdAccessTime className="text-lg" /> My Bookings
                    </Link>
                </div>
            </div>
        </div>
    )
}

const Row: React.FC<{ label: string; value: string }> = ({ label, value }) => (
    <div className="flex justify-between gap-4">
        <span className="text-black-200">{label}</span>
        <span className="text-right font-medium">{value}</span>
    </div>
)

export default BookingConfirmation
