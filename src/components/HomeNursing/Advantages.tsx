import React from 'react'
import mycategory from '../../assets/images/cetegory.png'
import nursingProdureImg1 from '../../assets/images/care_advantages_1.png'
import nursingProdureImg2 from '../../assets/images/care_advantages_2.png'
import nursingProdureImg3 from '../../assets/images/care_advantages_3.png'
import nursingProdureImg4 from '../../assets/images/care_advantages_4.png'

const nursingProcedures =[{
    name:'Clinical Protocols',
    img: nursingProdureImg1,
    desc:'Regular clinical assessment, clinical audits and infection surveillanceat home'
},{
    name:'Clinical Protocols',
    img: nursingProdureImg2,
    desc:'Regular clinical assessment, clinical audits and infection surveillanceat home'
},{
    name:'Clinical Protocols',
    img: nursingProdureImg3,
    desc:'Regular clinical assessment, clinical audits and infection surveillanceat home'
},{
    name:'Clinical Protocols',
    img: nursingProdureImg4,
    desc:'Regular clinical assessment, clinical audits and infection surveillanceat home'
}]
const CareAdvantages: React.FC = () => {
    return (
       <>
         <h1 className="font-rubik text-[20px] sm:text-[36px] font-bold mb-2 mt-8">
       Mydr24 Nursing Care Advantages
                    </h1>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-8 mt-4 w-full">
                    {nursingProcedures.map((item, index) => (
                        <div className="relative">
                        <img src={item.img} className="h-[250px] md:h-[387px] object-cover w-full rounded-lg"/>
                        
                        <h4 className="font-rubik text-base sm:text-lg font-medium text-[#0065B2] mt-3">{item.name}</h4>
                        <p className="font-rubik text-xs sm:text-sm font-normal min-h-[60px]">{item.desc}</p>
                        </div>
                        ))}
                    </div></>
    )
}

export default CareAdvantages
