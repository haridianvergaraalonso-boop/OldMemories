import news from "../../data/news";
import NewsItem from "../../components/news-item/NewsItem";
import Header from "../../components/header/Header";
import "./News.css";

function News() {
    return (
        <div className="news">
            <Header />

            <section className="news__hero">
                <h1 className="news__title">Noticias</h1>
                <p className="news__subtitle">Lo último sobre la estética Frutiger Aero y el internet de los 2000s.</p>

                <a className="news__rss-link" href="https://frutigeraero.org/rss/blog.xml" target="_blank" rel="noreferrer">
                    📡 Suscríbete vía RSS
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