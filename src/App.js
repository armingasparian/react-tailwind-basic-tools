import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Pages from "./pages/index";
import {useState, useEffect} from "react";
import useWindowSize from "./hooks/useWindowSize";
import HeaderMobile from "./components/header/HeaderMobile";
import BottomMenuMobile from "./components/menu/BottomMenuMobile";

function App() {

    const [theme, setTheme] = useState("light");

    const windowSize = useWindowSize();

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme])

    const themeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    }
    return (
        <>
            {
                (windowSize > 768) ? <Header themeSwitch={themeSwitch}/> : <HeaderMobile/>
            }
            <Pages themeSwitch={themeSwitch}/>
            {
                (windowSize > 768) ? <Footer/> : <BottomMenuMobile/>
            }
        </>
    );
}

export default App;
