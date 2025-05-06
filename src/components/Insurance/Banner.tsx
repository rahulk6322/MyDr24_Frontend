import React, { useState } from 'react'
import BannerPic from '../../assets/images/insuranceBanner.png'
import { FaPhone } from 'react-icons/fa'

const Banner: React.FC = () => {
    const [searchText, setSearchText] = useState('')
    return (
        <section className=" contain px-3 sm:px-8 mt-3">
            <div className="lg:relative flex sm:bg-none bg-[#005BA1] py-4 lg:py-0">
                {/* Text Overlay */}
                <div className=" lg:absolute top-[10px] w-1/2 px-3 pr-3 py-10 sm:py-0 sm:px-10 lg:pr-20 left-[10px] inset-0 flex flex-col justify-center lg:items-start items-center z-10 flex-1">
                    <h2 className="text-[18px] md:text-[20px] lg:text-[24px] xl:text-[32px] font-rubik text-center lg:text-left font-semibold text-white leading-[32px] mb-2 lg:mb-6 ">
                        Discover exclusive perks for a secure health journey
                    </h2>

                    <h4 className="text-[16px] md:text-[16px] lg:text-[18px] font-ave leading-[24px] font-rubik text-white lg:text-left text-center">
                        Talk to our care expert today to book your consultation.
                        All insurance accepted & No-cost EMI available.
                    </h4>
                    <div className="flex items-center justify-center border border-[#fff] py-4 rounded-md mt-4 gap-4 px-4">
                        <p className="text-sm sm:text-base font-medium text-[#fff] text-nowrap">
                            Reach out to us on
                        </p>
                        <hr className="h-[20px] border-r border-white" />
                        <div className="flex text-[#fff] items-center gap-2 text-nowrap">
                            <FaPhone className="rotate-90" />
                            <p className="text-sm sm:text-base font-bold">
                                +91 93117 91119
                            </p>
                        </div>
                    </div>
                </div>

                <img
                    src={BannerPic}
                    className="w-full object-cover rounded-ful z-[1] m-0 lg:block hidden "
                />
            </div>
        </section>
    )
}

export default Banner
