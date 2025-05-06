import React from 'react'
import { GrLocation, GrShareOption } from 'react-icons/gr'
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5'
import { RiGraduationCapLine } from 'react-icons/ri'
const DoctorProfileCard: React.FC = () => {
    return (
        <div className="relative">
            {/* Doctor Profile Section */}
            <div className="flex gap-8  p-6 bg-white">
                {/* Profile Image */}
                <div className="">
                    <img
                        className="rounded-full w-[211px] h-[211px] object-cover"
                        src="https://via.placeholder.com/150"
                        alt="Dr. Venkatesh M J"
                    />
                </div>

                {/* Profile Info */}
                <div className="flex flex-col justify-center">
                    <div className="flex justify-between items-start">
                        <div>
                            <h2 className="font-bold font-rubik text-head text-black">
                                Dr. Venkatesh M J
                            </h2>
                            <p className="font-rubik font-semibold text-title text-blue">
                                Cardiology
                            </p>
                            <p className="font-rubik text-subhead text-black-100 mt-1">
                                40+ years experience
                            </p>
                        </div>
                        <div className="text-black absolute top-7 right-7 ">
                            <GrShareOption className=" w-[33px] h-[33px]" />
                        </div>
                    </div>

                    <div className="mt-3">
                        <ul className="space-y-2 text-black-100">
                            <li className="flex text-subtitle font-medium items-center">
                                <RiGraduationCapLine className="mr-2 w-[22px] h-[22px] text-black-200" />
                                MBBS, MD, DM, FACC, FESC
                            </li>

                            <li className="flex text-subtitle items-center font-medium">
                                <IoChatbubbleEllipsesOutline className="mr-2 w-[21px] h-[21px] text-black-200" />
                                English, Hindi, Telugu, Bengali, Urdu
                            </li>

                            <li className="flex text-subtitle items-start">
                                <GrLocation className="mr-2 w-[22px] h-[22px] text-black-200" />
                                <div className="text-subtitle font-medium">
                                    <span className="font-bold flex text-title">
                                        Apollo Hospitals Jubilee Hills,{' '}
                                    </span>{' '}
                                    Road Number 72 Hyderabad Film Nagar
                                    Telangana
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* About Doctor Section */}
            <div
                className="bg-white mt-6 p-6"
                style={{
                    boxShadow: '0px 1px 2px 0px #00000014',
                }}
            >
                <h3 className=" font-bold text-black font-rubik text-head">
                    About Doctor
                </h3>
                <p className="mt-4 text-gray-700">
                    Dr Tripti Deb is renowned as one of the top cardiologists in
                    Hyderabad. Her expertise lies in treating diseases like
                    coronary artery disease, peripheral vascular disease, high
                    blood pressure/hypertension, cardiomyopathy (heart
                    failures), and valve disorders. Dr Tripti Deb brings with
                    her an experience of 40 years in the field of cardiology and
                    heart-related disorders.
                </p>

                <p className="mt-4 text-gray-700">
                    People experiencing, shortness of breath, dizzying spells,
                    chest pains, or palpitations are suggested to consult an
                    experienced cardiologist. Heart specialists like Dr Tripti
                    conduct physical examinations along with ECG, TMT (exercise
                    stress), and blood tests to diagnose the root cause. Once
                    diagnosed, based on the findings, she recommends the
                    treatment plan coupled with suggestions related to
                    lifestyle, diet, and stress management.
                </p>

                <p className="mt-4 text-gray-700">
                    Cardiologists like Dr Tripti specialize in treating cardiac
                    issues like heart failure, heart attack, and arrhythmia to
                    name a few. The procedures performed by Dr Deb include
                    implantable cardioverter defibrillator or pacemaker, ASD
                    device closure, balloon mitral valvuloplasty.
                </p>
            </div>
        </div>
    )
}

export default DoctorProfileCard
