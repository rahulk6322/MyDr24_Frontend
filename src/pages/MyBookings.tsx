import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'
import toast from 'react-hot-toast'
import Breadcrumb from '../components/global/Breadcrumb'
import { useBookings } from '../context/BookingContext'
import { STATUS_LABELS, type BookingStatus } from '../types/booking'
import { formatINR, formatDateTime } from '../utils/format'

const statusColor: Record<BookingStatus, string> = {
    pending_payment: 'bg-amber-100 text-amber-700',
    confirmed: 'bg-blue/10 text-blue',
    assigned: 'bg-blue/10 text-blue',
    on_the_way: 'bg-indigo-100 text-indigo-700',
    arrived: 'bg-indigo-100 text-indigo-700',
    in_progress: 'bg-purple-100 text-purple-700',
    completed: 'bg-green/10 text-green',
    cancelled: 'bg-red-100 text-red-600',
}

const MyBookings: React.FC = () => {
    const { bookings, getBooking } = useBookings()
    const navigate = useNavigate()
    const [query, setQuery] = useState('')

    const handleSearch = () => {
        const id = query.trim().toUpperCase()
        if (!id) return
        const found = getBooking(id)
        if (found) {
            navigate(`/track/${found.id}`)
        } else {
            toast.error('No booking found with that ID')
        }
    }

    const activeStatuses: BookingStatus[] = [
        'confirmed',
        'assigned',
        'on_the_way',
        'arrived',
        'in_progress',
    ]

    return (
        <div className="contain py-6">
            <Breadcrumb
                stages={[
                    { label: 'Home', href: '/' },
                    { label: 'My Bookings' },
                ]}
            />
            <h1 className="font-roboto text-head font-bold text-blue">
                My Bookings
            </h1>

            {/* Check status by ID */}
            <div className="mt-4 flex max-w-md gap-2">
                <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    placeholder="Enter booking ID e.g. MYDR-7F3K2A"
                    className="flex-1 rounded-full border border-gray-300 px-4 py-2.5 text-[14px]"
                />
                <button
                    onClick={handleSearch}
                    className="flex items-center gap-2 rounded-full bg-blue px-5 py-2.5 font-semibold text-white"
                >
                    <FaSearch /> Check
                </button>
            </div>

            {/* List */}
            <div className="mt-6 space-y-3">
                {bookings.length === 0 && (
                    <div className="rounded-2xl border border-dashed border-gray-300 p-10 text-center">
                        <p className="text-black-200">
                            You have no bookings yet.
                        </p>
                        <Link
                            to="/book"
                            className="mt-4 inline-block rounded-full bg-blue px-6 py-2.5 font-semibold text-white"
                        >
                            Book a Service
                        </Link>
                    </div>
                )}

                {bookings.map((b) => {
                    const isActive = activeStatuses.includes(b.status)
                    return (
                        <div
                            key={b.id}
                            className="flex flex-col gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between"
                        >
                            <div>
                                <div className="flex items-center gap-2">
                                    <p className="font-semibold">
                                        {b.service.title}
                                    </p>
                                    <span
                                        className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${statusColor[b.status]}`}
                                    >
                                        {STATUS_LABELS[b.status]}
                                    </span>
                                </div>
                                <p className="mt-1 text-[12px] text-black-200">
                                    {b.id} • {formatDateTime(b.createdAt)}
                                </p>
                                <p className="text-[13px] font-bold text-blue">
                                    {formatINR(b.amount)}
                                </p>
                            </div>
                            <div className="flex gap-2">
                                {b.status === 'pending_payment' ? (
                                    <Link
                                        to={`/booking-confirmation/${b.id}`}
                                        className="rounded-full border-2 border-amber-500 px-4 py-2 text-[13px] font-semibold text-amber-600"
                                    >
                                        Complete Payment
                                    </Link>
                                ) : (
                                    <button
                                        onClick={() =>
                                            navigate(`/track/${b.id}`)
                                        }
                                        className="flex items-center gap-1.5 rounded-full bg-blue px-4 py-2 text-[13px] font-semibold text-white"
                                    >
                                        <MdLocationOn />
                                        {isActive ? 'Track Live' : 'View'}
                                    </button>
                                )}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MyBookings
