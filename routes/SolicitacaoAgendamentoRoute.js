const express = require('express');
const router = express.Router();

const solicitacaoAgendamentoController = require('../controllers/SolicitacaoAgendamentoController');
const autenticacao = require('../controllers/AutenticacaoController');

router.get('/findAll', autenticacao.validateJwt, solicitacaoAgendamentoController.findAll);

router.post('/save', autenticacao.validateJwt, solicitacaoAgendamentoController.save);

router.get('/:id', autenticacao.validateJwt, solicitacaoAgendamentoController.findById);

router.put('/:id/update', autenticacao.validateJwt, solicitacaoAgendamentoController.update);

router.delete('/:id/delete', autenticacao.validateJwt, solicitacaoAgendamentoController.delete);

router.get('/confirma/:id', autenticacao.validateJwt, solicitacaoAgendamentoController.confirma);

router.get('/cancela/:id', autenticacao.validateJwt, solicitacaoAgendamentoController.cancela);


module.exports = router;