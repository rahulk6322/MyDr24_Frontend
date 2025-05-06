import React from 'react'
import logoImage from '../../assets/images/WhatsAppOrder.png' // Replace with actual image path
import illustrationImage from '../../assets/images/DoctorCalling.png' // Replace with actual image path
import WhatsAppOrderText from '../../assets/images/WhatsappToOrders.png'
import WhatsappLogo from '../../assets/images/logos_whatsapp-icon.png'
const WhatsAppOrder: React.FC = () => {
    return (
        <div className="contain">
            <div className=" my-6 px-4 bg-[#ffefdc] pt-4 rounded-lg flex lg:flex-row  justify-between items-center flex-col sm:gap-5  lg:py-0">
                <div className="flex gap-5 ">
                    <div className="bg-white rounded-full p-1 justify-center items-center hidden lg:block">
                        <img
                            src={logoImage}
                            alt="Logo"
                            className="h-[156px] min-w-[156px] object-contain mt-1 "
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <div>
                            <h3 className="text-3xl mb-4 whitespace-nowrap">
                                Yay! Now you can
                            </h3>
                            <img src={WhatsAppOrderText} alt="" />
                        </div>
                    </div>
                </div>

                <div>
                    <a
                        href="https://wa.me/919667378887" // Replace with the actual WhatsApp link
                        className="bg-[#06B90C] w-[345px] h-[48px] gap-5 text-white text-[18px] py-2 px-4 rounded-lg flex  justify-center items-center hover:bg-green-700 transition-colors"
                    >
                        Whatsapp @ +91 96673 78887
                        <img src={WhatsappLogo} alt="" />
                    </a>
                </div>

                {/* Right Section - Illustration */}
                <div className="hidden lg:block">
                    <img
                        src={illustrationImage} // Replace with the actual illustration image path
                        alt="Doctors Illustration"
                        className=" md:h-40 lg:h-48 object-contain"
                    />
                </div>
            </div>
        </div>
    )
}

export default WhatsAppOrder
