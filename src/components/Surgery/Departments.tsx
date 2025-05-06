import React from 'react'
import mycategory from '../../assets/images/department_blog_1.png'

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

const Departments: React.FC = () => {
    return (
        <section className="contain py-3 px-3 sm:py-8 sm:px-0">
            <h4 className="text-base sm:text-head font-bold font-rubik mb-8">
                Our Departments
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-8">
                {categories.slice(0, 9).map((category, index) => (
                    <div className="bg-white rounded-lg">
                        <img
                            src={mycategory}
                            alt={category.title}
                            className="h-[120px] w-full object-cover rounded-t-lg"
                        />
                        <div className="p-2">
                            <h3 className="text-[14px] sm:text-[19.2px] font-semibold ">
                                {category.title}
                            </h3>
                            <p className="text-[12px] sm:text-[16.8px] font-normal text-[#2D2D2D] ">
                                Choose laparoscopy for minimally invasive
                                precision in your medical care.
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Departments
