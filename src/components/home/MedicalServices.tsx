import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'
import { services } from '../../../data'

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

const MedicalServices: React.FC = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3.4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow onClick={undefined} />,
        prevArrow: <PrevArrow onClick={undefined} />,
        responsive: [
            {
                breakpoint: 1254,
                settings: {
                    slidesToShow: 2.7,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1054,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 966,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 1.7,
                    slidesToScroll: 1,
                },
            },

            {
                breakpoint: 670,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 606,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }

    return (
        <section className="contain py-5">
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-2xl font-rubik font-semibold">
                    Medical Services Offered At Home
                </h2>
            </div>
            <Slider {...settings}>
                {services.map((service, index) => (
                    <div key={index} className="flex gap-3">
                        <div
                            className="relative rounded-lg flex w-[350px] h-[208px] mx-auto text-white"
                            style={{ background: service.backgroundColor }}
                        >
                            <div className="p-[15px] flex flex-col justify-between">
                                <div>
                                    <h3 className="text-[22px] font-bold mt-2 mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm mb-2 w-[200px]">
                                        {service.description}
                                    </p>
                                </div>
                                <div className="flex flex-col item-start">
                                    <button className="bg-white rounded-[4px] w-[120px] text-blue text-subtitle font-semibold py-[8px] px-[2px] mb-2">
                                        {service.buttonText}
                                    </button>
                                    <span className="text-[14px] text-white">
                                        *T&C Apply
                                    </span>
                                </div>
                            </div>
                            <div className="absolute -bottom-5 right-0">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="h-[170px] w-[166px] object-contain mb-4"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    )
}

export default MedicalServices
