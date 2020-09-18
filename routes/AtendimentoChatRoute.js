const express = require('express');
const router = express.Router();

const atendimentoChatController = require('../controllers/AtendimentoChatController');
const autenticacao = require('../controllers/AutenticacaoController');

router.get('/findAll', autenticacao.validateJwt, atendimentoChatController.findAll);

router.post('/save', atendimentoChatController.save);

router.get('/:id', atendimentoChatController.findById);

router.put('/:id/update', autenticacao.validateJwt, atendimentoChatController.update);

router.delete('/:id/delete', autenticacao.validateJwt, atendimentoChatController.delete);


module.exports = router;