import React, { useState, useEffect, useRef } from 'react'
import Desktop_logo from '../../assets/images/mobile_logo_white.png'
import SearchWithDropDownHome from '../SearchWithDropDownHome'
import AmbulanceNav from '../../assets/icons/ambulanceNavbar.png'
import cart from '../../assets/icons/Cart_white.svg'
import QuickTabs from '../homeMobile/QuickTabs'
import { FaAngleDown, FaBars } from 'react-icons/fa'
import DoctorConsultationBanner from '../homeMobile/DoctorConsultationBanner'
import { useLocation } from 'react-router-dom'

const NavbarMobile: React.FC = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false) // For hamburger menu
    const dropdownRef = useRef<HTMLDivElement>(null)
    const dropdownButtonRef = useRef<HTMLButtonElement>(null)
    const location = useLocation()
    const currentPath = location.pathname

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node) &&
                dropdownButtonRef.current &&
                !dropdownButtonRef.current.contains(event.target as Node)
            ) {
                setIsDropdownOpen(false)
            }
        }

        const handleResize = () => {
            setIsDropdownOpen(false) // Close the dropdown when resizing
        }

        const handleScroll = () => {
            setIsDropdownOpen(false) // Close the dropdown when scrolling
        }

        // Add event listeners
        document.addEventListener('mousedown', handleClickOutside)
        window.addEventListener('resize', handleResize)
        window.addEventListener('scroll', handleScroll)

        // Cleanup event listeners on component unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
            window.removeEventListener('resize', handleResize)
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className="bg-[#002C4E]">
            <nav className="bg-[#002C4E] shadow-md  px-3 sm:px-6 lg:px-8 pb-[12px]">
                <div className=" ">
                    <div className=" flex justify-between items-center py-4 relative">
                        <div className="flex gap-2 items-center">
                            <div className="lg:hidden">
                                <button onClick={toggleMenu}>
                                    <FaBars className="text-2xl text-[#fff] leading-3" />
                                </button>
                            </div>

                            <div className="flex flex-col">
                                <span className="text-white text-[14px] font-roboto font-bold">
                                    Your Location
                                </span>
                                <span className="text-white text-[12px] font-light">
                                    Rogini Delhi
                                </span>
                            </div>
                        </div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <img
                                className="w-[63px] h-[35px] "
                                src={Desktop_logo}
                                alt="MYDR24 Logo"
                            />
                        </div>
                        <div className="flex gap-2 items-center">
                            <a
                                href="#"
                                className="text-white text-[14px] flex items-center"
                            >
                                <div className="mr-[4px] flex items-center justify-center w-[32px] h-[32px] -mb-[3px] bg-white border-[2px] border-[#FFD4D7A6] rounded-full shadow-ambulaceShadow">
                                    <img
                                        src={AmbulanceNav}
                                        alt="Ambulance"
                                        className="w-[16px]"
                                    />
                                </div>
                            </a>

                            <a
                                href="#"
                                className="font-medium relative text-white flex items-center"
                            >
                                <div className="mr-[4px] -mb-[3px] ">
                                    <img
                                        src={cart}
                                        alt="cart"
                                        className="w-[20px]"
                                    />
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Navbar Links (hidden below 1115px and displayed on hamburger click) */}
                    <div
                        className={`lg:flex ${
                            isMenuOpen ? 'block' : 'hidden'
                        } navbarscroll lg:overflow-x-auto lg:flex-row flex-col gap-5 py-5 lg:py-0`}
                    >
                        <a
                            href="/instant-medical-services"
                            className="p-3 text-white block lg:inline whitespace-nowrap"
                        >
                            Instant Medical Services
                        </a>
                        <a
                            href="/doctor-consultation"
                            className="p-3 text-white block lg:inline whitespace-nowrap"
                        >
                            Doctor Consultation
                        </a>
                        <a
                            href="#"
                            className="p-3 text-white block lg:inline whitespace-nowrap"
                        >
                            Diagnostic Test
                        </a>
                        <a
                            href="/medicines"
                            className="p-3 text-white block lg:inline"
                        >
                            Medicines
                        </a>
                        <a
                            href="/surgery"
                            className="p-3 text-white block lg:inline"
                        >
                            Surgery
                        </a>
                        <a
                            href="/home-healthcare"
                            className="p-3 text-white block lg:inline whitespace-nowrap"
                        >
                            Home Health Care
                        </a>

                        {/* Dropdown Menu in Hamburger */}
                        <div className="relative">
                            <button
                                ref={dropdownButtonRef}
                                onClick={toggleDropdown}
                                className="p-3 text-white flex items-center"
                            >
                                Company
                                <FaAngleDown />
                            </button>
                            {isDropdownOpen && dropdownButtonRef.current && (
                                <div
                                    className="fixed z-50 lg:w-48 w-[80%] py-2 bg-white border rounded-lg shadow-lg"
                                    ref={dropdownRef}
                                    style={{
                                        top:
                                            dropdownButtonRef.current.getBoundingClientRect()
                                                .bottom +
                                            window.scrollY +
                                            'px',
                                        left:
                                            dropdownButtonRef.current.getBoundingClientRect()
                                                .left + 'px',
                                    }}
                                >
                                    <a
                                        href="#"
                                        className="block px-4 py-1 text-[#002C4E]"
                                    >
                                        For Corporate
                                    </a>
                                    <a
                                        href="/investor-relations"
                                        className="block px-4 py-1 text-[#002C4E]"
                                    >
                                        Investor Relations
                                    </a>
                                    <a
                                        href="/insurance"
                                        className="block px-4 py-1 text-[#002C4E]"
                                    >
                                        Insurance
                                    </a>
                                    <a
                                        href="/happy-patients"
                                        className="block px-4 py-1 text-[#002C4E]"
                                    >
                                        Happy Patients
                                    </a>
                                    <a
                                        href="/international-patients"
                                        className="block px-4 py-1 text-[#002C4E]"
                                    >
                                        International Patient
                                    </a>
                                    <a
                                        href="/our-team"
                                        className="block px-4 py-1 text-[#002C4E]"
                                    >
                                        Our Team
                                    </a>
                                    <a
                                        href="/get-in-touch"
                                        className="block px-4 py-1 text-[#002C4E]"
                                    >
                                        Get in touch with us!
                                    </a>
                                </div>
                            )}
                        </div>

                        <a
                            href="/medical-equipments"
                            className="p-3 text-white block lg:inline whitespace-nowrap"
                        >
                            Medical Equipment
                        </a>
                        <a
                            href="/book-second-opnion"
                            className="p-3 text-white block lg:inline whitespace-nowrap"
                        >
                            Book Second Opinion
                        </a>
                    </div>
                </div>
            </nav>

            {currentPath === '/' && (
                <>
                    <SearchWithDropDownHome />
                    <QuickTabs />
                    <DoctorConsultationBanner />
                </>
            )}
        </div>
    )
}

export default NavbarMobile
