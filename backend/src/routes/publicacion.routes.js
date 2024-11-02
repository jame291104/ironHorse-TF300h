import express from 'express';
import { getPublicacion, postPublicacion, putPublicacionById, deletePublicacionById } from '../controllers/publicacion.controller.js';

export const publicacionRouter = express.Router();

// Ruta para obtener publicaciones
publicacionRouter.get('/obtener', getPublicacion);

// Ruta para crear una publicación
publicacionRouter.post('/crear', postPublicacion);

// Ruta para editar una publicación específica por su ID
publicacionRouter.put('/editar/:id', putPublicacionById);

// Ruta para eliminar una publicación específica por su ID
publicacionRouter.delete('/eliminar/:id', deletePublicacionById);

export default publicacionRouter;
