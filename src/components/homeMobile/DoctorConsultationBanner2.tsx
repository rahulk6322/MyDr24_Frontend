import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'
import DrConsultationBanner from '../../assets/images/dummy-bg.png' // Replace with actual image path
import { FaChevronCircleRight } from 'react-icons/fa'

const slides = [
    {
        title: 'Consult India’s qualified doctors from home',
        description1: 'Response in 30 min',
        description2: 'Private and secure sessions',
        buttonText: 'Consult Now',
        buttonLink: '#',
        image: DrConsultationBanner, // This will be the background image
    },
    {
        title: 'Consult India’s qualified doctors from home',
        description1: 'Response in 30 min',
        description2: 'Private and secure sessions',
        buttonText: 'Consult Now',
        buttonLink: '#',
        image: DrConsultationBanner, // This will be the background image
    },
]

// Custom Next Arrow

const DoctorConsultationCarousel2: React.FC = () => {
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
        autoplaySpeed: 4000,
        beforeChange: handleBeforeChange,
        nextArrow: <></>,
        prevArrow: <></>,
        appendDots: (dots: any) => (
            <div
                style={{
                    padding: '10px',
                    backgroundColor: 'transparent',
                    borderRadius: '10px',
                    bottom: '-38px',
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
    }

    return (
        <section className="px-3 sm:px-6 lg:px-8 mb-[12px] relative pb-5">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index} className="relative rounded-lg">
                        <img
                            src={slide.image}
                            alt={`Slide ${index + 1}`}
                            className="w-full object-cover rounded-lg h-[200px]"
                        />
                        {/* Text Overlay */}
                        <div className="absolute inset-0 flex flex-col justify-center items-start px-3 py-3">
                            <h2 className="text-[22px] font-roboto pr-20 my-4 font-extrabold text-[#FFCE12] leading-[27px] mt-0 mb-2">
                                {slide.title}
                            </h2>
                            <div className="flex gap-3 mb-4">
                                <p className="text-[12px] font-medium text-white w-[25%] leading-[19px]">
                                    {slide.description1}
                                </p>
                                <hr className="border-l border-t-0 border-[#FCD53F] w-1 h-[100%]" />
                                <p className="text-[12px] font-medium text-white w-[40%] leading-[19px]">
                                    {slide.description2}
                                </p>
                            </div>
                            <a
                                href={slide.buttonLink}
                                className="inline-flex items-center justify-start px-3 py-2 bg-[#fff] text-black font-semibold font-roboto rounded-[4px] text-[11px]"
                            >
                                {slide.buttonText}
                            </a>
                            <p className="text-[10px] font-medium text-white w-[40%] leading-[19px] mt-1">
                                *T&C Apply
                            </p>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    )
}

export default DoctorConsultationCarousel2
