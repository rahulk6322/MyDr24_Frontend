import React from 'react'
import Protine from '../../assets/images/protein.png'
import { Whydata } from '../../../data'
const WhyMYDR24: React.FC = () => {
    return (
        <div className="contain">
            <div
                className="p-8  rounded-lg"
                style={{
                    background: '#81A4CB1A',
                }}
            >
                <h2 className="text-head font-bold mb-6">Why MYDR24 ?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {Whydata.map((item, index) => (
                        <div key={index} className="flex flex-col">
                            <div className="text-4xl mb-4 bg-white flex justify-center items-center w-[90px] h-[90px]">
                                <img
                                    className="w-[50px] h-[50px]"
                                    src={Protine}
                                    alt={item.title}
                                />
                            </div>

                            <h3 className="text-subhead font-semibold mb-1">
                                {item.title}
                            </h3>
                            <p className="text-black-100">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WhyMYDR24
