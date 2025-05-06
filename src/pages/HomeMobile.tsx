import BlogsAndArticles from '../components/homeMobile/BlogsAndArticles'

import PopularHealthCheckup from '../components/homeMobile/PopularHealthCheckup'
import TestimonialMobile from '../components/homeMobile/Testimonial'
import TrendingProducts from '../components/homeMobile/TrendingProducts'

import NewLaunchesMobile from '../components/homeMobile/NewLaunches'
import CalltoAction from '../assets/images/home_banner.png'
import Category from '../components/homeMobile/Category'
import TopDoctorsByHealth from '../components/homeMobile/TopDoctorsByHealth'
import DoctorsMobile from '../components/homeMobile/Doctors'
import Banner from '../assets/images/banner.png'
import HomeServices from '../components/homeMobile/HomeServices'
import MedicalServices from '../components/homeMobile/MedicalServices'
import TopOptions from '../components/homeMobile/TopOptions'
import DoctorConsultationBanner from '../components/homeMobile/DoctorConsultationBanner'
import DoctorConsultationBanner2 from '../components/homeMobile/DoctorConsultationBanner2'
import DiagnosticTest from '../components/homeMobile/DignosticTest'
import FullBodyPackages from '../components/homeMobile/FullBodyPackages'
import MultipleCollapsibleSections from '../components/homeMobile/CollapseSection'
import BottomNav from '../components/global/BottomNav'

const HomeMobile: React.FC = () => {
    return (
        <>
            <div className="bg-[#f0f9ff]">
                <BottomNav />
                <div className="bg-[#002C4E]">
                    <div className="bg-white rounded-t-[20px]">
                        <TopOptions />
                    </div>
                </div>
                <div className="bg-white mt-2">
                    <MedicalServices />
                </div>
                <div className="bg-white mt-2">
                    <HomeServices />

                    <DoctorConsultationBanner2 />
                    <DiagnosticTest />
                </div>
                <div className="bg-white mt-2">
                    <Category />
                </div>
                <div className="bg-white mt-2">
                    <NewLaunchesMobile />
                </div>
                <div className="bg-white mt-2">
                    <DoctorsMobile />
                    <TopDoctorsByHealth />
                </div>
                <div className="bg-white mt-2">
                    <FullBodyPackages />
                    <PopularHealthCheckup />

                    <div className="p-3 mx-auto">
                        <img
                            src={CalltoAction}
                            alt="Extra Savings on order"
                            className="mx-auto"
                        />
                    </div>
                </div>
                <div className="bg-white mt-3">
                    <BlogsAndArticles />
                </div>
                <div className="bg-white mt-2">
                    <TestimonialMobile />
                    <MultipleCollapsibleSections />
                </div>
            </div>
        </>
    )
}

export default HomeMobile
