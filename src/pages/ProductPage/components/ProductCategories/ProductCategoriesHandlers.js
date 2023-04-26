import React, {useState} from "react";
import categoriesIcon from "../../../../assets/categories.svg";

const ProductCategoriesHandlers = ({carouselRef}) => {

    const [start, setStart] = useState(true);
    const [end, setEnd] = useState(false);


    const handleSlideButton = (e) => {
        e === 'right' ? carouselRef.current.scrollLeft += 285 : carouselRef.current.scrollLeft -= 285;
        let width = carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
        if (carouselRef.current.scrollLeft === 0) {
            setStart(true)
        } else {
            setStart(false)
        }

        if (carouselRef.current.scrollLeft === width) {
            setEnd(true)
        } else {
            setEnd(false)
        }
    }

    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center">
                <div>
                    <img src={categoriesIcon} alt={categoriesIcon} className="w-[35px] h-[35px]"/>
                </div>
                <div
                    className="uppercase font-semibold text-20 mx-4 text-grey-2 dark:text-white font-proxima">Categories
                </div>
            </div>
            <div className="flex items-center">
                <div className="mr-6"><a href="/" className="text-red text-12 font-proxima">See All</a>
                </div>
                <div className="flex">
                    <div onClick={() => handleSlideButton('left')}
                         className={"flex items-center justify-center w-10 h-10 cursor-pointer border border-solid border-grey-light dark:border-grey rounded-l-8 text-grey-4 hover:text-red transition-all duration-300 ease-linear" + (start ? " text-grey-4 bg-light-grey" : "")}>
                        <i className="fa-solid fa-chevron-left text-xl"></i></div>
                    <div onClick={() => handleSlideButton('right')}
                         className={"flex items-center justify-center w-10 h-10 cursor-pointer border border-solid border-grey-light dark:border-grey rounded-r-8 text-grey-4 hover:text-red transition-all duration-300 ease-linear" + (end ? "text-grey-4 bg-light-grey" : "")}>
                        <i className="fa-solid fa-chevron-right text-xl"></i></div>
                </div>
            </div>
        </div>
    )
}
export default ProductCategoriesHandlers;