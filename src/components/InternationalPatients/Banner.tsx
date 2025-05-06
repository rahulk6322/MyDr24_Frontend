import React, { useState } from "react";
import BannerPic from '../../assets/images/internationalPatients_banner.jpg';
import Rect from '../../assets/images/white_banner_rect.svg';

import bannerImg from "../../assets/images/internationalPatients_banner.jpg";

const Banner: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <section className="relative ">
      <div className="relative flex sm:bg-none bg-[#0065B2]">
  
        {/* Text Overlay */}
        <div className="  sm:absolute top-[10px] w-1/2 px-3 pr-3 py-10 sm:py-0 sm:px-10 sm:pr-20 left-[10px] inset-0 flex flex-col justify-center items-start z-10 flex-1">
        
          <h2 className="text-[20px] sm:text-[30px] text-nowrap md:text-[20px] lg:text-[48px] xl:text-[48px] font-rubik font-semibold text-white ">
          International Patient
          </h2>
        <p className="text-white text-sm sm:text-lg leading-6 font-light font-rubik">MYDR24 is one of the best multispecialty family hospitals in the city of Bengaluru equipped with CCU/ICU/ NICU/ PICU/ SICU.</p>
        </div>


          <img
            src={BannerPic}
            className="w-full object-cover rounded-ful z-[1] m-0 sm:block h-[250px]  sm:h-[350px] hidden"
          />


      </div>

    </section>
  );
};

export default Banner;
