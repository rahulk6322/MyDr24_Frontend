import { BiCurrentLocation } from 'react-icons/bi'
import { GrLocation } from 'react-icons/gr'
import { IoIosArrowDown } from 'react-icons/io'
import { LuCalendarDays } from 'react-icons/lu'

const DoctorSearch: React.FC = () => {
    return (
        <div className="bg-blue p-4 min-h-[166px] rounded-md flex flex-col md:flex-row md:items-center justify-around">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 w-full">
                {/* Preferred Location/Pincode */}
                <div className="w-full">
                    <label className="text-white font-rubik text-title font-semibold mb-1 block">
                        Preferred Location/Pincode
                        <span className="text-red-500">*</span>
                    </label>
                    <div
                        className="relative flex items-center border-2 border-white bg-white w-full md:min-w-[300px] lg:min-w-[310px] rounded-full shadow-md focus-within:ring-2 focus-within:ring-blue"
                        style={{
                            boxShadow:
                                '0px 8px 24px 0px rgba(0, 0, 0, 0.1) inset, 2px 3px 4.7px 1px rgba(0, 0, 0, 0.06)',
                        }}
                    >
                        <span className="ml-3 text-black">
                            <GrLocation className="min-w-[24px] min-h-[24px] ml-2" />
                        </span>
                        <input
                            type="text"
                            placeholder="Delhi Cantonment New Delhi"
                            className="w-[85%] sm:w-[90%] min-h-[50px] lg:min-h-[64px] text-title placeholder-black placeholder:font-semibold py-2 px-4 bg-transparent text-black rounded-full focus:outline-none"
                        />
                        <span className="mr-3 text-black">
                            <BiCurrentLocation className="min-w-[24px] min-h-[24px] mr-3" />
                        </span>
                    </div>
                </div>

                {/* Select Date */}
                <div className="w-full">
                    <label className="text-white font-rubik text-title font-semibold mb-1 block">
                        Select Date<span className="text-red-500">*</span>
                    </label>
                    <div
                        className="relative flex items-center border-2 border-white bg-white w-full md:min-w-[300px] lg:min-w-[310px] rounded-full shadow-md focus-within:ring-2 focus-within:ring-blue"
                        style={{
                            boxShadow:
                                '0px 8px 24px 0px rgba(0, 0, 0, 0.1) inset, 2px 3px 4.7px 1px rgba(0, 0, 0, 0.06)',
                        }}
                    >
                        <input
                            type="text"
                            placeholder="Today"
                            className="w-[85%] sm:w-[90%] min-h-[50px] lg:min-h-[64px] text-title placeholder-black placeholder:font-semibold py-2 px-4 bg-transparent text-black rounded-full focus:outline-none"
                        />
                        <span className="mr-3 text-black">
                            <LuCalendarDays className="min-w-[24px] min-h-[24px] mr-3" />
                        </span>
                    </div>
                </div>

                {/* Select Specialty */}
                <div className="w-full">
                    <label className="text-white font-rubik text-title font-semibold mb-1 block">
                        Select Specialty<span className="text-red-500">*</span>
                    </label>
                    <div
                        className="relative flex items-center border-2 border-white bg-white w-full md:min-w-[300px] lg:min-w-[310px] rounded-full shadow-md focus-within:ring-2 focus-within:ring-blue"
                        style={{
                            boxShadow:
                                '0px 8px 24px 0px rgba(0, 0, 0, 0.1) inset, 2px 3px 4.7px 1px rgba(0, 0, 0, 0.06)',
                        }}
                    >
                        <input
                            type="text"
                            placeholder="Cardiology"
                            className="w-[85%] sm:w-[90%] min-h-[50px] lg:min-h-[64px] text-title placeholder-black placeholder:font-semibold py-2 px-4 bg-transparent text-black rounded-full focus:outline-none"
                        />
                        <span className="mr-3 text-black">
                            <IoIosArrowDown className="min-w-[24px] min-h-[24px] mr-3" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DoctorSearch
