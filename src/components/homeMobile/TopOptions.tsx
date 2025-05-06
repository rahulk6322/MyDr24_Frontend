import React from 'react'
import { servicesData } from '../../../data'
import bloodTest from '../../assets/images/blood-test.svg'
import MedCap from '../../assets/images/med-cap.svg'
import whatsapp from '../../assets/icons/logos_whatsapp-icon.png'
import prescription from '../../assets/icons/prescription.svg'
import phone from '../../assets/icons/phone.svg'

const TopOptions: React.FC = () => {
    return (
        <section className="p-3 pt-5 rounded-t-sm">
            <div className="flex gap-2">
                <div className="rounded flex-1 bg-[#E9FCF8] flex-row flex py-3 items-center pr-3">
                    <div className="flex-[0_0_60%]">
                        <h2 className="text-base font-bold pl-3 mb-2 pr-2 leading-[20px]">
                            Order Medicine
                        </h2>
                        <div className="bg-[#06B90C] px-3 w-[130%]">
                            <p className="text-white text-xs">UPTO 25% OFF</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-full px-4 aspect-square flex justify-center items-center flex-[0_0_40%]">
                        <img src={MedCap} className="w-[41.25px] h-[55px]" />
                    </div>
                </div>

                <div className="rounded flex-1 bg-[#FEE6E4] flex-row flex py-3 items-center pr-3">
                    <div className=" flex-[0_0_60%]">
                        <h2 className="text-base font-bold pl-3 mb-2 pr-2 leading-[20px]">
                            Book Lab Tests
                        </h2>
                        <div className="bg-[#06B90C] px-3 w-[130%]">
                            <p className="text-white text-xs">UPTO 25% OFF</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-full px-4 aspect-square flex justify-center items-center">
                        <img src={bloodTest} className="w-[48px] h-[48px]" />
                    </div>
                </div>
            </div>

            <div className="flex gap-3 items-center justify-center my-5  flex-[0_0_40%]">
                <hr className="w-[20%] border-1 border-[#B7B7B7]" />
                <h6 className="text-gray-400">OR YOU CAN ORDER VIA</h6>
                <hr className="w-[20%] border-1 border-[#B7B7B7]" />
            </div>

            <div className="flex gap-2">
                <div className="flex-1 border rounded-md border-[#D9D9D9] flex items-center gap-2 px-2 py-1 justify-center">
                    <img
                        src={whatsapp}
                        className="w-[18px] aspect-square object-contain m-0"
                    />{' '}
                    <span className="text-sm font-medium font-roboto">
                        Whatsapp
                    </span>
                </div>

                <div className="flex-1 border rounded-md border-[#D9D9D9] flex items-center gap-2 px-2 py-1 justify-center">
                    <img
                        src={prescription}
                        className="w-[18px] aspect-square object-contain m-0"
                    />{' '}
                    <span className="text-sm font-medium font-roboto">
                        Prescription
                    </span>
                </div>

                <div className="flex-1 border rounded-md border-[#D9D9D9] flex items-center gap-2 px-2 py-1 justify-center">
                    <img
                        src={phone}
                        className="w-[18px] aspect-square object-contain m-0 "
                    />{' '}
                    <span className="text-sm font-medium font-roboto text-nowrap">
                        Call To Order
                    </span>
                </div>
            </div>
        </section>
    )
}

export default TopOptions
