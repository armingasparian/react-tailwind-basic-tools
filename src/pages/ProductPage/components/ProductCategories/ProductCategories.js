import React, {useRef} from "react";
import useWindowSize from "../../../../hooks/useWindowSize";
import ProductCategoriesHandlers from "./ProductCategoriesHandlers";
import ProductCategoriesSlider from "./ProductCategoriesSlider";
import ProductCategoriesGrid from "./ProductCategoriesGrid";

const ProductCategories = () => {

    const windowSize = useWindowSize();
    const carouselRef = useRef();

    return (
        <section className="product-categories">
            <div
                className="px-[4vw] mx-auto mb-[80px] overflow-hidden 2xs:px-3.7 xs:px-3.7 sm:px-3.7 2xs:mb-0 xs:mb-0 sm:mb-0">
                {
                    windowSize <= 768 ? '' : <ProductCategoriesHandlers carouselRef={carouselRef}/>
                }
                {
                    windowSize > 768 ? <ProductCategoriesSlider carouselRef={carouselRef}/> : <ProductCategoriesGrid/>
                }
            </div>
        </section>
    )
}
export default ProductCategories;