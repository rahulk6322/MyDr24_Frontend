import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'
import DrConsultationBanner from '../../assets/images/DrConsultationBanner.png' // Replace with actual image path
import { FaChevronCircleRight } from 'react-icons/fa'
import bg from '../../assets/images/elderCareBg.png'
import bannerImg from '../../assets/images/elderCareHomeBanner.png'

const Banner: React.FC = () => {
    return (
        <section className="contain-content relative">
              <img
                        src={bg}
                        className="absolute h-full w-full object-cover "
                    />
            <div className="relative rounded-lg flex">
                {/* <img
              src={slide.image}
              className="w-full h-full object-cover rounded-lg"
            /> */}
                {/* Text Overlay */}
                <div className=" inset-0 flex flex-col justify-center items-start px-6 md:px-16 lg:px-20 z-10 flex-1 py-10">
                    <h2 className="sm:text-[40px] font-rubik font-base font-semibold leading-[30px] mb-1">
                       Elderly Care
                    </h2>
                    <p className="font-rubik text-[#1C1C1C] text-sm sm:text-lg mt-3 text-center">Long-term, proactive care for the elderly and chronic patients.</p>
                    <h2 className="text-[30px] sm:text-[40px] font-rubik font-semibold mt-3 font-base text-[#0065B2] mb-2">
                    Call +91 93117 91119
                    </h2>
                    <p className="text-[14px] sm:text-2xl italic  font-rubik  text-[#0065B2] mb-6">
                    Just the Torght Tests. No More, No less!
                    </p>
                    
                    <a
                        href="#"
                        className="inline-flex items-center justify-start px-6 py-3 bg-white text-[#0065B2] font-medium rounded-lg font-rubik"
                    >
                        Consult Now
                    </a>
                </div>
                <div className="flex-1 relative items-end md:flex hidden ">
                    <div className="w-full sm:h-[90%] h-[90%] bg-[#ECF9FF] rounded-t-full absolute bottom-0 z-[0]"></div>

                    <img
                        src={bannerImg}
                        className="w-full h-[376px] pt-5 object-contain rounded-ful z-[1] m-0"
                    />
                </div>
            </div>
        </section>
    )
}

export default Banner
