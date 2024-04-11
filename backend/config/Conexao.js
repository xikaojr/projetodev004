import mysql from 'mysql'
import { makeDb } from 'mysql-async-simple';
class Conexao {
  constructor() {
    this.connection = mysql.createConnection({
      host: 'localhost',
      user: 'mysql-user-docker',
      password: 'mysql-user-secret',
      database: 'fdev004'
    });
    this.db = makeDb();
  }

  async query(sql, dados) {

    await this.db.connect(this.connection);
    try {
      const data = await this.db.query(this.connection, sql, dados);
      return data;

    } catch (e) {
      throw e;
    } finally {
      await this.db.close(this.connection);
    }
  }
}

export default Conexao;