import React from 'react'

const TopDentalHospitals: React.FC = () => {
    const hospitals = [
        'Doctors in Seetharampet, Hyderabad',
        'Doctors in Gandhi Bhawan, Hyderabad',
        'Doctors in Moazzampura, Hyderabad',
        'Doctors in Hyderabad G.P.O., Hyderabad',
        'Doctors in State Bank Of Hyderabad, Hyderabad',
        'Doctors in Hyderabad Jubilee H.O, Hyderabad',
        'Doctors in Moghalpura, Hyderabad',
        'Doctors in Secunderabad H.O, Hyderabad',
        'Doctors in Kingsway, Hyderabad',
        'Doctors in Bazargahat, Hyderabad',
        'Doctors in Parishram Bhawan, Hyderabad',
        'Doctors in Vidhan Sabha, Hyderabad',
        'Doctors in A.Gs Office, Hyderabad',
        'Doctors in Anandnagar, Hyderabad',
        'Doctors in Khairatabad H.O, Hyderabad',
        'Doctors in Crp Camp, Hyderabad',
        'Doctors in Jallapally, Hyderabad',
        'Doctors in Keshogiri, Hyderabad',
        'Doctors in Kulsumpura, Hyderabad',
        'Doctors in Mangalhat, Hyderabad',
    ]

    return (
        <div className="p-6 mb-6 mx-auto">
            {/* Top Dental Hospitals Header */}
            <h2 className="text-subhead font-rubik font-bold text-black mb-3">
                Top Dental Hospitals In Bangalore
            </h2>

            {/* Hospitals List in Bullet Format */}
            <div className="flex flex-wrap">
                {hospitals.map((hospital, index) => (
                    <span
                        key={index}
                        className="text-[#282828] text-[12px] mb-2 mr-4"
                    >
                        • {hospital}
                    </span>
                ))}
            </div>

            {/* Another Section for the Same Header and List */}
            <h2 className="text-subhead font-rubik font-bold text-black mb-3 mt-6">
                Top Dental Hospitals In Bangalore
            </h2>
            <div className="flex flex-wrap">
                {hospitals.map((hospital, index) => (
                    <span
                        key={index}
                        className="text-[#282828] text-[12px] mb-2 mr-4"
                    >
                        • {hospital}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default TopDentalHospitals
