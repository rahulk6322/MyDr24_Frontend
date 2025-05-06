import React from 'react'
import AmazonLogo from '../../assets/images/amazon_logo.png'
import RupayLogo from '../../assets/images/rupay_logo.png'
import PhonePe from '../../assets/images/phonepe_logo.png'
import Paytm from '../../assets/images/paytm_logo.png'
import GooglePay from '../../assets/images/gpay_logo.png'
import Playstore from '../../assets/images/playstore_logo.png'
import Appstore from '../../assets/images/appstore_logo.png'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
const FooterMobile: React.FC = () => {
    return (
        <footer className="bg-[#F0F9FF] py-3 px-3 pb-24">
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-4">
                Our Payment Partners
            </h3>
            <div className="flex gap-6">
                <img
                    src={GooglePay}
                    alt="Google Pay"
                    className="w-[49px] h-[19px] m-0"
                />
                <img
                    src={Paytm}
                    alt="Paytm"
                    className="w-[54px] h-[17px]  m-0"
                />
                <img
                    src={PhonePe}
                    alt="PhonePe"
                    className="w-[21px] h-[21px]  m-0"
                />
                <img
                    src={RupayLogo}
                    alt="Rupay"
                    className="w-[57px] h-[15px]  m-0"
                />
                <img
                    src={AmazonLogo}
                    alt="Amazon Pay"
                    className="w-[36px] h-[20px]  m-0"
                />
            </div>
            <div className="mt-4 flex gap-6 mb-4">
                <img
                    src={Playstore}
                    alt="Google Play Store"
                    className="w-[100px] h-[31px] m-0 mt-2"
                />
                <img
                    src={Appstore}
                    alt="App Store"
                    className="w-[100px] h-[33px] m-0 mt-2"
                />
            </div>
            <div className="flex">
                {/* Column 1: IT Company and Services */}
                <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2 text-base">
                        Company
                    </h3>
                    <ul className="space-y-2 text-base text-[#001E35] mb-10 font-normal">
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#">Careers</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                        <li>
                            <a href="#">Partner with PharmEasy</a>
                        </li>
                        <li>
                            <a href="#">Contact Us</a>
                        </li>
                    </ul>

                    <h3 className="font-semibold text-gray-900 mb-2 text-base">
                        Featured Categories
                    </h3>
                    <ul className="space-y-4 text-[10px] text-[#001E35] font-roboto mb-10 font-normal">
                        <li>
                            <a href="#">Top Products</a>
                        </li>
                        <li>
                            <a href="#">Elderly Care</a>
                        </li>
                        <li>
                            <a href="#">Personal Care</a>
                        </li>
                        <li>
                            <a href="#">Healthcare Devices</a>
                        </li>
                        <li>
                            <a href="#">Health Food and Drinks</a>
                        </li>
                        <li>
                            <a href="#">Skin Care</a>
                        </li>
                        <li>
                            <a href="#">Mother and Baby Care</a>
                        </li>
                        <li>
                            <a href="#">Accessories & Wearables</a>
                        </li>
                        <li>
                            <a href="#">Fitness Supplements</a>
                        </li>
                        <li>
                            <a href="#">Ayurvedic Care</a>
                        </li>
                        <li>
                            <a href="#">Sexual Wellness</a>
                        </li>
                        <li>
                            <a href="#">Diabetic Care</a>
                        </li>
                        <li>
                            <a href="#">Health Condition</a>
                        </li>
                        <li>
                            <a href="#">Home Care</a>
                        </li>
                    </ul>
                </div>

                {/* Column 2: Featured Categories */}
                <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2 text-base">
                        Our Services
                    </h3>
                    <ul className="space-y-4 text-[10px] text-[#001E35] font-roboto mb-10 font-normal">
                        <li>
                            <a href="#">Order Medicine</a>
                        </li>
                        <li>
                            <a href="#">Lab Tests</a>
                        </li>
                        <li>
                            <a href="#">Lab Vendor Registration</a>
                        </li>
                        <li>
                            <a href="#">Doctor Registration</a>
                        </li>
                    </ul>

                    {/* Column 3: Book Lab Tests at Home */}

                    {/* Column 4: Need Help and Policy Info */}

                    <h3 className="font-semibold text-gray-900 mb-2 text-base">
                        Need Help
                    </h3>
                    <ul className="space-y-4 text-[10px] text-[#001E35] font-roboto mb-10 font-normal">
                        <li>
                            <a href="#">Browse All Medicines</a>
                        </li>
                        <li>
                            <a href="#">Browse All Molecules</a>
                        </li>
                        <li>
                            <a href="#">Browse All Cities</a>
                        </li>
                        <li>
                            <a href="#">Browse All Areas</a>
                        </li>
                        <li>
                            <a href="#">Browse All Stores</a>
                        </li>
                        <li>
                            <a href="#">FAQs</a>
                        </li>
                    </ul>

                    <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-4">
                        Policy Info
                    </h3>
                    <ul className="space-y-4 text-[10px] text-[#001E35] font-roboto mb-10 font-normal">
                        <li>
                            <a href="#">Editorial Policy</a>
                        </li>
                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#">Vulnerability Disclosure Policy</a>
                        </li>
                        <li>
                            <a href="#">Terms and Conditions</a>
                        </li>
                        <li>
                            <a href="#">Customer Support Policy</a>
                        </li>
                        <li>
                            <a href="#">Return Policy</a>
                        </li>
                        <li>
                            <a href="#">Smartbuy Policy</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className=" contain mt-8 border-t border-gray-200 pt-6">
                <div className="max-w-7xl mx-auto flex flex-col justify-between items-center">
                    <p className="text-[10px] text-black text-center mb-3">
                        © MyDr24 2024 - All rights reserved | Powered by
                        Accufly Healthcare Pvt.Ltd.
                    </p>
                    <div className="flex space-x-4">
                        {/* Social Icons */}
                        <a
                            href="#"
                            className="text-white w-[40px] h-[40px] bg-black rounded-[100px] flex items-center justify-center"
                        >
                            <FaFacebook className="w-[16.52px] h-[16.52px]" />
                        </a>
                        <a
                            href="#"
                            className="text-white w-[40px] h-[40px] bg-black rounded-[100px] flex items-center justify-center"
                        >
                            <FaInstagram className="w-[16.52px] h-[16.52px]" />
                        </a>
                        <a
                            href="#"
                            className="text-white w-[40px] h-[40px] bg-black rounded-[100px] flex items-center justify-center"
                        >
                            <FaLinkedin className="w-[16.52px] h-[16.52px]" />
                        </a>
                        <a
                            href="#"
                            className="text-white w-[40px] h-[40px] bg-black rounded-[100px] flex items-center justify-center"
                        >
                            <FaTwitterSquare className="w-[16.52px] h-[16.52px]" />
                        </a>
                        <a
                            href="#"
                            className="text-red-600 w-[40px] h-[40px] bg-black rounded-[100px] flex items-center justify-center"
                        >
                            <FaYoutube className="w-[16.52px] h-[16.52px]" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterMobile
