import React, { useMemo, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import { FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'
import Breadcrumb from '../components/global/Breadcrumb'
import BookingSteps from '../components/booking/BookingSteps'
import PaymentModal from '../components/booking/PaymentModal'
import { useBookings } from '../context/BookingContext'
import {
    doctorConsultServices,
    homeHealthcareServices,
    getServiceById,
    timeSlots,
} from '../data/catalog'
import type {
    CatalogService,
    PatientDetails,
    PaymentMethod,
    ScheduleInfo,
    ServiceCategory,
} from '../types/booking'
import { formatINR } from '../utils/format'

const STEPS = ['Service', 'Schedule', 'Details', 'Pay']

const categoryTabs: { id: ServiceCategory; label: string }[] = [
    { id: 'home_healthcare', label: 'Home Healthcare' },
    { id: 'doctor_consultation', label: 'Doctor Consultation' },
]

function servicesFor(category: ServiceCategory): CatalogService[] {
    return category === 'doctor_consultation'
        ? doctorConsultServices
        : homeHealthcareServices
}

function todayStr(): string {
    return new Date().toISOString().split('T')[0]
}

const Booking: React.FC = () => {
    const [params] = useSearchParams()
    const navigate = useNavigate()
    const { createBooking, markPaid } = useBookings()

    const preService = params.get('service')
        ? getServiceById(params.get('service') as string)
        : undefined
    const initialCategory: ServiceCategory =
        (params.get('category') as ServiceCategory) ||
        preService?.category ||
        'home_healthcare'

    const [step, setStep] = useState(0)
    const [category, setCategory] = useState<ServiceCategory>(initialCategory)
    const [selectedId, setSelectedId] = useState<string>(
        preService?.id || ''
    )
    const [schedule, setSchedule] = useState<ScheduleInfo>({ type: 'asap' })
    const [patient, setPatient] = useState<PatientDetails>({
        name: '',
        phone: '',
        age: '',
        gender: '',
        notes: '',
    })
    const [address, setAddress] = useState('')
    const [showPayment, setShowPayment] = useState(false)
    const [pendingId, setPendingId] = useState<string>('')

    const selected = useMemo(
        () => (selectedId ? getServiceById(selectedId) : undefined),
        [selectedId]
    )

    const next = () => {
        if (step === 0 && !selected) {
            toast.error('Please select a service to continue')
            return
        }
        if (step === 1) {
            if (schedule.type === 'scheduled' && (!schedule.date || !schedule.slot)) {
                toast.error('Please choose a date and time slot')
                return
            }
        }
        if (step === 2) {
            if (!patient.name.trim() || patient.phone.trim().length < 10) {
                toast.error('Please enter a valid name and 10-digit phone')
                return
            }
            if (!address.trim()) {
                toast.error('Please enter the service address')
                return
            }
        }
        setStep((s) => Math.min(s + 1, STEPS.length - 1))
    }

    const back = () => setStep((s) => Math.max(s - 1, 0))

    const proceedToPay = () => {
        if (!selected) return
        const booking = createBooking({
            category: selected.category,
            service: {
                id: selected.id,
                title: selected.title,
                price: selected.price,
                unit: selected.unit,
            },
            patient,
            address,
            schedule,
            amount: selected.price,
        })
        setPendingId(booking.id)
        setShowPayment(true)
    }

    const onPaymentSuccess = (method: PaymentMethod) => {
        markPaid(pendingId, method)
        setShowPayment(false)
        toast.success('Booking confirmed!')
        navigate(`/booking-confirmation/${pendingId}`)
    }

    return (
        <div className="contain py-6">
            <Breadcrumb
                stages={[
                    { label: 'Home', href: '/' },
                    { label: 'Book a Service' },
                ]}
            />
            <h1 className="font-roboto text-head font-bold text-blue">
                Book a Service
            </h1>
            <p className="text-black-200">
                Quick, secure booking with live tracking after confirmation.
            </p>

            <div className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_340px]">
                {/* Left: steps */}
                <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:p-6">
                    <BookingSteps steps={STEPS} current={step} />

                    {/* STEP 0 — Service */}
                    {step === 0 && (
                        <div>
                            <div className="mb-4 flex gap-2">
                                {categoryTabs.map((t) => (
                                    <button
                                        key={t.id}
                                        onClick={() => {
                                            setCategory(t.id)
                                            setSelectedId('')
                                        }}
                                        className={`rounded-full px-4 py-2 text-[14px] font-medium ${
                                            category === t.id
                                                ? 'bg-blue text-white'
                                                : 'bg-offwhite text-black-100'
                                        }`}
                                    >
                                        {t.label}
                                    </button>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                {servicesFor(category).map((s) => (
                                    <button
                                        key={s.id}
                                        onClick={() => setSelectedId(s.id)}
                                        className={`flex items-start gap-3 rounded-xl border-2 p-3 text-left transition ${
                                            selectedId === s.id
                                                ? 'border-blue bg-[#eaf5ff]'
                                                : 'border-gray-200 hover:border-blue/40'
                                        }`}
                                    >
                                        <span className="text-2xl">
                                            {s.icon}
                                        </span>
                                        <span className="flex-1">
                                            <span className="flex items-center gap-2">
                                                <span className="font-semibold">
                                                    {s.title}
                                                </span>
                                                {s.popular && (
                                                    <span className="rounded-full bg-green/10 px-2 py-0.5 text-[10px] font-semibold text-green">
                                                        Popular
                                                    </span>
                                                )}
                                            </span>
                                            <span className="mt-0.5 block text-[12px] text-black-200">
                                                {s.description}
                                            </span>
                                            <span className="mt-1 block text-[14px] font-bold text-blue">
                                                {formatINR(s.price)}{' '}
                                                <span className="text-[11px] font-normal text-black-200">
                                                    {s.unit}
                                                </span>
                                            </span>
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* STEP 1 — Schedule */}
                    {step === 1 && (
                        <div>
                            <p className="mb-3 font-semibold">When do you need it?</p>
                            <div className="mb-4 flex gap-3">
                                {(['asap', 'scheduled'] as const).map((t) => (
                                    <button
                                        key={t}
                                        onClick={() =>
                                            setSchedule((p) => ({ ...p, type: t }))
                                        }
                                        className={`flex-1 rounded-xl border-2 p-3 text-center ${
                                            schedule.type === t
                                                ? 'border-blue bg-[#eaf5ff]'
                                                : 'border-gray-200'
                                        }`}
                                    >
                                        <span className="block font-semibold">
                                            {t === 'asap'
                                                ? 'As soon as possible'
                                                : 'Schedule for later'}
                                        </span>
                                        <span className="text-[12px] text-black-200">
                                            {t === 'asap'
                                                ? 'Next available professional'
                                                : 'Pick a date & time'}
                                        </span>
                                    </button>
                                ))}
                            </div>

                            {schedule.type === 'scheduled' && (
                                <div>
                                    <label className="mb-1 block text-[13px] font-medium">
                                        Select date
                                    </label>
                                    <input
                                        type="date"
                                        min={todayStr()}
                                        value={schedule.date || ''}
                                        onChange={(e) =>
                                            setSchedule((p) => ({
                                                ...p,
                                                date: e.target.value,
                                            }))
                                        }
                                        className="mb-4 w-full rounded-lg border border-gray-300 px-3 py-2 sm:w-60"
                                    />
                                    <p className="mb-2 text-[13px] font-medium">
                                        Select time slot
                                    </p>
                                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                                        {timeSlots.map((slot) => (
                                            <button
                                                key={slot}
                                                onClick={() =>
                                                    setSchedule((p) => ({
                                                        ...p,
                                                        slot,
                                                    }))
                                                }
                                                className={`rounded-lg border px-2 py-2 text-[12px] ${
                                                    schedule.slot === slot
                                                        ? 'border-blue bg-blue text-white'
                                                        : 'border-gray-300 text-black-100'
                                                }`}
                                            >
                                                {slot}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {/* STEP 2 — Details */}
                    {step === 2 && (
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <Input
                                label="Patient name *"
                                value={patient.name}
                                onChange={(v) =>
                                    setPatient((p) => ({ ...p, name: v }))
                                }
                                placeholder="Full name"
                            />
                            <Input
                                label="Phone number *"
                                value={patient.phone}
                                onChange={(v) =>
                                    setPatient((p) => ({
                                        ...p,
                                        phone: v.replace(/\D/g, '').slice(0, 10),
                                    }))
                                }
                                placeholder="10-digit mobile"
                            />
                            <Input
                                label="Age"
                                value={patient.age || ''}
                                onChange={(v) =>
                                    setPatient((p) => ({ ...p, age: v }))
                                }
                                placeholder="Age"
                            />
                            <div>
                                <label className="mb-1 block text-[13px] font-medium">
                                    Gender
                                </label>
                                <select
                                    value={patient.gender || ''}
                                    onChange={(e) =>
                                        setPatient((p) => ({
                                            ...p,
                                            gender: e.target.value,
                                        }))
                                    }
                                    className="w-full rounded-lg border border-gray-300 px-3 py-2"
                                >
                                    <option value="">Select</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="sm:col-span-2">
                                <label className="mb-1 block text-[13px] font-medium">
                                    Service address *
                                </label>
                                <textarea
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    rows={2}
                                    placeholder="House no, street, area, city, pincode"
                                    className="w-full rounded-lg border border-gray-300 px-3 py-2"
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label className="mb-1 block text-[13px] font-medium">
                                    Notes for the professional (optional)
                                </label>
                                <textarea
                                    value={patient.notes || ''}
                                    onChange={(e) =>
                                        setPatient((p) => ({
                                            ...p,
                                            notes: e.target.value,
                                        }))
                                    }
                                    rows={2}
                                    placeholder="Symptoms, medical history, directions…"
                                    className="w-full rounded-lg border border-gray-300 px-3 py-2"
                                />
                            </div>
                        </div>
                    )}

                    {/* STEP 3 — Review */}
                    {step === 3 && selected && (
                        <div>
                            <p className="mb-3 font-semibold">Review your booking</p>
                            <div className="space-y-2 rounded-xl bg-offwhite p-4 text-[14px]">
                                <Row label="Service" value={selected.title} />
                                <Row
                                    label="When"
                                    value={
                                        schedule.type === 'asap'
                                            ? 'As soon as possible'
                                            : `${schedule.date} • ${schedule.slot}`
                                    }
                                />
                                <Row label="Patient" value={patient.name} />
                                <Row label="Phone" value={patient.phone} />
                                <Row label="Address" value={address} />
                                <div className="my-2 border-t border-gray-200" />
                                <div className="flex items-center justify-between text-[16px] font-bold text-blue">
                                    <span>Total payable</span>
                                    <span>{formatINR(selected.price)}</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Nav buttons */}
                    <div className="mt-6 flex items-center justify-between">
                        <button
                            onClick={back}
                            disabled={step === 0}
                            className="flex items-center gap-2 rounded-full border border-gray-300 px-5 py-2 text-[14px] disabled:opacity-40"
                        >
                            <FaArrowLeft /> Back
                        </button>
                        {step < STEPS.length - 1 ? (
                            <button
                                onClick={next}
                                className="flex items-center gap-2 rounded-full bg-blue px-6 py-2.5 text-[14px] font-semibold text-white"
                            >
                                Continue <FaArrowRight />
                            </button>
                        ) : (
                            <button
                                onClick={proceedToPay}
                                className="flex items-center gap-2 rounded-full bg-green px-6 py-2.5 text-[14px] font-semibold text-white"
                            >
                                Proceed to Pay
                            </button>
                        )}
                    </div>
                </div>

                {/* Right: summary */}
                <aside className="h-fit rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                    <p className="mb-3 font-semibold">Order Summary</p>
                    {selected ? (
                        <>
                            <div className="flex items-center gap-3">
                                <span className="text-3xl">{selected.icon}</span>
                                <div>
                                    <p className="font-semibold">
                                        {selected.title}
                                    </p>
                                    <p className="text-[12px] text-black-200">
                                        {selected.duration} • {selected.unit}
                                    </p>
                                </div>
                            </div>
                            <div className="mt-4 space-y-1 text-[14px]">
                                <div className="flex justify-between">
                                    <span className="text-black-200">
                                        Service fee
                                    </span>
                                    <span>{formatINR(selected.price)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-black-200">
                                        Visit charge
                                    </span>
                                    <span className="text-green">FREE</span>
                                </div>
                                <div className="mt-2 flex justify-between border-t border-gray-200 pt-2 text-[16px] font-bold text-blue">
                                    <span>Total</span>
                                    <span>{formatINR(selected.price)}</span>
                                </div>
                            </div>
                        </>
                    ) : (
                        <p className="text-[13px] text-black-200">
                            Select a service to see pricing.
                        </p>
                    )}
                    <div className="mt-4 flex items-center gap-2 rounded-lg bg-green/5 p-3 text-[12px] text-green">
                        <FaStar /> 100% verified & background-checked
                        professionals
                    </div>
                    <div className="mt-2 flex items-center gap-2 rounded-lg bg-blue/5 p-3 text-[12px] text-blue">
                        <MdLocationOn className="text-base" /> Live tracking
                        available after confirmation
                    </div>
                </aside>
            </div>

            {showPayment && selected && (
                <PaymentModal
                    amount={selected.price}
                    onClose={() => setShowPayment(false)}
                    onSuccess={onPaymentSuccess}
                />
            )}
        </div>
    )
}

const Input: React.FC<{
    label: string
    value: string
    onChange: (v: string) => void
    placeholder?: string
}> = ({ label, value, onChange, placeholder }) => (
    <div>
        <label className="mb-1 block text-[13px] font-medium">{label}</label>
        <input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="w-full rounded-lg border border-gray-300 px-3 py-2"
        />
    </div>
)

const Row: React.FC<{ label: string; value: string }> = ({ label, value }) => (
    <div className="flex justify-between gap-4">
        <span className="text-black-200">{label}</span>
        <span className="text-right font-medium">{value}</span>
    </div>
)

export default Booking
