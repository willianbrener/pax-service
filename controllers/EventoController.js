const Evento = require('../models/Evento');
const db = require('../config/database');
const tableName = "evento";


//POST
exports.save = function (req, res) {
    var entidade = new Evento(
        null,
        req.body.titulo, 
        req.body.data,
        req.body.descricao
    );

    db.query(`INSERT INTO ${tableName} (titulo, data, descricao) VALUES('${entidade.getTitulo()}','${entidade.getData()}','${entidade.getDescricao()}')`, function(error, results, fields){
        if(error) 
          res.json(error);
        else
          res.json(results);
    });
};

//PUT
exports.update = function (req, res) {
    var entidade = new Evento(
        req.body.id, 
        req.body.titulo, 
        req.body.data,
        req.body.descricao
    );

    db.query(`UPDATE ${tableName} SET titulo='${entidade.getTitulo()}', data='${entidade.getData()}', descricao='${entidade.getDescricao()}' WHERE id=${entidade.getId()}`, function(error, results, fields){
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

