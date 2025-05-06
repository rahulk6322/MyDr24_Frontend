import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { IoIosArrowDown, IoIosArrowUp, IoMdPin } from 'react-icons/io'
const FindDoctors: React.FC = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [selectedCity, setSelectedCity] = useState('All Cities')

    const cities = [
        'All Cities',
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
                boxShadow: '0px 1px 2px 0px #00000014',
            }}
        >
            <h2 className="text-head font-rubik font-semibold mb-2">
                Find Doctors
            </h2>
            <div className="flex flex-col lg:flex-row items-center gap-4 mb-6">
                {/* City Dropdown */}
                <div className="relative w-full lg:w-auto">
                    <div
                        className="min-h-[56px] min-w-[259px] flex items-center border-2 border-white bg-white rounded-full px-6 py-2 w-full cursor-pointer transition-all"
                        onClick={toggleDropdown}
                        style={{
                            boxShadow:
                                '0px 8px 24px 0px rgba(0, 0, 0, 0.1) inset, 2px 3px 4.7px 1px rgba(0, 0, 0, 0.06)',
                        }}
                    >
                        <IoMdPin className="text-blue mr-2 w-[24px] h-[24px]" />
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
                        <div className="absolute min-w-[200px] mt-2 bg-white border border-gray-300 rounded-lg w-full md:w-auto shadow-lg z-10">
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

                {/* Search Input */}
                <div className="relative flex-grow w-full">
                    <input
                        type="text"
                        placeholder="Search Doctors, Specialties, Symptoms, Hospitals, etc"
                        className="text-subhead min-h-[56px] pl-14 flex items-center bg-white border-2 border-white rounded-full px-4 py-2 w-full"
                        style={{
                            boxShadow:
                                '0px 8px 24px 0px rgba(0, 0, 0, 0.1) inset, 2px 3px 4.7px 1px rgba(0, 0, 0, 0.06)',
                        }}
                    />
                    <FaSearch className="text-blue mr-2 absolute top-[19px] left-5 min-w-[20px] min-h-[20px]" />
                </div>
            </div>

            <h3 className="text-subhead font-semibold mb-2">
                Most Searched Cities
            </h3>
            <div className="flex flex-wrap gap-4">
                {[
                    'New Delhi',
                    'Hyderabad',
                    'Chennai',
                    'Mumbai',
                    'Bangalore',
                ].map((city) => (
                    <button
                        key={city}
                        className="bg-white border text-blue font-medium px-4 py-2 lg:w-[140px] w-full  min-h-[40px] rounded-full"
                    >
                        {city}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default FindDoctors
