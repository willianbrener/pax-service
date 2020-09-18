const Perfil = require('../models/Perfil');
const db = require('../config/database');
const tableName = "perfil";


//POST
exports.save = function (req, res) {
    var newPerfil = new Perfil(
        null,
        req.body.descricao, 
        req.body.nivel
    );

    db.query(`INSERT INTO ${tableName} (descricao, nivel) VALUES('${newPerfil.getDescricao()}','${newPerfil.getNivel()}')`, function(error, results, fields){
        if(error) 
          res.json(error);
        else
          res.json(results);
    });
};

//PUT
exports.update = function (req, res) {
    var newPerfil = new Perfil(
        req.body.id,
        req.body.descricao, 
        req.body.nivel
    );

    db.query(`UPDATE ${tableName} SET descricao='${newPerfil.getDescricao()}', nivel='${newPerfil.getNivel()}' WHERE id=${newPerfil.getId()}`, function(error, results, fields){
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

