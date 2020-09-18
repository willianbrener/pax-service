const express = require('express');
const router = express.Router();

const solicitacaoPagamentoController = require('../controllers/SolicitacaoPagamentoController');
const autenticacao = require('../controllers/AutenticacaoController');


router.get('/findAll', autenticacao.validateJwt, solicitacaoPagamentoController.findAll);

router.get('/findAllPaginate/:itemsPerPage/:pagenumber', autenticacao.validateJwt, solicitacaoPagamentoController.findAllPaginate);

router.post('/save', solicitacaoPagamentoController.save);

router.get('/:id', solicitacaoPagamentoController.findById);

router.put('/:id/update', autenticacao.validateJwt, solicitacaoPagamentoController.update);

router.delete('/:id/delete', autenticacao.validateJwt, solicitacaoPagamentoController.delete);


module.exports = router;