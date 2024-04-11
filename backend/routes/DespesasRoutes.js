import express from 'express'
import DespesasController from '../controllers/DespesasController.js';

const DespesasRoutes = express.Router();

const despesasController = new DespesasController();
DespesasRoutes.get('/despesas', despesasController.findAll);
DespesasRoutes.get('/despesas/:id', despesasController.findOne);
DespesasRoutes.post('/despesas', despesasController.create);
DespesasRoutes.put('/despesas/:id', despesasController.update);
DespesasRoutes.delete('/despesas/:id', despesasController.delete);

export default DespesasRoutes;