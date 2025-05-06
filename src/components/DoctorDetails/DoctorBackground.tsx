import React from 'react'

const DoctorBackground: React.FC = () => {
    return (
        <div
            className="bg-white p-6 mx-auto"
            style={{
                boxShadow: '0px 1px 2px 0px #00000014',
            }}
        >
            {/* Services */}
            <div className="mb-6">
                <div className="flex gap-3 items-center ">
                    <h2 className="text-title font-rubik font-bold text-black">
                        Services
                    </h2>
                    <a
                        href="#"
                        className="text-blue font-medium text-[12px] hover:underline"
                    >
                        View all (134)
                    </a>
                </div>
                <ul className="grid grid-cols-3 gap-2 mt-2 text-[#282828] list-disc list-inside">
                    {[
                        'Dental Fillings',
                        'Tooth Extraction',
                        'Teeth Whitening',
                        'Oral Rehabilitation',
                        'Crowns and Bridges Fixing',
                        'Dental Braces Fixing',
                        'Teeth – Jewellery',
                        'Tooth Restoration',
                        'Invisible/Clear Braces',
                        'Implant Rehabilitation',
                        'Impaction / Impacted Tooth Extraction',
                        'Wisdom Tooth Extraction',
                        'RCT – Root Canal Treatment',
                        'Artificial Teeth',
                        'Cosmetic/Aesthetic Dentistry',
                    ].map((service, index) => (
                        <li key={index} className="text-sm">
                            {service}
                        </li>
                    ))}
                </ul>
            </div>

            <hr className="mb-6" />

            {/* Specializations and Awards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Specializations */}
                <div>
                    <div className="flex gap-3 items-center">
                        <h2 className="text-title font-rubik font-bold text-black">
                            Specializations
                        </h2>
                        <a
                            href="#"
                            className="text-blue text-[12px] font-medium hover:underline"
                        >
                            View all (6)
                        </a>
                    </div>
                    <ul className="mt-2 text-gray-700 list-disc list-inside">
                        {[
                            'Dentist',
                            'Implantologist',
                            'Pediatric Dentist',
                            'Cosmetic/Aesthetic Dentist',
                            'Preventive Dentistry',
                        ].map((specialization, index) => (
                            <li key={index} className="text-sm">
                                {specialization}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Awards and Recognitions */}
                <div>
                    <h2 className="text-title font-rubik font-bold text-black">
                        Awards and Recognitions
                    </h2>
                    <ul className="mt-2 text-gray-700 list-disc list-inside">
                        {[
                            'Certified in Implants by Nobel Biocare – 2008',
                            'Certified Sinus Lift Implantologist by Osstem – 2010',
                        ].map((award, index) => (
                            <li key={index} className="text-sm">
                                {award}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <hr className="mb-6" />

            {/* Education and Memberships */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Education */}
                <div>
                    <h2 className="text-title font-rubik font-bold text-black">
                        Education
                    </h2>
                    <ul className="mt-2 text-gray-700 list-disc list-inside">
                        {[
                            'BDS – MS Ramaiah Dental College, Bangalore, 1999',
                            'MDS – Paedodontics And Preventive Dentistry – Bapuji college of dental sciences, Davangere, 2004',
                        ].map((education, index) => (
                            <li key={index} className="text-sm">
                                {education}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Memberships */}
                <div>
                    <h2 className="text-title font-rubik font-bold text-black">
                        Memberships
                    </h2>
                    <ul className="mt-2 text-gray-700 list-disc list-inside">
                        {[
                            'Indian Dental Association',
                            'Indian Society of Pediatric and Preventive Dentistry',
                            'Indian Society of Oral Implantologist',
                        ].map((membership, index) => (
                            <li key={index} className="text-sm">
                                {membership}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <hr className="mb-6" />

            {/* Experience and Registrations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Experience */}
                <div>
                    <h2 className="text-title font-rubik font-bold text-black">
                        Experience
                    </h2>
                    <ul className="mt-2 text-gray-700 list-disc list-inside">
                        {[
                            '2004 – 2016 Dentist at Chisel Dental',
                            '2008 – 2016 Implantologist at Chisel dental clinics',
                            '2005 – 2009 Asst. Professor – Paediatric dentistry at Ambedkar College of Dental Sciences',
                            '2010 – 2013 Asso. Professor-Paediatric dentistry at SAIMS',
                            '2013 – 2015 Prof.and HOD-Paediatric dentistry at TMCollege',
                        ].map((experience, index) => (
                            <li key={index} className="text-sm">
                                {experience}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Registrations */}
                <div>
                    <h2 className="text-title font-rubik font-bold text-black">
                        Registrations
                    </h2>
                    <ul className="mt-2 text-gray-700 list-disc list-inside">
                        <li className="text-sm">
                            9242A Karnataka State Dental Council, 2000
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DoctorBackground
