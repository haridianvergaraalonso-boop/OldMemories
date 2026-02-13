import { useState } from "react"
import { Link } from "react-router-dom"
import "./header.css"
import { useLanguage } from "../../i18n/Language";
import translations from "../../i18n/translations";
function Header() {
    const [isSideMenuVisible, setIsSideMenuVisible] = useState(false)


    const toggleSideMenu = () => {
        setIsSideMenuVisible(prev => !prev)
        return
    }

    const { language, toggleLanguage } = useLanguage();
    const t = translations[language];

    return (
        <>
            <div className="header-main">
                <div className="header-logo" onClick={toggleSideMenu}>
                    <img src="frutigerAero.png" alt="logo" />
                </div>
                <button className="header-lang-btn" onClick={toggleLanguage}>
                    {language === "es" ? "EN" : "ES"}
                </button>
            </div>
            {
                isSideMenuVisible ?
                    <div className="header-side-menu">
                        <ul>
                            <li><Link to="/home">{t.home}</Link></li>
                            <li><Link to="/gallery">{t.gallery}</Link></li>
                            <li><Link to="/history">{t.history}</Link></li>
                        </ul>
                    </div>
                    :
                    <></>
            }
        </>
    )
}


export default Header