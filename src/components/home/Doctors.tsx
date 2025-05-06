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

const Doctors: React.FC = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow onClick={undefined} />,
        prevArrow: <PrevArrow onClick={undefined} />,
        responsive: [
            {
                breakpoint: 1350,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1330,
                settings: {
                    slidesToShow: 4.5,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 3.5,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 830,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1.7,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
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
        <section className="contain py-5">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-rubik font-semibold">
                    India's Top Doctor Consultation
                </h2>
                <a href="#" className="text-blue font-medium">
                    View All
                </a>
            </div>
            <Slider {...settings}>
                {doctorsData.map((doctor, index) => (
                    <div key={index} className="p-4">
                        <div
                            className="rounded-t-full flex flex-col justify-between shadow-md text-center  h-[310px] w-[250px] mx-auto"
                            style={{
                                background:
                                    'linear-gradient(180deg, #F1F9FF 0%, #B9EDFD 100%)',
                            }}
                        >
                            <div className="flex-grow flex items-end justify-center mb-0">
                                <img
                                    src={doctor.image}
                                    alt={doctor.name}
                                    className="object-cover h-[270px] w-full max-w-[75%] mb-0"
                                />
                            </div>
                        </div>
                        <div className="text-center mt-2">
                            <h3 className="text-lg font-bold">{doctor.name}</h3>
                            <p className="text-sm text-blue font-semibold">
                                {doctor.speciality}
                            </p>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    )
}

export default Doctors
