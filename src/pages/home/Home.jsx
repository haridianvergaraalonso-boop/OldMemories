import "./Home.css"
import Header from "../../components/header/Header"
import { Link } from "react-router-dom"
import { useLanguage } from "../../i18n/Language";
import translations from "../../i18n/translations";

function Home() {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <>
            <Header />

            <div className="home-hero">
                <h1 className="home-hero__title">{t.homeTitle}</h1>
                <p className="home-hero__subtitle">{t.homeSubtitle}</p>
            </div>

            <div className="home-info-section">
                <h2 className="home-info__title">{t.homeInfoTitle}</h2>
                <div className="home-info__box">
                    <p>{t.homeInfo}</p>
                </div>
                <p className="home-info__explore">{t.homeExplore}</p>
            </div>

            {/* Botones retro */}
            <div className="home-nav">
                <Link to="/gallery" className="home-nav__btn home-nav__btn--gallery">
                    <span className="home-nav__btn-icon">🖼️</span>
                    <span className="home-nav__btn-label">Archivo</span>
                    <span className="home-nav__btn-sub">Galería de imágenes</span>
                </Link>
                <Link to="/history" className="home-nav__btn home-nav__btn--history">
                    <span className="home-nav__btn-icon">📖</span>
                    <span className="home-nav__btn-label">Historia</span>
                    <span className="home-nav__btn-sub">Orígenes del estilo</span>
                </Link>
                <Link to="/news" className="home-nav__btn home-nav__btn--news">
                    <span className="home-nav__btn-icon">📡</span>
                    <span className="home-nav__btn-label">Noticias</span>
                    <span className="home-nav__btn-sub">Feed RSS</span>
                </Link>
            </div>
        </>
    )
}

export default Home