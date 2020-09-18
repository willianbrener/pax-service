const Usuario = require('../models/Usuario');
const db = require('../config/database');
const tableName = "usuario";


//POST
exports.save = function (req, res) {
    var newUsuario = new Usuario(
        null,
        req.body.nome, 
        req.body.nome_usuario,
        req.body.senha
    );

    db.query(`INSERT INTO ${tableName} (nome, nome_usuario, senha) VALUES('${newUsuario.getNome()}','${newUsuario.getNomeUsuario()}','${newUsuario.getSenha()}')`, function(error, results, fields){
        if(error) 
          res.json(error);
        else
          res.json(results);
    });
};

//PUT
exports.update = function (req, res) {
    var newUsuario = new Usuario(
        req.body.id,
        req.body.nome, 
        req.body.nome_usuario,
        req.body.senha
    );

    db.query(`UPDATE ${tableName} SET nome='${newUsuario.getNome()}', nome_usuario='${newUsuario.getNomeUsuario()}', senha='${newUsuario.getSenha()}' WHERE id=${newUsuario.getId()}`, function(error, results, fields){
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

