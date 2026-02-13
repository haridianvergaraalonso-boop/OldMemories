import "./GalleryCard.css";

function GalleryCards({ title, description, category, year, color, emoji, tags }) {
  return (
    <article className="gallery-card" style={{ "--card-color": color }}>

      <div className="gallery-card__visual">
        <div className="gallery-card__bubble">
          <span className="gallery-card__emoji">{emoji}</span>
        </div>
        <span className="gallery-card__category">{category}</span>
      </div>

      <div className="gallery-card__body">
        <div className="gallery-card__header">
          <h3 className="gallery-card__title">{title}</h3>
          <span className="gallery-card__year">{year}</span>
        </div>
        <p className="gallery-card__desc">{description}</p>
        <ul className="gallery-card__tags">
          {tags.map((tag) => (
            <li key={tag} className="gallery-card__tag">{tag}</li>
          ))}
        </ul>
      </div>

    </article>
  );
}

export default GalleryCards;