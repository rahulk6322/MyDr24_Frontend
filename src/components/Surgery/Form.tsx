import React, { useState } from 'react'
import { FaPhone } from 'react-icons/fa'

const Form: React.FC = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [city, setCity] = useState('')
    const [gender, setGender] = useState('')
    const [speciality, setSpeciality] = useState('')
    const [diseases, setDiseases] = useState('')
    return (
        <section className="relative bg-white p-6 py-8 mt-4 sm:mx-10 rounded-lg">
            <h4 className="text-base sm:text-head font-bold font-rubik text-center mb-8">
                Book Your Consultation Today
            </h4>

            <div className="flex items-center bg-white border border-[#D9D9D9] rounded-md w-full p-4 px-8 mb-4">
                <input
                    type="text"
                    placeholder="Name*"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="flex-1 bg-transparent focus:outline-none text-sm font-rubik font-medium"
                />
            </div>

            <div className="flex items-center bg-white border border-[#D9D9D9] rounded-md w-full p-4 px-8 mb-4">
                <input
                    type="text"
                    placeholder="Email*"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-transparent focus:outline-none text-sm font-rubik font-medium"
                />
            </div>

            <div className="flex items-center bg-white border border-[#D9D9D9] rounded-md w-full p-4 px-8 mb-4">
                <input
                    type="text"
                    placeholder="Phone*"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="flex-1 bg-transparent focus:outline-none text-sm font-rubik font-medium"
                />
            </div>
            <div className="flex w-full gap-4">
                <div className=" flex-1 items-center bg-white border border-[#D9D9D9] rounded-md w-full p-4 px-8 mb-4">
                    <select
                        className={`text-gray w-full focus:outline-none text-sm font-rubik font-medium ${city != '' ? 'text-black' : 'text-[#939393]'}`}
                        onChange={(e) => setCity(e.target.value)}
                    >
                        <option
                            value=""
                            disabled
                            selected
                            className="text-gray"
                        >
                            Select City
                        </option>

                        <option value="option1" className="text-black">
                            Option 1
                        </option>
                        <option value="option2" className="text-black">
                            Option 2
                        </option>
                    </select>
                </div>
                <div className=" flex-1 items-center bg-white border border-[#D9D9D9] rounded-md w-full p-4 px-8 mb-4">
                    <select
                        className={`text-gray w-full focus:outline-none text-sm font-rubik font-medium ${gender != '' ? 'text-black' : 'text-[#939393]'}`}
                        onChange={(e) => setGender(e.target.value)}
                    >
                        <option
                            value=""
                            disabled
                            selected
                            className="text-gray"
                        >
                            Select Gender
                        </option>

                        <option value="option1" className="text-black">
                            Option 1
                        </option>
                        <option value="option2" className="text-black">
                            Option 2
                        </option>
                    </select>
                </div>
            </div>
            <div className=" flex-1 items-center bg-white border border-[#D9D9D9] rounded-md w-full p-4 px-8 mb-4">
                <select
                    className={`text-gray w-full focus:outline-none text-sm font-rubik font-medium ${speciality != '' ? 'text-black' : 'text-[#939393]'}`}
                    onChange={(e) => setSpeciality(e.target.value)}
                >
                    <option value="" disabled selected className="text-gray">
                        Select Speciality
                    </option>

                    <option value="option1" className="text-black">
                        Option 1
                    </option>
                    <option value="option2" className="text-black">
                        Option 2
                    </option>
                </select>
            </div>

            <div className=" flex-1 items-center bg-white border border-[#D9D9D9] rounded-md w-full p-4 px-8 mb-4">
                <select
                    className={`text-gray w-full focus:outline-none text-sm font-rubik font-medium ${diseases != '' ? 'text-black' : 'text-[#939393]'}`}
                    onChange={(e) => setDiseases(e.target.value)}
                >
                    <option value="" disabled selected className="text-gray">
                        Select Diseases
                    </option>

                    <option value="option1" className="text-black">
                        Option 1
                    </option>
                    <option value="option2" className="text-black">
                        Option 2
                    </option>
                </select>
            </div>
            <button className="bg-[#01B806] text-white w-full py-4 rounded-lg text-lg font-rubik">
                Request Call Back
            </button>
            <p className="text-[#B7B7B7] text-sm sm:text-base text-center mt-4">
                By submitting the form, you agree to MYDR24{' '}
                <span className="text-[#1864B3] text-sm sm:text-base">T&C</span>
            </p>

            <div className="flex gap-3 items-center justify-center my-5">
                <hr className="w-[42%] border-1 border-[#B7B7B7]" />
                <h6 className="text-black font-bold text-base">OR</h6>
                <hr className="w-[42%] border-1 border-[#B7B7B7]" />
            </div>
            <div className="flex items-center justify-center border border-[#D9D9D9] py-4 rounded-md">
                <p className="text-sm sm:text-base font-medium text-[#656565]">
                    Reach out to us on
                </p>
                <hr className="w-[6%] border-r border-black rotate-90" />
                <div className="flex text-[#01B806] items-center gap-2">
                    <FaPhone className="rotate-90" />
                    <p className="text-sm sm:text-base font-bold">
                        +91 93117 91119
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Form
