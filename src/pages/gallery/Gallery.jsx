import { useState, useEffect } from "react";
import { collection, getDocs, deleteDoc, doc, updateDoc, addDoc } from "firebase/firestore";
import { db } from "../../firebase/Firebase";
import Header from "../../components/header/Header";
import GalleryCards from "./GalleryCards";
import { useLanguage } from "../../i18n/Language";
import translations from "../../i18n/translations";
import "./Gallery.css";
import ImportExport from "../../components/import-export/ImportExport";
<ImportExport galleryItems={galleryItems} onImportDone={fetchData} />

function Gallery() {
  const { language } = useLanguage();
  const t = translations[language];

  const [galleryItems, setGalleryItems] = useState([]);
  const [selected, setSelected] = useState("all");
  const [categories, setCategories] = useState(["all"]);

  // Estado del modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  // Estado del formulario
  const [formData, setFormData] = useState({
    title: "", description: "", category: "", year: "", image: "", tags: ""
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const snapshot = await getDocs(collection(db, "gallery"));
    const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setGalleryItems(items);
    const uniqueCategories = ["all", ...new Set(items.map(item => item.category))];
    setCategories(uniqueCategories);
  };

  // BORRAR
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "gallery", id));
    setGalleryItems(prev => prev.filter(item => item.id !== id));
  };

  // ABRIR MODAL EDITAR
  const handleEdit = (item) => {
    setIsEditing(true);
    setCurrentItem(item);
    setFormData({
      title: item.title,
      description: item.description,
      category: item.category,
      year: item.year,
      image: item.image,
      tags: item.tags.join(", ")
    });
    setIsModalOpen(true);
  };

  // ABRIR MODAL AÑADIR
  const handleOpenAdd = () => {
    setIsEditing(false);
    setCurrentItem(null);
    setFormData({ title: "", description: "", category: "", year: "", image: "", tags: "" });
    setIsModalOpen(true);
  };

  // GUARDAR (crear o editar)
  const handleSave = async () => {
    const tagsArray = formData.tags.split(",").map(tag => tag.trim());
    const itemData = { ...formData, tags: tagsArray };

    if (isEditing) {
      // ACTUALIZAR
      await updateDoc(doc(db, "gallery", currentItem.id), itemData);
    } else {
      // INSERTAR
      await addDoc(collection(db, "gallery"), itemData);
    }

    setIsModalOpen(false);
    fetchData();
  };

  const filtered = selected === "all"
    ? galleryItems
    : galleryItems.filter(item => item.category === selected);

  return (
    <div className="gallery">
      <Header />

      <section className="gallery__hero">
        <h1 className="gallery__title">{t.galleryTitle}</h1>
        <p className="gallery__subtitle">{t.gallerySubtitle}</p>
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

      <div className="gallery__add-wrapper">
        <button className="gallery__add-btn" onClick={handleOpenAdd}>
          + Añadir foto
        </button>
      </div>

      <section className="gallery__grid">
        {filtered.map((item) => (
          <GalleryCards
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            category={item.category}
            year={item.year}
            color={item.color}
            image={item.image}
            tags={item.tags}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </section>

      {/* MODAL */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <h2 className="modal__title">{isEditing ? "Editar foto" : "Añadir foto"}</h2>

            <input className="modal__input" placeholder="Título" value={formData.title}
              onChange={e => setFormData({ ...formData, title: e.target.value })} />
            <input className="modal__input" placeholder="Descripción" value={formData.description}
              onChange={e => setFormData({ ...formData, description: e.target.value })} />
            <input className="modal__input" placeholder="Categoría" value={formData.category}
              onChange={e => setFormData({ ...formData, category: e.target.value })} />
            <input className="modal__input" placeholder="Año" value={formData.year}
              onChange={e => setFormData({ ...formData, year: e.target.value })} />
            <input className="modal__input" placeholder="URL de imagen" value={formData.image}
              onChange={e => setFormData({ ...formData, image: e.target.value })} />
            <input className="modal__input" placeholder="Tags (separados por comas)" value={formData.tags}
              onChange={e => setFormData({ ...formData, tags: e.target.value })} />

            <div className="modal__actions">
              <button className="modal__btn modal__btn--cancel" onClick={() => setIsModalOpen(false)}>
                Cancelar
              </button>
              <button className="modal__btn modal__btn--save" onClick={handleSave}>
                {isEditing ? "Guardar cambios" : "Añadir"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;