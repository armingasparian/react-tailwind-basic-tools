import ProductSearch from './components/ProductSearch/ProductSearch';
import ProductPizza from "./components/ProductPizza";
import ProductCategories from "./components/ProductCategories/ProductCategories";
import useWindowSize from "../../hooks/useWindowSize";
import DarkMode from "../../components/DarkMode";

const Products = ({themeSwitch}) => {
    const windowSize = useWindowSize();
    return (
        <section className="product-page pt-20 min-h-screen dark:bg-dark-mode-grey sm:pb-48 xs:pb-40 2xs:pb-40">
            <div>
                {windowSize <= 768 ? '' : <ProductSearch/>}
                <ProductCategories/>
                {windowSize <= 768 ? <DarkMode themeSwitch={themeSwitch}/> : ''}
                {windowSize <= 768 ? '' : <ProductPizza/>}
            </div>
        </section>
    )
}
export default Products;