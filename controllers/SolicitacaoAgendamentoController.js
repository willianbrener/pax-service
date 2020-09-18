const SolicitacaoAgendamento = require('../models/SolicitacaoAgendamento');
const db = require('../config/database');
const tableName = "solicitacao_agendamento";


//POST
exports.save = function (req, res) {
    var entidade = new SolicitacaoAgendamento(
      null, 
      req.body.cpfSolicitante, 
      req.body.medico, 
      req.body.especialidade, 
      req.body.data, 
      req.body.status, 
      req.body.imei, 
      req.body.uuid
    );

    if(entidade.getStatus() == null || entidade.getStatus() == ''){
      entidade.setStatus('PENDENTE');
    }

    db.query(`INSERT INTO ${tableName} (cpfSolicitante, medico, especialidade, data, status, imei, uuid) VALUES('${entidade.getCpfSolicitante()}','${entidade.getMedico()}','${entidade.getEspecialidade()}','${entidade.getData()}','${entidade.getStatus()}','${entidade.getImei()}','${entidade.getUuid()}')`, function(error, results, fields){
        if(error) 
          res.json(error);
        else
          res.json(results);
    });
};

//PUT
exports.update = function (req, res) {
    var entidade = new SolicitacaoAgendamento(
      req.body.id, 
      req.body.cpfSolicitante, 
      req.body.medico, 
      req.body.especialidade, 
      req.body.data, 
      req.body.status, 
      req.body.imei, 
      req.body.uuid
    );

    db.query(`UPDATE ${tableName} SET cpfSolicitante='${entidade.getCpfSolicitante()}', medico='${entidade.getMedico()}', especialidade='${entidade.getEspecialidade()}', data='${entidade.getData()}', status='${entidade.getStatus()}', imei='${entidade.getImei()}', uuid='${entidade.getUuid()}'  WHERE id=${entidade.getId()}`, function(error, results, fields){
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

//CONFIRMA
exports.confirma = function (req, res) {
  db.query(`UPDATE ${tableName} SET status='CONFIRMADO'  WHERE id=` + parseInt(req.params.id), function(error, results, fields){
      if(error) 
        res.json(error);
      else
        res.json(results);
  });
};

//CANCELA
exports.cancela = function (req, res) {
  db.query(`UPDATE ${tableName} SET status='CANCELADO' WHERE id=` + parseInt(req.params.id), function(error, results, fields){
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

