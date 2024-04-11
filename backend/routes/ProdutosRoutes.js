import express from 'express'
import UsuariosController from '../controllers/UsuariosController.js';

const ProdutosRoutes = express.Router();

const usuariosController = new UsuariosController();
ProdutosRoutes.get('/produtos', usuariosController.findAll);
ProdutosRoutes.get('/produtos/:id', usuariosController.findOne);
ProdutosRoutes.post('/produtos', usuariosController.create);
ProdutosRoutes.put('/produtos/:id', usuariosController.update);
ProdutosRoutes.delete('/produtos/:id', usuariosController.delete);

export default ProdutosRoutes;