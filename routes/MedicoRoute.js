const express = require('express');
const router = express.Router();

const medicoController = require('../controllers/MedicoController');
const autenticacao = require('../controllers/AutenticacaoController');

router.get('/findAll', medicoController.findAll);

router.post('/save', autenticacao.validateJwt, medicoController.save);

router.get('/:id', autenticacao.validateJwt, medicoController.findById);

router.put('/:id/update', autenticacao.validateJwt, medicoController.update);

router.delete('/:id/delete', autenticacao.validateJwt, medicoController.delete);


module.exports = router;