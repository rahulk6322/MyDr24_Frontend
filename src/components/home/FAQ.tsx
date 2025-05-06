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
        <section className="contain mx-auto py-8 px-4 sm:px-6 lg:px-8 pb-8">
            <div className="mb-6">
                <div className="border-gray-300">
                    <h3 className="text-title font-rubik font-bold text-black mb-2">
                        MYDR24 Pharmacy - Largest Online Pharmacy In India
                    </h3>
                    <p className="text-black-200 text-sm mb-3">
                        As pioneers in the healthcare segment, we understand the
                        importance of trust. And that is why, over the years, we
                        worked on building that trust. We ensure that every
                        product sold through our offline/online stores are
                        checked for their authenticity, quality, and compliance
                        with the Central Drugs Standard Control Organization,
                        the national regulatory body for Indian pharmaceuticals
                        and medical devices.
                    </p>
                </div>
                <div className="border-gray-300">
                    <h3 className="text-title font-bold font-rubik text-black mb-2">
                        100% Genuine Medicine From MYDR24 Pharmacy
                    </h3>
                    <p className="text-black-200 text-sm mb-3">
                        As pioneers in the healthcare segment, we understand the
                        importance of trust. And that is why, over the years, we
                        worked on building that trust. We ensure that every
                        product sold through our offline/online stores are
                        checked for their authenticity, quality, and compliance
                        with the Central Drugs Standard Control Organization,
                        the national regulatory body for Indian pharmaceuticals
                        and medical devices.
                    </p>
                </div>
                <div className="border-gray-300 ">
                    <h3 className="text-title font-bold font-rubik text-black mb-2">
                        Fastest Home Delivery Of Your Order
                    </h3>
                    <p className="text-black-200 text-sm mb-3">
                        As pioneers in the healthcare segment, we understand the
                        importance of trust. And that is why, over the years, we
                        worked on building that trust. We ensure that every
                        product sold through our offline/online stores are
                        checked for their authenticity, quality, and compliance
                        with the Central Drugs Standard Control Organization,
                        the national regulatory body for Indian pharmaceuticals
                        and medical devices.
                    </p>
                </div>
                <div className=" border-gray-300">
                    <h3 className="text-title font-bold font-rubik text-black mb-2">
                        Extra Benefits Of Online Medicine Orders
                    </h3>
                    <p className="text-black-200 text-sm mb-3">
                        As pioneers in the healthcare segment, we understand the
                        importance of trust. And that is why, over the years, we
                        worked on building that trust. We ensure that every
                        product sold through our offline/online stores are
                        checked for their authenticity, quality, and compliance
                        with the Central Drugs Standard Control Organization,
                        the national regulatory body for Indian pharmaceuticals
                        and medical devices.
                    </p>
                </div>
            </div>
            <h2 className="text-2xl font-rubik font-semibold mb-2">
                Frequently asked questions
            </h2>
            <div className="space-y-6">
                {loading ? (
                    <Loader />
                ) : (
                    faqData.map((faq, index) => (
                        <div
                            key={index}
                            className="border-b border-gray-300 pb-3"
                        >
                            <h3 className="text-title font-rubik font-bold text-black mb-2">
                                {faq.question}
                            </h3>
                            <p className="text-black-200 text-sm">
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
