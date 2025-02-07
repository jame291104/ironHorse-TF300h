// 1. Importamos las dependencias y modulos que necesitamos
import express from "express";
import dotenv from "dotenv";
import { connectionMongo } from "./src/config/dataBase.js";
import publicacionRouter from './src/routes/publicacion.routes.js';
import adminRouter from "./src/routes/adminRoutes.js";
import { userRouter } from './src/routes/user.routes.js';
import cors from 'cors'; //importar la dependencia cors
// importaciones para acceder a las rutas del front desde el back
import path from "path";
import { fileURLToPath } from "url";


import loginRouter from './src/routes/login.routes.js';
// 2. Configurar el uso de nuestro servidor
const app = express();
dotenv.config();
connectionMongo();
app.use(cors()); //permisos para que el backend pueda ser usado en el navegador

//Esto es para uso local
// const port = process.env.PORT || 9000; 
// console.log("PORT", port);

//Confirguraciones para acceder al frontend
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares y rutas
app.use(express.json());
app.use('/publicaciones', publicacionRouter);
app.use('/admin', adminRouter); 
app.use('/usuarios',userRouter);//importe mis rutas
app.use('/login', loginRouter);


// Servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, "public")));

// Ruta principal para servir index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

export default app;

//Esto es para uso local
// 3. Ejecutar el servidor
// app.listen(port, () => {
//   console.log("We are connected to IronHorse on port", port);
// });
