import React from 'react'
import mycategory from '../../assets/images/cetegory.png'
import nursingProdureImg1 from '../../assets/images/nursingCareProcedures_1.png'
import nursingProdureImg2 from '../../assets/images/nursingCareProcedures_2.png'
import nursingProdureImg3 from '../../assets/images/nursingCareProcedures_3.png'
import nursingProdureImg4 from '../../assets/images/nursingCareProcedures_4.png'
import nursingProdureImg5 from '../../assets/images/nursingCareProcedures_5.png'
import nursingProdureImg6 from '../../assets/images/nursingCareProcedures_6.png'
import nursingProdureImg7 from '../../assets/images/nursingCareProcedures_7.png'
import nursingProdureImg8 from '../../assets/images/nursingCareProcedures_8.png'
import nursingProdureImg9 from '../../assets/images/nursingCareProcedures_9.png'

const nursingProcedures =[{
    name:'Wound Dressing',
    img: nursingProdureImg1
},{
    name:'ECG',
    img: nursingProdureImg2
},{
    name:'Foley Cath Insertion',
    img: nursingProdureImg3
},{
    name:'IV INFUSION',
    img: nursingProdureImg4
},{
    name:'ENEMA',
    img: nursingProdureImg5
},{
    name:'IV INJECTION',
    img: nursingProdureImg6
},{
    name:'BLOOD TRANSFUSION',
    img: nursingProdureImg7
},{
    name:'ABG collection',
    img: nursingProdureImg8
},{
    name:'S/C INJECTION/IM INJECTION',
    img: nursingProdureImg9
},]
const Procedures: React.FC = () => {
    return (
       <>
       <h1 className="font-rubik text-[20px] sm:text-[36px] font-bold mb-2 mt-8">
                    Nursing Care Procedures
                    </h1>
                    <div className="grid grid-cols-2 lg:grid-cols-3  gap-4 lg:gap-8 mt-4 w-full">
                    {nursingProcedures.map((item, index) => (
                        <div className="relative">
                        <img src={item.img} className="sm:h-[276px] h-[200px] object-cover w-full rounded-xl"/>
                            <div className="overlay absolute w-full h-full top-0 left-0 rounded-xl" style={{background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 29%, #000000 90.59%)'}}></div>
                            <p className="font-rubik text-white text-sm sm:text-2xl absolute bottom-5 font-semibold w-full text-center">{item.name}</p>
                        </div>
                        ))}
                    </div></>
    )
}

export default Procedures
