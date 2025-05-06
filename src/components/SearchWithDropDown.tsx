import React, { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'

const SearchWithDropdown: React.FC = () => {
    const [selectedLocation, setSelectedLocation] = useState('110002')
    const [searchText, setSearchText] = useState('')
    const [dropdownVisible, setDropdownVisible] = useState(false) // State to control dropdown visibility

    const locations = ['110002', '110003', '110004', '110005']

    return (
        <div className="flex items-center bg-[#f9f9f9] border border-[#f2f2f2] rounded-md w-full max-w-md p-2">
            {/* Dropdown for Location */}
            <div className="relative">
                <button
                    onClick={() => setDropdownVisible(!dropdownVisible)} // Toggle dropdown visibility
                    className="text-sm font-medium text-black hover:text-gray-900 focus:outline-none inline-flex items-center"
                >
                    Deliver to{' '}
                    <span className="mx-2 text-blue">{selectedLocation}</span>
                    <FaAngleDown />
                </button>
                {/* Dropdown List */}
                {dropdownVisible && (
                    <ul className="absolute left-0 mt-2 w-32 bg-white border border-gray-200 rounded-md shadow-lg">
                        {locations.map((location) => (
                            <li
                                key={location}
                                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                                onClick={() => {
                                    setSelectedLocation(location)
                                    setDropdownVisible(false) // Close the dropdown on selection
                                }}
                            >
                                {location}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Divider */}
            <div className="h-6 border-l border-gray-300 mx-3"></div>

            {/* Search Input */}
            <input
                type="text"
                placeholder="Search for medicine & Wellness products.."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="flex-1 bg-transparent focus:outline-none text-sm"
            />
        </div>
    )
}

export default SearchWithDropdown
