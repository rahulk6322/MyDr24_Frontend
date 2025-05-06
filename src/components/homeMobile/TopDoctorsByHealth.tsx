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
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }

    return (
        <section className="p-3 pb-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-sm font-bold font-rubik">
                    Top Doctors by Health Concern
                </h2>
                <p className="text-sm text-[#0065B2]">View All</p>
            </div>

            <div className="flex gap-2">
                {specialties.slice(0, 3).map((specialty, index) => (
                    <div key={index} className="flex-1 h-[127px]">
                        <div
                            className="shadow-md w-100 rounded-lg flex flex-col items-center p-2 transition duration-300"
                            style={{
                                background:
                                    'linear-gradient(180deg, rgba(1, 184, 6, 0.29) 0%, rgba(255, 255, 255, 0.62086) 66.6%, #FFFFFF 100%)',
                            }}
                        >
                            <div className="flex justify-center items-center h-[100% ] aspect-square w-[80%] border-[#06b90c] border-8 mb-4 rounded-full bg-white">
                                <div className="h-[32px] w-[32px]">
                                    <img
                                        src={cardiology} // Make sure the image path is correct
                                        alt={specialty.title}
                                        className="h-[32px] w-[32px] mb-4 inline"
                                    />
                                </div>
                            </div>
                            <h3 className="text-[12.76px] font-bold text-center">
                                {specialty.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TopDoctorsByHealth
