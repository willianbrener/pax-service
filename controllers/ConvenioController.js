const Convenio = require('../models/Convenio');
const db = require('../config/database');
const tableName = "convenio";


//POST
exports.save = function (req, res) {
    var entidade = new Convenio(
        null,
        req.body.descricao
    );

    db.query(`INSERT INTO ${tableName} (descricao) VALUES('${entidade.getDescricao()}')`, function(error, results, fields){
        if(error) 
          res.json(error);
        else
          res.json(results);
    });
};

//PUT
exports.update = function (req, res) {
    var entidade = new Convenio(
      req.body.id,
        req.body.descricao
    );

    db.query(`UPDATE ${tableName} SET descricao='${entidade.getDescricao()}' WHERE id=${entidade.getId()}`, function(error, results, fields){
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

