import React from 'react'
import Breadcrumb from '../components/global/Breadcrumb'
import DoctorProfileCard from '../components/DoctorDetails/DoctorProfileCard'
import PatientStories from '../components/DoctorDetails/PatientStories'
import DoctorBackground from '../components/DoctorDetails/DoctorBackground'
import TopDentalHospitals from '../components/DoctorDetails/TopDentalHospitals'
import DigitalConsult from '../components/DoctorDetails/DigitalConsult'

const DoctorDetails: React.FC = () => {
    const breadcrumbStages = [
        { label: 'Home', href: '/home' },
        { label: 'Doctor Consultation', href: '/doctor-consultation' },
        { label: 'Doctor Consultation', href: '/doctor-consultation' },
        { label: 'Doctor Consultation', href: '/doctor-consultation' },
    ]

    return (
        <>
            <div className="bg-offwhite">
                <div className="contain">
                    <Breadcrumb stages={breadcrumbStages} />

                    {/* Grid layout with 7:5 ratio on large screens */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        {/* Left side: Doctor information (7/12 columns on large screens) */}
                        <div className="lg:col-span-7 space-y-6">
                            <DoctorProfileCard />
                            <PatientStories />
                            <div className="space-y-6">
                                <DoctorBackground />
                                <TopDentalHospitals />
                            </div>
                        </div>

                        {/* Right side: Digital consult (5/12 columns on large screens) */}
                        <div className="lg:col-span-5 space-y-6">
                            <DigitalConsult />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DoctorDetails
