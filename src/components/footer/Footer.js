import {FOOTER_DATA_LOCATION, FOOTER_DATA_MENU} from "./data";
import locationIcon from '../../assets/location.svg';
import phonesIcon from '../../assets/phones.svg';
import emailIcon from '../../assets/email.svg';

const Footer = () => {
    return (
        <section className="footer px-[4vw] bg-dark-grey dark:bg-dark-mode-grey">
            <div className="py-7.5 border-solid border-b border-grey flex justify-between">
                <div className="flex flex-wrap">
                    <div className="pt-2.5 pr-6.5">
                        {FOOTER_DATA_LOCATION.map((location) => (
                            <div className="mb-1.25" key={Math.random()}>
                                <a href={location.href} className="flex items-center">
                                    <img src={locationIcon} alt="location" className="mr-2 w-w16"/>
                                    <span className="text-white text-[15px] font-proxima">{location.title}</span>
                                </a>
                            </div>
                        ))}
                    </div>
                    <div className="pt-2.5 pr-6.5">
                        <div className="mb-1 flex items-center">
                            <img src={phonesIcon} alt="phones" className="mr-2 w-w16"/>
                            <a dir="ltr" href="tel:060505505" className="text-white text-[15px] font-proxima">
                                060505505
                            </a>
                        </div>
                    </div>
                    <div className="pt-2.5 pr-6.5">
                        <div className="mb-1 flex items-center">
                            <img src={emailIcon} alt="email" className="mr-2 w-w16"/>
                            <a href="mailto:delivery@derjavas.am"
                               className="text-white text-[15px] font-proxima">delivery@derjavas.am</a>
                        </div>
                    </div>
                </div>
                <div>
                    <ul className="flex list-none justify-end p-0 m-0">
                        <li>
                            <a className="w-10 h-10 bg-grey-2 rounded-full flex justify-center items-center relative mb-1.25 ml-1.25"
                               href="https://www.facebook.com/PizzaHut.AM/">
                                <i className="fa-brands fa-facebook-f text-white static text-base"></i>
                            </a>
                        </li>
                        <li>
                            <a className="w-10 h-10 bg-grey-2 rounded-full flex justify-center items-center relative mb-1.25 ml-1.25"
                               href="https://www.instagram.com/pizzahut_armenia/">
                                <i className="fa-brands fa-instagram text-white static text-base"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-between py-7.5">
                <div className="flex">
                    {FOOTER_DATA_MENU.map((menu) => (
                        <a className="cursor-pointer text-10 text-white mr-12 font-proxima" href={menu.href}
                           key={Math.random()}>{menu.title}</a>
                    ))}
                </div>
                <div><a href="https://bonee.net" className="text-grey-3 text-10 font-proxima">@ 2021 Copyright:
                    bonee.net</a></div>
            </div>
        </section>
    )
}
export default Footer;