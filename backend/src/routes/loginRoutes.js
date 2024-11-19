import express from 'express';
import { loginController } from '../controllers/loginController.js';
// loginRoutes.js
import authMiddleware  from '../middleware/auth.js';  // Importación con llaves


const router = express.Router();

// Ruta para iniciar sesión
router.post('/login', loginController);

// Ruta protegida de ejemplo
router.get('/protected', authMiddleware, (req, res) => {
    res.status(200).json({ message: 'Acceso autorizado', user: req.user });
});

export default router;
