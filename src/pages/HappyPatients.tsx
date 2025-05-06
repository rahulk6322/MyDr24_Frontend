import React, { useState, useEffect } from 'react'
import Doctors from '../components/home/Doctors'
import DoctorsMobile from '../components/homeMobile/Doctors'
import { FaCaretRight } from 'react-icons/fa'
import Banner from '../components/HappyPatients/Banner'
import Form from '../components/Surgery/Form'
import SurgeryOptions from '../components/Surgery/SurgeryOptions'
import Departments from '../components/Surgery/Departments'
import HowItWorks from '../components/Surgery/HowItWorks'
import testTube from '../assets/icons/testTube.svg'
import adDoctor from '../assets/images/ad_Doctor.png'
import Testimonial from '../components/HappyPatients/Testimonial'
// import ServicesAtHome from "../components/InstentMedicalServices/ServicesAtHome";
// import Speciality from "../components/InstentMedicalServices/Speciality";
// import CommonHealthConcerns from "../components/InstentMedicalServices/CommonHealthConcerns";
// import TestimonialMobile from "../components/homeMobile/Testimonial";
const disease = [
    'Vaginoplasty',
    'Fibroid Removal',
    ' Hernia Surgery',
    ' Total Knee Replacement',
    ' Total Hip Replacement',
    ' Hysterectomy',
    ' Cervical Cancer',
    ' Breast Cancer',
    ' Prostate Cancer',
]
const HappyPatients: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false)
    const [isTab, setIsTab] = useState(false)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [city, setCity] = useState('')
    const [gender, setGender] = useState('')
    const [speciality, setSpeciality] = useState('')

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
            <div className=" relative">
                <div className="flex items-center  sm:left-12  mb-4 pb-4  mt-2  absolute top-4 z-20 left-0">
                    <p className="text-[15px] font-medium font-rubik text-white">
                        Home
                    </p>
                    <FaCaretRight className="text-white" />
                    <p className="text-white text-[15px] font-medium font-rubik">
                        Management Teams
                    </p>
                </div>
                <Banner />
                <div className="contain sm:px-8 p-3 z-10 pb-10 md:flex mt-8">
                    <div className="flex-[0_0_30%] ">
                        <div className="bg-[#001E35] py-8 px-6 ">
                            {disease.map((item, index) => (
                                <div
                                    className={`${
                                        index === disease.length - 1
                                            ? 'border-b-none'
                                            : 'border-b-[0.1px] border-[#ffffff40]'
                                    }
                          ${index === 0 ? 'pt-0' : 'pt-3'}
                          `}
                                    key={index}
                                >
                                    <h2
                                        className={`text-white text-lg font-rubik
                             ${
                                 index === disease.length - 1 ? 'pb-0' : ' pb-4'
                             }   
                                
                                `}
                                    >
                                        {item}
                                    </h2>
                                </div>
                            ))}
                        </div>
                        <div className="bg-[#FFFFFF] py-8 px-6 ">
                            <div className="flex items-center justify-between">
                                <h4 className="text-[32px] leading-[32px] font-bold font-rubik">
                                    Stressful life?
                                </h4>
                                <img src={testTube} className="w-[84px]" />
                            </div>
                            <p className="text-[24px] leading-[28px] mt-4 font-rubik">
                                Stay on top of your Health with our
                            </p>
                            <p className="text-[22px] leading-[28px] mt-1 font-semibold font-rubik">
                                Preventive Health Packages
                            </p>
                            <button className="bg-[#FF4547] w-full text-white py-3 mt-4 rounded-sm">
                                BOOK A LAB TEST ONLINE
                            </button>
                        </div>
                        <div
                            className="py-8 px-6 relative "
                            style={{
                                background:
                                    'linear-gradient(105.86deg, #0027B1 1.92%, #410082 100%, #7F0082 100.01%)',
                            }}
                        >
                            <h4 className="text-[24px] leading-[28px] font-medium text-[#FFCA00] font-rubik z-10 pr-[20%]">
                                Consult India’s Top Doctors Online.
                            </h4>
                            <div className="flex items-center gap-2 mt-2 pr-[20%]">
                                <h5 className="text-[18px] leading-[20px] font-medium text-white font-rubik">
                                    Flat 10% OFF
                                </h5>
                                <div className="bg-[#B3FFF1] px-3 py-1 rounded-[20px]">
                                    <p className="text-[14px] leading-[20px] font-semibold font-rubik">
                                        NEW10
                                    </p>
                                </div>
                            </div>
                            <button className="bg-white text-[15px] px-4 py-2 mt-4 font-medium rounded-md">
                                CONSULT NOW
                            </button>
                            <img
                                src={adDoctor}
                                className="absolute bottom-0 right-0 h-[80%] z-[2]"
                            />
                        </div>
                    </div>
                    <div className="flex-[0_0_70%] px-10">
                        <h2 className="text-base sm:text-[32px] font-bold mb-2 sm:mb-6 font-rubik">
                            Vaginoplasty
                        </h2>
                        <Testimonial />
                    </div>
                    </div>
                </div>
            
        </>
    )
}

export default HappyPatients
