import bcrypt from 'bcryptjs'
import { AdminModel } from '../models/administrador.modelo.js';
import { generateToken } from '../lib/jwt.js';

export const loginService = async (email, password) => {
    try {
        const admin = await AdminModel.findOne({ email });
        if (!admin) {
            throw new Error('Correo electrónico no encontrado');
        }

        const isPasswordValid = await bcrypt.compare(password, admin.password);
        if (!isPasswordValid) {
            throw new Error('Contraseña incorrecta');
        }

        const payload = {
            id: admin._id,
            username: admin.username,
            role: admin.role,
        };
        const token = await generateToken(payload);

        return {
            token,
            admin: {
                id: admin._id,
                username: admin.username,
                email: admin.email,
                role: admin.role,
            },
        };
    } catch (error) {
        throw new Error(`Error en loginService: ${error.message}`);
    }
};
