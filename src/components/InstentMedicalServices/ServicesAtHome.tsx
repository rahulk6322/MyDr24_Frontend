import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'
import { medicalService } from '../../../data'
import cardiology from '../../assets/images/medicalServiceDummy.jpg'
import { FaChevronRight } from 'react-icons/fa'
// Custom Next Arrow
const NextArrow = ({ onClick }: { onClick?: () => void }) => {
    return (
        <div
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-black p-3 rounded-full cursor-pointer z-10 border border-gray-400"
            onClick={onClick}
        >
            <HiOutlineChevronRight />
        </div>
    )
}

// Custom Prev Arrow
const PrevArrow = ({ onClick }: { onClick?: () => void }) => {
    return (
        <div
            className="absolute top-1/2 left-0 transform -translate-y-1/2  bg-white text-black p-3 rounded-full cursor-pointer z-10 border border-gray-400"
            onClick={onClick}
        >
            <HiOutlineChevronLeft />
        </div>
    )
}

const ServicesAtHome: React.FC = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow onClick={undefined} />,
        prevArrow: <PrevArrow onClick={undefined} />,
        responsive: [
            {
                breakpoint: 1350,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    }

    return (
        <section className="lg:px-36 sm:px-16 px-3 mt-8">
            <div className="flex justify-between items-center mb-4">
                <div className=" justify-center gap-4 item-center">
                    <h2 className="text-sm font-semibold font-rubik sm:text-head">
                        Medical Services Offered At Home
                    </h2>
                    <p className="text-gray-400 text-base font-rubik">
                        Find near clinic and hospitals
                    </p>
                </div>
            </div>

            <Slider {...settings}>
                {medicalService.map((specialty, index) => (
                    <div key={index} className="p-2 h-full">
                        <div className="shadow-md w-full h-full rounded-lg justify-between flex flex-col items-center p-4 transition duration-300">
                            <img
                                src={cardiology} // Make sure the image path is correct
                                alt={specialty.title}
                                className="h-[80px] w-[80px] mb-4 inline"
                            />

                            <h3 className="text-base font-normal leading-[15px] text-center font-rubik min-h-[30px]">
                                {specialty.title}
                            </h3>

                            <a
                                href="#"
                                className="text-[#0065B2] mt-2 gap-1 font-rubik font-normal flex items-center"
                            >
                                Consult Now
                                <FaChevronRight className=" text-[12px] text-[#0065B2]" />
                            </a>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    )
}

export default ServicesAtHome
