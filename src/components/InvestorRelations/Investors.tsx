import React from 'react'
import mycategory from '../../assets/images/user_2.jpg'
import cursorMagic from '../../assets/images/cursor_magic.svg'
import rx from '../../assets/images/rx.svg'
import chat from '../../assets/images/basil_chat.svg'

const categories = [
    {
        image: '/path/to/elderly-care-image.jpg', // Replace with actual image path
        name: 'Mr. Ravi Rajagopal',
        position: 'Chairman',
    },
    {
        image: '/path/to/elderly-care-image.jpg', // Replace with actual image path
        name: 'Mr. Ravi Rajagopal',
        position: 'Chairman',
    },
    {
        image: '/path/to/elderly-care-image.jpg', // Replace with actual image path
        name: 'Mr. Ravi Rajagopal',
        position: 'Chairman',
    },
    {
        image: '/path/to/elderly-care-image.jpg', // Replace with actual image path
        name: 'Mr. Ravi Rajagopal',
        position: 'Chairman',
    },
    {
        image: '/path/to/elderly-care-image.jpg', // Replace with actual image path
        name: 'Mr. Ravi Rajagopal',
        position: 'Chairman',
    },
    {
        image: '/path/to/elderly-care-image.jpg', // Replace with actual image path
        name: 'Mr. Ravi Rajagopal',
        position: 'Chairman',
    },
    {
        image: '/path/to/elderly-care-image.jpg', // Replace with actual image path
        name: 'Mr. Ravi Rajagopal',
        position: 'Chairman',
    },
    {
        image: '/path/to/elderly-care-image.jpg', // Replace with actual image path
        name: 'Mr. Ravi Rajagopal',
        position: 'Chairman',
    },
]

const Investors: React.FC = () => {
    return (
        <section className="md:mt-10 mt-4">
            <div className=" items-center mb-4">
                <div className=" gap-4 item-center self-center">
                    <h2 className="sm:text-[22px] text-[16px] font-bold font-rubik w-full mb-4 text-left">
                        Board Of Directors
                    </h2>
                </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-4 md:mt-10 md:px-6 sm:p-0">
                {categories.slice(0, 12).map((category, index) => (
                    <div
                        className="bg-[#FFFBFB] items-center gap-2 rounded-md border border-white md:mb-6 mx-2"
                        style={{ boxShadow: '0px 2px 4px 6px #B1DDFF14' }}
                    >
                        <img
                            src={mycategory}
                            alt={category.name}
                            className="aspect-square object-cover w-full rounded-t-lg md:h-[322px] h-[250px]"
                        />

                        <div className="mx-4 py-4">
                            <h3 className=" text-sm sm:text-[18px] leading-[18px] font-semibold text-left sm:leading-[24px] font-rubik">
                                {category.name}
                            </h3>
                            <p className="sm:text-[15px] text-xs font-rubik sm:leading-[22px] my-1 text-[#707070] font-medium">
                                {category.position}
                            </p>

                            <button className="underline sm:text-[15px] text-xs font-rubik sm:leading-[22px] text-[#0065B2]">
                                Know More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Investors
