// routes/publicacion.routes.js

import express from 'express';
import { getPublicacion, getPublicacionById, postPublicacion, putPublicacionById, deletePublicacionById } from '../controllers/publicacion.Controller.js';
import authMiddleware from '../middleware/auth.js';

const publicacionRouter = express.Router();

// Rutas de publicaciones
publicacionRouter.get('/obtener', getPublicacion); // Probado
publicacionRouter.get('/obtener/:id', getPublicacionById); // Probado
publicacionRouter.post('/crear', postPublicacion); //Probado
publicacionRouter.put('/actualizar/:id', putPublicacionById); // Probado
publicacionRouter.delete('/eliminar/:id', deletePublicacionById); // Probado

export default publicacionRouter;

