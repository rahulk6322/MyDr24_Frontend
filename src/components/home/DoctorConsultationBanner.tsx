import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'
import { FaChevronCircleRight } from 'react-icons/fa'
import sideImg from '../../assets/images/crousal.jpg'
const slides = [
    {
        title: 'FREE DOCTOR CONSULTATION',
        description: 'For Acne, Pigmentation, Wrinkles & 7 more!',
        buttonText: 'EXPLORE NOW',
        buttonLink: '#',
    },
    {
        title: 'FREE DOCTOR CONSULTATION',
        description: 'For Acne, Pigmentation, Wrinkles & 7 more!',
        buttonText: 'EXPLORE NOW',
        buttonLink: '#',
    },
]

// Custom Next Arrow
const NextArrow = ({ onClick }: { onClick?: () => void }) => {
    return (
        <div
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-gray-700 p-2 rounded-full shadow-md cursor-pointer z-10"
            onClick={onClick}
        >
            <HiOutlineChevronRight size={24} />
        </div>
    )
}

// Custom Prev Arrow
const PrevArrow = ({ onClick }: { onClick?: () => void }) => {
    return (
        <div
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-gray-700 p-2 rounded-full shadow-md cursor-pointer z-10"
            onClick={onClick}
        >
            <HiOutlineChevronLeft size={24} />
        </div>
    )
}

const DoctorConsultationCarousel: React.FC = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow onClick={undefined} />,
        prevArrow: <PrevArrow onClick={undefined} />,
        autoplay: true,
        autoplaySpeed: 4000,
    }

    return (
        <section className="contain py-5 relative">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="relative rounded-lg h-[350px] min-h-[150px] overflow-hidden bg-[#BAEFFD] text-white flex justify-center items-center"
                    >
                        {/* Text Overlay */}
                        <div className="absolute inset-0 flex flex-col justify-center items-start px-16 lg:px-20 z-10">
                            <h2
                                className="text-2xl font-rubik md:text-4xl lg:text-[56px] font-bold text-[#1864B3] max-w-[60%] xl:max-w-[100%] mb-2 lg:mb-[30px]"
                                style={{ lineHeight: '55.5px' }}
                            >
                                {slide.title}
                            </h2>
                            <p
                                className="text-lg md:text-2xl lg:text-[40px] text-[#1864B3] font-medium mb-6 max-w-[500px]"
                                style={{ lineHeight: '45.5px' }}
                            >
                                {slide.description}
                            </p>
                            <a
                                href={slide.buttonLink}
                                className="inline-flex items-center justify-start bg-green text-white font-semibold gap-0
                  w-[177px] h-[34.51px] md:w-[177px] md:h-[41px]
                  md:top-[377px] md:left-[167px] md:rounded-tl-[4px]
                  top-[367.24px] left-[27px] rounded-tl-[3.37px] p-3 text-title"
                            >
                                {slide.buttonText}
                                <FaChevronCircleRight className="ml-2 w-[30px] h-[30px]" />
                            </a>
                        </div>

                        <img
                            src={sideImg}
                            className="absolute right-0 bottom-0 h-[150px] md:h-[270px] lg:h-[350px] hidden object-cover"
                            alt="Consultation"
                        />
                    </div>
                ))}
            </Slider>
        </section>
    )
}

export default DoctorConsultationCarousel
