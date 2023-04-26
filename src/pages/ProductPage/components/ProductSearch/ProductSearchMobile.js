import close from "../../../../assets/close.svg";
import searchIcon from "../../../../assets/searchWhite.svg";

const ProductSearchMobile = ({setSearchBlock}) => {
    return (
        <section
            className="product-search-mobile font-semibold flex fixed left-0 right-0 top-0 z-6 h-[60px] bg-white leading-[1.1] ">
            <div className="min-h-screen py-15 px-3.7 overflow-auto w-full">
                <div
                    className="dark:bg-dark-mode-grey z-6 fixed top-0 left-0 right-0 bg-white h-[60px] py-2.5 px-3.7 flex z-5 w-full leading-[1.1] text-16 font-semibold font-proxima">
                    <div
                        className="mr-4 min-h-[40px] min-w-[40px] w-10 h-10 cursor-pointer flex items-center justify-center rounded-12 border border-grey-light"
                        onClick={() => setSearchBlock(false)}>
                        <img src={close} alt={close} className="w-[40%] h-[40%]"/>
                    </div>
                    <div className="w-full bg-light-grey rounded-[3vw] h-full flex">
                        <input type="text" placeholder="Search" maxLength="60"
                               className="border-0 shadow-none bg-transparent w-full px-3.7 outline-0 text-16 font-normal font-base placeholder:text-grey-5 placeholder:font-16 placeholder:font-proxima"/>
                        <div
                            className="min-w-[40px] min-h-[40px] w-10 h-10 cursor-pointer flex items-center justify-center rounded-12 bg-red">
                            <img src={searchIcon} alt={searchIcon} className="w-[40%] h-[40%]"/>
                        </div>
                    </div>
                </div>
                <div className="bg-white h-full overflow-hidden pr-3.7 pt-1 dark:bg-dark-mode-grey">
                    <p className="dark:text-white">
                        Choose your favourite dish...
                    </p>
                </div>
            </div>
        </section>
    )
}
export default ProductSearchMobile;
