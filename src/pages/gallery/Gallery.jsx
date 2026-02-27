import Header from "../../components/header/Header";
import GalleryCards from "./GalleryCards";
import galleryItems from "./Gallery-data";
import { useLanguage } from "../../i18n/Language";
import translations from "../../i18n/translations";
import "./Gallery.css";

function Gallery() {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <div className="gallery">
      <Header />

      <section className="gallery__hero">
        <h1 className="gallery__title">Archivo</h1>
        <p className="gallery__subtitle">Fotos que muestran la idea del futuro concebido por las personas de la época.</p>
      </section>

      <section className="gallery__grid">
        {galleryItems.map((item) => (
          <GalleryCards
            key={item.id}
            title={item.title}
            description={item.description}
            category={item.category}
            year={item.year}
            color={item.color}
            image={item.image}
            tags={item.tags}
          />
        ))}
      </section>
    </div>
  );
}

export default Gallery;