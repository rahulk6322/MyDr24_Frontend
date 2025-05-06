import React from 'react'
import Slider from 'react-slick' // Import Slider
import { quicktabs } from '../../../data'
import { FaChevronRight } from 'react-icons/fa'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

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

const QuickTabs: React.FC = () => {
    // Slider settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5, // Adjust the number of items visible at once
        slidesToScroll: 1,
        nextArrow: <NextArrow onClick={undefined} />,
        prevArrow: <PrevArrow onClick={undefined} />,
        responsive: [
            {
                breakpoint: 1455, // For tablet or medium-sized screens
                settings: {
                    slidesToShow: 4.5,
                },
            },
            {
                breakpoint: 1290, // For tablet or medium-sized screens
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 1150, // For tablet or medium-sized screens
                settings: {
                    slidesToShow: 3.5,
                },
            },
            {
                breakpoint: 1020, // For tablet or medium-sized screens
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 880, // For tablet or medium-sized screens
                settings: {
                    slidesToShow: 2.5,
                },
            },
        ],
    }

    return (
        <section className="contain py-6">
            <Slider {...settings} className="navbarscroll">
                {' '}
                {/* Wrap with Slider */}
                {quicktabs.map((quicktab, index) => (
                    <div
                        key={index}
                        className={`px-4 py-1 rounded-lg flex items-center justify-between cursor-pointer`}
                    >
                        <div
                            className={`flex justify-between items-center rounded-md shadow-sm min-w-[270px] min-h-[88px] px-4 py-2 ${
                                quicktab.backgroundColor === '#E3F2FD'
                                    ? 'bg-[#F0F7FF]'
                                    : ''
                            }
            ${quicktab.backgroundColor === '#E8F5E9' ? 'bg-green-100' : ''}
            ${quicktab.backgroundColor === '#FFF9C4' ? 'bg-yellow-100' : ''}
            ${quicktab.backgroundColor === '#FFEBEE' ? 'bg-red-100' : ''}`}
                        >
                            <div className="flex items-center">
                                <img
                                    src={quicktab.image}
                                    alt={quicktab.title}
                                    className="h-[40px] min-w-20 object-contain mr-1"
                                />
                                <div>
                                    <h3 className="font-semibold text-subtitle min-w-[127px] font-rubik leading-5">
                                        {quicktab.title}
                                    </h3>
                                    <p className="text-black font-rubik text-[14px] font-medium mt-[8px] text-sm">
                                        {quicktab.subtitle}
                                    </p>
                                </div>
                            </div>
                            <div className="text-lg font-bold ml-2 text-black">
                                <FaChevronRight />
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    )
}

export default QuickTabs
