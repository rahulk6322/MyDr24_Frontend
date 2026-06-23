import React, { useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { FaCheckCircle, FaLock } from 'react-icons/fa'
import { MdQrCode2, MdCreditCard, MdAccountBalance } from 'react-icons/md'
import { BsCashStack } from 'react-icons/bs'
import type { PaymentMethod } from '../../types/booking'
import { formatINR } from '../../utils/format'

interface PaymentModalProps {
    amount: number
    onClose: () => void
    onSuccess: (method: PaymentMethod) => void
    allowCod?: boolean
}

type Phase = 'select' | 'processing' | 'success'

const methods: {
    id: PaymentMethod
    label: string
    hint: string
    icon: React.ReactNode
}[] = [
    {
        id: 'upi',
        label: 'UPI',
        hint: 'GPay, PhonePe, Paytm & more',
        icon: <MdQrCode2 className="text-[26px]" />,
    },
    {
        id: 'card',
        label: 'Credit / Debit Card',
        hint: 'Visa, Mastercard, RuPay',
        icon: <MdCreditCard className="text-[26px]" />,
    },
    {
        id: 'netbanking',
        label: 'Net Banking',
        hint: 'All major banks',
        icon: <MdAccountBalance className="text-[26px]" />,
    },
]

const PaymentModal: React.FC<PaymentModalProps> = ({
    amount,
    onClose,
    onSuccess,
    allowCod = true,
}) => {
    const [selected, setSelected] = useState<PaymentMethod>('upi')
    const [phase, setPhase] = useState<Phase>('select')

    const handlePay = (method: PaymentMethod) => {
        setSelected(method)
        if (method === 'cod') {
            setPhase('success')
            window.setTimeout(() => onSuccess('cod'), 1100)
            return
        }
        setPhase('processing')
        // Simulate a payment gateway round-trip.
        window.setTimeout(() => {
            setPhase('success')
            window.setTimeout(() => onSuccess(method), 1100)
        }, 2200)
    }

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-3">
            <div className="w-full max-w-[440px] rounded-2xl bg-white shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between bg-blue px-5 py-4">
                    <div className="flex items-center gap-2 text-white">
                        <FaLock />
                        <span className="font-rubik font-semibold">
                            Secure Payment
                        </span>
                    </div>
                    {phase === 'select' && (
                        <button
                            onClick={onClose}
                            aria-label="Close"
                            className="text-white/90 hover:text-white"
                        >
                            <IoClose className="text-2xl" />
                        </button>
                    )}
                </div>

                <div className="p-5">
                    {/* Amount */}
                    <div className="mb-5 rounded-xl bg-offwhite p-4 text-center">
                        <p className="text-[13px] text-black-200">
                            Amount Payable
                        </p>
                        <p className="text-[28px] font-bold text-blue font-rubik">
                            {formatINR(amount)}
                        </p>
                    </div>

                    {phase === 'select' && (
                        <>
                            <p className="mb-3 text-[14px] font-semibold font-rubik">
                                Choose a payment method
                            </p>
                            <div className="space-y-3">
                                {methods.map((m) => (
                                    <label
                                        key={m.id}
                                        className={`flex cursor-pointer items-center gap-3 rounded-xl border-2 p-3 transition ${
                                            selected === m.id
                                                ? 'border-blue bg-[#eaf5ff]'
                                                : 'border-gray-200 hover:border-blue/40'
                                        }`}
                                    >
                                        <input
                                            type="radio"
                                            name="paymethod"
                                            className="hidden"
                                            checked={selected === m.id}
                                            onChange={() => setSelected(m.id)}
                                        />
                                        <span className="text-blue">
                                            {m.icon}
                                        </span>
                                        <span className="flex-1">
                                            <span className="block text-[15px] font-semibold">
                                                {m.label}
                                            </span>
                                            <span className="block text-[12px] text-black-200">
                                                {m.hint}
                                            </span>
                                        </span>
                                        <span
                                            className={`h-4 w-4 rounded-full border-2 ${
                                                selected === m.id
                                                    ? 'border-blue bg-blue'
                                                    : 'border-gray-300'
                                            }`}
                                        />
                                    </label>
                                ))}
                            </div>

                            <button
                                onClick={() => handlePay(selected)}
                                className="mt-5 w-full rounded-full bg-blue py-3 text-[16px] font-semibold text-white hover:opacity-90"
                            >
                                Pay {formatINR(amount)}
                            </button>

                            {allowCod && (
                                <button
                                    onClick={() => handlePay('cod')}
                                    className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border-2 border-green py-2.5 text-[14px] font-semibold text-green hover:bg-green/5"
                                >
                                    <BsCashStack />
                                    Pay after service (Cash / COD)
                                </button>
                            )}

                            <p className="mt-4 text-center text-[11px] text-black-200">
                                This is a demo gateway — no real money is
                                charged.
                            </p>
                        </>
                    )}

                    {phase === 'processing' && (
                        <div className="flex flex-col items-center py-8">
                            <span className="loader" />
                            <p className="mt-5 font-rubik font-semibold">
                                Processing your payment…
                            </p>
                            <p className="mt-1 text-[12px] text-black-200">
                                Please do not close this window.
                            </p>
                        </div>
                    )}

                    {phase === 'success' && (
                        <div className="flex flex-col items-center py-8">
                            <FaCheckCircle className="text-[56px] text-green" />
                            <p className="mt-4 text-[18px] font-bold font-rubik">
                                Payment Successful
                            </p>
                            <p className="mt-1 text-[13px] text-black-200">
                                Confirming your booking…
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default PaymentModal
