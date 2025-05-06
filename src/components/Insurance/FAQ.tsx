import React, { useState } from 'react'
import Arrow from '../../assets/icons/arrow_down.svg'

const collapsibleData = [
    {
        title: '1. Which term insurance policy should I buy? ',
        content: 'This is the content of section 1.',
    },
    {
        title: '2. What kind of deaths are covered in term plan?',
        content: 'This is the content of section 2.',
    },
    {
        title: '3. What is the minimum & maximum age for a term insurance policy?',
        content: 'This is the content of section 3.',
    },
    {
        title: '4. Who pays the term insurance premium in a term plan?',
        content: 'This is the content of section 4.',
    },
    {
        title: '5. Who should opt for a Rs 1 crore term insurance plan?',
        content: 'This is the content of section 5.',
    },
    {
        title: '6. Is it worth to buy a critical illness benefit rider along with term insurance plans? ',
        content: 'This is the content of section 5.',
    },
    {
        title: '7. Are there any tax savings offered by term insurance plans? ',
        content:
            'Yes, term insurance plans can help you save tax every year, thanks to the provisions of section 80C of the Income Tax Act, 1961. The annual premiums you pay for your term plan are deductible from your total taxable income up to Rs. 1.5 lakhs each year under old tax regime, subject to the conditions specified therein.[1] Also, the pay-out your nominee may receive in your absence is tax exempt as per the provision of Section 10(10D) of the Income Tax Act, 1961[1].',
    },
    {
        title: '8. How much does a term life policy cost? ',
        content: 'This is the content of section 5.',
    },
    {
        title: '9. Do I have to pay an additional premium for a Term Insurance Return of Premium (TROP) plan?  ',
        content: 'This is the content of section 5.',
    },
    {
        title: '10. Is Term Insurance with Return of Premium (TROP) worth buying?  ',
        content: 'This is the content of section 5.',
    },
    {
        title: '11. Do I get my money back if I surrender my term insurance with Return of Premium (TROP)?  ',
        content: 'This is the content of section 5.',
    },
    {
        title: '12. What affects your term insurance premium? ',
        content: 'This is the content of section 5.',
    },
]

const FAQ: React.FC = () => {
    // Track which section is open by index
    const [openSectionIndex, setOpenSectionIndex] = useState<number | null>(
        null
    )

    const toggleSection = (index: number) => {
        // If the clicked section is already open, close it; otherwise, open the new one
        setOpenSectionIndex(openSectionIndex === index ? null : index)
    }

    return (
        <section className="md:p-6 md:py-8 py-3 p-3 mt-4 sm:mx-10 rounded-lg m-0">
            <h4 className="sm:text-[32px] text-base font-bold font-rubik mb-8 text-center">
                Frequently Asked Questions on Term Insurance
            </h4>
            <div className="w-full mx-auto bg-white rounded-lg p-3">
                {collapsibleData.map((section, index) => (
                    <div key={index} className="mb-2 border-b border-gray-100">
                        {/* Collapsible Header */}
                        <div
                            className=" p-2 cursor-pointer flex justify-between items-center"
                            onClick={() => toggleSection(index)}
                        >
                            <h2 className="md:text-base  text-sm font-medium  font-rubik text-[#383838] ">
                                {section.title}
                            </h2>
                            <span
                                className={`transform transition-transform ${
                                    openSectionIndex === index
                                        ? 'rotate-0'
                                        : 'rotate-180'
                                }`}
                            >
                                <div className="border-l-2 border-t-2 border-black w-[10px] h-[10px] transform rotate-45 "></div>
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
                                <p className="text-[#383838] text-sm font-normal  font-roboto leading-[24px] ">
                                    {section.content}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FAQ
