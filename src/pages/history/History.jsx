import Header from "../../components/header/Header";
import { useLanguage } from "../../i18n/Language";
import translations from "../../i18n/translations";
import "./History.css";

function History() {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <div className="history">
            <Header />
            <div className="history-content">
                <h1 className="history-title">{t.historyTitle}</h1>
                <p className="history-text">{t.historyIntro}</p>

                <h2 className="history-subtitle">{t.historyOrigins}</h2>
                <p className="history-text">{t.historyOriginsText}</p>

                <h2 className="history-subtitle">{t.historyVisual}</h2>
                <p className="history-text">{t.historyVisualText}</p>

                <h2 className="history-subtitle">{t.historyEra}</h2>
                <p className="history-text">{t.historyEraText}</p>

                <h2 className="history-subtitle">{t.historyDecline}</h2>
                <p className="history-text">{t.historyDeclineText}</p>
            </div>
        </div>
    );
}

export default History;