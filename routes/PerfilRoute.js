const express = require('express');
const router = express.Router();

const perfilController = require('../controllers/PerfilController');
const autenticacao = require('../controllers/AutenticacaoController');

router.get('/findAll', autenticacao.validateJwt, perfilController.findAll);

router.post('/save', autenticacao.validateJwt, perfilController.save);

router.get('/:id', autenticacao.validateJwt, perfilController.findById);

router.put('/:id/update', autenticacao.validateJwt, perfilController.update);

router.delete('/:id/delete', autenticacao.validateJwt, perfilController.delete);


module.exports = router;