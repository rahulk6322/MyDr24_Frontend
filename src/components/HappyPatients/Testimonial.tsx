import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { PiStarFill } from 'react-icons/pi'
import { testimonials } from '../../../data'

const Testimonial: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        nextArrow: <></>,
        prevArrow: <></>,
        autoplaySpeed: 3000,
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
        <section className="contain py-3 px-3 sm:px-0 w-full pb-8">
            {testimonials.map((testimonial, index) => (
                <div key={index} className="mb-4">
                    <div className="bg-white shadow-crousalShadow w-full rounded-[8px] p-6 border border-[#EEEEEE]">
                        <div className="flex  mb-4">
                            {Array(testimonial.rating)
                                .fill(0)
                                .map((_, i) => (
                                    <span key={i} className="text-yellow-400">
                                        <PiStarFill className="w-[25px] h-[25px]" />
                                    </span>
                                ))}
                        </div>
                        <p className=" text-gray-700 mb-[40px] mt-[32px]">
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
        </section>
    )
}

export default Testimonial
