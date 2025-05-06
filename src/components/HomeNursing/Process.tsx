import React from 'react'
import mycategory from '../../assets/images/cetegory.png'
import ourProcess1 from "../../assets/icons/ourProcess_1.svg"
import ourProcess2 from "../../assets/icons/ourProcess_2.svg"
import ourProcess3 from "../../assets/icons/ourProcess_3.svg"
import ourProcess4 from "../../assets/icons/ourProcess_4.svg"
import ourProcess5 from "../../assets/icons/ourProcess_5.svg"


const process = [
    {
        image: ourProcess1, // Replace with actual image path
        step: 'STEP 1',
        desc:'Call our helpline to book an appointment for a physical assessment.'
    },
    {
        image: ourProcess2, // Replace with actual image path
        step: 'STEP 2',
        desc:"Upon physical assessment, our on-site counsellor shall determine the suitable 'Care' options for your review."
    },
    {
        image: ourProcess3, // Replace with actual image path
        step: 'STEP 3',
        desc:'The selected option will be auto populated in the contract including billing details for your authorization.'
    },
    {
        image: ourProcess4, // Replace with actual image path
        step: 'STEP 4',
        desc:'An on site team will be tasked to install requisite facilities in the designated physical area.'
    },
    {
        image: ourProcess5, // Replace with actual image path
        step: 'STEP 5',
        desc:'The designated physical area will be disinfected and fumigated to make it patient ready.'
    },
]

const Process: React.FC = () => {
    return (
       <>
     <h1 className="font-rubik text-[20px] sm:text-[36px] font-bold mb-2 mt-8">
                    Our Process
                    </h1>
                    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mt-10 w-full">
                        {process.map((item,index)=>(
                        <div className="flex justify-center flex-col items-center mb-4">
                            <div className="relative">
                               
                                <div className="sm:w-[162.15px] sm:h-[162.15px] w-[120px] h-[120px] bg-[#B1DDFF3B] rounded-[13.58px] absolute sm:top-7 top-3 rotate-45 z-auto" style={{boxShadow: '0px 4.53px 4.53px 0px #0000000D'}}>
                                  
                                </div>
                                <div className="sm:w-[162.15px] sm:h-[162.15px] w-[120px] h-[120px] bg-[#1864B3] rounded-[13.58px] rotate-45 z-10 flex justify-center items-center">
                                <img src={item.image} className="-rotate-45 w-[64px] max-h-[72px] md:w-auto md:h-auto"/>
                                </div>

                               
                               
                            </div>
                            <div className="flex mt-10 sm:mt-20 flex-col justify-center items-center">
                                    <div className="bg-blue w-[6px] h-[6px] rounded-xl aspect-square"></div>
                                    <div className="bg-blue w-[2px] h-[25px] md:h-[50px]"></div>
                                    <div className="bg-blue w-[6px] h-[6px] rounded-xl aspect-square"></div>
                                </div>
                            <div className='mt-4'>
                                <h4 className="font-rubik text-lg md:text-2xl font-medium text-center">{item.step}</h4>
                                <p className="font-rubik text-sm font-normal text-center min-h-[100px] md:min-h-[60px]">{item.desc}</p>
                            </div>
                        </div>
                        ))}
                    </div>
       </>
    )
}

export default Process
