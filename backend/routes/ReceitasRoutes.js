import express from 'express'
import ReceitasController from '../controllers/ReceitasController.js';

const ReceitasRoutes = express.Router();

const receitasController = new ReceitasController();
ReceitasRoutes.get('/receitas', receitasController.findAll);
ReceitasRoutes.get('/receitas/:id', receitasController.findOne);
ReceitasRoutes.post('/receitas', receitasController.create);
ReceitasRoutes.put('/receitas/:id', receitasController.update);
ReceitasRoutes.delete('/receitas/:id', receitasController.delete);

export default ReceitasRoutes;