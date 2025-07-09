-- Criar o banco de dados
CREATE DATABASE IF NOT EXISTS alimcheck_db;
USE alimcheck_db;

-- Tabela de usuários
CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  senha_hash VARCHAR(255) NOT NULL,
  tipo VARCHAR(30) NOT NULL
);

-- Tabela de estabelecimentos
CREATE TABLE estabelecimentos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  endereco VARCHAR(255),
  categoria VARCHAR(100),
  dono_id INT,
  imagem_url TEXT,
  FOREIGN KEY (dono_id) REFERENCES usuarios(id)
);

-- Tabela de avaliações
CREATE TABLE avaliacoes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  usuario_id INT NOT NULL,
  estabelecimento_id INT NOT NULL,
  nota INT NOT NULL,
  comentario TEXT,
  data_avaliacao DATETIME DEFAULT CURRENT_TIMESTAMP,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
  FOREIGN KEY (estabelecimento_id) REFERENCES estabelecimentos(id)
);