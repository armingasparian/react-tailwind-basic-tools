import searchIcon from "../../../../assets/searchWhite.svg";

const ProductSearch = () => {
    return (
        <section className="product-search p-[4vw] flex gap-[4vw] items-center">
            <div>
                <div
                    className="flex items-center justify-center text-12 bg-dark-grey cursor-pointer m-0 p-2.5 rounded-10 w-[250px] h-[42px]">
                    <a className="text-white font-proxima uppercase" href="/">All Products</a>
                </div>
            </div>
            <div className="w-full flex">
                <input type="text" maxLength="60" placeholder="Tape the name of a dish..."
                       className="mr-4 outline-0 leading-none text-10 placeholder-text-10 border border-solid border-light-grey p-2.5 w-full rounded-10 h-[42px] min-w-[400px] shadow-none bg-transparent"/>
                <div className="w-[42px] h-[42px] p-2.5 rounded-10 flex items-center justify-center bg-red">
                    <img src={searchIcon} alt={searchIcon} className="w-[15px] h-[15px]"/>
                </div>
            </div>
        </section>
    )
}
export default ProductSearch;