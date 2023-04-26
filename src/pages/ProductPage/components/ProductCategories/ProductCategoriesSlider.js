import React from "react";
import {CATEGORY_DATA} from "../data";

const ProductCategoriesSlider = ({carouselRef}) => {

    return (
        <div className="mt-[30px] flex overflow-hidden">
            <div className="overflow-x-scroll flex scrollbar-hide scroll-smooth" ref={carouselRef}>
                {
                    CATEGORY_DATA.map((category) => (
                        <div key={Math.random()}
                             className="cursor-pointer mr-[1.6vw] last:mr-0 border border-solid border-light-grey dark:border-grey rounded-[2vw] min-w-[14vw] min-h-[14vw] w-[14vw] overflow-hidden relative">
                            <a href="/">
                                <div
                                    className="h-[14vw] w-[14vw] bg-cover bg-no-repeat overflow-hidden hover:scale-110 transition-all duration-300 ease-linear"
                                    style={{backgroundImage: `url(${category.image})`}}></div>
                                <div
                                    className="h-[50px] w-full absolute bottom-0 flex items-center justify-center bg-black/50">
                                            <span
                                                className="w-full h-[unset] text-14 font-proxima uppercase text-white text-center overflow-hidden font-semibild leading-[1.1rem]">{category.title}</span>
                                </div>
                            </a>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default ProductCategoriesSlider;