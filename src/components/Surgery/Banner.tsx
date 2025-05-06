import React, { useState } from 'react'
import Search from '../../assets/icons/search.svg'
import Mic from '../../assets/icons/mic.svg'

import bannerImg from '../../assets/images/surgery_banner.png'

const Banner: React.FC = () => {
    const [searchText, setSearchText] = useState('')
    return (
        <section
            className="relative p-3 sm:p-0"
            style={{
                background:
                    'linear-gradient(90deg, #182488 0%, #213291 50.56%, #1359BB 100%)',
            }}
        >
            <div className="relative rounded-lg flex">
                {/* <img
              src={slide.image}
              className="w-full h-full object-cover rounded-lg"
            /> */}
                {/* Text Overlay */}
                <div className=" inset-0 flex flex-col justify-center items-start px-0 md:px-10 lg:px-10 z-10 flex-1 py-6">
                    <h4 className="text-[18px] sm:text-[33px] leading-[22.6px] sm:leading-[39.6px] font-rubik font-medium text-white mb-2 ">
                        End to end care from Top Surgeons at our MYDR24 Clinics
                    </h4>
                    <h2 className="text-[14px] sm:text-[24px] font-rubik font-bold text-white mb-4 ">
                        Looking for a Surgery?
                    </h2>

                    <div className="flex items-center bg-[#f9f9f9] border border-[#f2f2f2] rounded-md w-full p-4 px-4">
                        <div className="mr-[4px] ">
                            <img
                                src={Search}
                                alt="cart"
                                className="sm:w-[20px] w-[16px]"
                            />
                        </div>
                        <input
                            type="text"
                            placeholder="Search for medicine & Wellness products.."
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            className="flex-1 bg-transparent focus:outline-none text-sm"
                        />
                        <div className="mr-[4px] ">
                            <img
                                src={Mic}
                                alt="cart"
                                className="sm:w-[20px] w-[14px]"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex-1 items-end md:flex hidden ">
                    <img
                        src={bannerImg}
                        className="w-full object-contain rounded-ful z-[1] m-0 h-[350px]"
                    />
                </div>
            </div>
        </section>
    )
}

export default Banner
