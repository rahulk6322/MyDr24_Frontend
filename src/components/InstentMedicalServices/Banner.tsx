import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'
import DrConsultationBanner from '../../assets/images/DrConsultationBanner.png' // Replace with actual image path
import { FaChevronCircleRight } from 'react-icons/fa'
import user from '../../assets/images/dummy_user.png'
import bannerImg from '../../assets/images/instentMedicalServicesBannerImg.png'
import DoctorConsultation from './DoctorConsultation';

const Banner: React.FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    // Function to open and close the modal
    const toggleModal = () => {
      setModalOpen(!isModalOpen);
    };
  
    // Function to close the modal
    const closeModal = () => {
      setModalOpen(false);
    };

    return (
        <>
        <section className="contain-content bg-[#0065B2]">
            <div className="relative rounded-lg flex">
                {/* <img
              src={slide.image}
              className="w-full h-full object-cover rounded-lg"
            /> */}
                {/* Text Overlay */}
                <div className=" inset-0 flex flex-col justify-center items-start px-6 md:px-16 lg:px-20 z-10 flex-1 py-10">
                    <h2 className="sm:text-[40px] font-rubik font-base text-white leading-[30px] mb-1">
                        Skip the travel!
                    </h2>
                    <h2 className="text-[30px] sm:text-[40px] font-rubik font-base text-white mb-2">
                        Take Online Doctor Consultation
                    </h2>
                    <p className="text-[14px] sm:text-[18px] font-rubik font-light text-white mb-6">
                        Private consultation + Audio call · Starts at just ₹199
                    </p>
                    <div className="flex gap-4 items-center mb-6">
                        <div className="flex items-center">
                            <img
                                src={user}
                                className="w-[30px] sm:w-[48px] aspect-square object-cover rounded-full border border-white z-[2]"
                            />
                            <img
                                src={user}
                                className="w-[30px] sm:w-[48px] aspect-square object-cover rounded-full border border-white ml-[-10px] z-[1]"
                            />
                            <img
                                src={user}
                                className="w-[30px] sm:w-[48px] aspect-square object-cover rounded-full border border-white z-1 ml-[-10px]"
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <p className="text-[14px] sm:text-[18px] font-rubik font-light text-white gap-2 flex items-center">
                                +155 Doctors are online
                                <div className="w-2 h-2 bg-[#00FF04] rounded-full"></div>
                            </p>
                        </div>
                    </div>
                        <button
                            onClick={toggleModal}
                            className="inline-flex items-center justify-start px-6 py-3 bg-white text-[#0065B2] font-medium rounded-lg font-rubik"
                        >
                            Consult Now
                        </button>
                </div>
                <div className="flex-1 relative items-end md:flex hidden ">
                    <div className="w-full sm:h-[70%] h-[90%] bg-[#F0FFF1] rounded-t-full absolute bottom-0 z-[-1]"></div>

                    <img
                        src={bannerImg}
                        className="w-full object-contain rounded-ful z-[1] m-0"
                    />
                </div>
            </div>
        </section>
            {/* Doctor Consultation Modal */}
            {isModalOpen && <DoctorConsultation closeModal={closeModal} />}
      </>
    )
}

export default Banner
