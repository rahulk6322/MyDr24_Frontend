import React from 'react'
import { FaCheck } from 'react-icons/fa'

interface BookingStepsProps {
    steps: string[]
    current: number // 0-indexed
}

const BookingSteps: React.FC<BookingStepsProps> = ({ steps, current }) => {
    return (
        <div className="flex items-center justify-between gap-1 py-5">
            {steps.map((label, i) => {
                const done = i < current
                const active = i === current
                return (
                    <React.Fragment key={label}>
                        <div className="flex flex-col items-center text-center">
                            <div
                                className={`flex h-9 w-9 items-center justify-center rounded-full text-[14px] font-semibold ${
                                    done
                                        ? 'bg-green text-white'
                                        : active
                                          ? 'bg-blue text-white'
                                          : 'bg-gray-200 text-black-200'
                                }`}
                            >
                                {done ? <FaCheck /> : i + 1}
                            </div>
                            <span
                                className={`mt-1 hidden text-[12px] sm:block ${
                                    active
                                        ? 'font-semibold text-blue'
                                        : 'text-black-200'
                                }`}
                            >
                                {label}
                            </span>
                        </div>
                        {i < steps.length - 1 && (
                            <div
                                className={`h-[2px] flex-1 ${
                                    i < current ? 'bg-green' : 'bg-gray-200'
                                }`}
                            />
                        )}
                    </React.Fragment>
                )
            })}
        </div>
    )
}

export default BookingSteps
