import React from 'react'
import mycategory from '../../assets/images/cetegory.png'

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

const Category: React.FC = () => {
    return (
        <section className="p-3">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-sm font-bold">Popular Categories</h2>
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                {categories.slice(0, 8).map((category, index) => (
                    <div>
                        <div
                            key={index}
                            className="bg-green-100 p-2 rounded-lg flex flex-col items-center"
                        >
                            <img
                                src={mycategory}
                                alt={category.title}
                                className="aspect-square w-full object-contain "
                            />
                        </div>
                        <h3 className="text-[11px] leading-[12.89px] font-medium mt-2 text-center">
                            {category.title}
                        </h3>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Category
