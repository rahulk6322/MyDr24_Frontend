import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'
import { specialties } from '../../../data'
import cardiology from '../../assets/images/our_disease_dummy.png'
// Custom Next Arrow
const NextArrow = ({ onClick }: { onClick?: () => void }) => {
    return (
        <div
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#fff] text-black border p-3 rounded-full cursor-pointer z-10"
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
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#fff] text-black border p-3 rounded-full cursor-pointer z-10"
            onClick={onClick}
        >
            <HiOutlineChevronLeft />
        </div>
    )
}

const OurDiseases: React.FC = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow onClick={undefined} />,
        prevArrow: <PrevArrow onClick={undefined} />,
        responsive: [
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
        <section className="contain py-4 mt-6 px-0">
            <div className="flex mb-4 justify-between">
                <div className="flex justify-center gap-4 item-center">
                    <h2 className="text-sm font-semibold font-rubik sm:text-head">
                        Our Diseases
                    </h2>
                </div>
                <a href="#" className="text-[#1864B3] sm:text-base text-sm">
                    View All
                </a>
            </div>

            <Slider {...settings}>
                {specialties.map((specialty, index) => (
                    <div key={index} className="p-2">
                        <div className="border border-[#ECECEC] rounded-lg flex flex-col items-center p-4 transition duration-300 ">
                            <div className="h-[100px] w-[100px]">
                                <img
                                    src={cardiology} // Make sure the image path is correct
                                    alt={specialty.title}
                                    className="h-[100px] w-[100px] mb-4 inline"
                                />
                            </div>

                            <h3 className="text-[13px] sm:text-[17px] font-bold mt-4 text-center">
                                {specialty.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    )
}

export default OurDiseases
