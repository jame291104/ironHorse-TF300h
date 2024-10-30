import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  //titulo del post
    title: { type: String, required: true },
  // contenido del post
    content: { type: String, required: true },
  // nombre de autor del post
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  // categoria del post si es noticias,mantenimientos de moto,rutas para roda,modelos de motos
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  // fecha del post
  createdAt: { type: Date, default: Date.now },
  //actualizar post
  updatedAt: { type: Date },
 // ver numero de vistas
  views: { type: Number, default: 0 },
});

export default mongoose.model('Post', postSchema);