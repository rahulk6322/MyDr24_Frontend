import React from 'react';
import img1 from '../../assets/images/InternationalServiceImg1.png'
import img2 from '../../assets/images/InternationalServiceImg2.png'
import img3 from '../../assets/images/InternationalServiceImg3.png'
import img4 from '../../assets/images/InternationalServiceImg4.png'
import img5 from '../../assets/images/InternationalServiceImg5.png'
import img6 from '../../assets/images/InternationalServiceImg6.png'

const services = [
    {
        image: img1, // Replace with actual image path
        title: 'Elderly Care',
        description:"Prior scheduled appointments to complete hospital registration and billing process."
    },
    {
      image: img2, // Replace with actual image path
        title: 'Travel Assistance',
        description:"Our staff will guide and assist you with all your Visa needs. We will initiate all the necessary paperwork necessary on your healing process."
    },
    {
      image: img3, // Replace with actual image path
        title: 'Billing Support',
        description:"We assist the patients at every stage of their hospital stay. Our Billing Department is available 24x7 and is ready to clarify any of your concerns."
    },
    {
      image: img4, // Replace with actual image path
        title: 'Complete Assistance',
        description:"We, Kauvery Hospital are incomparable, as we provide complete end-to-end assistance throughout your entire stay. We help you provide the best stay."
    },
    { 
      image: img5, // Replace with actual image path
        title: 'Language Assistance',
        description:"If needed, our concierge will assist you in connecting you with an interpreter."
    },
    { 
      image: img6, // Replace with actual image path
        title: 'Finding A Doctor',
        description:"We ensure that we assist you with an expert physician who guides you with the correct diagnosis. We have an excellent team of doctors."
    },
   
];

const Services: React.FC = () => {
    return (
        <section className="contain py-3 px-3 sm:py-8 sm:px-8 mt-6">
 <div className='flex flex-col justify-center gap-2 item-center mb-6'>
                    <h2 className="sm:text-2xl text-base font-rubik font-semibold text-center mb-2">International Patient Services</h2>
                    <p className="md:text-[15px] text-[#383838] md:px-32 text-xs  leading-[17.78px] text-center font-rubik">Our Department of International Patient Care comprises of International Concierges, Billing Assistance, Interpreters and other non-medical staff trained well to provide efficient assistance and to ensure your visit is safe and successful.</p>

                </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 sm:gap-10 gap-2">
                {services.map((service, index) => (
             
                    <div key={index} className=" rounded-xl flex flex-col items-center relative">
                        <img
                            src={service.image}
                            alt={service.title}
                            className="h-[280px] w-full object-cover rounded-xl"
                        />
                        <div className="absolute w-full h-full top-0 left-0 rounded-xl" style={{background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #0065B2 100%)'}}></div>
                        <div className="absolute bottom-0  pl-6 pb-8 pr-4">
                            <h2 className='text-white font-rubik text-[20px]'>{service.title}</h2>
                            <p className='text-white font-rubik text-sm leading-[22px]'>{service.description}</p>
                        </div>
                    </div>
                     
                ))}
            </div>
        </section>
    );
};

export default Services;
