-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 07/05/2023 às 22:34
-- Versão do servidor: 10.4.28-MariaDB
-- Versão do PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `test`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `empresa`
--

CREATE TABLE `empresa` (
  `razao_social` varchar(100) NOT NULL,
  `cnpj` varchar(30) NOT NULL,
  `cep` varchar(15) NOT NULL,
  `cidade` varchar(100) NOT NULL,
  `estado` varchar(30) NOT NULL,
  `bairro` varchar(100) NOT NULL,
  `complemento` varchar(100) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Despejando dados para a tabela `empresa`
--

INSERT INTO `empresa` (`razao_social`, `cnpj`, `cep`, `cidade`, `estado`, `bairro`, `complemento`, `id`) VALUES
('Ixion estaparia ltda', '31321321321321321321', '89035100', 'Blumenau', 'SC', 'passo manso', 'Ao lado da padaria da maria ', 1),
('Alumetal', '21365498415165135', '15654984-54', 'Blumenau', 'SC', 'Vostardi', 'proximo ao Sise centro esportivo', 3);

-- --------------------------------------------------------

--
-- Estrutura para tabela `licenca`
--

CREATE TABLE `licenca` (
  `id` int(11) NOT NULL,
  `numero` varchar(50) NOT NULL,
  `orgao_ambiental` varchar(100) NOT NULL,
  `emissao` timestamp NOT NULL DEFAULT current_timestamp(),
  `validade` timestamp NOT NULL DEFAULT current_timestamp(),
  `empresa_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Despejando dados para a tabela `licenca`
--

INSERT INTO `licenca` (`id`, `numero`, `orgao_ambiental`, `emissao`, `validade`, `empresa_id`) VALUES
(1, '13211sdfs156s1', 'Fatma', '2022-08-07 03:00:00', '2023-12-07 03:00:00', 3);

-- --------------------------------------------------------

--
-- Estrutura para tabela `migrations`
--

CREATE TABLE `migrations` (
  `id` int(11) NOT NULL,
  `timestamp` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Despejando dados para a tabela `migrations`
--

INSERT INTO `migrations` (`id`, `timestamp`, `name`) VALUES
(1, 1683374672000, 'CreateEmpresaTable1683374672000'),
(9, 1683467987571, 'CreateLicencaTable1683467987571');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `empresa`
--
ALTER TABLE `empresa`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `licenca`
--
ALTER TABLE `licenca`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `empresa`
--
ALTER TABLE `empresa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `licenca`
--
ALTER TABLE `licenca`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
