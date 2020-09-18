const express = require('express');
const router = express.Router();

const especialidadeController = require('../controllers/EspecialidadeController');
const autenticacao = require('../controllers/AutenticacaoController');

router.get('/findAll', especialidadeController.findAll);

router.post('/save', autenticacao.validateJwt, especialidadeController.save);

router.get('/:id', autenticacao.validateJwt, especialidadeController.findById);

router.put('/:id/update', autenticacao.validateJwt, especialidadeController.update);

router.delete('/:id/delete', autenticacao.validateJwt, especialidadeController.delete);


module.exports = router;