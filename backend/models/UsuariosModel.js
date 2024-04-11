import Conexao from '../config/Conexao.js';

class UsuariosModel {
  paginate(pagina_atual, total_por_pagina, total_registros) {
    let qtde_paginas = parseInt(total_registros / total_por_pagina);
    let resto_divisao = total_registros % total_por_pagina;

    if (resto_divisao > 0) {
      qtde_paginas++;
    }

    let offset = 0;
    if (pagina_atual > 1) {
      const pagina = pagina_atual - 1;
      offset = pagina * total_por_pagina;
    }

    const dados_paginacao = {
      limit: total_por_pagina,
      offset: offset,
      qtde_paginas: qtde_paginas
    };
    return dados_paginacao;

  }

  async login(login, senha) {
    const con = new Conexao();
    const sql = "SELECT * FROM usuarios WHERE login = ? AND senha = ?";
    const dados = [login, senha];
    const resultados = await con.query(sql, dados);
    return resultados;
  }

  async getTotalRegister() {
    const con = new Conexao();
    const paginas = await con.query("SELECT count(id) as total FROM usuarios", {});
    return paginas;
  }

  async findAll(page, pesquisa) {

    const paginas = await this.getTotalRegister();
    const paginacao = this.paginate(page, 5, paginas[0].total);


    let sql = `SELECT * FROM usuarios LIMIT ${paginacao.limit} OFFSET ${paginacao.offset}`;
    if (pesquisa) {
      sql = `
                SELECT * 
                FROM usuarios 
                WHERE 
                nome like '%${pesquisa}%'
                OR login like '%${pesquisa}%'
                LIMIT ${paginacao.limit} 
                OFFSET ${paginacao.offset}`;
    }

    const dados = {};

    const con = new Conexao();
    const resultados = await con.query(sql, dados);
    return resultados;
  }

  async findOne(id) {
    const con = new Conexao();
    const sql = "SELECT * FROM usuarios WHERE id = " + id;
    const dados = {};
    const resultados = await con.query(sql, dados);
    return resultados;
  }

  async create(data) {
    const con = new Conexao();
    const sql = "INSERT INTO usuarios SET ";
    const dados = data;
    const resultados = await con.query(sql, dados);
    return resultados;
  }

  async update(data, id) {
    const con = new Conexao();
    const sql = "UPDATE usuarios SET ? WHERE id = ? ";
    const dados = [data, id];
    const resultados = await con.query(sql, dados);
    return resultados;
  }

  async delete(id) {
    const con = new Conexao();
    const sql = "DELETE FROM usuarios WHERE id = " + id;
    const dados = {};
    const resultados = await con.query(sql, dados);
    return resultados;
  }
}

export default UsuariosModel;