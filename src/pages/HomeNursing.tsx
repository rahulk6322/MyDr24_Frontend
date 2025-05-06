import React, { useState, useEffect } from "react";
import Testimonial from "../components/Surgery/Testimonial";
import Doctors from "../components/home/Doctors";
import DoctorsMobile from "../components/homeMobile/Doctors";

import Procedures from "../components/HomeNursing/Procedures";
import { FaCaretRight, FaPaperclip } from "react-icons/fa";
import bg from '../assets/images/OurTeam_bg.svg'
import bg2 from '../assets/images/homeNursing_bg2.png'
import Banner from "../components/HomeNursing/Banner";
import Process from "../components/HomeNursing/Process";
import CareAdvantages from "../components/HomeNursing/Advantages";
import FAQ from "../components/HomeNursing/FAQ";
import { blogs, faqData as faqDatas, fullBodyCheckups } from '../../data'
const HomeNursing: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isTab, setIsTab] = useState(false)
    const [faqData, setFaqData] = useState(faqDatas)
    const [loading, setLoading] = useState(false)
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
                    <div className="flex gap-2 md:gap-8 justify-between flex-col-reverse lg:flex-row">

                        <div className="w-full lg:w-6/12 md:mt-8 ">
                            <h3 className="text-2xl text-[#000] font-semibold font-rubik sm:text-xl">Delivering quality care in the comfort of your home through trained and certified nurses with a connection to the treating doctor*</h3>
                            <div className="flex mt-4 justify-normal sm:justify-normal md:justify-between xl:justify-normal">
                                <ul className=" w-2/5 text-[12px] sm:text-[15px] leading-[27px] text-[#333333] mb-2 list-none pl-0">
                                    <li>
                                        * Monitoring of vitals</li>  <li>* IV/IM/SC injection & infusions</li>  <li>* Ryles Tube insertion/feeding</li>  <li>* Urinary Catheter care</li>  <li>* Medication management</li>  <li>* Pressure Injury management</li>  <li>* Handling of medical equipment</li> <li>* Colostomy Care</li> <li>* Post-chemo care</li>  <li>* Post-Stroke management</li> <li>* Activities of daily living</li>

                                </ul>
                                <ul className=" w-2/5 text-[12px] sm:text-[15px] leading-[27px] text-[#333333] mb-2 list-none pl-0">
                                    <li>
                                        * Monitoring of vitals</li>  <li>* Urinary Catheter Care</li>  <li>* Tracheostomy Care</li>  <li>* Pressure injury management</li>  <li>* Medication management</li>  <li>* General nursing</li>  <li>*Bedsore care</li> <li>* Wound dressing</li> <li>* General Nursing</li>  <li>* Sutures removal</li> 

                                </ul>
                            </div>
                        </div>
                        <div className="relative w-full lg:w-6/12 m-auto sm:m-0 mb-4 sm:mb-0">


                            <img src={bg2} className=" w-full h-full object-cover z-10 border-2 border-white" style={{ boxShadow: '0px 4px 4.2px 0px #0000001C' }} />

                        </div>
                    </div>
                    <Procedures />
                    <Process />
                    <CareAdvantages />
                    <FAQ faqData={faqData} loading={loading} />
              
                </div>


            </div>
        </>
    );
};

export default HomeNursing;
