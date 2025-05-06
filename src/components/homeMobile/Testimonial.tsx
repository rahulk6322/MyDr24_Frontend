import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { PiStarFill } from 'react-icons/pi'
import { testimonials } from '../../../data'

const TestimonialMobile: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const handleBeforeChange = (oldIndex, newIndex) => {
        setCurrentSlide(newIndex)
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <></>,
        prevArrow: <></>,
        beforeChange: handleBeforeChange,
        appendDots: (dots: any) => (
            <div
                style={{
                    padding: '10px',
                    backgroundColor: 'transparent',
                    borderRadius: '10px',
                    bottom: '-40px',
                }}
            >
                <ul style={{ margin: '0px' }}>{dots}</ul>
            </div>
        ),
        customPaging: (i: any) => (
            <div
                style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: i === currentSlide ? '#06B90C' : '#ccc', // Active dot color
                }}
            ></div>
        ),
        responsive: [
            {
                breakpoint: 1324,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
        ],
    }

    return (
        <section className="mt-3 mb-5">
            <div className="flex justify-between items-center p-3 pb-0">
                <h2 className="text-sm font-bold">What MYDR24 Users Say</h2>
            </div>
            <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="">
                        <div className="bg-white shadow-crousalShadow rounded-[18px] p-3 pt-3">
                            <div className="flex  mb-4">
                                {Array(testimonial.rating)
                                    .fill(0)
                                    .map((_, i) => (
                                        <span
                                            key={i}
                                            className="text-yellow-400"
                                        >
                                            <PiStarFill className="w-[25px] h-[25px]" />
                                        </span>
                                    ))}
                            </div>
                            <p className=" text-gray-700 mb-[40px] mt-[32px] text-[14px] font-roboto leading-[28px]">
                                {testimonial.feedback}
                            </p>
                            <div className="flex items-center gap-5">
                                {/* <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full" /> */}
                                <div className="w-12 bg-[#00ff00] h-12 rounded-full"></div>
                                <div>
                                    <p className="font-bold text-[#1864B3]">
                                        {testimonial.name}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    )
}

export default TestimonialMobile
