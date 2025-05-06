import logo from '../../assets/images/Desktop_logo.svg'
import videocalling from '../../assets/images/VideoCalling.png'
import logoWNT from '../../assets/images/logowithouttagline.png'
const WhyMYDR24: React.FC = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            {/* Title for Why MYDR24 section */}
            <div className="mb-8">
                <h2 className="text-[22px] font-bold font-rubik mb-2">
                    Why MYDR24
                </h2>
                <ul className="list-disc list-inside font-light text-[#787878]">
                    <li className="mb-2">
                        Round-the-clock doctor availability
                    </li>
                    <li className="mb-2">Broad range of Specialities</li>
                    <li className="mb-2">Order medicines & tests online</li>
                    <li className="mb-2">Digitised health records</li>
                </ul>
            </div>

            {/* How Doctor Consultation Works section */}
            <h2 className="text-[18px] font-bold font-rubik mb-4">
                How Doctor Consultation Works
            </h2>
            <div className=" mb-4">
                <div className="flex ">
                    <img
                        src={videocalling}
                        alt="Consultation"
                        className="w-12 h-12 mr-4"
                    />
                    <h3 className="font-medium font-rubik text-lg">
                        How To Consult A Doctor Online Via Text/Audio/Video?
                    </h3>
                </div>
                <ul className="list-disc list-inside font-light text-[#787878] mt-3">
                    <li className="mb-2">Choose the doctor</li>
                    <li className="mb-2">Book a slot</li>
                    <li className="mb-2">Make payment</li>
                    <li className="mb-2">
                        Be present in the consult room on MYDR24.com at the time
                        of consult
                    </li>
                    <li className="mb-2">
                        Follow Up via text - Valid up to 7 days
                    </li>
                </ul>
            </div>

            <hr />

            {/* Download the App section */}
            <p className="mt-4 text-black font-semibold text-subhead mb-2">
                To Enjoy Services Provided By MYDR24 24/7 On Mobile, Download
                Our App
            </p>
            <div className="flex justify-start items-center">
                <img src={logoWNT} alt="Download MyDr24 for free" />
                <button className="mt-4 font-bold text-subhead text-orange-500 px-6 py-3 rounded-full">
                    DOWNLOAD THE APP
                </button>
            </div>
        </div>
    )
}

export default WhyMYDR24
