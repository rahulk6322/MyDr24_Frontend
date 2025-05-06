import { useState } from 'react'
import { BiCurrentLocation } from 'react-icons/bi'
import { GrLocation } from 'react-icons/gr'
import { IoIosArrowDown, IoIosArrowUp, IoMdPin } from 'react-icons/io'
import { LuCalendarDays } from 'react-icons/lu'

const BookAppointment: React.FC = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [selectedCity, setSelectedCity] = useState('Cardiology')

    const cities = [
        'Cardiology',
        'New Delhi',
        'Hyderabad',
        'Chennai',
        'Mumbai',
        'Bangalore',
    ]

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    const selectCity = (city: string) => {
        setSelectedCity(city)
        setIsDropdownOpen(false)
    }

    return (
        <div
            className="bg-white p-6 rounded-lg"
            style={{
                boxShadow: '0px 1px 4.2px 2px #0000000D',
            }}
        >
            <h2 className="text-[32px] font-bold mb-4 font-rubik">
                Book an Appointment in 2 Minutes
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-4">
                {/* Preferred Location */}
                <div>
                    <label className="text-black font-medium text-title mb-1 block ">
                        Preferred Location/Pincode
                        <span className="text-red-500">*</span>
                    </label>
                    <div className="relative flex-grow w-full">
                        <GrLocation className="text-black mr-2 absolute top-[19px] left-5 min-w-[20px] min-h-[20px]" />
                        <input
                            type="text"
                            placeholder="Delhi Cantonment New Delhi"
                            className="text-subhead min-h-[56px] pl-14 flex items-center bg-white border-2 border-white rounded-full px-4 py-2 w-full"
                            style={{
                                boxShadow:
                                    '0px 8px 24px 0px rgba(0, 0, 0, 0.1) inset, 2px 3px 4.7px 1px rgba(0, 0, 0, 0.06)',
                            }}
                        />
                        <BiCurrentLocation className="text-black mr-2 absolute top-[19px] right-5 min-w-[20px] min-h-[20px]" />
                    </div>
                </div>

                {/* Select Date */}
                <div>
                    <label className="text-black font-medium text-title mb-1 block">
                        Select Date<span className="text-red-500">*</span>
                    </label>
                    <div className="relative flex-grow w-full">
                        <input
                            type="text"
                            placeholder="Today"
                            className="text-subhead min-h-[56px] flex items-center bg-white border-2 border-white rounded-full px-4 py-2 w-full"
                            style={{
                                boxShadow:
                                    '0px 8px 24px 0px rgba(0, 0, 0, 0.1) inset, 2px 3px 4.7px 1px rgba(0, 0, 0, 0.06)',
                            }}
                        />
                        <LuCalendarDays className="text-black mr-2 absolute top-[19px] right-5 min-w-[20px] min-h-[20px]" />
                    </div>
                </div>
            </div>

            {/* Specialty */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="relative w-full md:w-auto md:flex-shrink-0">
                    <label className="text-black font-medium text-title mb-1 block">
                        Select Speciality<span className="text-red-500">*</span>
                    </label>
                    <div
                        className="min-h-[56px] min-w-[259px] flex items-center border-2 border-white bg-white rounded-full px-6 py-2 w-full cursor-pointer transition-all"
                        onClick={toggleDropdown}
                        style={{
                            boxShadow:
                                '0px 8px 24px 0px rgba(0, 0, 0, 0.1) inset, 2px 3px 4.7px 1px rgba(0, 0, 0, 0.06)',
                        }}
                    >
                        <span className="text-subhead text-gray-700 font-medium whitespace-nowrap">
                            {selectedCity}
                        </span>
                        {isDropdownOpen ? (
                            <IoIosArrowUp className="text-blue ml-auto min-w-[20px] min-h-[20px]" />
                        ) : (
                            <IoIosArrowDown className="text-blue ml-auto min-w-[20px] min-h-[20px]" />
                        )}
                    </div>

                    {isDropdownOpen && (
                        <div className="absolute min-w-[300px] mt-2 bg-white border border-gray-300 rounded-lg w-full md:w-auto shadow-lg z-10">
                            {cities.map((city) => (
                                <div
                                    key={city}
                                    className="px-4 py-2 hover:bg-blue hover:text-white cursor-pointer text-gray-600"
                                    onClick={() => selectCity(city)}
                                >
                                    {city}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="flex items-center justify-center">
                    <button className="bg-[#a3a1a1] font-semibold min-h-[56px] mt-7 text-white px-6 py-3 rounded-full w-full">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BookAppointment
