import hiwicon1 from '../../assets/images/HIWicon.png'
import hiwicon2 from '../../assets/images/hiwi2.png'
import hiwicon3 from '../../assets/images/hiwi3.png'
import hiwicon4 from '../../assets/images/hiwi4.png'
import hiwicon5 from '../../assets/images/hiwi5.png'
import hiwicon6 from '../../assets/images/hiwi6.png'
import hiwiMain from '../../assets/images/hiwiconMain.svg'
const HowItWorks: React.FC = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg relative">
            {/* Title for the component */}
            <h2 className="text-2xl font-bold mb-6">How It Works</h2>

            {/* Dotted line across all steps */}
            <div className="absolute left-[49px] top-[80px] h-[80%] border-l-2 border-dotted border-gray-300 z-0"></div>

            {/* Steps Section */}
            <div className="flex flex-col space-y-8 relative z-10">
                {/* Step 1 */}
                <div className="flex items-start space-x-4">
                    <div className="relative z-10">
                        <div className="w-[51px] h-[51px] bg-[#e6f5fc] rounded-full flex items-center justify-center">
                            <img src={hiwicon1} alt="" />
                        </div>
                    </div>
                    <div className="flex-grow">
                        <p className="text-black text-subtitle font-medium">
                            Connect with us. A dedicated MYDR24 Care Assistant
                            will guide you at every step.
                        </p>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start space-x-4">
                    <div className="relative z-10">
                        <div className="w-[51px] h-[51px] bg-purple-100 rounded-full flex items-center justify-center">
                            <img src={hiwicon2} alt="" />
                        </div>
                    </div>
                    <div className="flex-grow">
                        <p className="text-gray-700">
                            <strong>Schedule a consultation</strong> with an
                            expert MYDR24 Care Doctor near you.
                        </p>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start space-x-4">
                    <div className="relative z-10">
                        <div className="w-[51px] h-[51px] bg-[#e6f5fc] rounded-full flex items-center justify-center">
                            <img src={hiwicon3} alt="" />
                        </div>
                    </div>
                    <div className="flex-grow">
                        <p className="text-gray-700">
                            <strong>Get Diagnosis & Treatment advice</strong>{' '}
                            from our expert doctors.
                        </p>
                    </div>
                </div>

                {/* Step 4 (Separator) */}
                <div className="flex items-start space-x-4">
                    <div className="relative z-10">
                        <div className="w-[51px] h-[51px] flex items-center justify-center">
                            <img src={hiwiMain} alt="" />
                        </div>
                    </div>
                    <div className="flex-grow">
                        <p className="text-gray-500 italic">
                            In some cases, a procedure or a surgery might be
                            recommended.
                        </p>
                    </div>
                </div>

                {/* Step 5 */}
                <div className="flex items-start space-x-4">
                    <div className="relative z-10">
                        <div className="w-[51px] h-[51px] bg-purple-100 rounded-full flex items-center justify-center">
                            <img src={hiwicon4} alt="" />
                        </div>
                    </div>
                    <div className="flex-grow">
                        <p className="text-gray-700">
                            <strong>Choose one of our partner hospitals</strong>{' '}
                            that meets your requirements.
                        </p>
                    </div>
                </div>

                {/* Step 6 */}
                <div className="flex items-start space-x-4">
                    <div className="relative z-10">
                        <div className="w-[51px] h-[51px] bg-[#e6f5fc] rounded-full flex items-center justify-center">
                            <img src={hiwicon5} alt="" />
                        </div>
                    </div>
                    <div className="flex-grow">
                        <p className="text-gray-700">
                            <strong>Get complete assistance</strong> from
                            Admission to Discharge.
                        </p>
                    </div>
                </div>

                {/* Step 7 */}
                <div className="flex items-start space-x-4">
                    <div className="relative z-10">
                        <div className="w-[51px] h-[51px] bg-purple-100 rounded-full flex items-center justify-center">
                            <img src={hiwicon6} alt="" />
                        </div>
                    </div>
                    <div className="flex-grow">
                        <p className="text-gray-700">
                            <strong>Receive Post-Operative support</strong> and
                            Follow-up Consultations.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks
