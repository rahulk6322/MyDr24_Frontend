import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'
import { Trendingproducts } from '../../../data'
import Product from '../../assets/images/Product.png'

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

const NewLaunches: React.FC = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow onClick={undefined} />,
        prevArrow: <PrevArrow onClick={undefined} />,
        responsive: [
            {
                breakpoint: 1335,
                settings: {
                    slidesToShow: 5.5,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1210,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1090,
                settings: {
                    slidesToShow: 4.5,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 890,
                settings: {
                    slidesToShow: 3.5,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 790,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 690,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 590,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }

    return (
        <section className="py-5 contain">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-rubik font-semibold">
                    New Launches
                </h2>
                <a href="#" className="text-blue font-medium">
                    View All
                </a>
            </div>
            <Slider {...settings}>
                {Trendingproducts.map((product, index) => (
                    <div key={index} className="">
                        <div className="bg-white w-[200px] mx-auto rounded-lg px-4 flex flex-col justify-between">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="h-[153px] min-w-[153px] object-contain mb-2 border rounded-md p-4"
                            />
                            <div className="flex flex-col gap-[5px]">
                                <h3 className="text-sm font-rubik font-medium mt-[10px]">
                                    {product.name}
                                </h3>
                                <p className="text-black-300 text-sm">
                                    {' '}
                                    MRP:
                                    <span className="line-through ml-2">
                                        {product.price}
                                    </span>
                                </p>
                                <div className="flex gap-2 items-center text-title">
                                    <span className=" text-black font-medium">
                                        {product.discountPrice}
                                    </span>
                                    <span className="text-red-500 font-medium">
                                        ({product.discount})
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    )
}

export default NewLaunches
