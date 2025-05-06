import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'
import { specialties } from '../../../data'
import cardiology from '../../assets/images/cardiology_icon.png'
// Custom Next Arrow
const NextArrow = ({ onClick }: { onClick?: () => void }) => {
    return (
        <div
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#001e35] text-white p-3 rounded-full cursor-pointer z-10"
            onClick={onClick}
        >
            <HiOutlineChevronRight />
        </div>
    )
}

// Custom Prev Arrow
const PrevArrow = ({ onClick }: { onClick?: () => void }) => {
    return (
        <div
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#001e35] text-white p-3 rounded-full cursor-pointer z-10"
            onClick={onClick}
        >
            <HiOutlineChevronLeft />
        </div>
    )
}

const TopDoctorsByHealth: React.FC = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow onClick={undefined} />,
        prevArrow: <PrevArrow onClick={undefined} />,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 710,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    }

    return (
        <section className="contain py-6">
            <div className="flex justify-between items-center ">
                <div className="flex md:flex-row flex-col justify-center gap-4 item-center">
                    <h2 className="text-2xl font-rubik font-semibold">
                        Top Doctors by Health
                    </h2>
                    <div className="flex space-x-1 bg-gray-100 p-1 shadow h-[35px] mb-4 rounded-full">
                        <button className=" text-black text-[14px] font-medium px-4 rounded-full">
                            Symptoms
                        </button>
                        <button className="bg-blue text-white font-medium px-4  rounded-full">
                            Specialities
                        </button>
                    </div>
                </div>
                <a href="#" className="text-blue font-bold whitespace-nowrap">
                    View All
                </a>
            </div>

            <Slider {...settings}>
                {specialties.map((specialty, index) => (
                    <div key={index} className="py-1">
                        <div
                            className="shadow-md w-[150px] rounded-lg flex flex-col items-center p-4 transition duration-300"
                            style={{
                                background:
                                    'linear-gradient(180deg, rgba(1, 184, 6, 0.29) 0%, rgba(255, 255, 255, 0.62086) 66.6%, #FFFFFF 100%)',
                            }}
                        >
                            <div className="flex justify-center items-center h-[100px] w-[100px] border-[#06b90c] border-8 mb-4 rounded-full bg-white">
                                <div className="h-[40px] w-[40px]">
                                    <img
                                        src={specialty.icon} // Make sure the image path is correct
                                        alt={specialty.title}
                                        className="h-[48px] w-[48px] mb-4 inline"
                                    />
                                </div>
                            </div>
                            <h3 className="text-md font-bold text-center">
                                {specialty.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    )
}

export default TopDoctorsByHealth
