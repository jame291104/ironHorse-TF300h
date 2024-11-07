import express from 'express';

import { getPublicacion, getPublicacionById, postPublicacion, putPublicacionById, deletePublicacionById } from '../controllers/publicacion.Controller.js';

const publicacionRouter = express.Router();

publicacionRouter.get('/obtener', getPublicacion);

publicacionRouter.get('/obtener/:id', getPublicacionById);

publicacionRouter.post('/crear', postPublicacion);

publicacionRouter.put('/actualizar/:id', putPublicacionById);

publicacionRouter.delete('/eliminar/:id', deletePublicacionById);

export default publicacionRouter;
