import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import { FaChevronRight } from 'react-icons/fa';
import { specialityInstentServices } from '../../../data';
import cardiology from '../../assets/images/cardiologist.png';
import SpecialtiesDoctorConsultation from './SpecialtiesDrConsultation';

// Custom Next Arrow
const NextArrow = ({ onClick }: { onClick?: () => void }) => {
  return (
    <div
      className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-black p-3 rounded-full cursor-pointer z-10 border border-gray-400"
      onClick={onClick}
    >
      <HiOutlineChevronRight />
    </div>
  );
};

// Custom Prev Arrow
const PrevArrow = ({ onClick }: { onClick?: () => void }) => {
  return (
    <div
      className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-black p-3 rounded-full cursor-pointer z-10 border border-gray-400"
      onClick={onClick}
    >
      <HiOutlineChevronLeft />
    </div>
  );
};

const Speciality: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedSpeciality, setSelectedSpeciality] = useState<string>('');

  const openModal = (speciality: string) => {
    setSelectedSpeciality(speciality);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedSpeciality('');
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="lg:px-36 sm:px-16 px-3 mt-8">
      <div className="flex justify-between items-center mb-4">
        <div className=" justify-center gap-4 item-center">
          <h2 className="text-sm font-semibold font-rubik sm:text-head">
            25+ Specialities
          </h2>
          <p className="text-gray-400 text-xs sm:text-base font-rubik">
            Consult with top doctors across specialities
          </p>
        </div>
      </div>

      <Slider {...settings}>
        {specialityInstentServices.map((specialty, index) => (
          <div key={index} className="p-2 h-full">
            <div className="shadow-md w-full h-full rounded-lg justify-between flex  items-center p-4 transition duration-300">
              <div className="p-4 bg-[#E0F2FF] rounded-full flex-[0_0_30%] aspect-square flex items-center justify-center">
                <img
                  src={cardiology} // Ensure this matches the correct property or replace with `specialty.image` if dynamic
                  alt={specialty.title}
                  className="h-[40px] w-[40px] aspect-square"
                />
              </div>
              <div className="flex-[0_0_64%]">
                <h3 className="text-base font-normal leading-[15px] font-rubik min-h-[30px]">
                  {specialty.title}
                </h3>
                <p className="text-sm text-gray-400 font-rubik font-normal">
                  ₹{specialty.price}
                </p>
                <button
                  onClick={() => openModal(specialty.title)}
                  className="text-[#0065B2] mt-2 gap-1 font-rubik font-normal flex items-center"
                >
                  Consult Now
                  <FaChevronRight className=" text-[12px] text-[#0065B2]" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {isModalOpen && (
        <SpecialtiesDoctorConsultation
          closeModal={closeModal}
          speciality={selectedSpeciality} // Pass the selected speciality
        />
      )}
    </section>
  );
};

export default Speciality;
