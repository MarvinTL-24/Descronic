-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 30/10/2024 às 14:39
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `criação de personagem`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `criação`
--

CREATE TABLE `criação` (
  `Nome` varchar(25) NOT NULL,
  `Idade` int(2) NOT NULL,
  `Sexo` varchar(9) NOT NULL,
  `Altura` float NOT NULL,
  `Peso` float NOT NULL,
  `Classe` varchar(14) NOT NULL,
  `Sub-classe` varchar(14) NOT NULL,
  `Estilo de luta` varchar(14) NOT NULL,
  `Elemento` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Tabela de dados';

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `criação`
--
ALTER TABLE `criação`
  ADD PRIMARY KEY (`Nome`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
