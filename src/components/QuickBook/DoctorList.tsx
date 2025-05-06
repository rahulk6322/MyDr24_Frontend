import React from 'react'
import { doctorList } from '../../../data'
import doctord from '../../assets/images/dr2.png'

const DoctorList: React.FC = () => {
    return (
        <div className="py-7">
            {/* Button Group */}
            <div className="flex flex-col md:flex-row justify-start mb-7 space-y-4 md:space-y-0 md:space-x-4">
                <button className="border border-blue text-black bg-[#d3ecff] min-h-[56px] text-[18px] md:text-[22px] font-rubik font-semibold min-w-[228px] py-2 px-4 rounded-full">
                    Hospital Visit
                </button>
                <button className="border border-gray-500 text-gray-500 min-h-[56px] text-[18px] md:text-[22px] font-rubik font-semibold min-w-[228px] py-2 px-4 rounded-full">
                    Video Consult
                </button>
                <button className="border border-blue text-blue min-h-[56px] text-[18px] md:text-[22px] font-rubik font-semibold min-w-[228px] py-2 px-4 rounded-full">
                    Instant Doctors (9)
                </button>
            </div>

            {/* Heading */}
            <h2 className="text-head md:text-[28px] font-semibold font-rubik mb-4">
                Best Matching Doctors For Your Search
            </h2>

            {/* Doctor Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {doctorList.map((doctor) => (
                    <div
                        key={doctor.id}
                        className="bg-white w-full md:min-w-[350px] lg:min-w-[320px] min-h-[248px] p-6 rounded-lg"
                    >
                        <div className="flex items-center">
                            <div className="flex flex-col items-center">
                                <div className="w-[108px] h-[108px] rounded-xl text-[#969696] border-2 mr-5 px-4 pt-5">
                                    <img
                                        src={doctord}
                                        alt={doctor.name}
                                        className="mx-auto w-full h-[85px]"
                                    />
                                </div>
                                <p className="text-black font-bold mt-2">
                                    {doctor.fee}
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">
                                    {doctor.name}
                                </h3>
                                <p className="text-[#969696]">
                                    {doctor.specialty}
                                </p>
                                <p className="text-blue font-rubik font-semibold">
                                    {doctor.experience}
                                </p>
                                <p className="text-[#969696]">
                                    {doctor.location}
                                </p>
                                <p className="text-[#969696]">
                                    {doctor.hospital}
                                </p>
                            </div>
                        </div>
                        <div className="mt-4 flex flex-row gap-4 items-center">
                            <button className="flex-1 border-2 min-h-[40px] border-blue font-rubik text-blue font-semibold py-2 px-4 rounded-full hover:bg-blue-100">
                                Book Online Consult
                            </button>
                            <button className="flex-1 bg-blue min-h-[40px] font-rubik font-semibold text-white py-2 px-4 rounded-full hover:opacity-90">
                                Book Hospital Visit
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DoctorList
