import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { FaPhoneAlt, FaShieldAlt, FaMapMarkerAlt } from 'react-icons/fa'
import { MdLocalHospital, MdWarning } from 'react-icons/md'
import { useBookings } from '../context/BookingContext'
import { ambulanceServices } from '../data/catalog'
import { formatINR } from '../utils/format'

const Emergency: React.FC = () => {
    const navigate = useNavigate()
    const { createBooking, markPaid } = useBookings()

    const [selectedId, setSelectedId] = useState<string>('amb-basic')
    const [phone, setPhone] = useState('')
    const [location, setLocation] = useState('')
    const [requesting, setRequesting] = useState(false)

    const selected = ambulanceServices.find((s) => s.id === selectedId)!

    const useCurrentLocation = () => {
        // Simulated geolocation pick-up.
        setLocation('Current location • 12.9716° N, 77.5946° E (auto-detected)')
        toast.success('Location detected')
    }

    const requestNow = () => {
        if (phone.trim().length < 10) {
            toast.error('Please enter a valid 10-digit phone number')
            return
        }
        if (!location.trim()) {
            toast.error('Please provide your pickup location')
            return
        }
        setRequesting(true)
        const booking = createBooking({
            category: 'emergency',
            service: {
                id: selected.id,
                title: selected.title,
                price: selected.price,
                unit: selected.unit,
            },
            patient: { name: 'Emergency Patient', phone },
            address: location,
            schedule: { type: 'asap' },
            amount: selected.price,
        })
        // Emergencies are dispatched immediately; payment settled later (COD).
        markPaid(booking.id, 'cod')
        window.setTimeout(() => {
            toast.success('Ambulance dispatched!')
            navigate(`/track/${booking.id}`)
        }, 900)
    }

    return (
        <div>
            {/* Hero */}
            <div className="bg-gradient-to-b from-[#E11D48] to-[#9f1239] py-10 text-white">
                <div className="contain text-center">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-[13px] font-semibold">
                        <MdWarning /> 24x7 Emergency Response
                    </span>
                    <h1 className="mt-4 font-roboto text-[34px] font-bold leading-tight">
                        Emergency Ambulance in 20-30 Minutes
                    </h1>
                    <p className="mx-auto mt-2 max-w-xl text-white/85">
                        One tap dispatches the nearest equipped ambulance with a
                        trained crew. Live tracking and family alerts included.
                    </p>
                    <a
                        href="tel:108"
                        className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[16px] font-bold text-[#E11D48] shadow-lg"
                    >
                        <FaPhoneAlt /> Call 108 immediately
                    </a>
                    <p className="mt-2 text-[12px] text-white/70">
                        For life-threatening emergencies, always call 108 / 112
                        first.
                    </p>
                </div>
            </div>

            <div className="contain py-8">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_360px]">
                    {/* Service selection */}
                    <div>
                        <h2 className="mb-3 font-roboto text-subhead font-bold">
                            Choose response type
                        </h2>
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                            {ambulanceServices.map((s) => (
                                <button
                                    key={s.id}
                                    onClick={() => setSelectedId(s.id)}
                                    className={`flex items-start gap-3 rounded-xl border-2 p-4 text-left transition ${
                                        selectedId === s.id
                                            ? 'border-[#E11D48] bg-[#fff1f4]'
                                            : 'border-gray-200 hover:border-[#E11D48]/40'
                                    }`}
                                >
                                    <span className="text-3xl">{s.icon}</span>
                                    <span className="flex-1">
                                        <span className="block font-semibold">
                                            {s.title}
                                        </span>
                                        <span className="mt-0.5 block text-[12px] text-black-200">
                                            {s.description}
                                        </span>
                                        <span className="mt-1 flex items-center justify-between">
                                            <span className="text-[14px] font-bold text-[#E11D48]">
                                                {formatINR(s.price)}
                                            </span>
                                            <span className="text-[11px] font-medium text-black-200">
                                                {s.duration}
                                            </span>
                                        </span>
                                    </span>
                                </button>
                            ))}
                        </div>

                        {/* Trust badges */}
                        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                            {[
                                { icon: <MdLocalHospital />, t: 'Equipped ambulances' },
                                { icon: <FaShieldAlt />, t: 'Certified paramedics' },
                                { icon: <FaMapMarkerAlt />, t: 'Live GPS tracking' },
                            ].map((b) => (
                                <div
                                    key={b.t}
                                    className="flex items-center gap-2 rounded-xl bg-offwhite p-3 text-[12px] font-medium"
                                >
                                    <span className="text-lg text-[#E11D48]">
                                        {b.icon}
                                    </span>
                                    {b.t}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Request panel */}
                    <aside className="h-fit rounded-2xl border-2 border-[#E11D48]/20 bg-white p-5 shadow-sm">
                        <h2 className="font-roboto text-subhead font-bold text-[#E11D48]">
                            Request Ambulance
                        </h2>
                        <p className="mb-4 text-[12px] text-black-200">
                            We&apos;ll dispatch the nearest unit right away.
                        </p>

                        <label className="mb-1 block text-[13px] font-medium">
                            Contact number
                        </label>
                        <input
                            value={phone}
                            onChange={(e) =>
                                setPhone(
                                    e.target.value.replace(/\D/g, '').slice(0, 10)
                                )
                            }
                            placeholder="10-digit mobile"
                            className="mb-3 w-full rounded-lg border border-gray-300 px-3 py-2"
                        />

                        <label className="mb-1 block text-[13px] font-medium">
                            Pickup location
                        </label>
                        <textarea
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            rows={2}
                            placeholder="Address / landmark"
                            className="w-full rounded-lg border border-gray-300 px-3 py-2"
                        />
                        <button
                            onClick={useCurrentLocation}
                            className="mb-3 mt-1 flex items-center gap-1.5 text-[12px] font-semibold text-blue"
                        >
                            <FaMapMarkerAlt /> Use my current location
                        </button>

                        <div className="mb-4 flex items-center justify-between rounded-lg bg-offwhite p-3 text-[14px]">
                            <span className="text-black-200">Base fare</span>
                            <span className="font-bold text-[#E11D48]">
                                {formatINR(selected.price)}
                            </span>
                        </div>

                        <button
                            onClick={requestNow}
                            disabled={requesting}
                            className="flex w-full items-center justify-center gap-2 rounded-full bg-[#E11D48] py-3.5 text-[16px] font-bold text-white shadow-md disabled:opacity-60"
                        >
                            {requesting ? 'Dispatching…' : '🚨 Request Now'}
                        </button>
                        <p className="mt-2 text-center text-[11px] text-black-200">
                            Pay after service. Demo dispatch — no real
                            ambulance is sent.
                        </p>
                    </aside>
                </div>
            </div>
        </div>
    )
}

export default Emergency
