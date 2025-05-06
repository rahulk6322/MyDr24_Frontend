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

const NewLaunchesMobile: React.FC = () => {
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
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
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
        <section className="p-3">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-sm font-bold">New Launches</h2>
                <p className="text-sm text-[#0065B2]">View All</p>
            </div>
            <div className="flex gap-2">
                {Trendingproducts.slice(0, 3).map((product, index) => (
                    <div key={index} className=" flex-1">
                        <div className="bg-white w-100 rounded-lg flex flex-col justify-between ">
                            <img
                                src={Product}
                                alt={product.name}
                                className="h-[92.44px] aspect-square w-full object-contain mb-2 border-1 border-gray-400 "
                            />
                            <div>
                                <h3 className="text-[10px] font-semibold mb-1">
                                    {product.name}
                                </h3>
                                <p className="text-black-300 text-[10px] line-through">
                                    {' '}
                                    {product.price}
                                </p>
                                <div className="flex gap-1 items-center text-title ">
                                    <span className="font-black text-black text-[10px] font-roboto">
                                        {product.discountPrice}
                                    </span>
                                    <span className="text-red-500 font-black text-[10px] font-roboto">
                                        ({product.discount})
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default NewLaunchesMobile
