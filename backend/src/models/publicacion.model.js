import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  //titulo del post
    title: { type: String, required: true },
  // contenido del post
    content: { type: String, required: true },
  // nombre de autor del post
    author: { type: String, required: false },
  // categoria del post si es noticias,mantenimientos de moto,rutas para roda,modelos de motos
    category: { type: String, required: false },
  // fecha del post
  createdAt: { type: Date, default: Date.now },
  //actualizar post
  updatedAt: { type: Date },
 // ver numero de vistas
  views: { type: Number, default: 0 },
});

export default mongoose.model('post', postSchema);