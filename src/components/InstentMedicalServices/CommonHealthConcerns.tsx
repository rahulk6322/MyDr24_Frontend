import React from 'react'
import mycategory from '../../assets/images/thermometer.png'
import cursorMagic from '../../assets/images/cursor_magic.svg'
import rx from '../../assets/images/rx.svg'
import chat from '../../assets/images/basil_chat.svg'

const categories = [
    {
        image: '/path/to/elderly-care-image.jpg', // Replace with actual image path
        title: 'Elderly Care',
    },
    {
        image: '/path/to/must-haves-image.jpg',
        title: 'Must Haves',
    },
    {
        image: '/path/to/personal-care-image.jpg',
        title: 'Personal Care',
    },
    {
        image: '/path/to/healthcare-devices-image.jpg',
        title: 'Healthcare Devices',
    },
    {
        image: '/path/to/skin-care-image.jpg',
        title: 'Skin Care',
    },
    {
        image: '/path/to/mother-baby-care-image.jpg',
        title: 'Mother and baby care',
    },
    {
        image: '/path/to/health-food-drinks-image.jpg',
        title: 'Health food and drinks',
    },
    {
        image: '/path/to/fitness-supplements-image.jpg',
        title: 'Fitness Supplements',
    },
    {
        image: '/path/to/ayurvedic-care-image.jpg',
        title: 'Ayurvedic Care',
    },
    {
        image: '/path/to/diabetic-care-image.jpg',
        title: 'Diabetic Care',
    },
    {
        image: '/path/to/sexual-wellness-image.jpg',
        title: 'Sexual Wellness',
    },
    {
        image: '/path/to/health-condition-image.jpg',
        title: 'Health Condition',
    },
]

const CommonHealthConcerns: React.FC = () => {
    return (
        <section className="lg:px-36 sm:px-16 py-10 bg-[#F5F5F5] mt-8 ">
            <div className="flex justify-center items-center mb-4">
                <div className=" justify-center gap-4 item-center self-center">
                    <h2 className="text-sm font-semibold font-rubik sm:text-head text-center">
                        Common Health Concern
                    </h2>
                    <p className="text-gray-400 text-xs sm:text-base font-rubik text-center">
                        Consult a doctor online for any health issue
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-10 px-6 sm: p-0">
                {categories.slice(0, 12).map((category, index) => (
                    <div className="bg-[#0065B2] flex items-center gap-2 rounded-[8px] p-2 px-4 border border-white mb-6 mx-2">
                        <div className="p-2 bg-[#E0F2FF] rounded-full aspect-square">
                            <img
                                src={mycategory}
                                alt={category.title}
                                className="aspect-square object-contain w-[28px] "
                            />
                        </div>

                        <h3 className=" text-sm sm:text-[18px] leading-[18px] text-left sm:leading-[21.33px] font-rubik text-white font-normal ml-2">
                            {category.title}
                        </h3>
                    </div>
                ))}
            </div>

            <h2 className="sm:text-[28px] text-[24px] font-semibold font-rubik text-center">
                How It Works
            </h2>
            <div className="md:contain flex justify-center md:w-[80%] w-[100%] mt-5 relative items-baseline ml-auto mr-auto">
                <hr className="absolute w-[65%] md:w-[65%] lg:w-[65%] xl:w-[68%] border-white top-10 left-[15%] right-[50%] " />
                <div className="flex flex-col p-2 justify-center items-center z-[1]">
                    <div className="bg-white p-4 rounded-full w-fit">
                        <img src={cursorMagic} />
                    </div>
                    <p className="text-[12px] leading-[20px] sm:text-sm font-rubik sm:leading-[26px] mt-2 text-center">
                        Select a speciality or symptom
                    </p>
                </div>

                <div className="flex flex-col p-2 justify-center items-center z-[1]">
                    <div className="bg-white p-4 rounded-full w-fit">
                        <img src={chat} />
                    </div>
                    <p className="text-[12px] leading-[20px] sm:text-sm font-rubik sm:leading-[26px] mt-2 text-center">
                        Audio/ video call with a verified doctor
                    </p>
                </div>

                <div className="flex flex-col p-2 justify-center items-center z-[1]">
                    <div className="bg-white p-4 rounded-full w-fit">
                        <img src={rx} />
                    </div>
                    <p className="text-[12px] leading-[20px] sm:text-sm font-rubik sm:leading-[26px] mt-2 text-center">
                        Get a digital prescription & a free follow-up
                    </p>
                </div>
            </div>
        </section>
    )
}

export default CommonHealthConcerns
