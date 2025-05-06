/* eslint-disable*/
import React, { useEffect, useState } from 'react'
import BlogsAndArticles from '../components/home/BlogsAndArticles'
import FAQ from '../components/home/FAQ'
import FullBodyCheckupPackages from '../components/home/FullBodyCheckupPackages'
import PopularHealthCheckup from '../components/home/PopularHealthCheckup'
import Testimonial from '../components/home/Testimonial'
import TrendingProducts from '../components/home/TrendingProducts'
import WhyMyDr24 from '../components/home/WhyMyDr24'
import NewLaunches from '../components/home/NewLaunches'
import CalltoAction from '../assets/images/calltoaction.png'
import Category from '../components/home/Category'
import TopDoctorsByHealth from '../components/home/TopDoctorsByHealth'
import Doctors from '../components/home/Doctors'
import HomeServices from '../components/home/HomeServices'
import MedicalServices from '../components/home/MedicalServices'
import QuickTabs from '../components/home/QuickTabs'
import DoctorConsultationBanner from '../components/home/DoctorConsultationBanner'
import TopDoctorsOnline from '../components/home/TopDoctorsOnline'
import WhatsAppOrder from '../components/home/WhatsAppOrder'
import Loader from '../components/global/Loader'
import { blogs, faqData as faqDatas, fullBodyCheckups } from '../../data'

const Home: React.FC = () => {
    const [faqData, setFaqData] = useState(faqDatas)
    const [checkupPackages, setCheckupPackages] = useState(fullBodyCheckups)
    const [blogData, setBlogData] = useState(blogs)
    const [categories, setCategories] = useState([])
    const [doctors, setDoctors] = useState([])
    const [newLaunches, setNewLaunches] = useState([])
    const [healthCheckupPackages, setHealthCheckupPackages] = useState([])
    const [testimonials, setTestimonials] = useState([])
    const [topDoctorsByHealth, setTopDoctorsByHealth] = useState([])
    const [trendingProducts, setTrendingProducts] = useState([])
    const [whatsappOrder, setWhatsappOrder] = useState([])
    const [loading, setLoading] = useState(false)

    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const [
    //         faqResponse,
    //         checkupPackagesResponse,
    //         blogDataResponse,
    //         categoriesResponse,
    //         doctorsResponse,
    //         newLaunchesResponse,
    //         healthCheckupPackagesResponse,
    //         testimonialsResponse,
    //         topDoctorsByHealthResponse,
    //         trendingProductsResponse,
    //         whatsappOrderResponse
    //       ] = await Promise.all([
    //         fetch('http://localhost:4200/api/faqs'),
    //         fetch('http://localhost:4200/api/checkup-packages'),
    //         fetch('http://localhost:4200/api/blogs'),
    //         fetch('http://localhost:4200/api/categories'),
    //         fetch('http://localhost:4200/api/doctors'),
    //         fetch('http://localhost:4200/api/new-launches'),
    //         fetch('http://localhost:4200/api/packages'),
    //         fetch('http://localhost:4200/api/reviews'),
    //         fetch('http://localhost:4200/api/specialties'),
    //         fetch('http://localhost:4200/api/products'),
    //         fetch('http://localhost:4200/api/whatsapp')
    //       ]);

    //       if (
    //         !faqResponse.ok ||
    //         !checkupPackagesResponse.ok ||
    //         !blogDataResponse.ok ||
    //         !categoriesResponse.ok ||
    //         !doctorsResponse.ok ||
    //         !newLaunchesResponse.ok ||
    //         !healthCheckupPackagesResponse.ok ||
    //         !testimonialsResponse.ok ||
    //         !topDoctorsByHealthResponse.ok ||
    //         !trendingProductsResponse.ok ||
    //         !whatsappOrderResponse.ok
    //       ) {
    //         throw new Error('Failed to fetch data');
    //       }

    //       const faqData = await faqResponse.json();
    //       const checkupPackagesData = await checkupPackagesResponse.json();
    //       const blogData = await blogDataResponse.json();
    //       const categoriesData = await categoriesResponse.json();
    //       const doctorsData = await doctorsResponse.json();
    //       const newLaunchesData = await newLaunchesResponse.json();
    //       const healthCheckupPackagesData = await healthCheckupPackagesResponse.json();
    //       const testimonialsData = await testimonialsResponse.json();
    //       const topDoctorsByHealthData = await topDoctorsByHealthResponse.json();
    //       const trendingProductsData = await trendingProductsResponse.json();
    //       const whatsappOrderData = await whatsappOrderResponse.json();

    //       setFaqData(faqData);
    //       setCheckupPackages(checkupPackagesData);
    //       setBlogData(blogData);
    //       setCategories(categoriesData);
    //       setDoctors(doctorsData);
    //       setNewLaunches(newLaunchesData);
    //       setHealthCheckupPackages(healthCheckupPackagesData);
    //       setTestimonials(testimonialsData);
    //       setTopDoctorsByHealth(topDoctorsByHealthData);
    //       setTrendingProducts(trendingProductsData);
    //       setWhatsappOrder(whatsappOrderData);

    //     } catch (error) {
    //       console.error('Error fetching data:', error);
    //       setError('Error loading data. Please try again later.');
    //     } finally {
    //       setLoading(false);
    //     }
    //   };

    //   fetchData();
    // }, []);

    // if (loading) {
    //   return <Loader />;
    // }

    // if (error) {
    //   return <div>{error}</div>;
    // }

    return (
        <>
            <DoctorConsultationBanner />
            <QuickTabs />
            <MedicalServices />
            <HomeServices />
            <TopDoctorsOnline />
            <Doctors />
            <TopDoctorsByHealth />
            <div className="contain mx-auto my-5">
                <img
                    src={CalltoAction}
                    alt="Extra Savings on order"
                    className="mx-auto"
                />
            </div>
            <Category />
            <NewLaunches />
            <WhatsAppOrder />
            <FullBodyCheckupPackages
                // checkupPackages={checkupPackages}
                loading={loading}
            />
            <TrendingProducts />
            <WhyMyDr24 />
            <PopularHealthCheckup />
            <BlogsAndArticles blogData={blogData} loading={loading} />
            <Testimonial />

            <FAQ faqData={faqData} loading={loading} />
        </>
    )
}

export default Home
