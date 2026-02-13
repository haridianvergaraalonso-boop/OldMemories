import "./Home.css"
import Header from "../../components/header/Header"
import { useLanguage } from "../../i18n/Language";
import translations from "../../i18n/translations";

function Home() {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <>
            <Header />
            <div className="home-title">
                <h1>{t.homeTitle}</h1>
            </div>

            <div className="home-subtitle">
                <p>{t.homeSubtitle}</p>
            </div>

            <div className="home-info-title">
                <h2>{t.homeInfoTitle}</h2>
            </div>

            <div className="home-info">
                <p>{t.homeInfo}</p>
            </div>

            <div className="home-explore">
                <p>{t.homeExplore}</p>
            </div>
        </>
    )
}

export default Home