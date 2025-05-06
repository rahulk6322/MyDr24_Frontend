import React, { useState, useEffect } from 'react'
import Testimonial from '../components/Surgery/Testimonial'
import Doctors from '../components/home/Doctors'
import DoctorsMobile from '../components/homeMobile/Doctors'
import Banner from '../components/HomeHealthCare/Banner'
import { FaCaretRight } from 'react-icons/fa'
import ServicesOffered from '../components/HomeHealthCare/Services'
import BenifitsElder from '../components/HomeHealthCare/Benifits'
import SurgeryOptions from '../components/Surgery/SurgeryOptions'
import Departments from '../components/Surgery/Departments'
import HowItWorks from '../components/Surgery/HowItWorks'
// import ServicesAtHome from "../components/InstentMedicalServices/ServicesAtHome";
// import Speciality from "../components/InstentMedicalServices/Speciality";
// import CommonHealthConcerns from "../components/InstentMedicalServices/CommonHealthConcerns";
// import TestimonialMobile from "../components/homeMobile/Testimonial";
const HomeHealthCare: React.FC = () => {
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
                <section className="contain mt-4">
                    <h1 className="font-rubik text-[20px] sm:text-head font-bold mb-2">
                        Home Care Services
                    </h1>
                    <p className="text-[12px] sm:text-[15px] leading-[24px] text-[#333333] mb-2">
                        MYDR24 has partnered with Top Most home care services in
                        Delhi. We provide the best healthcare service
                        professionals who are qualified and skilled to provide
                        you with quality care. The services that you will
                        receive will be the same as in the hospital. To avail of
                        the above-given services, please visit MYDR24 or search
                        for Home care services near me so that you can reach us.
                    </p>
                    <ul className="text-[12px] sm:text-[15px] leading-[24px] text-[#333333] mb-2 list-disc pl-8">
                        <li>
                            Due to various reasons such as coronavirus pandemic,
                            health problems, and travel issues, everyone is more
                            comfortable opting for healthcare facilities at home
                            rather than visiting any hospital/clinic.
                        </li>
                        <li>
                            {' '}
                            Medintu health solutions provide the best home care
                            services in Hyderabad. We aim to provide you with
                            available, satisfactory, affordable home health
                            services.
                        </li>
                        <li>
                            {' '}
                            Medintu, keeping in mind all your medical needs, is
                            bringing the following health services to your
                            doorstep.
                        </li>
                    </ul>

                    <p className="text-[15px] leading-[24px]">
                        <span className="font-bold">Note:</span> We follow all
                        safety rules, as there is a chance of the spread of
                        coronavirus. We will check our caretakers daily, and
                        they will visit your location only if they, tested
                        negative, which minimizes the risk. 
                    </p>
                </section>
                <ServicesOffered />
                <BenifitsElder />
                <section className=":contain mt-4">
                    <h1 className="font-rubik text-[20px] sm:text-head font-bold mb-2">
                        Why Choose MYDR24 for Home Care Services?
                    </h1>
                    <ol className="text-[12px] sm:text-[15px] leading-[24px] text-[#333333] mb-2 list-decimal pl-8">
                        <li>
                            Experienced care takes, which facilitates you to use
                            our service most effectively.
                        </li>
                        <li>
                            Partnered with care physicians, hospitals, skilled
                            nursing facilities and the best medical equipment
                            providers
                        </li>
                        <li>
                            One to one attention for critical and severe
                            patients
                        </li>
                        <li>
                            Twenty-four hours services are also available based
                            on your interest.
                        </li>
                        <li>
                            We follow all safety rules, and we treat people with
                            love and affection, which gives you a good result.
                        </li>
                        <li>
                            In MYDR24, we ensure the caretakers have the right
                            past and verify with officials as a background
                            check. We check the health of caretakers before we
                            provide our services.
                        </li>
                    </ol>
                </section>
            </div>
        </>
    )
}

export default HomeHealthCare
