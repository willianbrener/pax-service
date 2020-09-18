const SolicitacaoPagamento = require('../models/SolicitacaoPagamento');
const StatusSolicitacaoPagamentoEnum = require('../enums/StatusSolicitacaoPagamento.enum');
const RetornoPaginacao = require('../models/RetornoPaginacao');
const db = require('../config/database');
const tableName = "solicitacao_pagamento";

//POST
exports.save = function (req, res) {

    let dataAtual = new Date()
    let dataAtualFormatada = dataAtual.getFullYear() + "-" + (dataAtual.getMonth() + 1)
        + "-" + dataAtual.getDate() + " " + dataAtual.getHours() + ":"
        + dataAtual.getMinutes() + ":" + dataAtual.getSeconds();

    var entidade = new SolicitacaoPagamento(
        null,
        req.body.cpfSolicitante,
        req.body.nomeSolicitante,
        dataAtualFormatada,
        req.body.formaPagamento,
        "PENDENTE",
        req.body.cepEndereco,
        req.body.logradouroEndereco,
        req.body.complementoEndereco,
        req.body.bairroEndereco,
        req.body.dataAgendamento,
        req.body.cidadeEndereco,
        req.body.estadoEndereco,
        req.body.telefonePrimario,
        req.body.telefoneSecundario,
        req.body.quantidadeParcelas,
        req.body.idFilial,
    );

    db.query(`INSERT INTO ${tableName} `+
        `(cpfSolicitante, nomeSolicitante, data, formaPagamento, status, `+
        ` cepEndereco, logradouroEndereco, complementoEndereco, bairroEndereco, dataAgendamento, `+
        ` cidadeEndereco, estadoEndereco, telefonePrimario, telefoneSecundario, quantidadeParcelas, filial_id) `+
        ` VALUES ('${entidade.getCpfSolicitante()}','${entidade.getNomeSolicitante()}', `+
        ` '${entidade.getData()}','${entidade.getFormaPagamento()}',` +
        ` '${entidade.getStatus()}','${entidade.getCepEndereco()}','${entidade.getLogradouroEndereco()}', `+
        ` '${entidade.getComplementoEndereco()}', '${entidade.getBairroEndereco()}', `+
        ` '${entidade.getDataAgendamento()}', '${entidade.getCidadeEndereco()}', `+
        ` '${entidade.getEstadoEndereco()}', '${entidade.getTelefonePrimario()}', `+
        ` '${entidade.getTelefoneSecundario()}', '${entidade.getQuantidadeParcelas()}', '${entidade.getIdFilial()}' )`, function(error, results, fields){

        if(error)
            res.json(error);
        else
            res.json(results);
    });
};

//PUT
exports.update = function (req, res) {
    var entidade = new SolicitacaoPagamento(
        req.body.id,
        req.body.cpfSolicitante,
        req.body.nomeSolicitante,
        req.body.data,
        req.body.formaPagamento,
        req.body.status,
        req.body.cepEndereco,
        req.body.logradouroEndereco,
        req.body.complementoEndereco,
        req.body.bairroEndereco,
        req.body.dataAgendamento,
        req.body.cidadeEndereco,
        req.body.estadoEndereco,
        req.body.telefonePrimario,
        req.body.telefoneSecundario,
        req.body.quantidadeParcelas,
        req.body.idFilial
    );

    db.query(
        `UPDATE ${tableName} SET cpfSolicitante='${entidade.getCpfSolicitante()}', nomeSolicitante='${entidade.getCpfSolicitante()}', `+
        ` data='${entidade.getData()}', formaPagamento='${entidade.getFormaPagamento()}', status='${entidade.getStatus()}', `+
        ` cepEndereco='${entidade.getCepEndereco()}', logradouroEndereco='${entidade.getLogradouroEndereco()}', `+
        ` complementoEndereco='${entidade.getComplementoEndereco()}', bairroEndereco='${entidade.getBairroEndereco()}', `+
        ` dataAgendamento='${entidade.getDataAgendamento()}', cidadeEndereco='${entidade.getCidadeEndereco()}', `+
        ` estadoEndereco='${entidade.getEstadoEndereco()}', telefonePrimario='${entidade.getTelefonePrimario()}', `+
        ` telefoneSecundario='${entidade.getTelefoneSecundario()}', quantidadeParcelas='${entidade.getQuantidadeParcelas()}', filial_id='${entidade.getIdFilial()}'  `+
        ` WHERE id=${entidade.getId()}`, function(error, results, fields){
            if(error)
                res.json(error);
            else
                res.json(results);
        });
};

//DELETE
exports.delete = function (req, res) {
    db.query('DELETE FROM ${tableName} WHERE id=' + parseInt(req.params.id), function(error, results, fields){
        if(error)
            res.json(error);
        else
            res.json(results);
    });
};

//GET
exports.findById = function (req, res) {
    let filter = '';
    if(req.params.id) filter = ' WHERE id=' + parseInt(req.params.id);

    db.query(`SELECT * FROM ${tableName}` + filter, function(error, results, fields){
        var result = results != null && results.length > 0 ? results[0] : {};
        if(error)
            res.json(error);
        else
            res.json(result);
    });
};

//GET
exports.findAll = function (req, res) {
    db.query(`SELECT * FROM ${tableName}`, function(error, results, fields){
        if(error)
            res.json(error);
        else
            res.json(results);
    });
};

//GET
exports.findAllPaginate = function (req, res) {
    var itemsPerPage = req.params.itemsPerPage;
    var pagenumber = req.params.pagenumber == null || req.params.pagenumber == 'undefined' ? 1 : req.params.pagenumber;

    let limit = (pagenumber-1)*itemsPerPage +','+itemsPerPage;

    db.query(`SELECT count(*) as total FROM ${tableName}`, function(error, resultTotal, fields){
        if(error) {
            res.json(error);
        } else {
            db.query(`SELECT * FROM ${tableName} LIMIT ${limit}`, function(error, results, fields){
                if(error)
                    res.json(error);
                else
                    res.json(new RetornoPaginacao(results, resultTotal[0].total, pagenumber, itemsPerPage));
            });
        }
    });
};