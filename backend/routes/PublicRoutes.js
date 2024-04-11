import express from 'express'
import UsuariosController from '../controllers/UsuariosController.js';

const PublicRoutes = express.Router();

const usuariosController = new UsuariosController();
PublicRoutes.post('/login', usuariosController.login);

export default PublicRoutes;