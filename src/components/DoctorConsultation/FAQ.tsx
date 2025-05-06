import React, { useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'

interface FAQItem {
    question: string
    answer: string
}

interface FAQProps {
    faqData: FAQItem[]
}

const Faq: React.FC<FAQProps> = ({ faqData }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0)

    const handleToggle = (index: number) => {
        if (activeIndex === index) {
            setActiveIndex(null) // Close the currently open item
        } else {
            setActiveIndex(index) // Open the clicked item
        }
    }

    return (
        <section className="">
            <h2 className="text-2xl font-bold mb-6">
                Frequently Asked Questions (FAQs)
            </h2>
            <div className="space-y-4">
                {faqData.map((faq, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-sm">
                        <button
                            onClick={() => handleToggle(index)}
                            className="w-full text-left px-4 py-5 flex justify-between items-center"
                        >
                            <span className="text-lg font-semibold text-black">
                                {faq.question}
                            </span>
                            <span className="text-lg text-black">
                                {activeIndex === index ? (
                                    <FaMinus />
                                ) : (
                                    <FaPlus />
                                )}
                            </span>
                        </button>
                        {activeIndex === index && (
                            <div className="px-4 pb-5 text-gray-600">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Faq
