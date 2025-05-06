/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { PiStarFill } from 'react-icons/pi'
import { testimonials } from '../../../data'

interface TestimonialProps {
    slidesToShow?: number // Optional prop for number of slides
    breakpoints?: Array<{ breakpoint: number; slidesToShow: number }> // Optional breakpoints
}

const Testimonial: React.FC<any> = ({
    testimonialsData,
    slidesToShow = 1, // Default to 1 slide
    breakpoints = [], // Default to empty array for breakpoints
}) => {
    const [slideWidth, setSlideWidth] = useState('390px') // Initial width

    // Adjust the width based on screen size
    useEffect(() => {
        const updateSlideWidth = () => {
            if (window.innerWidth <= 980) {
                setSlideWidth('300px') // Width for screens 980px or less
            } else {
                setSlideWidth('390px') // Default width for larger screens
            }
        }

        // Initial check when the component mounts
        updateSlideWidth()

        // Add event listener to handle window resize
        window.addEventListener('resize', updateSlideWidth)

        // Clean up the event listener when component unmounts
        return () => {
            window.removeEventListener('resize', updateSlideWidth)
        }
    }, [])

    // Create responsive settings dynamically from breakpoints prop
    const responsiveSettings = breakpoints.map((bp) => ({
        breakpoint: bp.breakpoint,
        settings: {
            slidesToShow: bp.slidesToShow,
        },
    }))

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: responsiveSettings,
    }

    return (
        <section className="py-8 px-4 sm:px-6 lg:px-8 contain">
            <h2 className="text-2xl font-rubik font-semibold">
                What MYDR24 Users Say
            </h2>
            <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="py-4">
                        <div
                            className="bg-white shadow-crousalShadow rounded-[18px] p-6"
                            style={{ width: slideWidth }} // Dynamic width
                        >
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
                            <p className="text-gray-700 font-medium mb-[40px] mt-[32px]">
                                {testimonial.feedback}
                            </p>
                            <div className="flex items-center gap-5">
                                <div className="rounded-full">
                                    <img
                                        className="w-[80px] h-[80px]"
                                        src={testimonial.avatar}
                                        alt={
                                            testimonial.name ||
                                            'Testimonial Avatar'
                                        } // Improved alt handling
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
