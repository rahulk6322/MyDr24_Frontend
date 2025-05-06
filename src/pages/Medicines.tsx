import React, { useState, useEffect } from 'react'
import Testimonial from '../components/home/Testimonial'
import Doctors from '../components/home/Doctors'
import DoctorsMobile from '../components/homeMobile/Doctors'
import Banner from '../components/Medicines/Banner'
import SubBanner from '../components/Medicines/SubBanner'
import MedicinesProducts from '../components/Medicines/Medicines'
import NewLaunches from '../components/home/NewLaunches'
import NewLaunchesMobile from '../components/homeMobile/NewLaunches'
// import ServicesAtHome from "../components/InstentMedicalServices/ServicesAtHome";
// import Speciality from "../components/InstentMedicalServices/Speciality";
// import CommonHealthConcerns from "../components/InstentMedicalServices/CommonHealthConcerns";
// import TestimonialMobile from "../components/homeMobile/Testimonial";
const Medicines: React.FC = () => {
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
            <MedicinesProducts />
            <SubBanner />
            {isMobile ? <NewLaunchesMobile /> : <NewLaunches />}
        </>
    )
}

export default Medicines
