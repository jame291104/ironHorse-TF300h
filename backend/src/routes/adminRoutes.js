import express from "express";
import {
    createAdmin,
    getAllAdmins,
    getAdminById,
    updateAdmin,
    deleteAdmin
} from "../controllers/admin.controller.js";

const router = express.Router();

// Ruta para crear un nuevo administrador
router.post("/crear", createAdmin);

// Ruta para obtener todos los administradores
router.get("/obtener", getAllAdmins);

// Ruta para obtener un administrador por su ID
router.get("/admin/:id", getAdminById);

// Ruta para actualizar un administrador
router.put("/admin/:id", updateAdmin);

// Ruta para eliminar un administrador
router.delete("/admin/:id", deleteAdmin);

export default router;
