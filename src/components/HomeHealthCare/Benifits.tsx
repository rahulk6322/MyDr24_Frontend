import React, { useState } from 'react'
import BannerPic from '../../assets/images/Benifits_elder.png'

const BenifitsElder: React.FC = () => {
    const [searchText, setSearchText] = useState('')
    return (
        <section className="px-3 sm:px-0 mb-10">
            <div
                className="flex sm:bg-none bg-white"
                style={{ boxShadow: '0px 4px 12px 0px #00000014' }}
            >
                {/* Text Overlay */}
                <div className=" w-[55%] px-3 pr-3 py-10 sm:py-0 sm:px-10 sm:pr-20 left-[10px] inset-0 flex flex-col justify-center items-start z-10 flex-1">
                    <h1 className="font-rubik text-[20px] sm:text-head font-bold mb-2">
                        Benefits of Home Care Services
                    </h1>
                    <p className="text-[12px] sm:text-[15px] leading-[24px] text-[#333333] mb-2">
                        Unfortunately, many older people cannot perform their
                        daily activities like bathing, eating, and maintaining
                        hygiene. The central theme of Home nursing services in
                        Delhi is delivering emotional support to older people.
                        Our home nursing team is highly qualified and
                        experienced in advising the patients and assisting them
                        in maintaining good health.
                    </p>
                    <p className="text-[12px] sm:text-[15px] leading-[24px] text-[#333333] mb-2">
                        We prepare a perfect diet plan for patients, and we will
                        try to regain the patient’s previous condition. The main
                        aim of home nursing services is to treat an illness or
                        injury. Home nursing service mainly includes surgical
                        wounds, normal wounds, patient and caregiver education,
                        rehabilitation therapies and monitoring conditions, and
                        unstable health status.
                    </p>
                    <ul className="text-[12px] sm:text-[15px] leading-[24px] text-[#333333] mb-2 list-disc pl-8">
                        <li>Feeding your loved ones</li>
                        <li>
                            Our caretaker will assist you in walking and
                            preventing falls
                        </li>
                        <li>Bathing, brushing teeth, and denture care</li>
                        <li>Assist in commode, bedpan and urinal</li>
                        <li>Dressing & Grooming</li>
                        <li>Diaper changing</li>
                        <li>Prevent bedsores</li>
                        <li>Provide timely medicines</li>
                    </ul>
                    <p className="text-[12px] sm:text-[15px] leading-[24px] text-[#333333] mb-2 mt-2">
                        MYDR24 provides on-time assistance and, home nursing
                        services in Delhi which has given us a chance to provide
                        our services repeatedly. 
                    </p>
                </div>

                <img
                    src={BannerPic}
                    className="w-[45%] object-cover rounded-ful z-[1] m-0 sm:block hidden "
                />
            </div>
        </section>
    )
}

export default BenifitsElder
