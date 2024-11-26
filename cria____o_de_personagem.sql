-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 26/11/2024 às 12:41
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

-- --------------------------------------------------------

--
-- Estrutura para tabela `equipamentos`
--

CREATE TABLE `equipamentos` (
  `Arma principal` varchar(12) NOT NULL,
  `Secundaria` varchar(12) NOT NULL,
  `Cabeça` varchar(15) NOT NULL,
  `Peitoral` varchar(15) NOT NULL,
  `Calça` varchar(15) NOT NULL,
  `Calçado` varchar(15) NOT NULL,
  `Artefato 1` varchar(15) NOT NULL,
  `Artefato 2` varchar(15) NOT NULL,
  `Consumivel 1` varchar(18) NOT NULL,
  `Consumivel 2` varchar(18) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `mochila`
--

CREATE TABLE `mochila` (
  `Aparato 1` varchar(18) NOT NULL,
  `Aparato 2` varchar(18) NOT NULL,
  `Item 1` varchar(18) NOT NULL,
  `Item 2` varchar(18) NOT NULL,
  `Item 3` varchar(18) NOT NULL,
  `Item 4` varchar(18) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
