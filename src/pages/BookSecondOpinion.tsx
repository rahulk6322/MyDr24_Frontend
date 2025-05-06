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
const BookSecondOpinion: React.FC = () => {
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
                            Get Second Opinion
                        </p>
                    </div>
                    <div className="lg:flex items-center">
                        <div className="bg-[#001E35] lg:py-20 py-10 px-6 lg:w-1/2 lg:rounded-s-xl rounded-xl">
                            <h2 className="sm:text-head text-lg text-white font-rubik font-semibold mb-3">
                                Get Second Opinion
                            </h2>
                            <p className="sm:text-[15px] text-xs text-white font-rubik sm:leading-[22px] mb-4">
                                With 2300+ specialists, more than 900
                                specialized procedures and over 250,000 +
                                successful surgeries performed, Apollo Spectra
                                is one of India’s premier destinations for world
                                class health care.
                            </p>
                            <p className="sm:text-[15px] text-xs text-white font-rubik sm:leading-[22px] mb-4">
                                {' '}
                                Our team of Super Specialists is at your
                                service, to help you understand if surgery is
                                the best option for you.
                            </p>

                            <ul className="list-disc font-rubik mt-2 text-white pl-[12px] sm:leading-[32px] sm:text-sm text-xs">
                                <li>
                                    Surgical expertise across various
                                    specialties
                                </li>
                                <li> Experienced doctors </li>
                                <li>Trusted Apollo excellence </li>
                                <li>Safe OPD and IPD services </li>
                                <li>Near-zero infection </li>
                                <li>Triple screening before entry</li>
                            </ul>
                        </div>
                        <div
                            className="bg-white mt-4 lg:mt-0 py-7 sm:py-14 px-4 sm:px-8 lg:w-1/2 rounded-xl"
                            style={{ boxShadow: '0px 1px 3.9px 5px #0000000A' }}
                        >
                            <h4 className="text-base sm:text-head font-bold font-rubik mb-2">
                                Get In Touch With Us!
                            </h4>
                            <p className="text-[15px] text-[#2D2D2D] font-rubik leading-[22px] mb-8">
                                Fill this form
                            </p>

                            <div className="sm:flex gap-4 mb-4">
                                <div className="flex-1 sm:mb-0 mb-4">
                                    <label className="text-[15px] text-[#2D2D2D] font-rubik leading-[22px] mb-2">
                                        Name
                                    </label>
                                    <div className="flex items-center bg-white border border-[#D9D9D9] rounded-md w-full p-4 px-8 mt-2">
                                        <input
                                            type="text"
                                            placeholder="Name*"
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
                                        Email
                                    </label>
                                    <div className="flex items-center bg-white border border-[#D9D9D9] rounded-md w-full p-4 px-8 mt-2">
                                        <input
                                            type="text"
                                            placeholder="Email ID"
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
                                        Mobile No.
                                    </label>
                                    <div className="flex items-center bg-white border border-[#D9D9D9] rounded-md w-full p-4 px-8 mt-2">
                                        <input
                                            type="text"
                                            placeholder="Enter Mobile No."
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
                                        Hospital
                                    </label>
                                    <div className="flex items-center bg-white border border-[#D9D9D9] rounded-md w-full p-4 px-8 mt-2">
                                        <input
                                            type="text"
                                            placeholder="Select Hospital"
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
                                        Speciality
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
                                                Select Speciality
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
                                        Upload Report/Prescription
                                    </label>
                                    <div className="flex items-center bg-white border border-[#D9D9D9] rounded-md w-full px-0 mt-2">
                                        <label className="custom-file-upload ">
                                            <input
                                                type="file"
                                                placeholder="Name*"
                                                value={name}
                                                onChange={(e) =>
                                                    setName(e.target.value)
                                                }
                                                className="flex-1 bg-transparent focus:outline-none text-sm font-rubik"
                                            />
                                            Choose File
                                        </label>
                                        <span className="text-[15px] text-black font-rubik leading-[18px] ml-2">
                                            No file chosen
                                        </span>

                                        <button className="text-white bg-[#1864B3] text-sm font-medium ml-auto py-4 px-4 rounded-e-md">
                                            Upload
                                        </button>
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
                                            placeholder="Please enter remarks here"
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full flex justify-center">
                                <button className="text-white bg-[#1864B3] text-base font-medium py-3 px-16 rounded-md mt-8 ml-auto mr-auto w-full lg:w-fit">
                                    Submit
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

export default BookSecondOpinion
