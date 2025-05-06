import React, { useState } from 'react'
import BannerPic from '../../assets/images/HomeHealthCare_banner.jpg'
import Rect from '../../assets/images/white_banner_rect.svg'

import bannerImg from '../../assets/images/surgery_banner.png'

const Banner: React.FC = () => {
    const [searchText, setSearchText] = useState('')
    return (
        <section className="relative contain px-3 sm:px-8">
            <div className="relative flex sm:bg-none bg-white">
                {/* Text Overlay */}
                <div className=" sm:absolute top-[10px] w-1/2 px-3 pr-3 py-10 sm:py-0 sm:px-10 sm:pr-20 left-[10px] inset-0 flex flex-col justify-center items-start z-10 flex-1">
                    <h4 className="text-[16px] md:text-[16px] lg:text-[18px] xl:text-[22px] leading-[22.6px] sm:leading-[39.6px] font-rubik text-[#707070] ">
                        Round the Clock Medical Support
                    </h4>
                    <hr className="w-full border-[.5] border-[#E1E1E1] my-2" />
                    <h2 className="text-[18px] md:text-[20px] lg:text-[24px] xl:text-[32px] font-rubik font-semibold text-[#02475B] ">
                        Get 24x7 Access to Medical Assistnace & Healthcare with
                        MYDR24.
                    </h2>
                </div>

                <img
                    src={BannerPic}
                    className="w-full object-cover rounded-ful z-[1] m-0 sm:block hidden "
                />
            </div>
        </section>
    )
}

export default Banner
