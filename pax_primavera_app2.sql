-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 09-Jun-2020 às 04:29
-- Versão do servidor: 10.4.8-MariaDB
-- versão do PHP: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `pax_primavera_app`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `atendimento_chat`
--

CREATE TABLE `atendimento_chat` (
  `id` int(11) NOT NULL,
  `nomePessoa` varchar(250) NOT NULL,
  `cpfPessoa` varchar(100) NOT NULL,
  `dataInicio` datetime NOT NULL,
  `dataFechamento` datetime DEFAULT NULL,
  `usuario_id` int(11) DEFAULT NULL,
  `categoria_atendimento_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `atendimento_chat`
--

INSERT INTO `atendimento_chat` (`id`, `nomePessoa`, `cpfPessoa`, `dataInicio`, `dataFechamento`, `usuario_id`, `categoria_atendimento_id`) VALUES
(9, 'willian brener', '04753001148', '2020-04-16 00:30:00', NULL, 1, 1),
(12, 'willian brener', '04753001148', '2020-04-13 21:30:00', NULL, 1, 1),
(13, 'willian brener', '04753001148', '2020-04-14 12:30:00', NULL, 1, 1),
(15, 'willian brener', '04753001148', '2020-04-13 15:30:00', NULL, 0, 1),
(24, 'willian brener', '04753001148', '2020-04-13 15:30:00', NULL, 0, 1),
(25, 'willian brener', '04753001148', '2020-04-14 00:30:00', NULL, 1, 1),
(26, 'WILLIAN BRENER NEVES DIAS', '047.530.011-48', '2020-05-29 01:15:47', NULL, 0, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `categoria_atendimento`
--

CREATE TABLE `categoria_atendimento` (
  `id` int(11) NOT NULL,
  `descricao` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `categoria_atendimento`
--

INSERT INTO `categoria_atendimento` (`id`, `descricao`) VALUES
(1, 'CATEGORIA 01');

-- --------------------------------------------------------

--
-- Estrutura da tabela `convenio`
--

CREATE TABLE `convenio` (
  `id` int(11) NOT NULL,
  `descricao` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `convenio`
--

INSERT INTO `convenio` (`id`, `descricao`) VALUES
(1, 'TESTE');

-- --------------------------------------------------------

--
-- Estrutura da tabela `especialidade`
--

CREATE TABLE `especialidade` (
  `id` int(11) NOT NULL,
  `descricao` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `especialidade`
--

INSERT INTO `especialidade` (`id`, `descricao`) VALUES
(1, 'PSIQUIATRA'),
(2, 'Clínico Geral'),
(3, 'Dentista');

-- --------------------------------------------------------

--
-- Estrutura da tabela `evento`
--

CREATE TABLE `evento` (
  `id` int(11) NOT NULL,
  `titulo` varchar(150) NOT NULL,
  `data` date NOT NULL,
  `descricao` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `evento`
--

INSERT INTO `evento` (`id`, `titulo`, `data`, `descricao`) VALUES
(3, 'TESTE', '2020-01-14', 'TESTE REGRA 2'),
(4, 'qweqweqwe', '2020-01-24', 'qweqweqweqwe'),
(5, 'qweqweqweqwe', '2020-01-24', 'qweqweqwe'),
(6, '2020-01-242020-01-242020-01-242020-01-242020-01-242020-01-242020-01-24', '2020-01-24', '2020-01-242020-01-242020-01-242020-01-242020-01-242020-01-242020-01-242020-01-242020-01-242020-01-242020-01-242020-01-242020-01-242020-01-242020-01-242020-01-242020-01-242020-01-242020-01-242020-01-242020-01-242020-01-242020-01-242020-01-242020-01-242020-01-242020-01-242020-01-242020-01-242020-01-24');

-- --------------------------------------------------------

--
-- Estrutura da tabela `filial`
--

CREATE TABLE `filial` (
  `id` int(11) NOT NULL,
  `nome_filial` varchar(200) NOT NULL,
  `host_banco` varchar(200) NOT NULL,
  `nome_banco` varchar(200) NOT NULL,
  `usuario_banco` varchar(200) NOT NULL,
  `senha_banco` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `filial`
--

INSERT INTO `filial` (`id`, `nome_filial`, `host_banco`, `nome_banco`, `usuario_banco`, `senha_banco`) VALUES
(1, 'Umuarama', '192.168.0.1', 'pax', 'user', 'user'),
(2, 'Dourados', '192.168.0.1', 'pax', 'user', 'user'),
(3, 'Anápolis', '192.168.0.1', 'pax', 'user', 'user');

-- --------------------------------------------------------

--
-- Estrutura da tabela `medico`
--

CREATE TABLE `medico` (
  `id` int(11) NOT NULL,
  `nome` varchar(200) NOT NULL,
  `telefone` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `medico`
--

INSERT INTO `medico` (`id`, `nome`, `telefone`) VALUES
(1, 'ARTHUR ZANETTI', '62 981435470');

-- --------------------------------------------------------

--
-- Estrutura da tabela `medico_especialidade`
--

CREATE TABLE `medico_especialidade` (
  `id` int(11) NOT NULL,
  `id_medico` int(11) NOT NULL,
  `id_especialidade` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `medico_especialidade`
--

INSERT INTO `medico_especialidade` (`id`, `id_medico`, `id_especialidade`) VALUES
(7, 1, 1),
(8, 1, 3);

-- --------------------------------------------------------

--
-- Estrutura da tabela `mensagem_chat`
--

CREATE TABLE `mensagem_chat` (
  `id` int(11) NOT NULL,
  `conteudo` varchar(500) NOT NULL,
  `tipoMensagem` varchar(1) NOT NULL,
  `dataMensagem` datetime NOT NULL,
  `uuidTelefone` varchar(250) DEFAULT NULL,
  `atendimento_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `mensagem_chat`
--

INSERT INTO `mensagem_chat` (`id`, `conteudo`, `tipoMensagem`, `dataMensagem`, `uuidTelefone`, `atendimento_id`) VALUES
(3, 'vai vai said saodkepwqepqwepqweqwe', 'C', '2020-04-14 05:48:00', 'ea3db749eacc4c68', 9),
(4, 'qqqqqqqqqqqqqqqqqqqqqqqqq', 'C', '2020-04-14 05:48:00', 'ea3db749eacc4c68', 9),
(5, 'TESTE QQQQQQ', 'C', '2020-04-14 05:50:00', 'ea3db749eacc4c68', 10),
(6, 'foi', 'C', '2020-04-14 05:53:00', 'ea3db749eacc4c68', 13),
(7, 'for mesmo?', 'C', '2020-04-14 05:53:00', 'ea3db749eacc4c68', 13),
(8, 'oxi', 'C', '2020-04-14 05:53:00', 'ea3db749eacc4c68', 13),
(9, 'qwe', 'C', '2020-04-14 05:53:00', 'ea3db749eacc4c68', 13),
(10, '123123123123', 'C', '2020-04-14 05:53:00', 'ea3db749eacc4c68', 13),
(11, '444444444444444', 'C', '2020-04-14 05:53:00', 'ea3db749eacc4c68', 13),
(12, 'qweqweqweq', 'C', '2020-04-14 05:53:00', 'ea3db749eacc4c68', 13),
(13, 'qweqweqweqweqwe', 'C', '2020-04-14 05:54:00', 'ea3db749eacc4c68', 13),
(14, '213123123123123123', 'C', '2020-04-14 05:54:00', 'ea3db749eacc4c68', 13),
(15, '22222222222222222222', 'A', '2020-04-14 05:54:00', 'ea3db749eacc4c68', 13),
(16, 'QWASOUIDOOASDASDASD', 'A', '2020-04-14 05:54:00', 'ea3db749eacc4c68', 13),
(17, 'CHORA', 'C', '2020-04-14 05:55:00', 'ea3db749eacc4c68', 14),
(18, 'OI', 'C', '2020-04-14 05:57:00', 'ea3db749eacc4c68', 15),
(19, 'VAI POW', 'C', '2020-04-14 05:57:00', 'ea3db749eacc4c68', 21),
(20, 'Q', 'C', '2020-04-14 05:58:00', 'ea3db749eacc4c68', 21),
(21, 'OI', 'C', '2020-04-14 06:02:00', 'ea3db749eacc4c68', 19),
(22, '123456', 'C', '2020-04-14 06:04:00', 'ea3db749eacc4c68', 20),
(23, 'oi', 'C', '2020-04-14 06:09:00', 'ea3db749eacc4c68', 22),
(24, '1', 'C', '2020-04-14 06:23:00', 'ea3db749eacc4c68', 23),
(25, '2', 'C', '2020-04-14 06:23:00', 'ea3db749eacc4c68', 23),
(26, '3', 'C', '2020-04-14 06:23:00', 'ea3db749eacc4c68', 23),
(27, 'y', 'C', '2020-04-14 06:23:00', 'ea3db749eacc4c68', 23),
(28, '1', 'C', '2020-04-14 06:23:00', 'ea3db749eacc4c68', 24),
(29, '12321312', 'C', '2020-04-14 06:25:00', 'ea3db749eacc4c68', 25),
(30, '123123123', 'C', '2020-04-14 06:25:00', 'ea3db749eacc4c68', 25),
(31, 'qweqeqwe', 'C', '2020-04-14 06:25:00', 'ea3db749eacc4c68', 25),
(32, '123123123', 'C', '2020-04-14 06:25:00', 'ea3db749eacc4c68', 25),
(33, 'teste', 'A', '2020-04-23 15:33:01', 'null', 0),
(34, 'TESTE', 'A', '2020-04-23 15:34:13', 'null', 13),
(35, 'OUAAAAAA', 'A', '2020-04-23 15:34:17', 'null', 13),
(36, 'QQQQQQQQQQQQQ', 'A', '2020-04-23 15:34:24', 'null', 13),
(37, '123', 'A', '2020-04-23 15:35:02', 'null', 13),
(38, 'OIE', 'C', '2020-05-29 01:16:07', '5aa9265d60a73e2f', 26),
(39, 'FALA TU', 'C', '2020-05-29 01:16:25', '5aa9265d60a73e2f', 26);

-- --------------------------------------------------------

--
-- Estrutura da tabela `perfil`
--

CREATE TABLE `perfil` (
  `id` int(11) NOT NULL,
  `descricao` varchar(250) NOT NULL,
  `nivel` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `perfil`
--

INSERT INTO `perfil` (`id`, `descricao`, `nivel`) VALUES
(1, 'ADMINISTRADOR', 0),
(2, 'USUARIO_MOBILE', 2),
(3, 'USUARIO_WEB', 1),
(4, 'teste willian', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `solicitacao_agendamento`
--

CREATE TABLE `solicitacao_agendamento` (
  `id` int(11) NOT NULL,
  `cpfSolicitante` varchar(100) NOT NULL,
  `medico` int(11) NOT NULL,
  `especialidade` int(11) NOT NULL,
  `data` datetime NOT NULL,
  `status` varchar(100) NOT NULL,
  `imei` varchar(200) NOT NULL,
  `uuid` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `solicitacao_agendamento`
--

INSERT INTO `solicitacao_agendamento` (`id`, `cpfSolicitante`, `medico`, `especialidade`, `data`, `status`, `imei`, `uuid`) VALUES
(1, '047.530.011-48', 1, 1, '2020-01-24 00:00:00', 'PENDENTE', '123123123', '123123123123');

-- --------------------------------------------------------

--
-- Estrutura da tabela `solicitacao_pagamento`
--

CREATE TABLE `solicitacao_pagamento` (
  `id` int(11) NOT NULL,
  `cpfSolicitante` varchar(100) NOT NULL,
  `nomeSolicitante` varchar(200) NOT NULL,
  `data` datetime NOT NULL,
  `formaPagamento` varchar(200) NOT NULL,
  `status` varchar(200) NOT NULL,
  `cepEndereco` varchar(20) NOT NULL,
  `logradouroEndereco` varchar(200) NOT NULL,
  `complementoEndereco` varchar(200) NOT NULL,
  `bairroEndereco` varchar(150) NOT NULL,
  `dataAgendamento` datetime NOT NULL,
  `cidadeEndereco` varchar(100) NOT NULL,
  `estadoEndereco` varchar(100) NOT NULL,
  `telefonePrimario` varchar(50) NOT NULL,
  `telefoneSecundario` varchar(50) NOT NULL,
  `quantidadeParcelas` int(10) NOT NULL,
  `filial_id` int(11) NOT NULL,
  `usuario_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `solicitacao_pagamento`
--

INSERT INTO `solicitacao_pagamento` (`id`, `cpfSolicitante`, `nomeSolicitante`, `data`, `formaPagamento`, `status`, `cepEndereco`, `logradouroEndereco`, `complementoEndereco`, `bairroEndereco`, `dataAgendamento`, `cidadeEndereco`, `estadoEndereco`, `telefonePrimario`, `telefoneSecundario`, `quantidadeParcelas`, `filial_id`, `usuario_id`) VALUES
(8, '04753001148', '04753001148', '2020-03-30 10:59:11', 'CARTÃO DE DÉBITO', 'RECUSADO', '74650120', 'Negrao de Lima', 'qwe', 'bairro', '2020-03-31 10:59:00', 'gyn', 'GO', '62981435470', '33652190', 2, 1, NULL),
(9, '123123123', '123123123', '2020-04-08 20:21:47', 'CARTÃO DE DÉBITO', 'RECUSADO', '123123213', '123123123123', '213123123', '123123123', '2020-04-08 08:21:00', '123123123', 'CE', '123123123', '123123123', 2, 2, NULL),
(10, '666666666', '666666666', '2020-04-09 16:48:28', 'DINHEIRO', 'CONFIRMADO', '123123123', '123123123', '123123123', '123123123', '2020-04-09 07:48:00', '12312312312', 'DF', '213123123', '123123123', 12, 0, NULL),
(11, '66666666666', '66666666666', '2020-04-09 16:49:52', 'CARTÃO DE CRÉDITO', 'RECUSADO', '12312312', '123123123', '213123', '123123', '2020-04-09 07:49:00', '123213', 'BA', '123123123', 'null', 2, 0, NULL),
(12, 'null', 'null', '2020-04-14 14:38:15', 'null', 'PENDENTE', 'null', 'null', 'null', 'null', '0000-00-00 00:00:00', 'null', 'null', 'null', 'null', 0, 0, NULL),
(13, 'null', 'null', '2020-04-14 14:41:31', 'null', 'PENDENTE', 'null', 'null', 'null', 'null', '0000-00-00 00:00:00', 'null', 'null', 'null', 'null', 0, 0, NULL),
(14, '510.777.601-911', 'WQWEQWQW', '2020-05-28 22:05:04', 'DINHEIRO', 'PENDENTE', '765.10-000', 'qweqwe', '123123123', 'qweqwe', '2020-05-28 10:04:00', '123123', 'GO', '629818189', '12312312312', 5, 1, NULL);

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `nome` varchar(250) NOT NULL,
  `nome_usuario` varchar(200) NOT NULL,
  `senha` varchar(200) NOT NULL,
  `perfil_id` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `filial_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `usuario`
--

INSERT INTO `usuario` (`id`, `nome`, `nome_usuario`, `senha`, `perfil_id`, `filial_id`) VALUES
(1, 'Willian Brener Neves Dias', '04753001148', '123', 1, NULL),
(2, 'Teste', '191', '123', 0, 2);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `atendimento_chat`
--
ALTER TABLE `atendimento_chat`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `categoria_atendimento`
--
ALTER TABLE `categoria_atendimento`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `convenio`
--
ALTER TABLE `convenio`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `especialidade`
--
ALTER TABLE `especialidade`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `evento`
--
ALTER TABLE `evento`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `filial`
--
ALTER TABLE `filial`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `medico`
--
ALTER TABLE `medico`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `medico_especialidade`
--
ALTER TABLE `medico_especialidade`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `mensagem_chat`
--
ALTER TABLE `mensagem_chat`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `perfil`
--
ALTER TABLE `perfil`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `solicitacao_agendamento`
--
ALTER TABLE `solicitacao_agendamento`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `solicitacao_pagamento`
--
ALTER TABLE `solicitacao_pagamento`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `atendimento_chat`
--
ALTER TABLE `atendimento_chat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT de tabela `categoria_atendimento`
--
ALTER TABLE `categoria_atendimento`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `convenio`
--
ALTER TABLE `convenio`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `especialidade`
--
ALTER TABLE `especialidade`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `evento`
--
ALTER TABLE `evento`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de tabela `filial`
--
ALTER TABLE `filial`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `medico`
--
ALTER TABLE `medico`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `medico_especialidade`
--
ALTER TABLE `medico_especialidade`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de tabela `mensagem_chat`
--
ALTER TABLE `mensagem_chat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT de tabela `perfil`
--
ALTER TABLE `perfil`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `solicitacao_agendamento`
--
ALTER TABLE `solicitacao_agendamento`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `solicitacao_pagamento`
--
ALTER TABLE `solicitacao_pagamento`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de tabela `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
