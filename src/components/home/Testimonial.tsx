import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { PiStarFill } from 'react-icons/pi'
import { testimonials } from '../../../data'

const Testimonial: React.FC = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1334,
                settings: {
                    slidesToShow: 3.5,
                },
            },
            {
                breakpoint: 1130,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2.5,
                },
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1.5,
                },
            },
        ],
    }

    return (
        <section className="py-8 px-4 sm:px-6 lg:px-8 contain">
            <h2 className="text-2xl font-rubik font-semibold">
                What MYDR24 Users Say
            </h2>
            <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="py-4">
                        <div className="bg-white shadow-crousalShadow w-[300px] rounded-[18px] p-6">
                            <div className="flex mb-4">
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
                            <p className=" text-gray-700 font-medium mb-[40px] mt-[32px]">
                                {testimonial.feedback}
                            </p>
                            <div className="flex items-center gap-5">
                                {/* <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full" /> */}
                                <div className=" rounded-full">
                                    <img
                                        className="w-[80px] h-[80px]"
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                    />
                                </div>
                                <div>
                                    <p className="font-bold text-[#1864B3]">
                                        {testimonial.name}
                                    </p>
                                    <p className="text-sm text-black">
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

export default Testimonial
