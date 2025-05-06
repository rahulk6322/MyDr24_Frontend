import React, { useState, useEffect } from 'react'
import Testimonial from '../components/home/Testimonial'
import Doctors from '../components/home/Doctors'
import DoctorsMobile from '../components/homeMobile/Doctors'
import Banner from '../components/InstentMedicalServices/Banner'
import ServicesAtHome from '../components/InstentMedicalServices/ServicesAtHome'
import Speciality from '../components/InstentMedicalServices/Speciality'
import CommonHealthConcerns from '../components/InstentMedicalServices/CommonHealthConcerns'
import TestimonialMobile from '../components/homeMobile/Testimonial'
const InstentMedicalServices: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        // Function to update screen width
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768) // Change 768 to the desired breakpoint
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
            <Banner />
            <ServicesAtHome />
            <Speciality />
            <CommonHealthConcerns />
            {isMobile ? <DoctorsMobile /> : <Doctors />}
            <div className="bg-white mt-2">
                {isMobile ? <TestimonialMobile /> : <Testimonial />}
            </div>
        </>
    )
}

export default InstentMedicalServices
