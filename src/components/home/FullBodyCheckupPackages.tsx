import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'
import checkupImg from '../../assets/images/checkupImg.png'
import Loader from '../global/Loader'
import { fullBodyCheckups } from '../../../data'

interface checkupPackages {
    discountPercentage: string
    discountedPrice: string
    imageUrl: string
    originalPrice: string
    packageName: string
    testsIncluded: string
}

interface FullBodyCheckupPackagesProps {
    checkupPackages?: checkupPackages[]
    loading: boolean
}

// Custom Next Arrow
const NextArrow = ({ onClick }: { onClick?: () => void }) => {
    return (
        <div
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#001e35] text-white p-3 rounded-full cursor-pointer z-10"
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
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#001e35] text-white p-3 rounded-full cursor-pointer z-10"
            onClick={onClick}
        >
            <HiOutlineChevronLeft />
        </div>
    )
}

const FullBodyCheckupPackages: React.FC<FullBodyCheckupPackagesProps> = ({
    loading,
}) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3.7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow onClick={undefined} />,
        prevArrow: <PrevArrow onClick={undefined} />,
        responsive: [
            {
                breakpoint: 1390,
                settings: {
                    slidesToShow: 3.2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1175,
                settings: {
                    slidesToShow: 2.8,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1045,
                settings: {
                    slidesToShow: 2.4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 765,
                settings: {
                    slidesToShow: 1.7,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 660,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 590,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }

    return (
        <section className="contain py-10">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-head font-bold">
                    Full Body Checkup Packages
                </h2>
                <a href="#" className="text-blue font-bold">
                    View All
                </a>
            </div>
            <Slider {...settings}>
                {loading ? (
                    <Loader />
                ) : (
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    fullBodyCheckups.map((pkg: any, index) => (
                        <div key={index} className="px-2">
                            <div className="bg-[#f6f6f6] w-[344px] mx-auto rounded-lg p-4 flex flex-col justify-between">
                                <img
                                    src={checkupImg}
                                    alt={pkg.packageName}
                                    className="h-[150px] mx-auto object-cover rounded-lg mb-4"
                                />
                                <h3 className="text-lg font-rubik font-bold mb-1">
                                    {pkg.packageName}
                                </h3>
                                <p className="text-gray-500 mb-4">
                                    {pkg.testsIncluded} Test Included
                                </p>
                                <div className="flex items-start gap-2 justify-between h-full">
                                    <div className="flex items-center gap-2 justify-between mb-4 mt-2">
                                        <span className="text-black font-bold text-subtitle">
                                            {pkg.originalPrice}
                                        </span>
                                        <span className="line-through text-gray-500 text-subtitle">
                                            {pkg.originalPrice}
                                        </span>
                                        <span className="text-red-600 font-bold text-subtitle">
                                            {pkg.discountPercentage}%
                                        </span>
                                    </div>
                                    <button className="bg-blue text-white font-semibold py-2 rounded-lg w-[117px]">
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </Slider>
        </section>
    )
}

export default FullBodyCheckupPackages
