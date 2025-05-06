import React, { useState } from 'react'
import { FaPhone } from 'react-icons/fa'
import icon1 from '../../assets/icons/key_benefits_1.svg'
import icon2 from '../../assets/icons/key_benefits_2.svg'
import icon3 from '../../assets/icons/key_benefits_3.svg'
import icon4 from '../../assets/icons/key_benefits_4.svg'
import icon5 from '../../assets/icons/key_benefits_5.svg'

const Benifits: React.FC = () => {
    return (
        <section className="md:p-6 md:py-8md: p-3 mt-4 sm:mx-10 rounded-lg m-0">
            <h4 className="sm:text-[32px] text-base font-bold font-rubik md:mb-8 mb-3 text-center">
                Key Benefits
            </h4>

            <div className="flex flex-wrap md:justify-center md:items-center md:gap-10 gap-4 justify-between">
                <div className="flex-[0_0_47%] md:flex-[0_0_30%] justify-start items-start rounded-md md:px-6 md:py-6 p-3  bg-white">
                    <img
                        src={icon1}
                        className="w-[65px] aspect-square object-contain mx-0 mb-2"
                    />
                    <h2 className="font-rubik sm:text-xl font-medium text-base ">
                        Accidental Death Benefit<sup>2</sup>
                    </h2>
                    <p className="text-[#929292] font-rubik leading-[24px] mt-2">
                        Accidental Death Benefit Will Be Extra Payout In Case Of
                        Death Due To Accident
                    </p>
                </div>

                <div className="flex-[0_0_47%] md:flex-[0_0_30%] justify-start items-start  rounded-md md:px-6 md:py-6 p-3  bg-white">
                    <img
                        src={icon2}
                        className="w-[65px] aspect-square object-contain mx-0 mb-2"
                    />
                    <h2 className="font-rubik text-xl font-medium">
                        Exit Early Option<sup>%</sup>
                    </h2>
                    <p className="text-[#929292] font-rubik leading-[24px] mt-2">
                        Get Back Your Paid Premiums As Early Exit Value (After
                        Your Need For Cover Is Over)
                    </p>
                </div>

                <div className="flex-[0_0_47%] md:flex-[0_0_30%] justify-start items-start  rounded-md md:px-6 md:py-6 p-3  bg-white">
                    <img
                        src={icon3}
                        className="w-[65px] aspect-square object-contain mx-0 mb-2"
                    />
                    <h2 className="font-rubik text-xl font-medium">
                        Premium Holiday
                    </h2>
                    <p className="text-[#929292] font-rubik leading-[24px] mt-2">
                        This Option Helps You To Skip Your Premiums For 1, 2 Or
                        3 Years During The Premium Payment Term.
                    </p>
                </div>

                <div className="flex-[0_0_47%] md:flex-[0_0_30%] justify-start items-start  rounded-md md:px-6 md:py-6 p-3  bg-white">
                    <img
                        src={icon4}
                        className="w-[65px] aspect-square object-contain mx-0 mb-2"
                    />
                    <h2 className="font-rubik text-xl font-medium">
                        Waiver Of Premium Benefit
                    </h2>
                    <p className="text-[#929292] font-rubik leading-[24px] mt-2">
                        If Accidental Total Permanent Disability / Terminal
                        Illness Is Diagnosed, Premiums Are Waived Off During The
                        Policy Term.
                    </p>
                </div>

                <div className="flex-[0_0_47%] md:flex-[0_0_30%] justify-start items-start  rounded-md md:px-6 md:py-6 p-3  bg-white">
                    <img
                        src={icon5}
                        className="w-[65px] aspect-square object-contain mx-0 mb-2"
                    />
                    <h2 className="font-rubik text-xl font-medium">
                        Avail Tax Benefits<sup>6</sup>
                    </h2>
                    <p className="text-[#929292] font-rubik leading-[24px] mt-2">
                        Tax Benefits Available On What You Pay & What You Or
                        Your Family Receive, As Per Extant Income Tax Act
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Benifits
