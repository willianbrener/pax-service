const express = require('express');
const router = express.Router();

const eventoController = require('../controllers/EventoController');
const autenticacao = require('../controllers/AutenticacaoController');

router.get('/findAll', eventoController.findAll);

router.post('/save', autenticacao.validateJwt, eventoController.save);

router.get('/:id', autenticacao.validateJwt, eventoController.findById);

router.put('/:id/update', autenticacao.validateJwt, eventoController.update);

router.delete('/:id/delete', autenticacao.validateJwt, eventoController.delete);


module.exports = router;