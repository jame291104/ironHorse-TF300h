import express from 'express';
// loginRoutes.js
import authMiddleware  from '../middleware/auth.js';  
import { loginService } from '../services/loginService.js';


const router = express.Router();

// Ruta para iniciar sesión
router.post('/', loginService);

// Ruta protegida de ejemplo
router.get('/protected', authMiddleware, (req, res) => {
    res.status(200).json({ message: 'Acceso autorizado', user: req.user });
});

export default router;
