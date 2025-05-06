import React, { useState, useEffect } from 'react'
import Testimonial from '../components/Surgery/Testimonial'
import Doctors from '../components/home/Doctors'
import DoctorsMobile from '../components/homeMobile/Doctors'
import Banner from '../components/Surgery/Banner'
import { FaCaretRight } from 'react-icons/fa'
import SurgeryProducts from '../components/Surgery/Surgery'
import Form from '../components/Surgery/Form'
import SurgeryOptions from '../components/Surgery/SurgeryOptions'
import Departments from '../components/Surgery/Departments'
import HowItWorks from '../components/Surgery/HowItWorks'
// import ServicesAtHome from "../components/InstentMedicalServices/ServicesAtHome";
// import Speciality from "../components/InstentMedicalServices/Speciality";
// import CommonHealthConcerns from "../components/InstentMedicalServices/CommonHealthConcerns";
// import TestimonialMobile from "../components/homeMobile/Testimonial";
const Surgery: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false)
    const [isTab, setIsTab] = useState(false)

    useEffect(() => {
        // Function to update screen width
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768) // Change 768 to the desired breakpoint
            setIsTab(window.innerWidth < 1080)
        }

        // Initial check
        handleResize()

        // Listen for window resize
        window.addEventListener('resize', handleResize)

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    return (
        <>
            <div className="md:contain md:p-0">
                <div className="flex items-center top-4 sm:left-12 left-4 border-b border-[#DFDFDF] mb-4 pb-4 pl-3 mt-2 sm:pl-[4%]">
                    <p className="text-[15px] font-medium font-rubik">Home</p>
                    <FaCaretRight className="text-[#0065B2]" />
                    <p className="text-[#0065B2] text-[15px] font-medium font-rubik">
                        Surgery
                    </p>
                </div>
                <Banner />
                {!isTab ? (
                    <div className="flex">
                        <div className="w-[60%] contain">
                            <SurgeryProducts />
                            <Departments />
                            <Testimonial />
                        </div>
                        <div className="w-[40%]">
                            <Form />
                            <HowItWorks />
                        </div>
                    </div>
                ) : (
                    <div className={`${isMobile ? '' : 'contain'}`}>
                        <SurgeryProducts />
                        <Form />
                        <Departments />
                        <HowItWorks />
                        <Testimonial />
                    </div>
                )}
            </div>
        </>
    )
}

export default Surgery
