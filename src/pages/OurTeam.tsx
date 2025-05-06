import React, { useState, useEffect } from "react";
import Testimonial from "../components/Surgery/Testimonial";
import Doctors from "../components/home/Doctors";
import DoctorsMobile from "../components/homeMobile/Doctors";

import { FaCaretRight, FaPaperclip } from "react-icons/fa";
import bg from '../assets/images/OurTeam_bg.svg'
import user from '../assets/images/ourTeam_1.png'

import Banner from "../components/OurTeam/Banner";

const OurTeam: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isTab, setIsTab] = useState(false)


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
                <div className="sm:flex gap-8 ">
                    <div className="relative w-[176px] h-[176px] sm:w-[256px] sm:h-[256px] m-auto sm:m-0 mb-4 sm:mb-0">
                        <div className="absolute top-0 left-0 z-[-1]">
                        <img src={bg} />
                        </div>
                        <div className="w-[176px] h-[176px] sm:w-[256px] sm:h-[256px]">
                        <img src={user} className="rounded-l-[50%] rounded-br-[50%] w-[176px] h-[176px] sm:w-[256px] sm:h-[256px] object-cover z-10 border-2 border-white" style={{boxShadow:'0px 4px 4px 0px #0000001A'}}/>
                        </div>
                    </div>
                    <div className="w-fit">
                        <h3 className="text-2xl text-[#0065B2] font-semibold font-rubik sm:text-xl">Dr. G. Anil Krishna</h3>
                        <p className="text-sm text-[#0065B2] font-rubik">Chairman - Managing Director</p>
                        <p className="text-sm text-[#0065B2] font-rubik mb-2">MYDR24 Pvt Ltd</p>
                        <p className="text-sm text-[#383838] font-rubik leading-[27px]" >Dr. Anil Krishna is one of the leading specialists in Interventional Cardiology and has headed many successful procedures related to reopening blocked coronaries.<br />
He is well-known for handling critical situations and has performed a number of complex interventional procedures.<br />
"Our aim is to expand pan-India and overseas, and deliver European standard healthcare excellence to everyone in need of quality healthcare."</p>
                    </div>
                </div>

                <div className="sm:flex gap-8 flex-row-reverse mt-10">
                    <div className="relative w-[176px] h-[176px] sm:w-[256px] sm:h-[256px] m-auto sm:m-0 mb-4 sm:mb-0">
                        <div className="absolute top-0 left-0 z-[-1]">
                        <img src={bg} />
                        </div>
                        <div className="w-[176px] h-[176px] sm:w-[256px] sm:h-[256px]">
                        <img src={user} className="rounded-l-[50%] rounded-br-[50%] w-[176px] h-[176px] sm:w-[256px] sm:h-[256px] object-cover z-10 border-2 border-white" style={{boxShadow:'0px 4px 4px 0px #0000001A'}}/>
                        </div>
                    </div>
                    <div className="w-fit">
                        <h3 className="text-2xl text-[#0065B2] font-semibold font-rubik sm:text-xl">Dr. G. Anil Krishna</h3>
                        <p className="text-sm text-[#0065B2] font-rubik">Chairman - Managing Director</p>
                        <p className="text-sm text-[#0065B2] font-rubik mb-2">MYDR24 Pvt Ltd</p>
                        <p className="text-sm text-[#383838] font-rubik leading-[27px]" >Dr. Anil Krishna is one of the leading specialists in Interventional Cardiology and has headed many successful procedures related to reopening blocked coronaries.<br />
He is well-known for handling critical situations and has performed a number of complex interventional procedures.<br />
"Our aim is to expand pan-India and overseas, and deliver European standard healthcare excellence to everyone in need of quality healthcare."</p>
                    </div>
                </div>

                <div className="sm:flex gap-8 mt-10 ">
                    <div className="relative w-[176px] h-[176px] sm:w-[256px] sm:h-[256px] m-auto sm:m-0 mb-4 sm:mb-0">
                        <div className="absolute top-0 left-0 z-[-1]">
                        <img src={bg} />
                        </div>
                        <div className="w-[176px] h-[176px] sm:w-[256px] sm:h-[256px]">
                        <img src={user} className="rounded-l-[50%] rounded-br-[50%] w-[176px] h-[176px] sm:w-[256px] sm:h-[256px] object-cover z-10 border-2 border-white" style={{boxShadow:'0px 4px 4px 0px #0000001A'}}/>
                        </div>
                    </div>
                    <div className="w-fit">
                        <h3 className="text-2xl text-[#0065B2] font-semibold font-rubik sm:text-xl">Dr. G. Anil Krishna</h3>
                        <p className="text-sm text-[#0065B2] font-rubik">Chairman - Managing Director</p>
                        <p className="text-sm text-[#0065B2] font-rubik mb-2">MYDR24 Pvt Ltd</p>
                        <p className="text-sm text-[#383838] font-rubik leading-[27px]" >Dr. Anil Krishna is one of the leading specialists in Interventional Cardiology and has headed many successful procedures related to reopening blocked coronaries.<br />
He is well-known for handling critical situations and has performed a number of complex interventional procedures.<br />
"Our aim is to expand pan-India and overseas, and deliver European standard healthcare excellence to everyone in need of quality healthcare."</p>
                    </div>
                </div>

                <div className="sm:flex gap-8 flex-row-reverse mt-10">
                    <div className="relative w-[176px] h-[176px] sm:w-[256px] sm:h-[256px] m-auto sm:m-0 mb-4 sm:mb-0">
                        <div className="absolute top-0 left-0 z-[-1]">
                        <img src={bg} />
                        </div>
                        <div className="w-[176px] h-[176px] sm:w-[256px] sm:h-[256px]">
                        <img src={user} className="rounded-l-[50%] rounded-br-[50%] w-[176px] h-[176px] sm:w-[256px] sm:h-[256px] object-cover z-10 border-2 border-white" style={{boxShadow:'0px 4px 4px 0px #0000001A'}}/>
                        </div>
                    </div>
                    <div className="w-fit">
                        <h3 className="text-2xl text-[#0065B2] font-semibold font-rubik sm:text-xl">Dr. G. Anil Krishna</h3>
                        <p className="text-sm text-[#0065B2] font-rubik">Chairman - Managing Director</p>
                        <p className="text-sm text-[#0065B2] font-rubik mb-2">MYDR24 Pvt Ltd</p>
                        <p className="text-sm text-[#383838] font-rubik leading-[27px]" >Dr. Anil Krishna is one of the leading specialists in Interventional Cardiology and has headed many successful procedures related to reopening blocked coronaries.<br />
He is well-known for handling critical situations and has performed a number of complex interventional procedures.<br />
"Our aim is to expand pan-India and overseas, and deliver European standard healthcare excellence to everyone in need of quality healthcare."</p>
                    </div>
                </div>
                    
                </div>
      
               
            </div>
        </>
    );
};

export default OurTeam;
