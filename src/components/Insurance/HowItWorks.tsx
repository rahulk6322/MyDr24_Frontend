import React, { useState } from 'react'
import { FaPhone } from 'react-icons/fa'
import icon1 from '../../assets/icons/key_benefits_1.svg'
import icon2 from '../../assets/icons/key_benefits_2.svg'
import icon3 from '../../assets/icons/key_benefits_3.svg'
import icon4 from '../../assets/icons/key_benefits_4.svg'
import icon5 from '../../assets/icons/key_benefits_5.svg'

const HowItWorks: React.FC = () => {
    return (
        <section className="bg-white p-6 py-8 mt-4 sm:mx-10 rounded-lg m-0">
            <h4 className="sm:text-[32px] text-base font-bold font-rubik md:mb-8 mb-4 text-center">
                How does the Plan works?
            </h4>

            <div className="flex flex-wrap justify-center  bg-[#F8F7FC] border border-white py-6 px-4">
                <div className="md:w-1/2 justify-start md:border-r border-[#D5EDFF] border-b rounded-md md:px-6 px-0 py-4  pt-0 pl-0 flex gap-4 items-center pb-4">
                    <h2 className="font-rubik md:text-[28px] text-[20px] font-medium text-[#0065B2]">
                        1
                    </h2>

                    <p className="md:text-[15px] text-[13px] font-rubik leading-[17.78px] mt-2">
                        Choose your Sum Assured: Decide on the level of
                        protection by choosing the sum assured you need to
                        safeguard your family's future.
                    </p>
                </div>
                <div className="md:w-1/2 justify-start  border-[#D5EDFF] border-b rounded-md px-6 py-4  pt-0 pl-0 md:pl-4 pr-0 flex gap-4 items-center">
                    <h2 className="font-rubik md:text-[28px] text-[20px] font-medium text-[#0065B2]">
                        2
                    </h2>
                    <p className="md:text-[15px] text-[13px] font-rubik leading-[17.78px] mt-2">
                        Choose your Death Benefit Payment option. Select how
                        your family will receive the Death Benefit in your
                        absence. A one-time lump sum or Partly as Lump sum &
                        partly as monthly income for 60 months.
                    </p>
                </div>

                <div className="md:w-1/2 justify-start md:border-r border-[#D5EDFF] md:border-b-0 border-b rounded-md md:px-6 px-0 py-4  pt-0 pl-0 flex gap-4 items-center">
                    <h2 className="font-rubik md:text-[28px] text-[20px] font-medium text-[#0065B2]">
                        3
                    </h2>
                    <p className="md:text-[15px] text-[13px] font-rubik leading-[17.78px] mt-2">
                        Choose your Policy Term and the Premium Payment
                        Term: Select the period for which you want to get life
                        insurance protection and the period for which you want
                        to pay the premium.
                    </p>
                </div>

                <div className="md:w-1/2 justify-start  border-[#D5EDFF] md:border-b border-b-0 rounded-md px-6 py-4  pt-0 pl-0 md:pl-4 pr-0 flex gap-4 items-center">
                    <h2 className="font-rubik md:text-[28px] text-[20px] font-medium text-[#0065B2]">
                        4
                    </h2>
                    <p className="md:text-[15px] text-[13px] font-rubik leading-[17.78px] mt-2">
                        Choose your Premium Payment Frequency: Select the period
                        for which you want to get life insurance protection and
                        the period for which you want to pay the premium.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks
