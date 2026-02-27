import "./Gallery.css";

function GalleryCards({ title, description, category, year, color, image, tags }) {
    return (
        <article className="gallery-card" style={{ "--card-color": color }}>

            <div className="gallery-card__visual">
                <img src={image} alt={title} className="gallery-card__img" />
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