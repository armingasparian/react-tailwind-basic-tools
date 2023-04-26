import delivery from '../../assets/delivery.svg';
import aboutUs from '../../assets/aboutUs.svg';
import home from '../../assets/home.svg';
import basket from '../../assets/basket.svg';
import user from '../../assets/user.svg';

const BottomMenuMobile = () => {

    return (
        <section
            className="py-[7px] px-[10px] fixed z-6 left-0 right-0 bottom-0 min-h-[55px] bg-white dark:bg-dark-mode-grey flex font-proxima justify-between shadow-menuShadowBottom">
            <div
                className="dark:text-white text-[2.7vw] flex items-center flex-col w-[19%] text-center uppercase text-grey-2">
                <img src={home} alt={home} className="w-[27px] h-[27px] "/>
                <span>Home</span>
            </div>
            <div
                className="dark:text-white text-[2.7vw] flex items-center flex-col w-[19%] text-center uppercase text-grey-2">
                <img src={aboutUs} alt={aboutUs} className="w-[27px] h-[27px] "/>
                <span>About Us</span>
            </div>
            <div className="text-[2.5vw] flex items-center flex-col w-[20vw] text-center uppercase relative">
                <div
                    className="bottom-[14px] absolute text-white bg-blue shadow-menuShadowBottom2 w-[20vw] h-[20vw] rounded-full flex items-center flex-col justify-center">
                    <img src={delivery} alt={delivery} className="w-[50%] h-[41%] mb-[3px] mx-auto"/>
                    <span>Delivery</span>
                </div>
            </div>
            <div
                className="dark:text-white text-[2.7vw] flex items-center flex-col w-[19%] text-center uppercase text-grey-2 relative">
                <div className="relative">
                    <img src={basket} alt={basket} className="w-[27px] h-[27px] "/>
                    <p className="absolute font-bold w-[17px] h-[17px] -top-[7px] -right-[3px] text-10 flex items-center justify-center text-grey-4">0</p>
                </div>
                <span>Basket</span>
            </div>
            <div
                className="dark:text-white text-[2.7vw] flex items-center flex-col w-[19%] text-center uppercase text-grey-2">
                <img src={user} alt={user} className="w-[27px] h-[27px] "/>
                <span>Log In</span>
            </div>
        </section>
    )
}
export default BottomMenuMobile;