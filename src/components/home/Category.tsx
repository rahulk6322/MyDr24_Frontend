import { categories } from '../../../data'
import mycategory from '../../assets/images/cetegory.png' // Fallback image or placeholder

const Category: React.FC = () => {
    return (
        <section className="contain py-5">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-rubik font-semibold">
                    Shop By Category
                </h2>
                <a href="#" className="text-blue font-medium">
                    View All
                </a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className=" rounded-lg flex flex-col items-center"
                    >
                        <div className="bg-[#06B90C26]  min-h-[188px] min-w-[211px] flex justify-center items-center rounded-lg">
                            <img
                                src={category.imageUrl}
                                alt={category.category}
                                className="h-[146px] w-[146px] object-contain"
                            />
                        </div>
                        <h3 className="text-sm font-semibold text-center mt-3">
                            {category.category}
                        </h3>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Category
