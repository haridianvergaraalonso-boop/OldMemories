function NewsItem({ title, description, link }) {
  return (
    <article className="news-item">
      <h2 className="news-item__title">{title}</h2>
      <p className="news-item__desc">{description}</p>
      <a className="news-item__link" href={link} target="_blank" rel="noreferrer">
        Leer más →
      </a>
    </article>
  );
}

export default NewsItem;