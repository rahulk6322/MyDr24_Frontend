import React, { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import Search from '../assets/icons/search.svg'

const SearchWithDropDownHome: React.FC = () => {
    const [selectedLocation, setSelectedLocation] = useState('110002')
    const [searchText, setSearchText] = useState('')
    const [dropdownVisible, setDropdownVisible] = useState(false) // State to control dropdown visibility

    const locations = ['110002', '110003', '110004', '110005']

    return (
        <div className="px-3 sm:px-6 lg:px-8 mb-[12px]">
            <div className="flex items-center bg-[#f9f9f9] border border-[#f2f2f2] rounded-md w-full p-3 px-4">
                <input
                    type="text"
                    placeholder="Search for medicine & Wellness products.."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="flex-1 bg-transparent focus:outline-none text-sm"
                />
                <div className="mr-[4px] -mb-[3px] ">
                    <img src={Search} alt="cart" className="w-[20px]" />
                </div>
            </div>
        </div>
    )
}

export default SearchWithDropDownHome
