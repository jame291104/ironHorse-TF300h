import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  //titulo del post
    title: { type: String, required: true },
  // contenido del post
  //campo Image: string, required
  //campo description: string, required
    content: { type: String, required: true },
  // nombre de autor del post
    author: { type: String, required: false },
  // categoria del post si es noticias,mantenimientos de moto,rutas para roda,modelos de motos
    category: { type: String, required: false },
  // fecha del post
  createdAt: { type: Date, default: Date.now },
  //actualizar post
  updatedAt: { type: Date }, // TO DO JESUS: Predefinir la fecha de actualizacion con la fecha de creacion para evitar que se vaya vacía
 // ver numero de vistas
  views: { type: Number, default: 0 },
});

export default mongoose.model('post', postSchema);