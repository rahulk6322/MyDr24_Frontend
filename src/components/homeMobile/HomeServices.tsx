import React from 'react'
import { servicesData } from '../../../data'
import servicebg from '../../assets/images/servicebg.png'
import serviceImg from '../../assets/images/serviceImg.png'

const HomeServices: React.FC = () => {
    return (
        <section className="p-3">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-sm font-bold font-rubik">
                    Home Healthcare Services
                </h2>
                <p className="text-sm text-[#0065B2]">View All</p>
            </div>
            <div className="flex gap-2">
                {servicesData.slice(0, 3).map((service, index) => (
                    <div key={index} className=" flex-1">
                        <div
                            className="rounded-lg flex flex-col items-center justify-end text-center w-100 h-[97.32px] mx-auto shadow-md border-[1.12px] border-white"
                            style={{
                                background: `url(${servicebg})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <div className="flex items-end justify-center w-[87.81px] h-[90.66px] ">
                                <img
                                    src={serviceImg}
                                    alt={service.title}
                                    className="h-full object-contain rounded-md "
                                />
                            </div>
                        </div>
                        <div className="text-center mt-2">
                            <h3 className="text-[11px] font-bold text-center">
                                {service.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default HomeServices
