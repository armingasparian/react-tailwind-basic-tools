import React from "react";
import Slider from "react-slick";
import pizzaMini from "../../../assets/pizza-mini.png";
import basketPlus from "../../../assets/basketPlus.svg";
import {PIZZA_DATA} from "./data";

const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 6,
    swipeToSlide: true,
};

const ProductPizza = () => {
    return (
        <section className="product-pizza">
            <div className="px-[4vw] mx-auto pb-20 overflow-hidden">
                <div className="flex items-center">
                    <div>
                        <img src={pizzaMini} alt={pizzaMini} className="w-[35px] h-[26px]"/>
                    </div>
                    <div className="uppercase font-semibold text-20 mx-4 text-grey-2 font-proxima dark:text-white">Pizza Hot-Dog
                    </div>
                </div>
                <div className="mt-[30px]">
                    <Slider {...settings}>
                        {
                            PIZZA_DATA.map((pizza) => (
                                <div className="border border-solid border-light-grey dark:border-grey rounded-15"
                                     key={Math.random()}>
                                    <div>
                                        <div className="overflow-hidden">
                                            <img src={pizza.image} alt={pizza.image}
                                                 className="py-7 w-full h-full object-contain transition-all duration-300 ease-linear hover:scale-110"/>
                                        </div>
                                        <div className="relative">
                                            <div
                                                className="m-0 font-semibold font-proxima cursor-pointer text-center text-grey-2 dark:text-white uppercase text-12 px-2.5 break-words h-[66px] leading-[1.1rem]">{pizza.title}</div>
                                            <div
                                                className="flex items-center justify-center w-[90%] h-[44px] my-0 mx-auto absolute -mt-[22px] left-[5%]">
                                                <div
                                                    className="w-6/12 text-center h-full flex items-center justify-center bg-dark-grey rounded-l-10 text-white uppercase text-12 font-proxima">{pizza.price}
                                                    <span className="text-[.8em] pl-1 mt-[3px]">AMD</span></div>
                                                <div
                                                    className="w-6/12 text-center h-full flex items-center justify-center bg-red rounded-r-10 text-white uppercase">
                                                    <img src={basketPlus} alt={basketPlus}
                                                         className="w-[22px] h-[30px] pr-1.2"/>
                                                    <p className="text-10 font-proxima">Add</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default ProductPizza;