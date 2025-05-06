import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import { specialties } from '../../../data';
import cardiology from '../../assets/icons/cardiology_icon_white.svg'
// Custom Next Arrow
const NextArrow = ({ onClick }: { onClick?: () => void }) => {
    return (
        <div
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#001e35] text-white p-3 rounded-full cursor-pointer z-10"
            onClick={onClick}
        >
            <HiOutlineChevronRight />
        </div>
    );
};

// Custom Prev Arrow
const PrevArrow = ({ onClick }: { onClick?: () => void }) => {
    return (
        <div
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#001e35] text-white p-3 rounded-full cursor-pointer z-10"
            onClick={onClick}
        >
            <HiOutlineChevronLeft />
        </div>
    );
};

const Specialities: React.FC = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow onClick={undefined} />,
        prevArrow: <PrevArrow onClick={undefined} />,
        responsive: [
            {
                breakpoint: 1300,
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
                breakpoint: 710,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 2.5,
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
    };

    return (
        <section className="contain">
            <div className="flex justify-between items-center mb-4">
                <div className='flex md:flex-row flex-col justify-center gap-4 item-center'>
                    <h2 className="sm:text-2xl text-base font-rubik font-semibold">Specialties</h2>
                
                </div>
                <a href="#" className="text-blue font-bold whitespace-nowrap">View All</a>
            </div>


            <Slider {...settings}>
                {specialties.map((specialty, index) => (
                    <div key={index} className="py-1 " >
                        <div className=" w-[150px] rounded-lg flex flex-col items-center p-4 transition duration-300 shadow-lg ml-auto mr-auto">
                            <div className='flex justify-center items-center h-[100px] w-[100px] bg-[#0065B2] border-8 border-white mb-4 rounded-full'>
                                <div className='h-[40px] w-[40px]'>
                                    <img
                                        src={cardiology}  // Make sure the image path is correct
                                        alt={specialty.title}
                                        className="h-[48px] w-[48px] mb-4 inline"
                                    />
                                </div>
                            </div>
                            <h3 className="text-sm font-bold text-center">{specialty.title}</h3>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default Specialities;
