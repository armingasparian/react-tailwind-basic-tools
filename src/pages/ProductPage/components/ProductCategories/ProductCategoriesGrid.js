import React from "react";
import {CATEGORY_DATA} from "../data";

const ProductCategoriesGrid = () => {
    return (
        <div className="grid gap-1 grid-cols-[calc(50%-2px)calc(50%-2px)]">
            {
                CATEGORY_DATA.map((category) => (
                    <div key={Math.random()}
                         className=" h-[47vw] cursor-pointer border border-solid border-light-grey dark:border-grey rounded-[8vw] overflow-hidden relative">
                        <a href="/">
                            <div
                                className="h-[48.5vw] bg-cover bg-no-repeat overflow-hidden hover:scale-110 transition-all duration-300 ease-linear"
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
    )
}
export default ProductCategoriesGrid;