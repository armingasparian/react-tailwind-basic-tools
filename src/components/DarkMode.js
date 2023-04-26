import {useState} from "react";

const DarkMode = ({themeSwitch}) => {
    const [dark, setDark] = useState(false);
    const darkMode = () => {
        themeSwitch();
        setDark(!dark)
    }
    return (
        <div className="relative w-[calc(100%-30px)] mx-auto my-4 h-10 overflow-hidden" onClick={darkMode}>
            <input type="checkbox" className="checkbox relative opacity-0 w-full h-full p-0 m-0 cursor-pointer z-3"/>
            <div
                className={(dark ? "left-[unset] right-0 before:content-['DARK_MODE'] " : "before:content-['LIGHT_MODE'] ") +
                    "z-2 absolute top-0 left-0 bottom-0 transition-all duration-300 ease-in w-3/6 " +
                    "before:absolute before:h-full before:w-full before:text-white before:text-center before:flex before:justify-center before:items-center " +
                    "before:w-5 before:h-5 before:bg-red before:rounded-full before:transition-all before:duration-300 before:ease-in "}></div>
            <div
                className="absolute top-0 left-0 bottom-0 z-1 layer w-full rounded-full transition-all duration-300 ease-in border-solid border border-light-grey"></div>
            {dark ?
                <div
                    className="text left-[0] w-3/6 leading-none text-[12] right-[unset] top-0 absolute flex items-center text-center text-white h-full justify-center">LIGHT
                    MODE</div>
                : <div
                    className="text left-[unset] w-3/6 leading-none text-[12] right-0 top-0 absolute flex items-center text-center text-grey-2 h-full justify-center">DARK
                    MODE</div>}

        </div>
    )
}
export default DarkMode;