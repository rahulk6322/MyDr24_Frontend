import React, { useState, useEffect } from 'react'
import { FaCaretRight } from 'react-icons/fa'
import user from '../assets/images/user_2.jpg'
import msg from '../assets/icons/email.svg'
import phoneImg from '../assets/icons/phone-outline.svg'
import location from '../assets/icons/location.svg'
import Investors from '../components/InvestorRelations/Investors'
import FAQ from '../components/InvestorRelations/FAQ'
// import ServicesAtHome from "../components/InstentMedicalServices/ServicesAtHome";
// import Speciality from "../components/InstentMedicalServices/Speciality";
// import CommonHealthConcerns from "../components/InstentMedicalServices/CommonHealthConcerns";
// import TestimonialMobile from "../components/homeMobile/Testimonial";
const InvestorRelations: React.FC = () => {
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
                    <div className="flex items-center top-4 sm:left-12 left-4 border-b border-[#DFDFDF] mb-4 pb-4 pl-3 mt-2 md:pl-0 ">
                        <p className="text-[15px] font-medium font-rubik">
                            Home
                        </p>
                        <FaCaretRight className="text-[#0065B2]" />
                        <p className="text-[#0065B2] text-[15px] font-medium font-rubik">
                            Investors Partnership
                        </p>
                    </div>

                    <p className="sm:text-[15px] text-xs font-rubik sm:leading-[22px] mb-4 text-[#707070]">
                        {' '}
                        MYDR24 Limited is a leading integrated healthcare
                        services provider in India. It is one of the largest
                        healthcare organizations in the country with 27
                        healthcare facilities, 4300 operational beds and 400
                        diagnostics centers (including JVs). The Company is
                        listed on the BSE Ltd and the National Stock Exchange
                        (NSE) of India. Fortis offers a full spectrum of
                        integrated healthcare services ranging from clinics to
                        quaternary care facilities and a wide range of ancillary
                        services.
                    </p>

                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-[30%]">
                            <h2 className="text-[22px] font-bold font-rubik w-full mb-4">
                                Contact Investors
                            </h2>
                            <img
                                src={user}
                                className="w-full md:h-[415px] h-[350px] object-cover"
                            />
                        </div>
                        <div className="md:w-[70%] flex justify-center md:p-10 pr-0 mt-4 md:mt-0 flex-col">
                            <p className="text-[20px] font-bold font-rubik">
                                Rahul Singh
                            </p>
                            <p className="sm:text-[15px] text-xs font-rubik sm:leading-[22px] mb-4 text-[#707070]">
                                Company Secretary and Compliance Officer
                            </p>
                            <div className="flex flex-col lg:flex-row justify-between gap-4">
                                <div className="flex items-center gap-4 ">
                                    <div className="border border-[#0065B257] rounded-full p-2 w-[36px] h-[36px] aspect-square mr-1">
                                        <img
                                            src={msg}
                                            className="w-[30px]  aspect-square object-contain"
                                        />
                                    </div>
                                    <p className="sm:text-[15px] text-xs font-rubik sm:leading-[22px] text-[#383838]">
                                        customer.care@accufly.com
                                    </p>
                                </div>

                                <div className="flex  items-center gap-4 ">
                                    <div className="border border-[#0065B257] rounded-full p-2 w-[36px] h-[36px] aspect-square mr-1">
                                        <img
                                            src={phoneImg}
                                            className="w-[30px]  aspect-square object-contain"
                                        />
                                    </div>
                                    <p className="sm:text-[15px] text-xs font-rubik sm:leading-[22px] text-[#383838] text-nowrap">
                                        +91 93117 91119
                                    </p>
                                </div>

                                <div className="flex items-center gap-4 ">
                                    <div className="border border-[#0065B257] rounded-full p-2 w-[36px] h-[36px] min-w-[36px] aspect-square flex items-center justify-center">
                                        <img
                                            src={location}
                                            className="w-[30px] h-[30px]  aspect-square object-contain"
                                        />
                                    </div>
                                    <p className="sm:text-[15px] text-xs font-rubik sm:leading-[22px] text-[#383838] ">
                                        Cn/29 Hauz Rani Malviya nagar south
                                        delhi 110017 Opposite Max Hospital Saket
                                    </p>
                                </div>
                            </div>
                            <p className="sm:text-[15px] text-xs font-rubik sm:leading-[22px] mb-2 text-[#383838] mt-4">
                                Mr. Analjit Singh is the Founder & Chairman of
                                The Max Group, a $5-bn Indian multi-business
                                enterprise, with interests in life insurance
                                (Max Life), real estate (Max Estates), senior
                                living (Antara). The Max Group is renowned
                                successful joint ventures with some pre-eminent
                                firms including Mitsui Sumitomo & Toppan, Japan;
                                New York Life Insurance Company; Bupa Plc, Life
                                Healthcare, SA; DSM, Netherlands, Hutchison
                                Whampoa; Motorola, Lockheed Martin, and others.
                            </p>
                            <p className="sm:text-[15px] text-xs font-rubik sm:leading-[22px] text-[#383838] mt-4">
                                Amongst privately held family businesses, Mr.
                                Analjit Singh is the founder of Leeu Collection,
                                a group of leisure boutique hotels in
                                Franschhoek, South Africa; The Lake District,
                                UK; and soon to be opened in Florence, Italy.
                                The Leeu Collection also includes a significant
                                presence in wine and viticulture through
                                Mullineux Leeu Family Wines in SA.
                            </p>
                        </div>
                    </div>
                    <Investors />
                    <FAQ />
                </div>
            </div>
        </>
    )
}

export default InvestorRelations
