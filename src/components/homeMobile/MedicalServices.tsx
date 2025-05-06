import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'
import medicalServices from '../../assets/images/medicalServicesImg.png'
// Example services data
const services = [
    {
        image: '/path/to/image1.jpg', // Replace with actual image path
        title: 'Instance Services',
        description:
            'We consider patient safety, quality, and the patient & family',
        buttonText: 'BOOK NOW',
        backgroundColor:
            'linear-gradient(105.86deg, #0F125B 1.92%, #363AA0 100%)',
    },
    {
        image: '/path/to/image2.jpg',
        title: 'Doctor Consultation',
        description: 'Get Doctor Consultation With Top Specialists',
        buttonText: 'BOOK NOW',
        backgroundColor:
            'linear-gradient(105.86deg, #1A90EA 1.92%, #137EA6 100%)',
    },
    {
        image: '/path/to/image3.jpg',
        title: 'Medical Surgery',
        description: 'Get Doctor Consultation With Top Specialists',
        buttonText: 'BOOK NOW',
        backgroundColor:
            'linear-gradient(105.86deg, #FCD53F 1.92%, #DBAE00 100%)',
    },
    {
        image: '/path/to/image4.jpg',
        title: 'Diagnostic Test',
        description: 'Lab Tests & Blood Tests At Home',
        buttonText: 'BOOK NOW',
        backgroundColor:
            'linear-gradient(105.86deg, #0F125B 1.92%, #363AA0 100%)',
    },
]

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

const MedicalServices: React.FC = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow onClick={undefined} />,
        prevArrow: <PrevArrow onClick={undefined} />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
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
        <section className="py-3">
            <div className="flex justify-between items-center mb-4 pl-3">
                <h2 className="text-sm font-bold font-rubik">
                    Medical Services Offered At Home
                </h2>
            </div>
            <div className="overflow-x-scroll flex gap-3 overflow-y-hidden">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={`flex-[0_0_54%]  ${index === 0 ? 'ml-3' : ''}  ${
                            index === services.length ? 'mr-3' : ''
                        } flex`}
                    >
                        <div
                            className="relative rounded-lg flex w-full text-white"
                            style={{ background: service.backgroundColor }}
                        >
                            <div className="p-4 pr-10 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-base leading-[16.4px] font-bold mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-[10px] mb-1">
                                        {service.description}
                                    </p>
                                </div>
                                <div className="flex flex-col item-start">
                                    <button className="bg-[#FF4547] text-white font-normal py-1.5 px-4 mb-2 rounded-md w-fit text-[10px]">
                                        {service.buttonText}
                                    </button>
                                    <span className="text-xs text-white">
                                        *T&C Apply
                                    </span>
                                </div>
                            </div>
                            <div className="absolute -bottom-5 right-0">
                                <img
                                    src={medicalServices}
                                    alt={service.title}
                                    className="h-[102px] w-[54.41px] object-contain mb-4"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default MedicalServices
