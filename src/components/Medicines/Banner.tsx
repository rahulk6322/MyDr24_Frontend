import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'
import DrConsultationBanner from '../../assets/images/DrConsultationBanner.png' // Replace with actual image path
import { FaCaretRight } from 'react-icons/fa'
import user from '../../assets/images/dummy_user.png'
import bannerImg from '../../assets/images/medicines_banner.png'

const Banner: React.FC = () => {
    return (
        <section className="contain-content bg-[#E0F2FF] relative">
            <div className="flex items-center absolute top-4 sm:left-12 left-4">
                <p className="text-[15px] font-medium font-rubik">Home</p>
                <FaCaretRight className="text-[#0065B2]" />
                <p className="text-[#0065B2] text-[15px] font-medium font-rubik">
                    All Categories
                </p>
            </div>
            <div className="relative rounded-lg flex">
                {/* <img
              src={slide.image}
              className="w-full h-full object-cover rounded-lg"
            /> */}
                {/* Text Overlay */}
                <div className=" inset-0 flex flex-col justify-center items-start px-6 md:px-16 lg:px-20 z-10 flex-1 py-10">
                    <h4 className="text-[16px] sm:text-[18px] font-rubik font-normal text-[#02475B] mb-2 uppercase">
                        Trusted Care
                    </h4>
                    <h2 className="text-[30px] sm:text-[51.1px] font-rubik font-bold text-black mb-2">
                        Genuine Medicines
                    </h2>
                    <p className="text-[14px] sm:text-[18px] font-rubik font-normal leading-[20px] sm:leading-[30.66px] text-[#02475B] pr-20">
                        All medicines & health products are sourced from MYDR24
                        trusted network of verified pharmacies and medical
                        stores
                    </p>
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
