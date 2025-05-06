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
const Footer: React.FC = () => {
    return (
        <footer className="bg-[#F0F9FF] py-8 px-4 sm:px-6 lg:px-8">
            <div className="contain mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {/* Column 1: IT Company and Services */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Company
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600">
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

                    <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-4">
                        Our Services
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600">
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

                    <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-4">
                        Our Payment Partners
                    </h3>
                    <div className="flex space-x-4 flex-wrap gap-3">
                        <img
                            src={GooglePay}
                            alt="Google Pay"
                            className="w-[49px] h-[19px]"
                        />
                        <img
                            src={Paytm}
                            alt="Paytm"
                            className="w-[54px] h-[17px]"
                        />
                        <img
                            src={PhonePe}
                            alt="PhonePe"
                            className="w-[21px] h-[21px]"
                        />
                        <img
                            src={RupayLogo}
                            alt="Rupay"
                            className="w-[57px] h-[15px]"
                        />
                        <img
                            src={AmazonLogo}
                            alt="Amazon Pay"
                            className="w-[36px] h-[20px]"
                        />
                    </div>
                    <div className="mt-4 flex gap-2">
                        <img
                            src={Playstore}
                            alt="Google Play Store"
                            className="w-[100px] h-[31px] mt-2"
                        />
                        <img
                            src={Appstore}
                            alt="App Store"
                            className="w-[100px] h-[33px] mt-2"
                        />
                    </div>
                </div>

                {/* Column 2: Featured Categories */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Featured Categories
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600">
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

                {/* Column 3: Book Lab Tests at Home */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Book Lab Tests at Home
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li>
                            <a href="#">RT PCR Test At Home</a>
                        </li>
                        <li>
                            <a href="#">Book Lab Tests at Home</a>
                        </li>
                        <li>
                            <a href="#">Renal Profile (KFT, RFT Test)</a>
                        </li>
                        <li>
                            <a href="#">Hemogram Test</a>
                        </li>
                        <li>
                            <a href="#">Lipid Profile Test</a>
                        </li>
                        <li>
                            <a href="#">
                                Thyroid Profile Test (T3 T4 Tsh Test)
                            </a>
                        </li>
                        <li>
                            <a href="#">D Dimer Test</a>
                        </li>
                        <li>
                            <a href="#">Urine Culture Test</a>
                        </li>
                        <li>
                            <a href="#">Complete Blood Count (CBC Test)</a>
                        </li>
                        <li>
                            <a href="#">Widal Test</a>
                        </li>
                        <li>
                            <a href="#">Liver Function Test (LFT Test)</a>
                        </li>
                    </ul>
                </div>

                {/* Column 4: Need Help and Policy Info */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Need Help
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600">
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
                    <ul className="space-y-2 text-sm text-gray-600">
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
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-2 justify-between items-center">
                    <p className="text-sm text-gray-600">
                        © MyDr24 2024 - All rights reserved | Powered by
                        Accufly Healthcare Pvt.Ltd.
                    </p>
                    <div className="flex space-x-4 flex-wrap">
                        {/* Social Icons */}
                        <a href="#" className="text-gray-600 w-[40px] h-[40px]">
                            <FaFacebook className="w-[40px] h-[40px]" />
                        </a>
                        <a href="#" className="text-gray-600 w-[40px] h-[40px]">
                            <FaInstagram className="w-[40px] h-[40px]" />
                        </a>
                        <a
                            href="#"
                            className="text-gray-600 hover:text-gray-900"
                        >
                            <FaLinkedin className="w-[40px] h-[40px]" />
                        </a>
                        <a
                            href="#"
                            className="text-gray-600 hover:text-gray-900"
                        >
                            <FaTwitterSquare className="w-[40px] h-[40px]" />
                        </a>
                        <a
                            href="#"
                            className="text-gray-600 hover:text-gray-900"
                        >
                            <FaYoutube className="w-[40px] h-[40px]" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
