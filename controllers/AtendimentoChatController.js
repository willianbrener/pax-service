const AtendimentoChat = require('../models/AtendimentoChat');
const db = require('../config/database');
const jwt = require('jsonwebtoken');
const tableName = "atendimento_chat";


//POST
exports.save = function (req, res) {
    var entidade = new AtendimentoChat(
        null,
        req.body.nomePessoa,
        req.body.cpfPessoa,
        newDateToMysqlFormat(),
        null,
        req.body.idUsuarioAtendimento,
        req.body.idCategoriaAtendimento,
        null,
    );

    db.query(`INSERT INTO ${tableName} (nomePessoa, cpfPessoa, dataInicio, usuario_id, categoria_atendimento_id) 
    VALUES('${entidade.getNomePessoa()}', '${entidade.getCpfPessoa()}', 
     '${entidade.getDataInicio()}', '${entidade.getUsuarioAtendimento()}', '${entidade.getCategoriaAtendimento()}')`, function(error, results, fields){
        if(error) 
          res.json(error);
        else
          res.json(results);
    });
};

//PUT
exports.update = function (req, res) {
    var jwtClient = req.get("Authorization");
    const jwtDecoded = jwt.decode(jwtClient);

    if(jwtClient != null){
        var entidade = new AtendimentoChat(
            req.body.id,
            req.body.nomePessoa,
            req.body.cpfPessoa,
            req.body.dataInicio,
            req.body.dataFechamento,
            jwtDecoded.id,
            req.body.categoria_atendimento_id,
            null,
        );

        db.query(`UPDATE ${tableName} SET dataInicio='${entidade.getDataInicio()}', 
            nomePessoa='${entidade.getNomePessoa()}', cpfPessoa='${entidade.getCpfPessoa()}', 
            categoria_atendimento_id='${entidade.getCategoriaAtendimento()}' , 
            usuario_id='${entidade.getUsuarioAtendimento()}' `
            + (entidade.getDataFechamento() != null ? `dataFechamento='${entidade.getDataFechamento()}'` : ``) +`   
            WHERE id=${entidade.getId()}`, function(error, results, fields){

            if(error){
                res.json(error);
            } else {
                if(results) {
                    results.atendimento = entidade;
                }

                res.json(results);
            }
        });

    }else{
        res.json({mensagem: "Erro ao iniciar atendimento! Não autorizado."});
    }


};

//DELETE
exports.delete = function (req, res) {
    db.query(`DELETE FROM ${tableName} WHERE id=` + parseInt(req.params.id), function(error, results, fields){
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
        if(error) 
          res.json(error);
        else
          res.json(results);
    });
};

//GET
exports.findAll = function (req, res) {
    db.query(`SELECT a.*, 
        u.id as idUsuario, 
        u.nome as nomeUsuarioAtendimento, 
        c.descricao as descricaoCategoriaAtendimento 
        FROM ${tableName} a 
        LEFT JOIN usuario u on a.usuario_id = u.id 
        LEFT JOIN categoria_atendimento c on a.categoria_atendimento_id = c.id order by a.id desc`, function(error, results, fields){
        if(error) 
          res.json(error);
        else
          res.json(results);
    });
};

function twoDigits(d) {
    if(0 <= d && d < 10) return "0" + d.toString();
    if(-10 < d && d < 0) return "-0" + (-1*d).toString();
    return d.toString();
}

function newDateToMysqlFormat(){
    let newDate = new Date();

    return newDate.getUTCFullYear() + "-" + twoDigits(1 + newDate.getUTCMonth()) + "-" + twoDigits(newDate.getUTCDate()) + " " + twoDigits(newDate.getUTCHours()) + ":" + twoDigits(newDate.getUTCMinutes()) + ":" + twoDigits(newDate.getUTCSeconds());
};

