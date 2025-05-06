import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'
import DrConsultationBanner from '../../assets/images/DrConsultationBanner.png' // Replace with actual image path
import { FaCloudUploadAlt } from 'react-icons/fa'
import user from '../../assets/images/dummy_user.png'
import bannerImg1 from '../../assets/images/Medicine_subBanner_1.png'
import bannerImg2 from '../../assets/images/Medicine_subBanner_2.png'

const SubBanner: React.FC = () => {
    return (
        <section className="contain py-3 px-3 sm:px-0 sm:py-8 lg:flex gap-4">
            <div className="relative rounded-lg flex flex-1  bg-[#ABE8BC] px-4 lg:mb-0 mb-4">
                <div className="flex-[1_0_40%] items-end md:flex relative  ">
                    <img
                        src={bannerImg1}
                        className="h-[108%] p-0 m-0 absolute left-0 bottom-0"
                    />
                </div>
                <div className=" inset-0 flex flex-col justify-center items-center  z-10 py-10 flex-[1_0_60%]">
                    <h4 className="text-[16px] sm:text-[22px] font-rubik font-medium text-[#383838] text-center  sm:leading-[26.07px] ">
                        Call us and Order medicines
                    </h4>
                    <p className="text-[14px] sm:text-[18px] font-rubik font-medium leading-[20px] sm:leading-[30.66px] text-[#157A64]">
                        7689998917
                    </p>
                    <p className="text-[14px] sm:text-[18px] font-rubik font-normal leading-[20px] sm:leading-[30.66px] text-[#383838] text-center">
                        working hours 9am to 9pm
                    </p>
                </div>
            </div>

            <div className="relative rounded-lg flex flex-1  bg-[#C9E1F3] px-4 lg:mb-0 mb-4">
                <div className="flex-[1_0_40%] items-end md:flex relative  ">
                    <img
                        src={bannerImg2}
                        className="h-[104%] object-contain p-0 m-0 absolute left-0 bottom-0"
                    />
                </div>
                <div className=" inset-0 flex flex-col justify-center items-center  z-10 py-4 sm:py-10 flex-[1_0_60%]">
                    <h4 className="text-[16px] sm:text-[22px] font-rubik font-medium text-[#383838] text-center sm:leading-[26.07px]">
                        Order medicines with Doctor’s note
                    </h4>
                    <button className="bg-white flex items-center gap-2 ext-[16px] sm:text-[20px] text-[#0065B2] font-medium py-3 mt-3 sm:mt-5 px-3 sm:px-6">
                        <FaCloudUploadAlt className="text-[#0065B2]" />
                        Upload
                    </button>
                </div>
            </div>
        </section>
    )
}

export default SubBanner
