import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { blogs } from '../../../data'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'
import BlogImage from '../../assets/images/BlogImage.png'
import { FaArrowRight } from 'react-icons/fa'

// Custom Next Arrow
const NextArrow = ({ onClick }) => {
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
const PrevArrow = ({ onClick }) => {
    return (
        <div
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#001e35] text-white p-3 rounded-full cursor-pointer z-10"
            onClick={onClick}
        >
            <HiOutlineChevronLeft />
        </div>
    )
}

const BlogsAndArticles = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const handleBeforeChange = (oldIndex, newIndex) => {
        setCurrentSlide(newIndex)
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        centerPadding: '10%',
        adaptiveHeight: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        beforeChange: handleBeforeChange,
        nextArrow: <></>,
        prevArrow: <></>,
        centerMode: true,
        rtl: true,
        appendDots: (dots: any) => (
            <div
                style={{
                    padding: '10px',
                    backgroundColor: 'transparent',
                    borderRadius: '10px',
                    bottom: '-54px',
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
        <section className="pb-12 ">
            <div className="flex justify-between items-center mb-4 p-3 pb-0">
                <h2 className="text-sm font-bold">
                    Blogs and Articles for You
                </h2>
            </div>
            <div className="">
                <Slider {...settings}>
                    {blogs.map((blog, index) => (
                        <div key={index} className="px-3">
                            <div className="bg-white shadow-custom rounded-lg overflow-hidden ">
                                <img
                                    src={BlogImage}
                                    alt={blog.title}
                                    className="w-full h-[161px] object-cover rounded-lg"
                                />
                                <div className="mt-4">
                                    <h3 className="text-black-100 font-normal mb-4 text-[14px]">
                                        {blog.title}
                                    </h3>
                                    <a
                                        href={blog.link}
                                        className="text-black font-sm underline flex font-roboto font-semibold flex items-center"
                                    >
                                        Read More
                                        <div className="bg-black rounded-full p-[6px] aspect-square ml-2">
                                            <FaArrowRight className=" text-[10px] text-white" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default BlogsAndArticles
