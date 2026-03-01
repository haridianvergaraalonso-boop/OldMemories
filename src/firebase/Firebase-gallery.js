import { db } from "./Firebase";
import { collection, addDoc } from "firebase/firestore";
import galleryItems from "../pages/gallery/Gallery-data";

export const uploadGallery = async () => {
  try {
    for (const item of galleryItems) {
      await addDoc(collection(db, "gallery"), item);
    }
    console.log("Galería subida a Firebase!");
  } catch (error) {
    console.error(error);
  }
};