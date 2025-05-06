import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'
import { fullBodyCheckups } from '../../../data'

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

const FullBodyPackages = () => {
    const settings = {
        dots: true,
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
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
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
        <section className=" p-3">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-sm font-bold">
                    Full Body Checkup Packages
                </h2>
            </div>
            <div className="flex gap-2">
                {fullBodyCheckups.slice(0, 2).map((checkup, index) => (
                    <div key={index} className="flex-1">
                        <div
                            className="shadow-healthCheckupShadow rounded-lg p-2 px-3 flex flex-col justify-between"
                            style={{ background: checkup.background }}
                        >
                            <div>
                                <div className="flex justify-between items-center">
                                    <div className="text-[#1864B3] text-center rounded-full font-roboto font-bold text-sm leading-[16.41px]">
                                        {checkup.tests}
                                    </div>
                                    <img
                                        src={checkup.icon}
                                        className="w-[27px] aspect-square object-contain m-0"
                                    />
                                </div>
                                <h3 className="font-bold text-sm  leading-[18px] mb-3 font-roboto">
                                    {checkup.title}
                                </h3>
                            </div>

                            <div
                                className="flex justify-between items-center text-sm px-2 py-2 rounded-md gap-1"
                                style={{
                                    background:
                                        'linear-gradient(90deg, #81A4CB 0%, #1864B3 100%)',
                                }}
                            >
                                <span className=" text-white mr-2  text-xs font-roboto">
                                    {checkup.originalPrice}
                                </span>
                                <span className="font-bold line-through text-[#1864B3]  text-xs font-roboto">
                                    {checkup.discountedPrice}
                                </span>
                                <span className="text-white  text-xs font-roboto">
                                    {checkup.discount}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FullBodyPackages
