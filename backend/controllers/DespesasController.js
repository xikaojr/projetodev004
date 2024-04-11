import DespesasModel from '../models/DespesasModel.js';

class DespesasController {
  async findAll(request, response) {
    const model = new DespesasModel();
    const data = await model.findAll();
    return response.json(data);
  }

  async findOne(request, response) {
    const id = request.params.id;
    const model = new DespesasModel();
    const data = await model.findOne(id);
    return response.json(data);
  }

  async create(request, response) {
    const body = request.body;
    const model = new DespesasModel();
    const data = await model.create(body);
    return response.json(data);
  }

  async update(request, response) {
    const body = request.body;
    const id = request.params.id;
    const model = new DespesasModel();
    const data = await model.update(body, id);
    return response.json(data);
  }

  async delete(request, response) {
    const id = request.params.id;
    const model = new DespesasModel();
    const data = await model.delete(id);
    return response.json(data);
  }
}

export default DespesasController;