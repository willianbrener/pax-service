const express = require('express');
const router = express.Router();

const usuarioController = require('../controllers/UsuarioController');
const autenticacao = require('../controllers/AutenticacaoController');

router.get('/findAll', autenticacao.validateJwt, usuarioController.findAll);

router.post('/save', autenticacao.validateJwt, usuarioController.save);

router.get('/:id', autenticacao.validateJwt, usuarioController.findById);

router.put('/:id/update', autenticacao.validateJwt, usuarioController.update);

router.delete('/:id/delete', autenticacao.validateJwt, usuarioController.delete);


module.exports = router;