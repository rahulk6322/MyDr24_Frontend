import React, { useState } from 'react'
import { LiaHandPointRightSolid } from 'react-icons/lia'

const PatientStories: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Patient Stories')

    const handleTabClick = (tab: string) => {
        setActiveTab(tab)
    }

    return (
        <div className="max-w-4xl mx-auto">
            {/* Tabs */}
            <div className="flex gap-3 text-subtitle mb-6 whitespace-nowrap flex-wrap ">
                {[
                    'Patient Stories',
                    'Conditions & Procedures',
                    'Education & Work Experience',
                    'Certifications & Awards',
                ].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => handleTabClick(tab)}
                        className={`px-4 py-2 text-sm font-medium border ${
                            activeTab === tab
                                ? 'bg-white text-black border-gray-200'
                                : 'bg-white border-gray-200'
                        }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            {activeTab === 'Patient Stories' && (
                <div className="bg-white">
                    {/* Header */}
                    <h2 className="text-[20px] p-[1.2rem] border-b-[0.2px] border-[#9292921f] font-bold text-black mb-4">
                        Patient Stories for Dr. Venkatesh M J
                    </h2>

                    {/* Stories List */}
                    <div>
                        {[
                            {
                                id: 1,
                                name: 'Verified Patient',
                                review: 'Consultation was good. Thanks to the doctor for quick finding about the issue and remedy. Hoping to have a speedy recovery.',
                                time: '2 months ago',
                            },
                            {
                                id: 2,
                                name: 'Verified Patient',
                                review: 'Consultation was good. Thanks to the doctor for quick finding about the issue and remedy. Hoping to have a speedy recovery.',
                                time: '2 months ago',
                            },
                            {
                                id: 3,
                                name: 'Verified Patient',
                                review: 'Very professional and highly skilled doctor dentists and assistants. They are only satisfied if the treatment is successful and perfect, taking the wishes and well-being more.',
                                time: '2 months ago',
                            },
                        ].map((story) => (
                            <div
                                key={story.id}
                                className="bg-white p-4 border-b rounded-lg flex space-x-4"
                            >
                                {/* Avatar */}
                                <div className="flex-shrink-0">
                                    <div className="bg-[#E8FCA6] text-black rounded-full h-10 w-10 flex items-center justify-center font-bold text-[20px]">
                                        V
                                    </div>
                                </div>

                                {/* Story Content */}
                                <div className="flex-grow">
                                    <div className="flex justify-between items-center">
                                        <h3 className="font-medium text-subtitle text-black-200">
                                            {story.name}
                                        </h3>
                                        <span className=" text-black-200">
                                            {story.time}
                                        </span>
                                    </div>

                                    <div className="mt-1 flex items-center space-x-1 text-black-200">
                                        <LiaHandPointRightSolid className="w-[20px] h-[20px] text-black-200" />
                                        <p>I recommend the doctor</p>
                                    </div>

                                    <p className="text-black-200 mt-2">
                                        {story.review}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Show All Stories */}
                    <div className="p-[1.2rem]  ">
                        <button className="text-blue font-medium hover:underline">
                            Show all stories (7)
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default PatientStories
