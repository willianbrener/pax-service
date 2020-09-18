const Usuario = require('../models/Usuario');
const Perfil = require('../models/Perfil');
const MensagemRetorno = require('../models/MensagemRetorno');

const db = require('../config/database');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
//POST
const tableNameUsuario = "usuario";



exports.register = function (req, res) {
  var salt = crypto.randomBytes(16).toString('hex');
  var hash = crypto.pbkdf2Sync("password", salt, 1000, 64, 'sha512').toString('hex');
};

//POST
exports.login = function (req, res) {
  try {
    if(req.query.cpf && req.query.senha) {
      let cpf = req.query.cpf.replace(/\D/g, '');
      let join = ` LEFT JOIN perfil p on u.perfil_id = p.id `;
      let filter = ` ${join} WHERE nome_usuario='${cpf}' and senha='${req.query.senha}'`;

      db.query(`SELECT u.id, u.nome, u.nome_usuario, u.senha, p.id as perfil_id, 
    p.descricao as perfil_descricao, p.nivel as perfil_nivel FROM ${tableNameUsuario} u ${filter}`, function(error, results, fields){

        if(error || !results || results.length == 0) {
          //res.json(new MensagemRetorno(error, 400));
          res.status(400);
          res.json(new MensagemRetorno("Usuário não encontrado!", 400));
        } else {
          let perfil = new  Perfil(results[0].perfil_id, results[0].perfil_descricao, results[0].perfil_nivel);
          let usuario =
              new Usuario(results[0].id, results[0].nome, results[0].nome_usuario, results[0].senha, perfil, results[0].filial_id, true)

          res.status(200);
          res.json(usuario);
        }
      });
    }else{
      res.status(400);
      res.json(new MensagemRetorno("Preencha os dados corretamente!", 400));
    }
  }catch (e) {
    res.status(400);
    res.json(new MensagemRetorno("Erro ao consultar usuário no banco de dados! Erro: "+ e, 400));
  }

};

//GET
exports.profile = function (req, res) {
  let filter = '';
  
  if(req.params.id) {
    let join = ` LEFT JOIN perfil p on u.perfil_id = p.id `;
    filter = ` ${join} WHERE u.id='${req.params.id}' `;

    db.query(`SELECT u.id, u.nome, u.nome_usuario, u.senha, p.id as perfil_id, p.descricao as perfil_descricao, p.nivel as perfil_nivel FROM ${tableNameUsuario} u ${filter}`, function(error, results, fields){
      console.info(results);
      if(error || !results || results.length == 0) {
        res.status(400);
      } else {
        let perfil = new  Perfil(results[0].perfil_id, results[0].perfil_descricao, results[0].perfil_nivel);
        let usuario = new Usuario(results[0].id, results[0].nome, results[0].nome_usuario, results[0].senha, perfil, true)

        res.json(usuario);
      } 
    });
  }else{
    res.status(400);
  }
};

exports.validPassword = function(password) {
  var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
  return this.hash === hash;
};

exports.validateJwt = function(req, res, next) {
  var jwtClient = req.get("Authorization");
  if(jwtClient != null){
    const jwtDecoded = jwt.decode(jwtClient);
    if(jwtDecoded != null && new Date() > new Date(jwtDecoded.exp)){
      res.status(403).json(new MensagemRetorno("Não autorizado!", 403));
    }else{
      next();
    }
  }else{
    res.status(403).json(new MensagemRetorno("Não autorizado!", 403));
  }
};