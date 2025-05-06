import React from 'react'
import { servicesData } from '../../../data'
import servicebg from '../../assets/images/servicebg.png'

const HomeServices: React.FC = () => {
    return (
        <section className="contain py-6">
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-2xl font-rubik font-semibold">
                    24/7 Hours Home Services
                </h2>
            </div>
            <div className="flex gap-4 overflow-x-scroll navbarscroll">
                {servicesData.map((service, index) => (
                    <div key={index} className=" w-[227px] ">
                        <div
                            className="rounded-lg flex flex-col items-center justify-between text-center w-[223px] h-[174px] mx-auto shadow-md"
                            style={{
                                backgroundColor: service.color,
                            }}
                        >
                            <div className="flex items-center justify-center w-[223px] h-[174px] overflow-hidden">
                                <img
                                    src={service.mainImage}
                                    alt={service.title}
                                    className="h-full object-contain rounded-md -mb-7 "
                                />
                            </div>
                        </div>
                        <div className="text-center mt-2">
                            <h3 className="text-[14px] font-rubik font-semibold whitespace-nowrap">
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
