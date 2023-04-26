import logo from "../../assets/logo.png";
import menu from "../../assets/burger-icon.svg";
import searchIcon from "../../assets/searchWhite.svg";
import ProductSearchMobile from "../../pages/ProductPage/components/ProductSearch/ProductSearchMobile";
import {useState} from "react";

const HeaderMobile = () => {
    const [searchBlock, setSearchBlock] = useState(false);

    return (
        <section
            className="header-mobile justify-between font-semibold items-center flex header fixed left-0 right-0 top-0 z-6 h-[60px] py-2.5 px-3.7 bg-white dark:bg-dark-mode-grey leading-[1.1] shadow-menuShadow">
            <div className="flex">
                <img
                    className="flex items-center justify-center cursor-pointer overflow-hidden min-h-[40px] min-w-[40px] h-10 w-10 rounded-full"
                    src={logo} alt={logo}/>
                <div className="ml-2 cursor-pointer flex justify-center flex-col">
                    <div className="text-grey-4 font-[600] font-proxima text-12 leading-[1.2]">Welcome to</div>
                    <div
                        className="font-proxima font-[600] capitalize text-14 leading-[1.2] overflow-hidden whitespace-nowrap text-ellipsis text-red 2xs:max-w-[100px]">
                        Pizza Hut Armenia menu
                    </div>
                </div>
            </div>
            <div className="flex items-center">
                <div className="mr-2 w-10 h-10 cursor-pointer flex items-center justify-center rounded-12 bg-red"
                     onClick={() => setSearchBlock(true)}>
                    <img src={searchIcon} alt={searchIcon} className="w-[40%] h-[40%]"/>
                </div>
                {
                    searchBlock && <ProductSearchMobile setSearchBlock={setSearchBlock}/>
                }

                <div
                    className="w-10 h-10 cursor-pointer flex items-center justify-center rounded-12 font-proxima uppercase font-[600] text-16 text-white bg-red">en
                </div>
                <div
                    className="ml-2 w-10 h-10 cursor-pointer flex items-center justify-center rounded-12 border border-grey-light">
                    <img src={menu} alt={menu} className="w-[40%] h-[40%]"/></div>
            </div>
        </section>
    )
}
export default HeaderMobile;