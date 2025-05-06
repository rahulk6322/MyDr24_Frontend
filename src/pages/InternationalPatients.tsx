import React, { useState, useEffect } from "react";
import Testimonial from "../components/Surgery/Testimonial";
import Doctors from "../components/home/Doctors";
import DoctorsMobile from "../components/homeMobile/Doctors";

import { FaCaretRight, FaPaperclip } from "react-icons/fa";
import SurgeryProducts from '../components/Surgery/Surgery';
import Form from "../components/Surgery/Form";
import SurgeryOptions from "../components/Surgery/SurgeryOptions";
import Departments from '../components/Surgery/Departments'
import HowItWorks from "../components/Surgery/HowItWorks";
import bg from '../assets/images/getInTouch_bg.png'
import Banner from "../components/InternationalPatients/Banner";
import BannerImg from "../assets/images/internationalPatients_banner2.png"
import Specialities from "../components/InternationalPatients/Specialities";
import Services from "../components/InternationalPatients/Services";
import TestimonialMobile from "../components/homeMobile/Testimonial";
// import ServicesAtHome from "../components/InstentMedicalServices/ServicesAtHome";
// import Speciality from "../components/InstentMedicalServices/Speciality";
// import CommonHealthConcerns from "../components/InstentMedicalServices/CommonHealthConcerns";
// import TestimonialMobile from "../components/homeMobile/Testimonial";
const InternationalPatients: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isTab, setIsTab] = useState(false)

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");
    const [gender, setGender] = useState("");
    const [speciality, setSpeciality] = useState("");
    const [diseases, setDiseases] = useState("");

    useEffect(() => {
        // Function to update screen width
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // Change 768 to the desired breakpoint
            setIsTab(window.innerWidth < 1080)
        };

        // Initial check
        handleResize();

        // Listen for window resize
        window.addEventListener("resize", handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <>
            <div className=" relative ">

                <div className="flex items-center left-3  sm:left-12  mb-4 pb-4  mt-2  sm:absolute top-4 z-20 ">
                    <p className="text-[15px] font-medium font-rubik sm:text-white">Home</p>
                    <FaCaretRight className="sm:text-white" />
                    <p className="sm:text-white text-[15px] font-medium font-rubik">Management Teams</p>
                </div>
                <Banner />
                <div className="contain sm:px-8 p-4 z-10 pb-5 md:flex flex-col sm:mt-8 mt-2 items-center sm:pb-10">

                    <div className="bg-white mt-4 lg:mt-0 py-0 sm:py-14 px-0 sm:px-8 lg:w-[75%] rounded-xl">

                        <p className="text-lg text-[#000] font-medium font-rubik leading-[22px] sm:mb-8 mb-3">Get a personalised treatment plan and estimate</p>

                        <div className="sm:flex gap-6 mb-4">

                            <div className="flex-1 sm:mb-0 mb-4">
                                <label className="text-[14px] text-[#383838] font-rubik leading-[22px] mb-2">Name of the Patient<span className="text-red-600">*</span></label>
                                <div className="flex items-center bg-white border border-[#D9D9D9] rounded-md w-full p-4 px-8 mt-2">

                                    <input
                                        type="text"
                                        placeholder=""
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="flex-1 bg-transparent focus:outline-none text-sm font-rubik"
                                    />

                                </div>
                            </div>
                            <div className="flex-1 flex gap-6">
                                <div className="flex-1 sm:mb-0 mb-4">
                                    <label className="text-[14px] text-[#383838] font-rubik leading-[22px] mb-2">Age<span className="text-red-600">*</span></label>
                                    <div className="flex items-center bg-white border border-[#D9D9D9] rounded-md w-full  p-4 px-8 pl-4 mb-4 mt-2">

                                        <input
                                            type="text"
                                            placeholder=""
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="flex-1 bg-transparent focus:outline-none text-sm font-rubik"
                                        />

                                    </div>
                                </div>
                                <div className="flex-1 sm:mb-0 mb-4">
                                    <label className="text-[14px] text-[#383838] font-rubik leading-[22px] mb-2">Gender<span className="text-red-600">*</span></label>

                                    <div className=" items-center bg-white border border-[#D9D9D9] rounded-md    p-4 px-8 pl-4 mb-4 mt-2">
                                        <select className={`text-gray w-full focus:outline-none text-sm font-rubik  ${city != "" ? "text-black" : "text-[#939393]"}`} onChange={(e) => setCity(e.target.value)}>
                                            <option value="" disabled selected className="text-gray">Select Gender</option>

                                            <option value="option1" className="text-black">Option 1</option>
                                            <option value="option2" className="text-black">Option 2</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="sm:flex gap-4 mb-4">


                            <div className="flex-1 flex gap-4">
                                <div className="flex-[0_0_25%] sm:mb-0 mb-4">
                                    <label className="text-[14px] text-[#383838] font-rubik leading-[22px] mb-2">Country Code<span className="text-red-600">*</span></label>
                                    <div className="flex items-center bg-white border border-[#D9D9D9] rounded-md w-full p-4 px-8 mt-2">

                                        <input
                                            type="text"
                                            placeholder=""
                                            value={city}
                                            onChange={(e) => setCity(e.target.value)}
                                            className="flex-1 bg-transparent w-full focus:outline-none text-sm font-rubik"
                                        />

                                    </div>
                                </div>
                                <div className=" sm:mb-0 mb-4 w-full">
                                <label className="text-[14px] text-[#383838] font-rubik leading-[22px] mb-2">Contact No<span className="text-red-600">*</span></label>
                                    <div className="flex items-center bg-white border border-[#D9D9D9] rounded-md p-4 px-8 mt-2">

                                        <input
                                            type="text"
                                            placeholder=""
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            className="flex-1 bg-transparent focus:outline-none text-sm font-rubik"
                                        />

                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 sm:mb-0 mb-4">
                                <label className="text-[14px] text-[#383838] font-rubik leading-[22px] mb-2">Country<span className="text-red-600">*</span></label>

                                <div className=" items-center bg-white border border-[#D9D9D9] rounded-md w-full p-4 px-8 mb-4 mt-2">
                                    <select className={`text-gray w-full focus:outline-none text-sm font-rubik  ${city != "" ? "text-black" : "text-[#939393]"}`} onChange={(e) => setCity(e.target.value)}>
                                        <option value="" disabled selected className="text-gray">Please select Country</option>

                                        <option value="option1" className="text-black">Option 1</option>
                                        <option value="option2" className="text-black">Option 2</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="sm:flex w-full gap-4">
                            <div className="flex-1 sm:mb-0 mb-4">
                                <label className="text-[14px] text-[#383838] font-rubik leading-[22px] mb-2">Speciality<span className="text-red-600">*</span></label>

                                <div className=" items-center bg-white border border-[#D9D9D9] rounded-md w-full p-4 px-8 mb-4 mt-2">
                                    <select className={`text-gray w-full focus:outline-none text-sm font-rubik  ${city != "" ? "text-black" : "text-[#939393]"}`} onChange={(e) => setCity(e.target.value)}>
                                        <option value="" disabled selected className="text-gray">Please select Speciality</option>

                                        <option value="option1" className="text-black">Option 1</option>
                                        <option value="option2" className="text-black">Option 2</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex-1 sm:mb-0 mb-4">
                                <label className="text-[14px] text-[#383838] font-rubik leading-[22px] mb-2">Upload Report/Prescription</label>
                                <div className="flex items-center bg-white border border-[#D9D9D9] rounded-md w-fit px-0 mt-2 ">

                                    <label className="flex gap-2 items-center font-rubik text-sm pr-20 py-2 pl-2">
                                        <input
                                            type="file"
                                            placeholder="Name*"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="flex-1 bg-transparent focus:outline-none text-sm font-rubik"
                                        />
                                          <FaPaperclip className="text-red-600 rotate-[136deg]" />
                                        Choose File
                                    </label>
                                
                                </div>
                                <p className="text-xs text-[#383838] font-rubik mt-1">Accepted formats: PDF, JPEG, PNG, Max file limit is 10MB.</p>
                            </div>
                        </div>

                        <div className="flex w-full gap-4">
                            <div className="flex-1">
                                <label className="text-[14px] text-[#383838] font-rubik leading-[22px] mb-2">Feedback</label>
                                <div className="flex items-center bg-white border border-[#D9D9D9] rounded-md w-full p-4 px-8 mt-2">

                                    <textarea className="text-[14px] text-[#383838] font-rubik leading-[22px] mb-2 w-full h-full  focus:outline-none "></textarea>

                                </div>
                            </div>


                        </div>
                        <div className="w-full sm:flex justify-center gap-6 items-start mt-8">
                            <button className="text-white bg-[#1864B3] text-sm font-medium py-3 px-16 rounded-[4px]  ml-auto mr-auto w-full flex-1">Get An Estimate</button>
                            <p className="text-xs text-[#383838] font-rubik flex-1 mt-4 sm:mt-0">Note:Incase you are facing any issue,please email us at <span className="text-[#0065B2] text-xs">info@Mydr24gmail.com</span>. Disclaimer: This is an indicative cost based on the reports/ information shared with us. Final estimate will be shared once patient is physically evaluated.</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between sm:flex-row flex-col mt-5 sm:mt-0">
                        <div className="sm:w-[56%]">
                            <h3 className="sm:text-[28px] font-bold mb-6 text-sm font-rubik leading-[18px] ">International Patients</h3>
                            <p className="sm:text-xs text-xs font-rubik leading-[18px] text-[#383838] mb-3">MYDR24 is one of the best multispecialty family hospitals in the city of Bengaluru equipped with CCU/ICU/ NICU/ PICU/ SICU. This group, which started as a 150 bed hospital, is now recognized as a pioneer of private healthcare in Karnataka.</p>
                            <p className="sm:text-xs text-xs font-rubik leading-[18px] text-[#383838] mb-3">MYDR24 is at the forefront of superior Quaternary care. With a patient-centric approach, we have an award-winning team of expert physicians ready to help you and provide access to world- class care</p>
                            <p className="sm:text-xs text-xs font-rubik leading-[18px] text-[#383838] mb-3">At MYDR24, we welcome patients from around the world. We have well-trained staff at our International Patient Care Service who are available 24 x 7 to coordinate special care for international patients. We have a dedicated team to guide you toward the services you need</p>
                            <p className="sm:text-xs text-xs font-rubik leading-[18px] text-[#383838] mb-3">People from across the globe opt for our services at MYDR24 as our physicians have made their mark in different specialities and other medical disciplines. We take pride in being one of the best family hospitals in the city. Our expert physicians are available round the clock to meet the needs of the patients.
                            </p>
                            <p className="sm:text-xs text-xs font-rubik leading-[18px] text-[#383838] mb-3">
                            MYDR24 Hospitals extend its services to patients across the globe. The Department of International Patient Services offers 24x7 services and personalized care to international patients.</p>
                        
                        </div>
                        <div className="sm:w-[40%] h-full" style={{boxShadow:"0px 4px 4.2px 0px #0000001C"}}>
                            <img src={BannerImg} className="w-full h-full rounded-[8px] border border-white"/>
                        </div>
                    </div>
                  
                </div>
                <Specialities />
                <Services />
                <div className="contain">
                <div className='flex flex-col justify-center gap-2 item-center mb-6'>
                    <h2 className="sm:text-2xl text-base font-rubik font-semibold text-center mb-2">Why Mydr24 Advanced Technology</h2>
                    <p className="md:text-[15px] text-[#383838] md:px-32 text-xs  leading-[17.78px] text-center font-rubik">With state-of-the-art infrastructure and a team of physicians who were trained internationally, has become the best healthcare destination for patients in India and Abroad. Patients profoundly trust us by constantly choosing our services at Kauvery Hospital. Among our exceptional services, patients will receive integrated and coordinated service and care throughout their hospital stay.</p>

                </div>
                </div>
                {isMobile?<TestimonialMobile />:<Testimonial />}
            </div>
        </>
    );
};

export default InternationalPatients;
