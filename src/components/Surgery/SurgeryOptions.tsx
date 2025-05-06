import React, { useState, useRef } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'
import { specialties } from '../../../data'
import cardiology from '../../assets/images/cardiology_icon.png'

// Custom Next Arrow
const NextArrow = ({ onClick }) => {
    return (
        <div
            className="absolute top-[42%] right-[-6px] transform -translate-y-1/2 text-black rounded-full cursor-pointer z-10"
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
            className="absolute top-1/2 left-[-6px] transform -translate-y-1/2 text-black rounded-full cursor-pointer z-10"
            onClick={onClick}
        >
            <HiOutlineChevronLeft />
        </div>
    )
}

const SurgeryOptions = () => {
    const [activeSlide, setActiveSlide] = useState(0)
    const sliderRef = useRef(null)

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,

        nextArrow: <NextArrow onClick={undefined} />,
        beforeChange: (current, next) => setActiveSlide(next),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
    }

    const handleClick = (index) => {
        setActiveSlide(index)
        if (sliderRef.current) {
            sliderRef.current.slickGoTo(index)
        }
    }

    return (
        <section className="py-4 bg-white">
            <Slider ref={sliderRef} {...settings}>
                {specialties.map((specialty, index) => (
                    <div
                        key={index}
                        className="m-2 flex justify-center items-center transition duration-300"
                        onClick={() => handleClick(index)}
                    >
                        <h3
                            className={`text-md m-auto font-bold text-center w-fit pb-2 ${index === activeSlide ? 'text-[#0065B2]' : 'text-black'} ${index === activeSlide ? 'border-b-[1.4px] border-[#0065B2]' : ''}`}
                        >
                            {specialty.title}
                        </h3>
                    </div>
                ))}
            </Slider>
        </section>
    )
}

export default SurgeryOptions
