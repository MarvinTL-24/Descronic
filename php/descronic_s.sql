-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 10-Dez-2024 às 18:49
-- Versão do servidor: 10.4.32-MariaDB
-- versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `descronic's`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `conta`
--

CREATE TABLE conta (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    imagem_perfil VARCHAR(255),
    bio TEXT
);


-- --------------------------------------------------------

--
-- Estrutura da tabela `itens`
--

CREATE TABLE `itens` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `arma` varchar(255) DEFAULT NULL,
  `secundaria` varchar(255) DEFAULT NULL,
  `utilizavel1` varchar(255) DEFAULT NULL,
  `utilizavel2` varchar(255) DEFAULT NULL,
  `artefato1` varchar(255) DEFAULT NULL,
  `artefato2` varchar(255) DEFAULT NULL,
  `capacete` varchar(255) DEFAULT NULL,
  `peitoral` varchar(255) DEFAULT NULL,
  `calca` varchar(255) DEFAULT NULL,
  `calcado` varchar(255) DEFAULT NULL,
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `personagem`
--

CREATE TABLE `personagem` (
  `nome` varchar(100) NOT NULL,
  `raca` varchar(50) DEFAULT NULL,
  `idade` int(11) DEFAULT NULL,
  `sexo` varchar(10) DEFAULT NULL,
  `altura` float DEFAULT NULL,
  `peso` float DEFAULT NULL,
  `classe` varchar(100) DEFAULT NULL,
  `subclasse` varchar(50) DEFAULT NULL,
  `estilo` varchar(100) DEFAULT NULL,
  `imagem` text DEFAULT NULL,
  `personalidade` text DEFAULT NULL,
  `status` text DEFAULT NULL,
  `forca` int(11) DEFAULT NULL,
  `agilidade` int(11) DEFAULT NULL,
  `resistencia` int(11) DEFAULT NULL,
  `karma` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `status`
--

CREATE TABLE `status` (
  `id` int(11) NOT NULL,
  `nome_personagem` varchar(100) NOT NULL,
  `senha_personagem` varchar(255) NOT NULL,
  `vitalidade` int(11) DEFAULT 0,
  `agilidade` int(11) DEFAULT 0,
  `fortitude` int(11) DEFAULT 0,
  `arcano` int(11) DEFAULT 0,
  `resistencia` int(11) DEFAULT 0,
  `percepcao` int(11) DEFAULT 0,
  `vidaEspiritual` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `conta`
--
ALTER TABLE `conta`
  ADD PRIMARY KEY (`nome`,`senha`);

--
-- Índices para tabela `itens`
--
ALTER TABLE `itens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `itens_ibfk_1` (`nome_personagem`,`senha_personagem`);

--
-- Índices para tabela `personagem`
--
ALTER TABLE `personagem`
  ADD PRIMARY KEY (`nome`,`senha`);

--
-- Índices para tabela `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`id`),
  ADD KEY `status_ibfk_1` (`nome_personagem`,`senha_personagem`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `itens`
--
ALTER TABLE `itens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `status`
--
ALTER TABLE `status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `itens`
--
ALTER TABLE `itens`
  ADD CONSTRAINT `itens_ibfk_1` FOREIGN KEY (`nome_personagem`,`senha_personagem`) REFERENCES `personagem` (`nome`, `senha`);

--
-- Limitadores para a tabela `personagem`
--
ALTER TABLE `personagem`
  ADD CONSTRAINT `personagem_ibfk_1` FOREIGN KEY (`nome`,`senha`) REFERENCES `conta` (`nome`, `senha`);

--
-- Limitadores para a tabela `status`
--
ALTER TABLE `status`
  ADD CONSTRAINT `status_ibfk_1` FOREIGN KEY (`nome_personagem`,`senha_personagem`) REFERENCES `personagem` (`nome`, `senha`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
