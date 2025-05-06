import React, { useState, useRef } from 'react'
import { format, addDays } from 'date-fns'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { PiSun, PiSunHorizon } from 'react-icons/pi'

const DigitalConsult: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<string>(
        format(new Date(), 'yyyy-MM-dd')
    )
    const [selectedSlot, setSelectedSlot] = useState<string | null>('12:00 PM')
    const [selectedTab, setSelectedTab] = useState<string>('Digital Consult')
    const dateSliderRef = useRef<HTMLDivElement>(null) // Reference for the scrollable date selector

    // Generate the next 15 days from today
    const generateNextDays = () => {
        const today = new Date()
        return Array.from({ length: 15 }, (_, i) => addDays(today, i))
    }

    const afternoonSlots = [
        '12:00 PM',
        '12:15 PM',
        '12:30 PM',
        '12:45 PM',
        '1:00 PM',
        '1:15 PM',
        '1:30 PM',
        '1:45 PM',
        '2:00 PM',
        '2:15 PM',
        '2:30 PM',
        '2:45 PM',
        '3:00 PM',
        '3:15 PM',
        '3:30 PM',
        '3:45 PM',
        '4:00 PM',
        '4:15 PM',
        '4:30 PM',
    ]

    const eveningSlots = [
        '5:00 PM',
        '5:15 PM',
        '5:30 PM',
        '5:45 PM',
        '6:00 PM',
        '6:15 PM',
        '6:30 PM',
        '6:45 PM',
        '7:00 PM',
        '7:15 PM',
        '7:30 PM',
        '7:45 PM',
    ]

    // Scroll functions for the date selector
    const scrollLeft = () => {
        if (dateSliderRef.current) {
            dateSliderRef.current.scrollLeft -= 100 // Adjust the scroll distance as needed
        }
    }

    const scrollRight = () => {
        if (dateSliderRef.current) {
            dateSliderRef.current.scrollLeft += 100 // Adjust the scroll distance as needed
        }
    }

    return (
        <div className="bg-white max-w-[540px] p-6 mx-auto mb-8">
            {/* Tabs */}
            <div className="flex justify-between mb-6">
                <button
                    className={`text-[22px] w-1/2 font-medium pb-1 ${selectedTab === 'Digital Consult' ? 'text-blue' : 'text-gray-400'}`}
                    onClick={() => setSelectedTab('Digital Consult')}
                >
                    Digital Consult
                    <div
                        className={`mt-1 ${selectedTab === 'Digital Consult' ? 'bg-blue h-[4px]' : 'bg-black-200 h-[1px]'}`}
                    ></div>
                </button>
                <button
                    className={`text-[22px] w-1/2  font-medium pb-1 ${selectedTab === 'Hospital Visit' ? 'text-blue' : 'text-gray-400'}`}
                    onClick={() => setSelectedTab('Hospital Visit')}
                >
                    Hospital Visit
                    <div
                        className={`mt-1 ${selectedTab === 'Hospital Visit' ? 'bg-blue h-[4px]' : 'bg-black-200 h-[1px]'}`}
                    ></div>
                </button>
            </div>

            {/* Only show content if "Digital Consult" is selected */}
            {selectedTab === 'Digital Consult' && (
                <>
                    {/* Booking Title and Price */}
                    <div className="flex justify-between items-center mb-1">
                        <h2 className="text-[22px] font-rubik font-bold">
                            Book Digital Consult
                        </h2>
                        <span className="text-[22px] font-rubik font-semibold">
                            ₹550
                        </span>
                    </div>

                    {/* Available Status */}
                    <p className="text-title text-black-200 mb-4">Available</p>

                    {/* Horizontal Scrollable Date Selector with Arrows */}
                    <div className="flex items-center mb-6">
                        {/* Left Arrow */}
                        <button
                            className="text-blue-500 text-xl px-2"
                            onClick={scrollLeft}
                        >
                            <FaAngleLeft />
                        </button>

                        {/* Date Slider */}
                        <div
                            ref={dateSliderRef}
                            className="overflow-x-auto whitespace-nowrap flex-1 scroll-smooth navbarscroll"
                        >
                            <div className="flex space-x-4">
                                {generateNextDays().map((date) => {
                                    const formattedDate = format(
                                        date,
                                        'yyyy-MM-dd'
                                    )
                                    const isWeekend =
                                        format(date, 'EEE') === 'Sun' ||
                                        format(date, 'EEE') === 'Sat'

                                    return (
                                        <button
                                            key={formattedDate}
                                            onClick={() =>
                                                setSelectedDate(formattedDate)
                                            }
                                            className={`px-4 py-2 rounded-md font-medium text-center ${selectedDate === formattedDate ? 'bg-white border-blue border text-blue' : ' text-gray-700 border border-gray-300'} `}
                                        >
                                            <p
                                                className={`text-title font-semibold ${isWeekend ? 'text-red-500' : 'text-black'}`}
                                            >
                                                {format(
                                                    date,
                                                    'EEE'
                                                ).toUpperCase()}
                                            </p>
                                            <p className="text-[20px]">
                                                {format(date, 'dd')}
                                            </p>
                                        </button>
                                    )
                                })}
                            </div>
                        </div>

                        {/* Right Arrow */}
                        <button
                            className="text-blue-500 text-xl px-2"
                            onClick={scrollRight}
                        >
                            <FaAngleRight />
                        </button>
                    </div>

                    {/* Slot Section */}
                    <p className="text-black-200 mb-2">
                        SELECT SLOT (36 AVAILABLE)
                    </p>

                    {/* Afternoon Slots */}
                    <div className="mb-6">
                        <div className="flex items-center mb-2">
                            <span className="mr-2 ">
                                <PiSun className="w-[35px] h-[35px]" />
                            </span>
                            <p className="font-medium text-[20px] text-black">
                                AFTERNOON SLOTS
                            </p>
                        </div>
                        <div className="grid grid-cols-4 gap-2">
                            {afternoonSlots.map((slot) => (
                                <button
                                    key={slot}
                                    onClick={() => setSelectedSlot(slot)}
                                    className={`py-2 text-center rounded-md border ${selectedSlot === slot ? ' border-blue text-blue ' : 'border-gray-300 text-gray-700'}`}
                                >
                                    {slot}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Evening Slots */}
                    <div>
                        <div className="flex items-center mb-2">
                            <span className="mr-2">
                                <PiSunHorizon className="w-[35px] h-[35px]" />
                            </span>
                            <p className="font-medium text-[20px] text-black">
                                EVENING SLOTS
                            </p>
                        </div>
                        <div className="grid grid-cols-4 gap-2">
                            {eveningSlots.map((slot) => (
                                <button
                                    key={slot}
                                    onClick={() => setSelectedSlot(slot)}
                                    className={`py-2 text-center rounded-md border ${selectedSlot === slot ? '0 border-blue text-blue' : 'border-gray-300 text-gray-700'}`}
                                >
                                    {slot}
                                </button>
                            ))}
                        </div>
                    </div>
                </>
            )}

            {/* Footer with Buttons */}
            <div className="flex justify-end gap-4 items-center mt-6">
                <button className="text-gray-500 font-semibold">Cancel</button>
                <button className="bg-green-500 text-title text-white font-medium py-2 px-6 rounded-full">
                    Pay Rs. 550
                </button>
            </div>
        </div>
    )
}

export default DigitalConsult
