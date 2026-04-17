import * as XLSX from "xlsx";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/Firebase";
import "./import-export.css";

function ImportExport({ galleryItems, onImportDone }) {

  // ══════════════════════════════════════
  // EXPORTAR JSON
  // ══════════════════════════════════════
  const exportJSON = () => {
    const texto = JSON.stringify(galleryItems, null, 2);
    descargarArchivo(texto, "galeria.json", "application/json");
  };

  // ══════════════════════════════════════
  // IMPORTAR JSON
  // ══════════════════════════════════════
  const importJSON = (e) => {
    const archivo = e.target.files[0];
    const reader = new FileReader();
    reader.onload = async (evento) => {
      const items = JSON.parse(evento.target.result);
      for (const item of items) {
        const { id, ...datos } = item;
        await addDoc(collection(db, "gallery"), datos);
      }
      onImportDone();
    };
    reader.readAsText(archivo);
  };

  // ══════════════════════════════════════
  // EXPORTAR XML
  // ══════════════════════════════════════
  const exportXML = () => {
    const lineas = galleryItems.map(item => `
  <foto>
    <title>${item.title}</title>
    <description>${item.description}</description>
    <category>${item.category}</category>
    <year>${item.year}</year>
    <image>${item.image}</image>
    <tags>${item.tags.join(", ")}</tags>
  </foto>`).join("");

    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<galeria>${lineas}\n</galeria>`;
    descargarArchivo(xml, "galeria.xml", "application/xml");
  };

  // ══════════════════════════════════════
  // IMPORTAR XML
  // ══════════════════════════════════════
  const importXML = (e) => {
    const archivo = e.target.files[0];
    const reader = new FileReader();
    reader.onload = async (evento) => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(evento.target.result, "application/xml");
      const fotos = xmlDoc.querySelectorAll("foto");

      for (const foto of fotos) {
        const datos = {
          title: foto.querySelector("title").textContent,
          description: foto.querySelector("description").textContent,
          category: foto.querySelector("category").textContent,
          year: foto.querySelector("year").textContent,
          image: foto.querySelector("image").textContent,
          tags: foto.querySelector("tags").textContent.split(", "),
        };
        await addDoc(collection(db, "gallery"), datos);
      }
      onImportDone();
    };
    reader.readAsText(archivo);
  };

  // ══════════════════════════════════════
  // EXPORTAR CSV
  // ══════════════════════════════════════
  const exportCSV = () => {
    const cabecera = "title,description,category,year,image,tags";
    const filas = galleryItems.map(item =>
      `"${item.title}","${item.description}","${item.category}","${item.year}","${item.image}","${item.tags.join("|")}"`
    );
    const csv = [cabecera, ...filas].join("\n");
    descargarArchivo(csv, "galeria.csv", "text/csv");
  };

  // ══════════════════════════════════════
  // IMPORTAR CSV
  // ══════════════════════════════════════
  const importCSV = (e) => {
    const archivo = e.target.files[0];
    const reader = new FileReader();
    reader.onload = async (evento) => {
      const lineas = evento.target.result.trim().split("\n");
      lineas.shift(); // elimina la cabecera
      for (const linea of lineas) {
        const [title, description, category, year, image, tags] = linea
          .split(",")
          .map(v => v.replace(/"/g, "").trim());
        await addDoc(collection(db, "gallery"), {
          title, description, category, year, image,
          tags: tags.split("|"),
        });
      }
      onImportDone();
    };
    reader.readAsText(archivo);
  };

  // ══════════════════════════════════════
  // EXPORTAR EXCEL
  // ══════════════════════════════════════
  const exportExcel = () => {
    const datos = galleryItems.map(item => ({
      Título: item.title,
      Descripción: item.description,
      Categoría: item.category,
      Año: item.year,
      Imagen: item.image,
      Tags: item.tags.join(", "),
    }));
    const hoja = XLSX.utils.json_to_sheet(datos);
    const libro = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(libro, hoja, "Galería");
    XLSX.writeFile(libro, "galeria.xlsx");
  };

  // ══════════════════════════════════════
  // IMPORTAR EXCEL
  // ══════════════════════════════════════
  const importExcel = (e) => {
    const archivo = e.target.files[0];
    const reader = new FileReader();
    reader.onload = async (evento) => {
      const libro = XLSX.read(evento.target.result, { type: "binary" });
      const hoja = libro.Sheets[libro.SheetNames[0]];
      const filas = XLSX.utils.sheet_to_json(hoja);
      for (const fila of filas) {
        await addDoc(collection(db, "gallery"), {
          title: fila["Título"],
          description: fila["Descripción"],
          category: fila["Categoría"],
          year: String(fila["Año"]),
          image: fila["Imagen"],
          tags: fila["Tags"] ? fila["Tags"].split(", ") : [],
        });
      }
      onImportDone();
    };
    reader.readAsBinaryString(archivo);
  };

  // ══════════════════════════════════════
  // FUNCIÓN AUXILIAR para descargar
  // ══════════════════════════════════════
  const descargarArchivo = (contenido, nombre, tipo) => {
    const blob = new Blob([contenido], { type: tipo });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = nombre;
    a.click();
    URL.revokeObjectURL(url);
  };

  // ══════════════════════════════════════
  // RENDER
  // ══════════════════════════════════════
  return (
    <div className="import-export">
      <h3 className="import-export__title">📂 Importar / Exportar</h3>

      <div className="import-export__group">
        <span>JSON</span>
        <button onClick={exportJSON}>⬇️ Exportar</button>
        <label>⬆️ Importar <input type="file" accept=".json" onChange={importJSON} hidden /></label>
      </div>

      <div className="import-export__group">
        <span>XML</span>
        <button onClick={exportXML}>⬇️ Exportar</button>
        <label>⬆️ Importar <input type="file" accept=".xml" onChange={importXML} hidden /></label>
      </div>

      <div className="import-export__group">
        <span>CSV</span>
        <button onClick={exportCSV}>⬇️ Exportar</button>
        <label>⬆️ Importar <input type="file" accept=".csv" onChange={importCSV} hidden /></label>
      </div>

      <div className="import-export__group">
        <span>Excel</span>
        <button onClick={exportExcel}>⬇️ Exportar</button>
        <label>⬆️ Importar <input type="file" accept=".xlsx,.xls" onChange={importExcel} hidden /></label>
      </div>
    </div>
  );
}

export default ImportExport;