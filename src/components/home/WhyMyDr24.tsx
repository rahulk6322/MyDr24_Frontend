import React from 'react'
import Slider from 'react-slick' // Import Slider
import { Whydata } from '../../../data'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'

// Custom Next Arrow
const NextArrow = ({ onClick }) => {
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
const PrevArrow = ({ onClick }) => {
    return (
        <div
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#001e35] text-white p-3 rounded-full cursor-pointer z-10"
            onClick={onClick}
        >
            <HiOutlineChevronLeft />
        </div>
    )
}

const WhyMYDR24: React.FC = () => {
    // Slick slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Show 3 items at a time
        slidesToScroll: 1,
        nextArrow: <NextArrow onClick={undefined} />,
        prevArrow: <PrevArrow onClick={undefined} />,
        responsive: [
            {
                breakpoint: 1062, // For smaller screens
                settings: {
                    slidesToShow: 2.5,
                },
            },
            {
                breakpoint: 970, // For mobile devices
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 810, // For smaller screens
                settings: {
                    slidesToShow: 1.7,
                },
            },
        ],
    }

    return (
        <div className="contain">
            <div
                className="p-8 rounded-lg"
                style={{
                    background: '#81A4CB1A',
                }}
            >
                <h2 className="text-2xl font-rubik font-semibold mb-6">
                    Why MYDR24 ?
                </h2>
                <Slider {...settings} className="navbarscroll">
                    {Whydata.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col min-w-[200px]"
                        >
                            <div className="text-4xl mb-4 bg-white rounded-lg flex justify-center items-center w-[90px] h-[90px]">
                                <img
                                    className="w-[50px] h-[50px]"
                                    src={item.icon}
                                    alt={item.title}
                                />
                            </div>

                            <h3 className="text-subhead px-3 font-rubik font-semibold ">
                                {item.title}
                            </h3>
                            <p className="text-black-100 px-3">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default WhyMYDR24
