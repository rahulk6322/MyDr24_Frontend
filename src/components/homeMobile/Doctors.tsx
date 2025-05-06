import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'
import { doctorsData } from '../../../data'
import doctors from '../../assets/images/Doctor.png'

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

const DoctorsMobile: React.FC = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow onClick={undefined} />,
        prevArrow: <PrevArrow onClick={undefined} />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
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
        <section className="p-3">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-sm font-bold font-rubik">
                    India’s Top Doctor Consultation
                </h2>
                <p className="text-sm text-[#0065B2]">View All</p>
            </div>
            <div className="flex gap-2">
                {doctorsData.slice(0, 3).map((doctor, index) => (
                    <div key={index} className="flex-1">
                        <div
                            className="rounded-t-full flex flex-col justify-end text-center w-100 h-[137px] mx-auto"
                            style={{
                                background:
                                    'linear-gradient(180deg, #F1F9FF 0%, #B9EDFD 100%)',
                            }}
                        >
                            <div className="flex-grow flex items-end justify-center mb-0">
                                <img
                                    src={doctors}
                                    alt={doctor.name}
                                    className="object-contain h-[119px] w-full max-w-[80px] self-end m-0"
                                />
                            </div>
                        </div>
                        <div className="text-center mt-2">
                            <h3 className="text-[10.83px] font-bold">
                                {doctor.name}
                            </h3>
                            <p className="text-[10px] text-[#0065B2] font-normal">
                                {doctor.speciality}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default DoctorsMobile
