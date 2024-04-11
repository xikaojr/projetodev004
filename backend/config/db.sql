-- CRIANDO BANCO DE DADOS
CREATE DATABASE fdev004;

-- TABELA DE USUARIOS
CREATE TABLE usuarios(
    id int AUTO_INCREMENT PRIMARY KEY,
    nome varchar(100),
    login varchar(100),
    senha varchar(100)
);

INSERT INTO usuarios(nome, login, senha) VALUES('admin', 'admin', '123');
INSERT INTO usuarios(nome, login, senha) VALUES('teste', 'teste', '123');
INSERT INTO usuarios(nome, login, senha) VALUES('test2e', 'test2e', '123');

-- TABELA DE DESPESAS 
CREATE TABLE despesas(
    id int AUTO_INCREMENT PRIMARY KEY,
    usuario_id int,
    descricao varchar(100) NOT NULL,
    valor float(10,2) NOT NULL DEFAULT 0,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- TABELA DE RECEITAS
CREATE TABLE receitas(
    id int AUTO_INCREMENT PRIMARY KEY,
    usuario_id int,
    descricao varchar(100) NOT NULL,
    valor float(10,2) NOT NULL DEFAULT 0,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);
