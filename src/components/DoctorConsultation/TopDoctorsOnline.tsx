import React from 'react'
import cardiology from '../../assets/images/cardiology_icon.png'

interface Specialty {
    name: string
    icon: string
}
const specialties: Specialty[] = [
    { name: 'Cardiology', icon: '/icons/cardiology.svg' },
    { name: 'Neurology', icon: '/icons/neurology.svg' },
    { name: 'Gastroenterology', icon: '/icons/gastroenterology.svg' },
    { name: 'Orthopaedic', icon: '/icons/orthopaedic.svg' },
    { name: 'Oncology', icon: '/icons/oncology.svg' },
    { name: 'Gynecology', icon: '/icons/gynecology.svg' },
    { name: 'Dermatology', icon: '/icons/dermatology.svg' },
    { name: 'Ophthalmology', icon: '/icons/ophthalmology.svg' },
    { name: 'Pediatrics', icon: '/icons/pediatrics.svg' },
    { name: 'Endocrinology', icon: '/icons/endocrinology.svg' },
    { name: 'Urology', icon: '/icons/urology.svg' },
    { name: 'Nephrology', icon: '/icons/nephrology.svg' },
    { name: 'Pulmonology', icon: '/icons/pulmonology.svg' },
    { name: 'Rheumatology', icon: '/icons/rheumatology.svg' },
    { name: 'Neurosurgery', icon: '/icons/neurosurgery.svg' },
    { name: 'Radiology', icon: '/icons/radiology.svg' },
    { name: 'Plastic Surgery', icon: '/icons/plastic_surgery.svg' },
    { name: 'Neonatology', icon: '/icons/neonatology.svg' },
    { name: 'Vascular Surgery', icon: '/icons/vascular_surgery.svg' },
    { name: 'Psychiatry', icon: '/icons/psychiatry.svg' },
    { name: 'Dentistry', icon: '/icons/dentistry.svg' },
    { name: 'ENT', icon: '/icons/ent.svg' },
]

const TopDoctorsOnline: React.FC = () => {
    return (
        <div>
            <div className="flex flex-col lg:flex-row justify-between item-start lg:items-center">
                {/* Title */}
                <h2 className="text-[32px] font-rubik font-semibold mb-2">
                    India's Top Doctors Online
                </h2>

                {/* Buttons for Specialities and Symptoms */}
                <div className="flex flex-col sm:flex-row  mb-4">
                    <button className="px-4 py-2 min-h-[48px] min-w-[160px] bg-blue text-white rounded-full mb-3 sm:mb-0 sm:mr-4 hover:bg-blue-700">
                        Specialities
                    </button>
                    <button className="px-4 py-2 min-h-[48px] min-w-[160px] bg-black text-white rounded-full hover:bg-gray-800">
                        Symptoms
                    </button>
                </div>
            </div>

            {/* Grid Layout for Specialities */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                {specialties.map((specialty, index) => (
                    <div
                        key={index}
                        className="bg-white flex flex-col items-center p-3 sm:p-4 lg:p-6 border rounded-lg hover:shadow-lg cursor-pointer transition-shadow duration-200"
                    >
                        <img
                            src={cardiology}
                            alt={specialty.name}
                            className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 mb-2"
                        />
                        <p className="text-black font-semibold sm:text-[12px] lg:text-lg">
                            {specialty.name.length > 11
                                ? specialty.name.slice(0, 10) + '....'
                                : specialty.name}
                        </p>
                    </div>
                ))}
            </div>

            {/* View All Button */}
            <div className="mt-6 lg:mt-8 text-center">
                <button className="px-4 py-2 border border-blue text-blue rounded-full hover:bg-blue-100 transition-colors duration-200">
                    View All
                </button>
            </div>
        </div>
    )
}

export default TopDoctorsOnline
