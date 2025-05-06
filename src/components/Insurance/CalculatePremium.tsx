import React, { useState } from 'react'
import {
    FaWhatsappSquare,
    FaChevronDown,
    FaPlus,
    FaCheck,
} from 'react-icons/fa'
import icon1 from '../../assets/icons/reliable_partner_1.svg'
import icon2 from '../../assets/icons/reliable_partner_2.svg'
import icon3 from '../../assets/icons/reliable_partner_3.svg'
import FloatingLabelInput from '../global/FloatingInputLabel'

const CalculatePremium: React.FC = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [city, setCity] = useState('')
    const [gender, setGender] = useState('')
    const [speciality, setSpeciality] = useState('')
    const [diseases, setDiseases] = useState('')
    const [inputValue1, setInputValue1] = useState('')
    const [inputValue2, setInputValue2] = useState('')
    const [info, setInfo] = useState(false)
    return (
        <section className="contain px-3 sm:px-8 md:flex gap-10 mt-8">
            <div className="flex-1 mt-10">
                <h1 className="font-rubik text-[20px] sm:text-[32px] leading-[37.92px] font-bold mb-2">
                    Reliable Health Insurance Partner for you and your family
                </h1>
                <p className="text-[12px] sm:text-[15px] leading-[24px] text-[#333333] mb-2">
                    Prioritize your loved ones and secure your future with
                    Apollo's user-friendly premium calculator. Estimate
                    insurance premiums seamlessly for transparent and informed
                    financial planning. Trust us for peace of mind and a more
                    secure future.
                </p>
                <div className="flex md:w-[80%] flex-wrap justify-between md:gap-10 mt-10 items-start">
                    <div className="flex items-center flex-col justify-center w-[30%] md:w-[40%]">
                        <img
                            src={icon1}
                            className="w-[30px] object-contain mb-2"
                        />
                        <p className="text-[15px] leading-[24px] font-rubik text-center">
                            <span className="font-bold">24,800+</span> Cashless
                            Healthcare <p>Providers^^</p>
                        </p>
                    </div>

                    <div className="flex items-center flex-col justify-center w-[30%] md:w-[40%]">
                        <img
                            src={icon2}
                            className="w-[30px] object-contain mb-2"
                        />
                        <p className="text-[15px] leading-[24px] font-rubik text-center">
                            <span className="font-bold">48 Lakh+</span>Insurance
                            Claims <p>Settled^</p>
                        </p>
                    </div>

                    <div className="flex items-center flex-col justify-center w-[30%] md:w-[40%]">
                        <img
                            src={icon3}
                            className="w-[30px] object-contain mb-2"
                        />
                        <p className="text-[15px] leading-[24px] font-rubik text-center">
                            <span className="font-bold">Awarded</span> as Claims
                            Service Leader for the Year#
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex-1 bg-[#F8F7FC] border-2 border-white rounded-lg p-3 md:p-8">
                <h4
                    className={`text-base sm:text-[22px] font-bold font-rubik mb-4 ${info ? 'text-center' : 'text-left'}`}
                >
                    {info ? 'Save Your Progress' : 'Members to be Insured'}
                </h4>

                {info ? (
                    <>
                        <div className=" gap-5 mt-4">
                            <div className="flex-1 mb-4">
                                <h2 className="font-rubik text-base leading-[18.98px] font-medium mb-2 ">
                                    Your full name
                                </h2>
                                <div className="flex bg-white rounded-md min-h-[64px] gap-3 p-1 px-4 border border-[#D7EEFF] items-center">
                                    <FloatingLabelInput
                                        label="Enter your full name"
                                        value={city}
                                        onChange={(e) =>
                                            setCity(e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                            <div className="flex-1 mb-4">
                                <h2 className="font-rubik text-base leading-[18.98px] font-medium mb-2 ">
                                    Enter mobile number
                                </h2>
                                <div className="flex bg-white rounded-md min-h-[64px] gap-3 p-1 px-4 border border-[#D7EEFF] items-center">
                                    <FloatingLabelInput
                                        label="Enter Mobile Number"
                                        value={inputValue2}
                                        onChange={(e) =>
                                            setInputValue2(e.target.value)
                                        }
                                    />
                                </div>
                            </div>

                            <div className="flex-1 mb-4">
                                <h2 className="font-rubik text-base leading-[18.98px] font-medium mb-2 ">
                                    Medical History
                                </h2>
                                <div className="flex bg-white rounded-md min-h-[64px] gap-3 p-1 px-4 border border-[#D7EEFF] items-center">
                                    <FloatingLabelInput
                                        label="Daibeted"
                                        value={inputValue2}
                                        onChange={(e) =>
                                            setInputValue2(e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="flex gap-5 flex-wrap">
                            <div className="flex bg-white rounded-md min-h-[64px] gap-3 p-1  border border-[#D7EEFF]  md:flex-1 flex-[0_0_100%]">
                                <div className="flex-1 bg-[#EAF6FF] rounded-[4px] flex items-center">
                                    <p className="font-rubik text-base font-medium pl-6">
                                        Self
                                    </p>
                                </div>
                                <div className="relative flex-1">
                                    <FaChevronDown className="absolute right-[10px] text-lg top-[36%] text-[#929292]" />
                                    <select
                                        className={`text-gray h-full w-full focus:outline-none flex-1 text-base font-rubik font-medium ${city != '' ? 'text-black' : 'text-[#939393]'}`}
                                        onChange={(e) =>
                                            setCity(e.target.value)
                                        }
                                        style={{
                                            MozAppearance: 'none',
                                            WebkitAppearance: 'none',
                                        }}
                                    >
                                        <option
                                            value=""
                                            disabled
                                            selected
                                            className="text-gray"
                                        >
                                            Select Age
                                        </option>

                                        <option
                                            value="option1"
                                            className="text-black"
                                        >
                                            Option 1
                                        </option>
                                        <option
                                            value="option2"
                                            className="text-black"
                                        >
                                            Option 2
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div className="md:flex-1 flex bg-white rounded-md min-h-[64px] gap-3 p-1 border border-[#D7EEFF] md:flex-1 flex-[0_0_100%]">
                                <div className="flex-1 bg-[#EAF6FF] rounded-[4px] flex items-center">
                                    <p className="font-rubik text-base font-medium pl-6">
                                        Self
                                    </p>
                                </div>
                                <div className="relative flex-1">
                                    <FaChevronDown className="absolute right-[10px] text-lg top-[36%] text-[#929292]" />
                                    <select
                                        className={`text-gray h-full w-full focus:outline-none flex-1 text-base font-rubik font-medium ${city != '' ? 'text-black' : 'text-[#939393]'}`}
                                        onChange={(e) =>
                                            setCity(e.target.value)
                                        }
                                        style={{
                                            MozAppearance: 'none',
                                            WebkitAppearance: 'none',
                                        }}
                                    >
                                        <option
                                            value=""
                                            disabled
                                            selected
                                            className="text-gray"
                                        >
                                            Select Age
                                        </option>

                                        <option
                                            value="option1"
                                            className="text-black"
                                        >
                                            Option 1
                                        </option>
                                        <option
                                            value="option2"
                                            className="text-black"
                                        >
                                            Option 2
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-5 mt-4 flex-wrap">
                            <div className=" flex bg-white rounded-md min-h-[64px] gap-3 p-1 border border-[#D7EEFF] relative md:flex-1 flex-[0_0_100%]">
                                <div className="bg-[#0065B2] text-white absolute right-[-7px] top-[-7px] z-20 p-1 text-sm rounded-full">
                                    <FaPlus />
                                </div>
                                <div className="flex-1 bg-[#EAF6FF] rounded-[4px] flex items-center">
                                    <p className="font-rubik text-base font-medium pl-6">
                                        Son
                                    </p>
                                </div>
                                <div className="relative flex-1">
                                    <FaChevronDown className="absolute right-[10px] text-lg top-[36%] text-[#929292]" />
                                    <select
                                        className={`text-gray h-full w-full focus:outline-none flex-1 text-base font-rubik font-medium ${city != '' ? 'text-black' : 'text-[#939393]'}`}
                                        onChange={(e) =>
                                            setCity(e.target.value)
                                        }
                                        style={{
                                            MozAppearance: 'none',
                                            WebkitAppearance: 'none',
                                        }}
                                    >
                                        <option
                                            value=""
                                            disabled
                                            selected
                                            className="text-gray"
                                        >
                                            Select Age
                                        </option>

                                        <option
                                            value="option1"
                                            className="text-black"
                                        >
                                            Option 1
                                        </option>
                                        <option
                                            value="option2"
                                            className="text-black"
                                        >
                                            Option 2
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex bg-white rounded-md min-h-[64px] gap-3 p-1 border border-[#D7EEFF] relative md:flex-1 flex-[0_0_100%]">
                                <div className="bg-[#0065B2] text-white absolute right-[-7px] top-[-7px] z-20 p-1 text-sm rounded-full">
                                    <FaPlus />
                                </div>
                                <div className="flex-1 bg-[#EAF6FF] rounded-[4px] flex items-center">
                                    <p className="font-rubik text-base font-medium pl-6">
                                        Daughter
                                    </p>
                                </div>
                                <div className="relative flex-1">
                                    <FaChevronDown className="absolute right-[10px] text-lg top-[36%] text-[#929292]" />
                                    <select
                                        className={`text-gray h-full w-full focus:outline-none flex-1 text-base font-rubik font-medium ${city != '' ? 'text-black' : 'text-[#939393]'}`}
                                        onChange={(e) =>
                                            setCity(e.target.value)
                                        }
                                        style={{
                                            MozAppearance: 'none',
                                            WebkitAppearance: 'none',
                                        }}
                                    >
                                        <option
                                            value=""
                                            disabled
                                            selected
                                            className="text-gray"
                                        >
                                            Select Age
                                        </option>

                                        <option
                                            value="option1"
                                            className="text-black"
                                        >
                                            Option 1
                                        </option>
                                        <option
                                            value="option2"
                                            className="text-black"
                                        >
                                            Option 2
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <h4 className="font-medium font-rubik text-base text-right w-full text-[#0065B2] my-3 underline">
                            More Relationship
                        </h4>
                        <div className="flex gap-5 mt-4 flex-wrap">
                            <div className="flex-[0_0_100%] md:flex-1">
                                <h2 className="font-rubik text-base leading-[18.98px] font-medium mb-2 ">
                                    Enter Pincode
                                </h2>
                                <div className="flex bg-white rounded-md min-h-[64px] gap-3 p-1 px-4 border border-[#D7EEFF] items-center">
                                    <FloatingLabelInput
                                        label="Enter Your Pincode"
                                        value={inputValue1}
                                        onChange={(e) =>
                                            setInputValue1(e.target.value)
                                        }
                                    />
                                    <FaCheck className=" text-lg  text-[#929292]" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h2 className="font-rubik text-base leading-[18.98px] font-medium mb-2 ">
                                    Enter Mobile Number
                                </h2>
                                <div className="flex bg-white rounded-md min-h-[64px] gap-3 p-1 px-4 border border-[#D7EEFF] items-center">
                                    <FloatingLabelInput
                                        label="Enter Mobile Number"
                                        value={inputValue2}
                                        onChange={(e) =>
                                            setInputValue2(e.target.value)
                                        }
                                    />
                                    <FaCheck className=" text-lg  text-[#929292]" />
                                </div>
                            </div>
                        </div>
                    </>
                )}
                <button
                    className="bg-[#0065B2] text-white w-full py-4 rounded-[4px] text-lg font-rubik uppercase font-bold mt-8"
                    onClick={() => setInfo(true)}
                >
                    {info ? 'Continue' : 'Calculate Premium'}
                </button>

                <div className="flex items-center mt-4 gap-3">
                    <input type="checkbox" className="w-[18px] h-[18px]" />
                    <p className="text-[#B7B7B7] text-sm sm:text-base flex items-center">
                        Get updates on
                        <FaWhatsappSquare className="text-[#1FAF38] mx-1 text-xl" />{' '}
                        WhatsApp
                    </p>
                </div>
                <p className="text-[#B7B7B7] text-sm sm:text-base mt-4">
                    By clicking ‘Calculate Premium’, you agree to our{' '}
                    <span className="text-[#1864B3] text-sm sm:text-base">
                        T&C
                    </span>
                </p>
            </div>
        </section>
    )
}

export default CalculatePremium
