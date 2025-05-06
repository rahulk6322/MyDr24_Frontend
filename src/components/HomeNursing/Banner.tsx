import React, { useState } from 'react'
import BannerPic from '../../assets/images/homeNursing_bg.png'
import Rect from '../../assets/images/white_banner_rect.svg'

import bannerImg from '../../assets/images/surgery_banner.png'

const Banner: React.FC = () => {
    const [searchText, setSearchText] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [city, setCity] = useState('')
    const [service, setService] = useState('')
    return (
        <section className="relative ">
            <div className="relative flex flex-col lg:flex-row sm:bg-none bg-[#0065B2] sm:px-10 px-5">
                {/* Text Overlay */}
                <div className="h-[600px]  w-full lg:w-2/3 px-3 pr-3 py-10 sm:py-0 sm:px-10 sm:pr-20 left-[10px] inset-0 flex flex-col justify-center items-start z-10 flex-1">
                    <h2 className="text-[18px] md:text-[20px] lg:text-[48px] xl:text-[48px] font-rubik font-semibold text-white sm:mt-20 lg:mt-0">
                        MYDR24 provides cmpetent Nursing care services at home
                    </h2>
                    <p className="text-white text-sm sm:text-lg leading-6 font-light font-rubik">that can assist you in meeting your family member's medical requirements in the comfort of their own home.</p>

                </div>
                <div className="w-full lg:w-1/3 z-10 m-auto mt-5 lg:mt-auto pb-8 lg:pb-0">
                    <div className="bg-[#00000075] p-5 rounded-md py-10 lg:mr-10">
                        <input className='bg-white px-6 py-4 w-full border text-sm border-[#d6d6d6] rounded-md font-rubik' placeholder='Name' />
                        <input className='bg-white px-6 py-4 w-full border border-[#d6d6d6] rounded-md mt-4 font-rubik' placeholder='Phone' />
                        <input className='bg-white px-6 py-4 w-full border border-[#d6d6d6] rounded-md mt-4 font-rubik' placeholder='Email' />
                        <select className={`'bg-white px-6 py-4 w-full border border-[#d6d6d6] rounded-md mt-4 font-rubik ${city != '' ? 'text-black' : 'text-[#939393]'}`}
                            onChange={(e) =>
                                setCity(e.target.value)
                            }

                        >
                            <option
                                value=""
                                disabled
                                selected
                                className="text-gray"
                            >
                                Select City
                            </option>
                            <option>Option 1</option>
                        </select>
                        <select className={`'bg-white px-6 py-4 w-full border border-[#d6d6d6] rounded-md mt-4 font-rubik ${service != '' ? 'text-black' : 'text-[#939393]'}`}
                            onChange={(e) =>
                                setService(e.target.value)
                            }

                        >
                            <option
                                value=""
                                disabled
                                selected
                                className="text-gray"
                            >
                                Choose Service*
                            </option>
                            <option>Option 1</option>
                        </select>
                        <div className="flex items-start gap-2 mt-4">
                        <input type='checkbox'  />
                        <p className='text-white text-[12px] leading-[14px]'>I agree that Apollo Homecare representative can contact me over call, SMS, and email. I understand that this will override the DND status on my mobile number.*</p>
                        </div>

                        <button className="text-white bg-[#1864B3] text-base py-3 px-16 rounded-md mt-4 ml-auto mr-auto w-full lg:w-full">
                                    SUBMIT
                                </button>
                    </div>
                   
                </div>

                <img
                    src={BannerPic}
                    className="absolute top-0  left-0 w-full object-cover rounded-ful z-[1] m-0 sm:block h-full  lg:h-[600px] "
                />
            </div>
        </section>
    )
}

export default Banner
