import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  // Título del post
  title: { type: String, required: true },
  // Contenido del post
  content: { type: String, required: true },
  // Nombre del autor del post
  author: { type: String, required: false },
  // Categoría del post (noticias, mantenimientos de moto, rutas para rodar, modelos de motos)
  category: { type: String, required: false },
  // Fecha de creación del post
  createdAt: { type: Date, default: Date.now },
  // Fecha de actualización del post
  updatedAt: { type: Date, default: Date.now },
  // Número de vistas
  views: { type: Number, default: 0 },
  // URL de la imagen asociada al post
  image: { type: String, required: false },
  // Descripción breve del post
  description: { type: String, required: false },
});

export default mongoose.model('post', postSchema);