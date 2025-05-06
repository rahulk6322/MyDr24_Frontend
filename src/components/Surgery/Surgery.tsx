import React from 'react'
import mycategory from '../../assets/images/surgery_dummy.png'
import SurgeryOptions from './SurgeryOptions'
import OurDiseases from './OurDiseases'

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

const SurgeryProducts: React.FC = () => {
    return (
        <section className="contain py-3 px-3 sm:py-8 sm:px-0 w-full">
            <div className="flex">
                <div className="gap-4">
                    <h2 className="text-sm font-semibold font-rubik sm:text-head">
                        We are experts in Surgical solutions for 50+ ailments.
                    </h2>
                </div>
            </div>
            <SurgeryOptions />
            <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {categories.map((category, index) => (
                    <div>
                        <div
                            key={index}
                            className="bg-white border border-[#ECECEC] p-1 rounded-lg flex flex-col items-center aspect-square h-[72px] m-auto"
                        >
                            <img
                                src={mycategory}
                                alt={category.title}
                                className="h-[72px] w-full object-contain aspect-square"
                            />
                        </div>
                        <h3 className="text-[12px] sm:text-[15.14px] font-normal font-rubik text-center mt-2 leading-[18px]">
                            {category.title}
                        </h3>
                    </div>
                ))}
            </div>
            <OurDiseases />
        </section>
    )
}

export default SurgeryProducts
