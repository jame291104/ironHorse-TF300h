export interface Post {
  // Id del artículo
  _id: string;

  // Título del post
  title: string; 

  // Contenido del post
  content: string; 

  // Nombre del autor del post
  author?: string; 

  // Categoría del post (noticias, mantenimientos de moto, rutas para rodar, modelos de motos)
  category?: string; 

  // Fecha de creación del post
  createdAt: Date; 

  // Fecha de última actualización del post
  updatedAt?: Date; 

  // URL de la imagen asociada al post
  image?: string; 

  // Descripción breve del post
  description?: string; 
}
