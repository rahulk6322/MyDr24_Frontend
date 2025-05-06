import React, { useState } from 'react'
import Arrow from '../../assets/icons/arrow_down.svg'

const collapsibleData = [
    {
        title: 'Specialities    ',
        content: 'This is the content of section 1.',
    },
    {
        title: 'More Specialities',
        content: 'This is the content of section 2.',
    },
    {
        title: 'Health Packages',
        content: 'This is the content of section 3.',
    },
    {
        title: 'Lab Tests',
        content: 'This is the content of section 4.',
    },
    {
        title: 'Scans',
        content: 'This is the content of section 5.',
    },
]

const MultipleCollapsibleSections: React.FC = () => {
    // Track which section is open by index
    const [openSectionIndex, setOpenSectionIndex] = useState<number | null>(
        null
    )

    const toggleSection = (index: number) => {
        // If the clicked section is already open, close it; otherwise, open the new one
        setOpenSectionIndex(openSectionIndex === index ? null : index)
    }

    return (
        <div className="w-full max-w-lg mx-auto bg-white shadow-lg rounded-lg p-3">
            {collapsibleData.map((section, index) => (
                <div key={index} className="mb-2 border-b border-gray-100">
                    {/* Collapsible Header */}
                    <div
                        className=" p-2 cursor-pointer flex justify-between items-center"
                        onClick={() => toggleSection(index)}
                    >
                        <h2 className="text-[11px] font-normal  font-roboto text-[#00192D] ">
                            {section.title}
                        </h2>
                        <span
                            className={`transform transition-transform ${
                                openSectionIndex === index
                                    ? 'rotate-0'
                                    : 'rotate-180'
                            }`}
                        >
                            <div className="border-l border-t border-black w-[6px] h-[6px] transform rotate-45"></div>
                        </span>
                    </div>

                    {/* Collapsible Content */}
                    <div
                        className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                            openSectionIndex === index
                                ? 'max-h-screen'
                                : 'max-h-0'
                        }`}
                    >
                        <div className="p-2">
                            <p className="text-gray-700 text-[11px] font-normal  font-roboto ">
                                {section.content}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MultipleCollapsibleSections
