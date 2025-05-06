import React from 'react'
import { quicktabs } from '../../../data'
import { FaChevronRight } from 'react-icons/fa'

const QuickTabs: React.FC = () => {
    return (
        <section className="">
            <div className="overflow-x-scroll flex gap-3">
                {quicktabs.map((quicktab, index) => (
                    <div
                        className={`flex-[0_0_25%]  ${index === 0 ? 'ml-3' : ''}`}
                    >
                        <div
                            key={index}
                            className={`p-4 rounded-lg flex items-center justify-center w-100 mb-2`}
                            style={{
                                backgroundColor: quicktab.backgroundColor,
                            }}
                        >
                            <div className="flex items-center">
                                <img
                                    src={quicktab.image}
                                    alt={quicktab.title}
                                    className="h-[48px] object-contain"
                                />
                            </div>
                        </div>
                        <h3 className="font-[600] text-md leading-5 mb-2 text-white text-[12px] leading-[20px] text-center">
                            {quicktab.title}
                        </h3>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default QuickTabs
