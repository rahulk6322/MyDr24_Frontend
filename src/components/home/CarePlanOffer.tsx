import React from 'react'

const CarePlanOffer: React.FC = () => {
    return (
        <section className="bg-[#ffcda3] contain flex items-center justify-between p-6 rounded-lg shadow-md  mx-auto">
            <div className="flex items-center space-x-4">
                {/* Image Section */}
                <div className="flex-shrink-0">
                    <img
                        // src={carePlanImage} // Replace with the actual image
                        alt="Care Plan"
                        className="h-24 w-24 object-cover rounded-full"
                    />
                </div>

                {/* Text Section */}
                <div className="flex flex-col">
                    <div className="flex items-center space-x-2 mb-2">
                        <span className="bg-[#75292B] text-white italic text-xs font-medium py-1 px-2 rounded-sm ">
                            Care Plan
                        </span>
                        <span className="text-sm font-medium text-gray-600">
                            now starting at ₹165 for 3 months
                        </span>
                    </div>
                    <h2 className="text-lg font-semibold text-gray-800">
                        Get extra 5% savings on your orders. Free shipping,
                        same-day delivery and more.
                    </h2>
                    <p className="text-md font-medium text-gray-800">
                        Become a member today!
                    </p>
                </div>
            </div>

            {/* Button Section */}
            <div className="flex-shrink-0">
                <a
                    href="#"
                    className="bg-[#75292B] text-white text-lg font-medium py-2 px-4 rounded hover:bg-red-700"
                >
                    Know More
                </a>
            </div>
        </section>
    )
}

export default CarePlanOffer
