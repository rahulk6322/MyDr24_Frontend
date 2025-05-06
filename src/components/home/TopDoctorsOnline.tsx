import React from 'react'
import { FaStethoscope, FaUserFriends, FaClock, FaUsers } from 'react-icons/fa'
import familyphoto from '../../assets/images/Familyphoto.png'
import Doctor from '../../assets/images/DoctorIcon.png'
import Clock from '../../assets/images/ClockIcon.png'
import User from '../../assets/images/UsersIcon.png'
import Medical from '../../assets/images/MedicalIcon.png'

const TopDoctorsOnline: React.FC = () => {
    return (
        <section className="flex py-5 items-center contain justify-between ">
            <div className="relative h-[224px] mx-auto px-16 bg-gradient-to-r from-blue-50 to-green-50  flex items-center justify-between rounded-lg">
                <div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        CONSULT INDIA'S TOP DOCTORS ONLINE
                    </h1>
                    <div className="flex gap-5 text-gray-700 mt-9">
                        <div className="flex lg:flex-row flex-col lg:gap-6 gap-3">
                            <div className="flex items-center space-x-2">
                                <img src={Medical} alt="35+ Specialities" />
                                <span className="text-[18px] font-medium">
                                    35+ Specialities
                                </span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <img src={User} alt="10L+ Satisfied Users" />
                                <span className="text-[18px] font-medium">
                                    10L+ Satisfied Users
                                </span>
                            </div>
                        </div>
                        <div className="flex lg:flex-row flex-col lg:gap-6 gap-3">
                            <div className="flex items-center space-x-2">
                                <img
                                    src={Clock}
                                    alt="Consult Online In 10 Mins"
                                />
                                <span className="text-[18px] font-medium">
                                    Consult Online In 10 Mins
                                </span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <img
                                    src={Doctor}
                                    alt="Free Follow-Up For 5 Days"
                                />
                                <span className="text-[18px] font-medium">
                                    Free Follow-Up For 5 Days
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-40 w-[300px] hidden md:block "></div>
                <div className="absolute bottom-0 right-0 hidden md:block ">
                    <img
                        src={familyphoto}
                        alt="Family"
                        className="h-40 md:h-48 lg:h-56 object-contain"
                    />
                </div>
            </div>
        </section>
    )
}

export default TopDoctorsOnline
