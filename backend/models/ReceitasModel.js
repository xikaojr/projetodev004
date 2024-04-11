import Conexao from "../config/Conexao.js";

class ReceitasModel {

  async findAll() {
    const conexao = new Conexao();
    const sql = "SELECT * FROM receitas";
    const data = await conexao.query(sql, {});
    return data;
  }

  async findOne(id) {
    const con = new Conexao();
    const sql = "SELECT * FROM receitas WHERE id = " + id;
    const dados = {};
    const resultados = await con.query(sql, dados);
    return resultados;
  }

  async create(data) {
    const con = new Conexao();
    const tabela = 'receitas';
    const camposValidos = ['descricao', 'valor', 'usuario_id'];

    const dadosFiltrados = {};
    Object.keys(data).forEach((chave) => {
      if (camposValidos.includes(chave)) {
        dadosFiltrados[chave] = data[chave];
      }
    });

    const sql = `INSERT INTO ${tabela} SET ?`;

    try {
      const resultados = await con.query(sql, [dadosFiltrados]);
      return resultados;
    } catch (error) {
      console.error('Erro ao inserir dados:', error);
      throw error;
    }
  }

  async update(data, id) {
    const con = new Conexao();
    const tabela = 'receitas';
    const camposValidos = ['descricao', 'valor', 'usuario_id']; // Colunas válidas da tabela despesas

    // Filtrar os dados para incluir apenas colunas válidas
    const dadosFiltrados = {};
    Object.keys(data).forEach((chave) => {
      if (camposValidos.includes(chave)) {
        dadosFiltrados[chave] = data[chave];
      }
    });

    // Construir a consulta SQL dinamicamente
    const sql = `UPDATE ${tabela} SET ? WHERE id = ?`;

    try {
      const resultados = await con.query(sql, [dadosFiltrados, id]);
      return resultados;
    } catch (error) {
      console.error('Erro ao atualizar dados:', error);
      throw error;
    }
  }

  async delete(id) {
    const con = new Conexao();
    const sql = "DELETE FROM receitas WHERE id = " + id;
    const dados = {};
    const resultados = await con.query(sql, dados);
    return resultados;
  }

}

export default ReceitasModel;