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
import bg from '../assets/images/getInTouch_bg.png'
// import ServicesAtHome from "../components/InstentMedicalServices/ServicesAtHome";
// import Speciality from "../components/InstentMedicalServices/Speciality";
// import CommonHealthConcerns from "../components/InstentMedicalServices/CommonHealthConcerns";
// import TestimonialMobile from "../components/homeMobile/Testimonial";
const GetInTouchWithUs: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false)
    const [isTab, setIsTab] = useState(false)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [city, setCity] = useState('')
    const [gender, setGender] = useState('')
    const [speciality, setSpeciality] = useState('')
    const [diseases, setDiseases] = useState('')

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
                <div className="contain sm:px-8 p-3 z-10 pb-10">
                    <div className="flex items-center top-4 sm:left-12 left-4 border-b border-[#DFDFDF] mb-4 pb-4 pl-3 mt-2 sm:pl-[4%]">
                        <p className="text-[15px] font-medium font-rubik">
                            Home
                        </p>
                        <FaCaretRight className="text-[#0065B2]" />
                        <p className="text-[#0065B2] text-[15px] font-medium font-rubik">
                            Get In Touch With Us!
                        </p>
                    </div>
                    <div className="lg:flex items-center">
                        <div className="bg-[#232323] lg:py-6 py-10 px-6 lg:w-1/2 lg:rounded-tr-none lg:rounded-br-none rounded-xl">
                            <h2 className="sm:text-head text-lg text-white font-rubik font-semibold mb-3">
                               Work With Us
                            </h2>
                            <p className="sm:text-[15px] text-xs text-white font-rubik sm:leading-[22px] mb-4">
                            Over the past 39 years, talented and capable people have powered Dr. Reddy’s growth and built our reputation as a world-class pharmaceutical company. Because when people with diverse skills are bound together by a common purpose and values, they can make magic.
                            </p>
                            <p className="sm:text-[15px] text-xs text-white font-rubik sm:leading-[22px] mb-4">
                            As part of the Dr. Reddy’s family, you will make the world a healthier place as you address patient needs around the world.
                            </p>

                            <p className="sm:text-[15px] text-xs text-white font-rubik sm:leading-[22px] mb-4">
                            We empower our people to put their skills to use the way they see fit, learn and grow continually, and truly realise their potential. 
                            </p>

                            <p className="sm:text-[15px] text-xs text-white font-rubik sm:leading-[22px] mb-4">
                            We care for them, ensure their safety, and treat them with respect. Our people have a voice, and so will you.
                            </p>

                            <div className="flex">
                            <h2 className='underline text-white text-sm font-semibold font-rubik'>VIEW JOB OPENINGS 
                                <span className='text-xl'>&rarr;</span></h2>

                           </div>
                           <h2 className='mt-4 text-white text-xl sm:text-2xl font-medium font-rubik'>Why MYDR24 CORP</h2>
                           <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mt-4">
                            <div className="  bg-white rounded-[4px] flex sm:py-4 py-2 items-center">
                            <div className="bg-[#01B806] w-[6px] h-[30px] rounded-tr-md rounded-br-md"></div>
                            <p  className='text-[#383838] text-sm sm:text-lg font-medium  font-rubik w-full text-center'>Engagement Dashboard</p>
                            </div>

                            <div className=" bg-white  rounded-[4px] flex sm:py-4 py-2 pr-4 items-center">
                            <div className="bg-[#01B806] w-[6px] h-[30px] rounded-tr-md rounded-br-md"></div>
                            <p  className='text-[#383838] text-sm sm:text-lg font-medium  font-rubik w-full text-center'>Workplace Rewards</p>
                            </div>

                           <div className="  bg-white rounded-[4px] flex sm:py-4 py-2 items-center">
                            <div className="bg-[#01B806] w-[6px] h-[30px] rounded-tr-md rounded-br-md"></div>
                            <p  className='text-[#383838] text-sm sm:text-lg font-medium  font-rubik w-full text-center'>Improved Productivity</p>
                            </div>

                            <div className="bg-white  rounded-[4px] flex sm:py-4 py-2 pr-4 items-center">
                            <div className="bg-[#01B806] w-[6px] h-[30px] rounded-tr-md rounded-br-md"></div>
                            <p  className='text-[#383838] text-sm sm:text-lg font-medium  font-rubik w-full text-center'>Motivated Workforce</p>
                            </div>

                           <div className="  bg-white rounded-[4px] flex sm:py-4 py-2 items-center">
                            <div className="bg-[#01B806] w-[6px] h-[30px] rounded-tr-md rounded-br-md"></div>
                            <p  className='text-[#383838] text-sm sm:text-lg font-medium  font-rubik w-full text-center'>Certified Professionals</p>
                            </div>

                            <div className="bg-white  rounded-[4px] flex sm:py-4 py-2 pr-4 items-center">
                            <div className="bg-[#01B806] w-[6px] h-[30px] rounded-tr-md rounded-br-md"></div>
                            <p  className='text-[#383838] text-sm sm:text-lg font-medium  font-rubik w-full text-center'>Unique Programs</p>
                            </div>
                           </div>

                        </div>
                        <div
                            className="bg-white mt-4 lg:mt-0 py-7 sm:py-14 px-4 sm:px-8 lg:w-1/2 rounded-xl"
                            style={{ boxShadow: '0px 1px 3.9px 5px #0000000A' }}
                        >
                            <h4 className="text-base sm:text-head font-bold font-rubik mb-2">
                                Get In Touch With Us!
                            </h4>
                            <p className="text-[15px] text-[#2D2D2D] font-rubik leading-[22px] mb-8">
                            Fill this form and unlock employee wellness
                            </p>

                            <div className=" gap-4 mb-4">
                                <div className="w-full sm:mb-0 mb-4">
                                    <label className="text-[15px] text-[#2D2D2D] font-rubik leading-[22px] mb-2">
                                        Full Name
                                    </label>
                                    <div className="flex items-center bg-white border border-[#D9D9D9] rounded-md w-full p-4 px-8 mt-2">
                                        <input
                                            type="text"
                                            placeholder=""
                                            value={name}
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                            className="flex-1 bg-transparent focus:outline-none text-sm font-rubik"
                                        />
                                    </div>
                                </div>
                                <div className="sm:mb-0 mb-4 mt-4">
                                    <label className="text-[15px] text-[#2D2D2D] font-rubik leading-[22px] mb-2">
                                        Company Name
                                    </label>
                                    <div className="flex items-center bg-white border border-[#D9D9D9] rounded-md w-full p-4 px-8 mt-2">
                                        <input
                                            type="text"
                                            placeholder=""
                                            value={name}
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                            className="flex-1 bg-transparent focus:outline-none text-sm font-rubik"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="sm:flex gap-4 mb-4">
                                <div className="flex-1 sm:mb-0 mb-4">
                                    <label className="text-[15px] text-[#2D2D2D] font-rubik leading-[22px] mb-2">
                                        Email Address
                                    </label>
                                    <div className="flex items-center bg-white border border-[#D9D9D9] rounded-md w-full p-4 px-8 mt-2">
                                        <input
                                            type="text"
                                            placeholder=""
                                            value={name}
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                            className="flex-1 bg-transparent focus:outline-none text-sm font-rubik"
                                        />
                                    </div>
                                </div>
                                <div className="flex-1 sm:mb-0 mb-4">
                                    <label className="text-[15px] text-[#2D2D2D] font-rubik leading-[22px] mb-2">
                                        Phone Number
                                    </label>
                                    <div className="flex items-center bg-white border border-[#D9D9D9] rounded-md w-full p-4 px-8 mt-2">
                                        <input
                                            type="text"
                                            placeholder=""
                                            value={name}
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                            className="flex-1 bg-transparent focus:outline-none text-sm font-rubik"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="sm:flex w-full gap-4">
                                <div className="flex-1 sm:mb-0 mb-4">
                                    <label className="text-[15px] text-[#2D2D2D] font-rubik leading-[22px] mb-2">
                                        Employee Strength
                                    </label>

                                    <div className=" items-center bg-white border border-[#D9D9D9] rounded-md w-full p-4 px-8 mb-4 mt-2">
                                        <select
                                            className={`text-gray w-full focus:outline-none text-sm font-rubik font-medium ${city != '' ? 'text-black' : 'text-[#939393]'}`}
                                            onChange={(e) =>
                                                setCity(e.target.value)
                                            }
                                        >
                                            <option
                                                value=""
                                                disabled
                                                selected
                                                className="text-gray"
                                            >
                                               Upto 100
                                            </option>

                                            <option
                                                value="option1"
                                                className="text-black"
                                            >
                                                Option 1
                                            </option>
                                            <option
                                                value="option2"
                                                className="text-black"
                                            >
                                                Option 2
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                <div className="flex-1 sm:mb-0 mb-4">
                                    <label className="text-[15px] text-[#2D2D2D] font-rubik leading-[22px] mb-2">
                                       Your Destination
                                    </label>
                                    <div className="flex items-center bg-white border border-[#D9D9D9] rounded-md w-full p-4 px-8 mt-2">
                                        <input
                                            type="text"
                                            placeholder=""
                                            value={name}
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                            className="flex-1 bg-transparent focus:outline-none text-sm font-rubik"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex w-full gap-4">
                                <div className="flex-1">
                                    <label className="text-[15px] text-[#2D2D2D] font-rubik leading-[22px] mb-2">
                                        Remark
                                    </label>
                                    <div className="flex items-center bg-white border border-[#D9D9D9] rounded-md w-full p-4 px-8 mt-2">
                                        <textarea
                                            className="text-[15px] text-[#2D2D2D] font-rubik leading-[22px] mb-2 w-full h-full  focus:outline-none "
                                            placeholder=""
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full flex justify-center">
                                <button className="text-white bg-[#1864B3] text-base font-medium py-3 px-16 rounded-md mt-8 ml-auto mr-auto w-full lg:w-fit">
                                   Call Me Back
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={bg} className="absolute w-full bottom-0 z-[-1]" />
            </div>
        </>
    )
}

export default GetInTouchWithUs
