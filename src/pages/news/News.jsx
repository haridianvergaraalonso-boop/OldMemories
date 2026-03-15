import news from "../../data/news";
import NewsItem from "../../components/news-item/NewsItem";
import Header from "../../components/header/Header";
import "./News.css";
import { useLanguage } from "../../i18n/Language";
import translations from "../../i18n/translations";

function News() {
    const { language } = useLanguage();
    const t = translations[language];
    return (
        <div className="news">
            <Header />
            <section className="news__hero">
                <h1 className="news__title">{t.newsTitle}</h1>
                <p className="news__subtitle">{t.newsSubtitle}</p>
                <a className="news__rss-link" href="https://old-memories-8e409.web.app/rss.xml" target="_blank" rel="noreferrer">
                    📡 {t.newsRss}
                </a>
            </section>

            <section className="news__grid">
                {news.map((item, index) => (
                    <NewsItem
                        key={index}
                        title={item.title}
                        description={item.description}
                        link={item.link}
                    />
                ))}
            </section>
        </div>
    );
}

export default News;