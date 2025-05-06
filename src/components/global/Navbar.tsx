import React, { useState, useEffect, useRef } from 'react'
import Desktop_logo from '../../assets/images/Desktop_logo.svg'
import SearchWithDropdown from '../SearchWithDropDown'
import AmbulanceNav from '../../assets/icons/ambulanceNavbar.png'
import Offers from '../../assets/icons/Offers.png'
import Profile from '../../assets/icons/Profile.png'
import Phone from '../../assets/icons/phone.png'
import cart from '../../assets/icons/Cart.png'
import { FaAngleDown, FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import LoginModal from './LoginModal' // Import the LoginModal component

interface NavbarProps {
    setIsLoginOpen: (isOpen: boolean) => void
}

const Navbar: React.FC<NavbarProps> = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false) // For hamburger menu
    const [loggedInPhoneNumber, setLoggedInPhoneNumber] = useState<string>('') // State for logged-in phone number
    const [isLoginOpen, setIsLoginOpen] = useState(false) // Add this state for controlling the LoginModal visibility
    const dropdownRef = useRef<HTMLDivElement>(null)
    const dropdownButtonRef = useRef<HTMLButtonElement>(null)

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleLoginSuccess = (phoneNumber: string) => {
        setLoggedInPhoneNumber(phoneNumber); // Set the phone number after successful login
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
        <nav className="bg-white shadow-md">
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="contain flex justify-between items-center py-4 border-b">
                    {/* Logo */}
                    <div className="cursor-pointer">
                        <Link to="/">
                            <img
                                className="w-[114px] h-[64px]"
                                src={Desktop_logo}
                                alt="MYDR24 Logo"
                            />
                        </Link>
                    </div>

                    {/* Hamburger Menu (hidden above 1115px) */}
                    <div className="lg:hidden">
                        <button onClick={toggleMenu}>
                            <FaBars className="text-2xl" />
                        </button>
                    </div>

                    {/* Center: Delivery location and search (hidden below 1115px) */}
                    <div className="flex-1 hidden lg:flex items-center justify-center">
                        <SearchWithDropdown />
                    </div>

                    {/* Right: Contact info, user login, offers, cart (hidden below 1115px) */}
                    <div className="hidden lg:flex items-center gap-6">
                        <a
                            href="tel:+919311791119"
                            className="flex items-center text-[14px] font-medium text-black-100 whitespace-nowrap"
                        >
                            <span className="mr-[4px]">
                                <img
                                    src={Phone}
                                    alt="phone"
                                    className="w-[20px]"
                                />
                            </span>
                            {loggedInPhoneNumber ? loggedInPhoneNumber : '+91 93117 91119'} {/* Display logged-in number */}
                        </a>

                        {/* Login */}
                        {!loggedInPhoneNumber && ( // Only show login if not logged in
                            <div
                                className="font-medium text-[14px] text-black-100 flex items-center cursor-pointer whitespace-nowrap"
                                onClick={() => setIsLoginOpen(true)} // Open LoginModal when clicked
                            >
                                Hello, Log in
                            </div>
                        )}

                        {/* Profile Link */}
                        {loggedInPhoneNumber && ( // If logged in, show profile link
                            <Link
                                to="/my-account"
                                className="mr-[4px]"
                            >
                                <img
                                    src={Profile}
                                    alt="Profile"
                                    className="w-[20px]"
                                />
                            </Link>
                        )}

                        {/* Offers */}
                        <a
                            href="#"
                            className="font-medium text-[14px] text-black-100 flex items-center"
                        >
                            <div className="mr-[4px]">
                                <img src={Offers} alt="Offers" />
                            </div>
                            Offers
                        </a>

                        {/* Ambulance */}
                        <a
                            href="#"
                            className="text-black-100 text-[14px] flex items-center"
                        >
                            <div className="mr-[4px] flex items-center justify-center w-[40px] h-[40px] -mb-[3px] bg-white border-[2px] border-[#FFD4D7A6] rounded-full shadow-ambulaceShadow">
                                <img
                                    src={AmbulanceNav}
                                    alt="Ambulance"
                                    className="w-[20px]"
                                />
                            </div>
                        </a>

                        {/* Cart */}
                        <a
                            href="#"
                            className="font-medium relative text-black-100 flex items-center"
                        >
                            <div className="mr-[4px] -mb-[3px] ">
                                <img
                                    src={cart}
                                    alt="cart"
                                    className="w-[20px]"
                                />
                            </div>
                            Cart
                        </a>
                    </div>
                </div>

                {/* Navbar Links (hidden below 1115px and displayed on hamburger click) */}
                <div
                    className={`lg:flex ${
                        isMenuOpen ? 'block' : 'hidden'
                    } navbarscroll lg:overflow-x-auto lg:flex-row flex-col gap-5 py-5 lg:py-0`}
                >
                    <Link
                        to="/instant-medical-services"
                        className="p-3 text-black-100 block lg:inline whitespace-nowrap"
                    >
                        Instant Medical Services
                    </Link>
                    <span className="p-3 text-black-100 block lg:inline whitespace-nowrap">
                        <Link to="/doctor-consultation">
                            <a href="/doctor-consultation">
                                Doctor Consultation
                            </a>
                        </Link>
                    </span>
                    <a
                        href="#"
                        className="p-3 text-black-100 block lg:inline whitespace-nowrap"
                    >
                        Diagnostic Test
                    </a>
                    <a
                        href="/medicines"
                        className="p-3 text-black-100 block lg:inline"
                    >
                        Medicines
                    </a>
                    <div className="relative">
                        <button
                            ref={dropdownButtonRef}
                            onClick={toggleDropdown}
                            className="p-3 text-black-100 flex items-center"
                        >
                            Company
                            <FaAngleDown />
                        </button>
                        {isDropdownOpen && dropdownButtonRef.current && (
                            <div
                                className="fixed z-50 lg:w-[300px] w-[80%] py-2  bg-white border rounded-lg shadow-lg"
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
                                    className="block px-4 py-1 lg:py-2 text-black-100"
                                >
                                    For Corporate
                                </a>
                                <a
                                    href="/investor-relations"
                                    className="block px-4 py-1 lg:py-2 text-black-100"
                                >
                                    Investor Relations
                                </a>
                                <a
                                    href="/insurance"
                                    className="block px-4 py-1 lg:py-2 text-black-100"
                                >
                                    Insurance
                                </a>
                                <a
                                    href="/happy-patients"
                                    className="block px-4 py-1 lg:py-2 text-black-100"
                                >
                                    Happy Patients
                                </a>
                                <a
                                    href="/international-patients"
                                    className="block px-4 py-1 lg:py-2 text-black-100"
                                >
                                    International Patient
                                </a>
                                <a
                                    href="/our-team"
                                    className="block px-4 py-1 lg:py-2 text-black-100"
                                >
                                    Our Team
                                </a>
                                <a
                                    href="/get-in-touch"
                                    className="block px-4 py-1 lg:py-2 text-black-100"
                                >
                                    Get in touch with us!
                                </a>
                            </div>
                        )}
                    </div>
                    <Link
                        to="/surgery"
                        className="p-3 text-black-100 block lg:inline"
                    >
                        Surgery
                    </Link>
                    <a
                        href="/home-healthcare"
                        className="p-3 text-black-100 block lg:inline whitespace-nowrap"
                    >
                        Home Health Care
                    </a>
                    <Link
                        to="/medical-equipments"
                        className="p-3 text-black-100 block lg:inline whitespace-nowrap"
                    >
                        Medical Equipment
                    </Link>
                    <a
                        href="/book-second-opnion"
                        className="p-3 text-black-100 block lg:inline whitespace-nowrap"
                    >
                        Book Second Opinion
                    </a>
                </div>
            </div>

            {/* Conditionally Render LoginModal */}
            {isLoginOpen && (
                <LoginModal
                    onClose={() => setIsLoginOpen(false)}
                    onLoginSuccess={handleLoginSuccess}  // Pass the success handler
                />
            )}
        </nav>
    )
}

export default Navbar
