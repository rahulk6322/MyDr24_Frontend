import dr from '../../assets/images/dr2.png'

const PromoCard: React.FC = () => {
    return (
        <div
            style={{
                background:
                    'linear-gradient(105.86deg, #0027B1 1.92%, #410082 100%, #7F0082 100.01%)',
            }}
            className=" relative min-h-[218px] px-6 py-2 rounded-lg flex justify-between items-center"
        >
            <div className="text-white">
                <h2 className="text-[27px] max-w-[70%] text-[#ffca00] font-bold mb-2">
                    Consult India’s Top Doctors Online.
                </h2>
                <div className="flex items-center mb-4">
                    <span className="text-[20px]">Flat 10% OFF </span>
                    <span className="bg-[#b3fff1] min-h-[29px] text-black px-[14px] py-[8px] rounded-full font-semibold ml-2">
                        NEW10
                    </span>
                </div>
                <button className="bg-white text-black min-h-[36px] font-medium rounded text-subtitle px-6 py-2">
                    CONSULT NOW
                </button>
            </div>
            <div className="ml-4 absolute bottom-0 right-0">
                <img
                    src={dr}
                    alt="Doctor Image"
                    className="w-[180px] lg:w-[160px] h-auto"
                />
            </div>
        </div>
    )
}

export default PromoCard
