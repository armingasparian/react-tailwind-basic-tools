import logo from "../../assets/logo.png";
import user from "../../assets/user.svg";
import basket from "../../assets/basket.svg";
import menu from "../../assets/burger-icon.svg";
import delivery from "../../assets/delivery.svg";
import {useState} from "react";

const Header = ({themeSwitch}) => {

    const [dark, setDark] = useState(false);

    const darkMode = () => {
        themeSwitch();
        setDark(!dark)
    }

    return (
        <section
            className="header justify-between font-semibold items-center leading-tight flex py-[25px] px-[4vw] fixed left-0 right-0 top-0 z-6 h-20 bg-white dark:bg-dark-mode-grey">
            <div className="flex">
                <img
                    className="flex items-center justify-center cursor-pointer overflow-hidden h-10 w-10 rounded-full"
                    src={logo} alt={logo}/>
                <div className="ml-4 cursor-pointer flex justify-center flex-col">
                    <div className="text-grey-4 font-[600] font-proxima text-10">Welcome to</div>
                    <div
                        className="font-proxima font-[600] capitalize text-14 overflow-hidden whitespace-nowrap text-ellipsis text-red">
                        Pizza Hut Armenia menu
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div
                        className="py-2 px-3.7 text-white bg-red rounded-[6px] font-normal overflow-hidden uppercase flex border-solid text-10 justify-center w-[130px] h-[36px]">
                        <img src={delivery} alt={delivery} className="w-5 h-5 mr-1.25"/>
                        <div
                            className="m-0 flex justify-center items-center cursor-pointer flex-wrap font-proxima leading-[22px] ">
                            <span>Delivery</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center">
                <div className="relative w-15 h-6.3 overflow-hidden" onClick={darkMode}>
                    <input type="checkbox"
                           className="checkbox relative opacity-0 w-full h-full p-0 m-0 cursor-pointer z-3"/>
                    <div className={(dark ? "left-[32px] " : "") +
                        "z-2 absolute top-0 left-0 bottom-0 transition-all duration-300 ease-in " +
                        "before:content-[''] before:absolute before:top-[3px] before:left-[4px] " +
                        "before:w-5 before:h-5 before:bg-red before:rounded-full before:transition-all before:duration-300 before:ease-in "}></div>
                    <div
                        className="absolute top-0 left-0 bottom-0 z-1 layer w-full rounded-full transition-all duration-300 ease-in border-solid border border-light-grey"></div>
                    {dark ?
                        <div
                            className="text pb-0 pt-1 pl-2 pr-1.2 left-[0] w-[calc(100% - 20px)] leading-none text-[9px] right-[unset] top-0 absolute flex items-center text-center text-grey-4">Dark <br/> Mode
                        </div>
                        : <div
                            className="text pb-0 pt-1 pr-2 pl-1.2 left-[unset] w-[calc(100% - 20px)] leading-none text-[9px] right-0 top-0 absolute flex items-center text-center text-grey-4">Light <br/> Mode
                        </div>}

                </div>
                <div
                    className="uppercase ml-4 cursor-pointer text-14 text-grey-2 dark:text-white font-proxima font-[600]">hy
                </div>
                <img src={user} alt={user} className="ml-4 w-5.5 h-5.5 cursor-pointer"/>
                <div className="relative">
                    <div className="ml-4">
                        <div className="inline-block">
                            <div className="cursor-pointer relative mt-1">
                                <img src={basket} alt={basket} className="w-6.2 h-6.2"/>
                                <span
                                    className="absolute text-center badge font-normal rounded-full text-white w-5 h-5 bg-red -top-1.25 -right-1.25 text-10 flex items-center justify-center">
                                        <span>0</span>
                                    </span>
                            </div>
                        </div>
                    </div>
                </div>

                <img src={menu} alt={menu} className="ml-3 w-5.5 h-5.5 ml-4 cursor-pointer"/>
            </div>
        </section>
    )
}
export default Header;