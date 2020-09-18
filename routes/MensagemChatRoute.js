const express = require('express');
const router = express.Router();

const mensagemChatController = require('../controllers/MensagemChatController');
const autenticacao = require('../controllers/AutenticacaoController');


router.post('/save', mensagemChatController.save);

router.get('/:id', autenticacao.validateJwt, mensagemChatController.findById);

router.get('/getByAgendamento/:idAtendimento', mensagemChatController.findAllByAtendimentoId);

router.put('/:id/update', autenticacao.validateJwt, mensagemChatController.update);

router.delete('/:id/delete', autenticacao.validateJwt, mensagemChatController.delete);


module.exports = router;