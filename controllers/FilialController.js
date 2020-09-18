const Filial = require('../models/Filial');
const db = require('../config/database');
const tableName = "filial";


//POST
exports.save = function (req, res) {
    var entidade = new Filial(
      null,
      req.body.nome_filial,
      req.body.host_banco,
      req.body.nome_banco,
      req.body.usuario_banco,
      req.body.senha_banco,
    );

    db.query(`INSERT INTO ${tableName} (nome_filial, host_banco, nome_banco, usuario_banco, senha_banco) VALUES('${entidade.getNomeFilial()}','${entidade.getHostBanco()}','${entidade.getNomeBanco()}','${entidade.getUsuarioBanco()}','${entidade.getSenhaBanco()}')`, function(error, results, fields){
        if(error) 
          res.json(error);
        else
          res.json(results);
    });
};

//PUT
exports.update = function (req, res) {
    var entidade = new Filial(
      req.body.id,
      req.body.nome_filial,
      req.body.host_banco,
      req.body.nome_banco,
      req.body.usuario_banco,
      req.body.senha_banco,
    );

    db.query(`UPDATE ${tableName} SET nome_filial='${entidade.getNomeFilial()}', host_banco='${entidade.getHostBanco()}', nome_banco='${entidade.getNomeBanco()}', usuario_banco='${entidade.getUsuarioBanco()}', senha_banco='${entidade.getSenhaBanco()}' WHERE id=${entidade.getId()}`, function(error, results, fields){
        if(error) 
          res.json(error);
        else
          res.json(results);
    });
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
    db.query(`SELECT * FROM ${tableName}`, function(error, results, fields){
        if(error) 
          res.json(error);
        else
          res.json(results);
    });
};

