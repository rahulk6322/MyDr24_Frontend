import React from 'react'
import { pharmacyInfo, faqData } from '../../../data'
const FAQ: React.FC = () => {
    return (
        <section className=" contain mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <div className="mb-[40px]">
                {pharmacyInfo.map((info, index) => (
                    <div key={index} className="pb-4">
                        <h3 className="text-title font-bold text-black mb-2">
                            {info.title}
                        </h3>
                        <p className="text-black-100 text-sm">
                            {info.description}
                        </p>
                    </div>
                ))}
            </div>

            <h2 className="text-head font-bold text-black mb-6">
                Frequently asked questions
            </h2>
            <div className="space-y-6">
                {faqData.map((faq, index) => (
                    <div key={index} className="border-b border-gray-300 pb-6">
                        <h3 className="text-title font-bold text-black mb-2">
                            {faq.question}
                        </h3>
                        <p className="text-black-100 text-sm">{faq.answer}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FAQ
