// Vamos a configurar nuestro servidor con Express y vamos a gestionar todo lo relacionado  con la logica de negocio -> conexion de base de datos, peticiones, respuestas
// 1. Importamos las dependencias y modulos que necesitamos

import express from "express";
import dotenv from "dotenv";
import { connectionMongo } from "./src/config/dataBase.js";

import publicacionRouter from './src/routes/publicacion.routes.js';
// 2 configurar el uso de nuestro servidor
const app = express()
dotenv.config()
connectionMongo()

const port = process.env.PORT;
console.log("PORT", process.env.PORT);


app.use(express.json());
app.use('/api/publicaciones', publicacionRouter);

// 3. Ejecutar el servidor en nuestro computador
app.listen(port, () => {console.log("We are conected ironhorse", port)})