const express = require('express');
const router = express.Router();

const convenioController = require('../controllers/ConvenioController');
const autenticacao = require('../controllers/AutenticacaoController');

router.get('/findAll', convenioController.findAll);

router.post('/save', autenticacao.validateJwt, convenioController.save);

router.get('/:id', autenticacao.validateJwt, convenioController.findById);

router.put('/:id/update', autenticacao.validateJwt, convenioController.update);

router.delete('/:id/delete', autenticacao.validateJwt, convenioController.delete);


module.exports = router;