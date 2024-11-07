import Post from '../models/publicacion.model.js'; 
import mongoose from 'mongoose';

// Crear un nuevo post
export const postPublicacion = async (req, res) => {
  try {
    const { title, content, author, category } = req.body;
    
    if (!title || !content || !author) {
      return res.status(400).json({ message: 'Faltan parámetros obligatorios' });
    }

    const newPost = new Post({ title, content, author, category });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    console.error(error); // Es importante registrar el error en el servidor
    res.status(500).json({ message: 'Error al crear el post', error });
  }
};

// Obtener todos los posts
export const getPublicacion = async (req, res) => {
  try {
    const posts = await Post.find().populate('author').populate('category');
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los posts', error });
  }
};

// Obtener un post por ID
export const getPublicacionById = async (req, res) => {
  try {
    const { id } = req.params;

    // Validar que el ID sea un ObjectId válido
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'ID no válido' });
    }

    const post = await Post.findById(id).populate('author').populate('category');
    
    if (!post) {
      return res.status(404).json({ message: 'Post no encontrado' });
    }

    res.status(200).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener el post', error });
  }
};

// Actualizar un post por ID
export const putPublicacionById = async (req, res) => {
  try {
    const { id } = req.params;

    // Validar que el ID sea un ObjectId válido
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'ID no válido' });
    }

    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { ...req.body, updatedAt: Date.now() }, // Usamos el Date.now() para actualizar la fecha
      { new: true }
    );

    if (!updatedPost) {
      return res.status(404).json({ message: 'Post no encontrado' });
    }

    res.status(200).json(updatedPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar el post', error });
  }
};

// Eliminar un post por ID
export const deletePublicacionById = async (req, res) => {
  try {
    const { id } = req.params;

    // Validar que el ID sea un ObjectId válido
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'ID no válido' });
    }

    const deletedPost = await Post.findByIdAndDelete(id);
    
    if (!deletedPost) {
      return res.status(404).json({ message: 'Post no encontrado' });
    }

    res.status(200).json({ message: 'Post eliminado' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar el post', error });
  }
};
