import React, { useState } from 'react'
import { FaPhone } from 'react-icons/fa'
import icon1 from '../../assets/images/how_it_works_1.png'
import icon4 from '../../assets/images/how_it_works_2.svg'

const HowItWorks: React.FC = () => {
    return (
        <section className="s bg-white p-6 py-8 mt-4 sm:mx-10 rounded-lg m-0">
            <h4 className="sm:text-head text-base font-bold font-rubik mb-8">
                How It Works
            </h4>

            <div className="relative">
                <hr
                    className="absolute border-dashed w-full left-[32px] border-[#D6D6D6] top-0 h-full z-[1]"
                    style={{
                        borderLeft: '1px #D6D6D6 dashed',
                        borderTop: 'none',
                    }}
                />
                <div className="flex gap-4 items-center mb-8 z-[2] relative ">
                    <div className="bg-[#E6F5FC] rounded-full p-1 w-[60px] aspect-square ">
                        <img
                            src={icon1}
                            className="w-[50px] aspect-square object-contain"
                        />
                    </div>
                    <p className="sm:text-[15px] text-[12px]  font-medium font-rubik leading-[18px] w-[80%]">
                        Connect with us. A dedicated MYDR24 Care Assistant will
                        guide you at every step
                    </p>
                </div>

                <div className="flex gap-4 items-center mb-4 z-[2] relative">
                    <div className="bg-[#E9EBFF] rounded-full p-2 w-[60px] aspect-square ">
                        <img
                            src={icon1}
                            className="w-[50px] aspect-square object-contain"
                        />
                    </div>
                    <p className="sm:text-[15px] text-[12px]  font-medium font-rubik leading-[18px] w-[80%]">
                        Get Diagnosis & Treatment advice from our expert doctors
                    </p>
                </div>

                <div className="flex gap-4 items-center mb-4 z-[2] relative">
                    <div className="bg-[#E6F5FC] rounded-full p-2 w-[60px] aspect-square ">
                        <img
                            src={icon1}
                            className="w-[50px] aspect-square object-contain"
                        />
                    </div>
                    <p className="sm:text-[15px] text-[12px]  font-medium font-rubik leading-[18px] w-[80%]">
                        Connect with us. A dedicated MYDR24 Care Assistant will
                        guide you at every step
                    </p>
                </div>

                <div className="flex gap-4 items-center mb-4 z-[2] relative">
                    <div className=" rounded-full p-2 w-[60px]aspect-square ">
                        <img
                            src={icon4}
                            className="w-[50px] aspect-square object-contain"
                        />
                    </div>
                    <p className="sm:text-[15px] text-[12px] font-medium font-rubik leading-[18px] w-[80%] text-[#929292]">
                        In some cases, a procedure or a surgery might be
                        recommended
                    </p>
                </div>

                <div className="flex gap-4 items-center mb-4 z-[2] relative">
                    <div className="bg-[#E9EBFF] rounded-full p-2 w-[60px] aspect-square ">
                        <img
                            src={icon1}
                            className="w-[50px] aspect-square object-contain"
                        />
                    </div>
                    <p className="sm:text-[15px] text-[12px]  font-medium font-rubik leading-[18px] w-[80%]">
                        Choose one of our partner hospitals that meets your
                        requirements
                    </p>
                </div>

                <div className="flex gap-4 items-center mb-4 z-[2] relative">
                    <div className="bg-[#E6F5FC] rounded-full p-2 w-[60px] aspect-square ">
                        <img
                            src={icon1}
                            className="w-[50px] aspect-square object-contain"
                        />
                    </div>
                    <p className="sm:text-[15px] text-[12px]  font-medium font-rubik leading-[18px] w-[80%]">
                        Get complete assistance from Admission to Discharge
                    </p>
                </div>

                <div className="flex gap-4 items-center mb-4 z-[2] relative">
                    <div className="bg-[#E9EBFF] rounded-full p-2 w-[60px] aspect-square ">
                        <img
                            src={icon1}
                            className="w-[50px] aspect-square object-contain"
                        />
                    </div>
                    <p className="sm:text-[15px] text-[12px]  font-medium font-rubik leading-[18px] w-[80%]">
                        Receive Post-Operative support and Follow-up
                        Consultations
                    </p>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks
