import React, { useState, useEffect } from 'react'
import Testimonial from '../components/Surgery/Testimonial'
import Doctors from '../components/home/Doctors'
import DoctorsMobile from '../components/homeMobile/Doctors'
import Banner from '../components/MedicalEquipments/Banner'
import { FaCaretRight } from 'react-icons/fa'
import Equipments from '../components/MedicalEquipments/Equipments'
import BenifitsElder from '../components/HomeHealthCare/Benifits'
import SurgeryOptions from '../components/Surgery/SurgeryOptions'
import Departments from '../components/Surgery/Departments'
import HowItWorks from '../components/Surgery/HowItWorks'
// import ServicesAtHome from "../components/InstentMedicalServices/ServicesAtHome";
// import Speciality from "../components/InstentMedicalServices/Speciality";
// import CommonHealthConcerns from "../components/InstentMedicalServices/CommonHealthConcerns";
// import TestimonialMobile from "../components/homeMobile/Testimonial";
const MedicalEquipments: React.FC = () => {
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
            <div className="contain px-3 sm:px-8">
                <div className="flex items-center top-4 sm:left-12 left-4 border-b border-[#DFDFDF] mb-4 pb-4 pl-3 mt-2 sm:pl-[4%]">
                    <p className="text-[15px] font-medium font-rubik">Home</p>
                    <FaCaretRight className="text-[#0065B2]" />
                    <p className="text-[#0065B2] text-[15px] font-medium font-rubik">
                        Home Health Care
                    </p>
                </div>
                <Banner />

                <Equipments />
                <div className="contain mt-4 text-center bg-[#C5E3F4] py-6">
                    <h1 className="font-rubik text-[16px] sm:text-[22px] font-bold mb-2">
                        Looking for skilled nursing care services for your
                        elderly?
                    </h1>
                    <p className="text-[12px] sm:text-[15px] leading-[24px] text-[#333333] mb-2 list-decimal">
                        Our nurses are trained to handle all the latest
                        equipment provided by us with utmost care for the
                        patients and their well being.
                        <p>
                            {' '}
                            Find out more about our{' '}
                            <span className="font-bold text-[#0065B2]">
                                Elderly Care Plans
                            </span>
                        </p>
                    </p>
                </div>
            </div>
        </>
    )
}

export default MedicalEquipments
