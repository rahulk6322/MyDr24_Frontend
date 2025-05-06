/*eslint-disable*/
import BookAppointment from '../components/DoctorConsultation/BookAppointment'
import FindDoctors from '../components/DoctorConsultation/FindDoctors'
import HowItWorks from '../components/DoctorConsultation/HowItWorks'
import PromoCard from '../components/DoctorConsultation/PromoCard'
import TopDoctorsOnline from '../components/DoctorConsultation/TopDoctorsOnline'
import WhyMYDR24 from '../components/DoctorConsultation/WhyMyDr24'
import Breadcrumb from '../components/global/Breadcrumb'
import ontime from '../assets/images/OnTimeLabReport.png'
import { faqDataDoctorConsultation, testimonials } from '../../data'
import Testimonial from '../components/global/Testimonial'
import Faq from '../components/DoctorConsultation/FAQ'

const DoctorConsultation: React.FC = () => {
    const breadcrumbStages = [
        { label: 'Home', href: '/home' },
        { label: 'Doctor Consultation', href: '/doctor-consultation' },
    ]

    return (
        <>
            <div className="bg-offwhite">
                <div className="contain">
                    <Breadcrumb stages={breadcrumbStages} />
                    {/* Using grid layout with different column ratios for different screen sizes */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* FindDoctors component should take up 2/3 space on large and extra-large screens */}
                        <div className="lg:col-span-2 gap-6 overflow-hidden">
                            <div className="flex flex-col gap-6">
                                <FindDoctors />
                                <BookAppointment />
                                <TopDoctorsOnline />
                                <div>
                                    <img
                                        src={ontime}
                                        alt="On-Time Lab Report"
                                    />
                                </div>
                                <div>
                                    <Testimonial
                                        slidesToShow={2}
                                        breakpoints={[
                                            {
                                                breakpoint: 1350,
                                                slidesToShow: 1.7,
                                            }, // For larger screens, 2 slides
                                            {
                                                breakpoint: 1180,
                                                slidesToShow: 1.5,
                                            }, // For medium screens, 1.5 slides
                                            {
                                                breakpoint: 1080,
                                                slidesToShow: 1.3,
                                            }, // For smaller screens, 1.2 slides
                                            {
                                                breakpoint: 1030,
                                                slidesToShow: 1,
                                            }, // For very small screens, 1 slide
                                        ]}
                                    />
                                </div>
                                <Faq faqData={faqDataDoctorConsultation} />
                            </div>
                        </div>
                        {/* PromoCard and HowItWorks on the right side */}
                        <div className="lg:col-span-1">
                            <div className="flex flex-col gap-6">
                                <WhyMYDR24 />
                                <PromoCard />
                                <HowItWorks />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DoctorConsultation
