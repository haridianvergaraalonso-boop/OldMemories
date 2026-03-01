import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/Firebase";
import Header from "../../components/header/Header";
import GalleryCards from "./GalleryCards";
import { useLanguage } from "../../i18n/Language";
import translations from "../../i18n/translations";
import "./Gallery.css";

function Gallery() {
  const { language } = useLanguage();
  const t = translations[language];

  const [galleryItems, setGalleryItems] = useState([]);
  const [selected, setSelected] = useState("all");
  const [categories, setCategories] = useState(["all"]);

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await getDocs(collection(db, "gallery"));
      const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setGalleryItems(items);

      const uniqueCategories = ["all", ...new Set(items.map(item => item.category))];
      setCategories(uniqueCategories);
    };

    fetchData();
  }, []);

  const filtered = selected === "all"
    ? galleryItems
    : galleryItems.filter(item => item.category === selected);

  return (
    <div className="gallery">
      <Header />

      <section className="gallery__hero">
        <h1 className="gallery__title">Archivo</h1>
        <p className="gallery__subtitle">Fotos que muestran la idea del futuro concebido por las personas de la época.</p>
      </section>

      <div className="gallery__filters">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={selected === cat ? "filter-btn active" : "filter-btn"}
          >
            {cat}
          </button>
        ))}
      </div>

      <section className="gallery__grid">
        {filtered.map((item) => (
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