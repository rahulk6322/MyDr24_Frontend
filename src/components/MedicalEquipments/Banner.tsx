import React, { useState } from 'react'
import BannerPic from '../../assets/images/MedicalEquipment_banner.png'
import Rect from '../../assets/images/white_banner_rect.svg'

import bannerImg from '../../assets/images/surgery_banner.png'

const Banner: React.FC = () => {
    const [searchText, setSearchText] = useState('')
    return (
        <section className=" contain px-3 sm:px-8">
            <div className="lg:relative flex sm:bg-none bg-[#005BA1] py-4 lg:py-0">
                {/* Text Overlay */}
                <div className=" lg:absolute top-[10px] w-1/2 px-3 pr-3 py-10 sm:py-0 sm:px-10 lg:pr-20 left-[10px] inset-0 flex flex-col justify-center lg:items-start items-center z-10 flex-1">
                    <h2 className="text-[18px] md:text-[20px] lg:text-[24px] xl:text-[32px] font-rubik font-semibold text-white leading-[32px] mb-2 lg:mb-6 ">
                        Book MYDR24 Medical Services at Home
                    </h2>

                    <h4 className="text-[16px] md:text-[16px] lg:text-[18px] leading-[24px] font-rubik text-white lg:text-left text-center">
                        MYDR24 HomeCare's professional, ICU setup at
                        home/medical equipment and expertise come home for
                        continued compassionate care.
                    </h4>
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
