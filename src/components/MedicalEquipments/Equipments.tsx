import React from 'react'
import mycategory from '../../assets/images/equipment_dummy.png'

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

const Equipments: React.FC = () => {
    return (
        <section className="contain py-3 px-3 sm:py-8 sm:px-8">
            <h2 className="text-sm font-semibold font-rubik sm:text-head text-center mb-2">
                Some of the Equipment we provide for Purchase & Rent:
            </h2>
            <p className="text-sm font-rubik sm:text-xs text-center mb-8 px-32">
                Buy and rent an ICU setup at home so your loved ones can stay in
                the comfort of home with the best equipment right by their side.
                Apollo HomeCare provides medical equipment for rent or sale in
                India. Our medical equipment for home use includes an oxygen
                cylinder, oxygen concentrator, hospital beds, Bi-PAP/CPAP
                machine, wheelchair, cardiac monitors.
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
                {categories.map((category, index) => (
                    <div>
                        <div
                            key={index}
                            className="bg-white p-4 rounded-lg flex flex-col items-center border border-white hover:border-[#1864B3] box-border"
                        >
                            <img
                                src={mycategory}
                                alt={category.title}
                                className="h-[166px] w-full object-contain"
                            />
                        </div>
                        <h3 className="text-[14px] sm:text-[20px] font-rubik leading-[24px] font-semibold text-center mt-2">
                            {category.title}
                        </h3>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Equipments
