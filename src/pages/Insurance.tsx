import React, { useState, useEffect } from 'react'
import Testimonial from '../components/Insurance/Testimonial'
import Doctors from '../components/home/Doctors'
import FAQ from '../components/Insurance/FAQ'
import Banner from '../components/Insurance/Banner'
import CalculatePremium from '../components/Insurance/CalculatePremium'
import HowItWorks from '../components/Insurance/HowItWorks'
import KeepDocuments from '../components/Insurance/KeepDocument'
import TestimonialMobile from '../components/homeMobile/Testimonial'
import Benifits from '../components/Insurance/KeyBenifits'
const Insurance: React.FC = () => {
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
            <CalculatePremium />
            <Benifits />
            <div className="bg-white mt-2">
                {isMobile ? <TestimonialMobile /> : <Testimonial />}
                <HowItWorks />
                <KeepDocuments />
                <FAQ />
            </div>
        </>
    )
}

export default Insurance
