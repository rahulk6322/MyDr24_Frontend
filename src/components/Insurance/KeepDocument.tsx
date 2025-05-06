import React, { useState } from 'react'
import { FaPhone } from 'react-icons/fa'
import icon1 from '../../assets/icons/documents.svg'
import icon2 from '../../assets/icons/key_benefits_2.svg'
import icon3 from '../../assets/icons/key_benefits_3.svg'
import icon4 from '../../assets/icons/key_benefits_4.svg'
import icon5 from '../../assets/icons/key_benefits_5.svg'

const KeepDocuments: React.FC = () => {
    return (
        <section className="md:p-6 md:py-8 py-3 p-3 mt-4 sm:mx-10 rounded-lg m-0">
            <h4 className="sm:text-[32px] text-base font-bold font-rubik mb-8 text-center">
                Keep These Documents Handy
            </h4>

            <div className="flex flex-wrap md:gap-10 justify-between">
                <div className="w-[47%] md:w-full md:flex-1 justify-start items-start rounded-md px-6 py-6 bg-white">
                    <div className="flex items-center gap-2">
                        <img
                            src={icon1}
                            className="md:w-[38px] w-[24px] aspect-square object-contain mx-0 "
                        />
                        <h2 className="font-rubik text-base md:text-xl font-bold md:leading-[23.7px] leading-[18px]">
                            Recent Photograph
                        </h2>
                    </div>
                    <ul className="list-disc text-sm font-rubik leading-[16.59px] mt-2 text-[#929292]">
                        <li>Coloured Photograph</li>
                    </ul>
                </div>

                <div className="w-[47%] md:w-full md:flex-1 justify-start items-start rounded-md px-6 py-6 bg-white">
                    <div className="flex items-center gap-2">
                        <img
                            src={icon1}
                            className="md:w-[38px] w-[24px] aspect-square object-contain mx-0 "
                        />
                        <h2 className="font-rubik text-base md:text-xl font-bold md:leading-[23.7px] leading-[18px]">
                            Photo ID Proof (Any One)
                        </h2>
                    </div>
                    <ul className="list-disc text-sm font-rubik leading-[24px] mt-2 text-[#929292]">
                        <li>Aadhar Card</li>
                        <li>Passport</li>
                        <li>Driving License</li>
                        <li>Voters ID</li>
                    </ul>
                </div>

                <div className="w-[47%] md:w-full md:flex-1 justify-start items-start rounded-md px-6 py-6 bg-white">
                    <div className="flex items-center gap-2">
                        <img
                            src={icon1}
                            className="md:w-[38px] w-[24px] aspect-square object-contain mx-0 "
                        />
                        <h2 className="font-rubik text-base md:text-xl font-bold md:leading-[23.7px] leading-[18px]">
                            Address Proof
                            <span className="text-base">(Any One)</span>
                        </h2>
                    </div>
                    <ul className="list-disc text-sm font-rubik leading-[24px] mt-2 text-[#929292]">
                        <li>Aadhar Card</li>
                        <li>Passport</li>
                        <li>Driving License</li>
                        <li>Voters ID</li>
                    </ul>
                </div>

                <div className="w-[47%] md:w-full md:flex-1 justify-start items-start rounded-md px-6 py-6 bg-white">
                    <div className="flex items-center gap-2">
                        <img
                            src={icon1}
                            className="md:w-[38px] w-[24px] aspect-square object-contain mx-0 "
                        />
                        <h2 className="font-rubik text-base md:text-xl font-bold md:leading-[23.7px] leading-[18px]">
                            Address Proof (Any One)
                        </h2>
                    </div>
                    <ul className="list-disc text-sm font-rubik leading-[24px] mt-2 text-[#929292]">
                        <li>
                            Last 3 month of salary slip and 6 months of bank
                            statement showing salary credit (For Salaried)
                        </li>
                        <li>
                            Last 2 Years ITR and computation of Income (For
                            Self-Employed), etc.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default KeepDocuments
