import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'
import DrConsultationBanner from '../../assets/images/DrConsultationBanner2.png' // Replace with actual image path
import { FaChevronCircleRight } from 'react-icons/fa'

const slides = [
    {
        title: 'FREE DOCTOR CONSULTATION',
        description: 'For Acne, Pigmentation, Wrinkles & 7 more!',
        buttonText: 'EXPLORE NOW',
        buttonLink: '#',
        image: DrConsultationBanner, // This will be the background image
    },
    {
        title: 'ANOTHER CONSULTATION',
        description: 'Special offer on skin treatment & 3 more!',
        buttonText: 'CHECK NOW',
        buttonLink: '#',
        image: DrConsultationBanner, // This will be the background image
    },
]

// Custom Next Arrow

const DoctorConsultationCarousel: React.FC = () => {
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
        adaptiveHeight: true,
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
        <section className="px-3 sm:px-6 lg:px-8 pb-7 relative">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index} className="relative rounded-lg">
                        <img
                            src={slide.image}
                            alt={`Slide ${index + 1}`}
                            className="w-full object-cover rounded-lg h-[180px]"
                        />
                        {/* Text Overlay */}
                        <div className="absolute inset-0 flex flex-col justify-center items-start px-3 md:px-16 lg:px-10 z-10 py-6">
                            <h2 className="text-[20px] font-roboto md:text-5xl lg:text-6xl font-extrabold w-[70%] leading-[24px]">
                                {slide.title}
                            </h2>
                            <p className="text-[14px] font-rubix md:text-2xl font-normal mb-3 w-[60%]">
                                {slide.description}
                            </p>
                            <a
                                href={slide.buttonLink}
                                className="inline-flex items-center justify-start px-3 py-2 bg-[#06B90C] text-white font-medium rounded-[4px] text-[12px]"
                            >
                                {slide.buttonText}
                                <FaChevronCircleRight className="text-[20px] ml-2" />
                            </a>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    )
}

export default DoctorConsultationCarousel
