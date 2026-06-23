import { Toaster } from 'react-hot-toast'
import './App.css'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/global/Navbar'
import NavbarMobile from './components/global/NavbarMobile'
import Footer from './components/global/Footer'
import FooterMobile from './components/global/FooterMobile'
import Home from './pages/Home'
import HomeMobile from './pages/HomeMobile'
import LoginModal from './components/global/LoginModal'
import QuickBook from './pages/QuickBook'
import InstentMedicalServices from './pages/InstentMedicalServices'
import Surgery from './pages/Surgery'
import MedicalEquipments from './pages/MedicalEquipments'
import DoctorDetails from './pages/DoctorDetails'
import DoctorConsultation from './pages/DoctorConsultation'
import Insurance from './pages/Insurance'
import BookSecondOpinion from './pages/BookSecondOpinion'
import InvestorRelations from './pages/InvestorRelations'
import HappyPatients from './pages/HappyPatients'
import Medicines from './pages/Medicines'
import HomeHealthCare from './pages/HomeHealthCare'
import InternationlPatients from './pages/InternationalPatients'
import OurTeam from './pages/OurTeam'
import GetInTouchWithUs from './pages/GetInTouchWithUs'
import HomeNursing from './pages/HomeNursing'
import ElderCareHome from './pages/ElderCareHome'
import WebRTC from './components/webRTC/WebRTC'
import Booking from './pages/Booking'
import BookingConfirmation from './pages/BookingConfirmation'
import TrackBooking from './pages/TrackBooking'
import MyBookings from './pages/MyBookings'
import Emergency from './pages/Emergency'
import FloatingActions from './components/booking/FloatingActions'
function App() {
    const [isLoginOpen, setIsLoginOpen] = useState(false)
    const navbar = () => {
        return (
            <>
                <div className="block md:hidden">
                    <NavbarMobile />
                </div>
                <div className="hidden md:block">
                    <Navbar setIsLoginOpen={setIsLoginOpen} />
                </div>
            </>
        )
    }

    const home = () => {
        return (
            <>
                <div className="block md:hidden">
                    <HomeMobile />
                </div>
                <div className="hidden md:block">
                    <Home />
                </div>
            </>
        )
    }

    const footer = () => {
        return (
            <>
                <div className="block md:hidden">
                    <FooterMobile />
                </div>
                <div className="hidden md:block">
                    <Footer />
                </div>
            </>
        )
    }

    return (
        <>
            <Toaster position="top-center" />
            {navbar()}
            <Routes>
                <Route path="/" element={home()} />
                <Route path="/quick-book" element={<QuickBook />} />
                <Route
                    path="/doctor-consultation"
                    element={<DoctorConsultation />}
                />
                <Route
                    path="/instant-medical-services"
                    element={<InstentMedicalServices />}
                />
                <Route path="/surgery" element={<Surgery />} />
                <Route path="/medicines" element={<Medicines />} />
                <Route path="/home-healthcare" element={<HomeHealthCare />} />
                <Route path="/international-patients" element={<InternationlPatients />} />
                <Route path="/elder-care-home" element={<ElderCareHome />} />
                <Route path="/get-in-touch" element={<GetInTouchWithUs />} />
                
                <Route
                    path="/medical-equipments"
                    element={<MedicalEquipments />}
                />
                <Route path="/doctor-details" element={<DoctorDetails />} />
                <Route path="/insurance" element={<Insurance />} />
                <Route path="/our-team" element={<OurTeam />} />
                <Route
                    path="/book-second-opnion"
                    element={<BookSecondOpinion />}
                />
                <Route
                    path="/investor-relations"
                    element={<InvestorRelations />}
                />
                <Route path="/happy-patients" element={<HappyPatients />} />

                <Route path="/home-nursing" element={<HomeNursing />} />
                <Route path="/video-conference" element={<WebRTC />} />

                {/* Dynamic booking, payment & tracking */}
                <Route path="/book" element={<Booking />} />
                <Route
                    path="/booking-confirmation/:id"
                    element={<BookingConfirmation />}
                />
                <Route path="/track/:id" element={<TrackBooking />} />
                <Route path="/my-bookings" element={<MyBookings />} />
                <Route path="/emergency" element={<Emergency />} />
                {/* <Route element={<ProtectedRoutes />}>
          <Route path="/food" element={<FoodCopy />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orderhistory" element={<OrderHistory />} />
        </Route>
        <Route path="/contactus" element={<ContactForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Error404 />} /> */}
            </Routes>
            {footer()}
            <FloatingActions />

            {/* Show the Login modal conditionally */}
            {isLoginOpen && (
                <LoginModal onClose={() => setIsLoginOpen(false)} onLoginSuccess={function (phoneNumber: string): void {
                    throw new Error('Function not implemented.')
                } } />
            )}
        </>
    )
}

export default App
