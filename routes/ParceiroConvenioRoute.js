const express = require('express');
const router = express.Router();

const parceiroConvenioController = require('../controllers/ParceiroConvenioController');
const autenticacao = require('../controllers/AutenticacaoController');

router.get('/findAll', parceiroConvenioController.findAll);

router.post('/save', autenticacao.validateJwt, parceiroConvenioController.save);

router.get('/:id', autenticacao.validateJwt, parceiroConvenioController.findById);

router.put('/:id/update', autenticacao.validateJwt, parceiroConvenioController.update);

router.delete('/:id/delete', autenticacao.validateJwt, parceiroConvenioController.delete);


module.exports = router;