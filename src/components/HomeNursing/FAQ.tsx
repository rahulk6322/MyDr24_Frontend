import React from 'react'
import Loader from '../global/Loader'

interface Faq {
    question: string
    answer: string
}

interface FAQProps {
    faqData: Faq[]
    loading: boolean
}

const FAQ: React.FC<FAQProps> = ({ faqData, loading }) => {
    return (
        <section className="contain mx-auto py-4 px-0 sm:px-0 lg:px-0 pb-8 md:mt-8">
          
          <h1 className="font-rubik text-[20px] sm:text-[36px] font-bold mb-2 ">
                Frequently asked questions
            </h1>
            <div className="space-y-6">
                {loading ? (
                    <Loader />
                ) : (
                    faqData.map((faq, index) => (
                        <div
                            key={index}
                            className="border-b border-gray-300 pb-3"
                        >
                            <h3 className="text-sm sm:text-title font-rubik font-bold text-black mb-2">
                                {faq.question}
                            </h3>
                            <p className="text-black-200 text-xs sm:text-sm">
                                {faq.answer}
                            </p>
                        </div>
                    ))
                )}
            </div>
        </section>
    )
}

export default FAQ
