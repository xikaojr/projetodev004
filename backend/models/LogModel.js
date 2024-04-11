import Conexao from '../config/Conexao.usuariosjs';

class LogModel {

  async findAll() {
    const con = new Conexao();
    const sql = "SELECT * FROM logs";
    const dados = {};
    const resultados = await con.query(sql, dados);
    return resultados;
  }

  async findOne(id) {
    const con = new Conexao();
    const sql = "SELECT * FROM logs WHERE id = " + id;
    const dados = {};
    const resultados = await con.query(sql, dados);
    return resultados;
  }

  async create(data) {
    const con = new Conexao();
    const sql = "INSERT INTO logs SET ";
    const dados = data;
    const resultados = await con.query(sql, dados);
    return resultados;
  }

  async update(data, id) {
    const con = new Conexao();
    const sql = "UPDATE logs SET ? WHERE id = ? ";
    const dados = [data, id];
    const resultados = await con.query(sql, dados);
    return resultados;
  }

  async delete(id) {
    const con = new Conexao();
    const sql = "DELETE FROM logs WHERE id = " + id;
    const dados = {};
    const resultados = await con.query(sql, dados);
    return resultados;
  }
}

export default LogModel;