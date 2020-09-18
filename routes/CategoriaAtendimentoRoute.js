const express = require('express');
const router = express.Router();

const categoriaAtendimentoController = require('../controllers/CategoriaAtendimentoController');
const autenticacao = require('../controllers/AutenticacaoController');

router.get('/findAll', categoriaAtendimentoController.findAll);

router.post('/save', autenticacao.validateJwt, categoriaAtendimentoController.save);

router.get('/:id', autenticacao.validateJwt, categoriaAtendimentoController.findById);

router.put('/:id/update', autenticacao.validateJwt, categoriaAtendimentoController.update);

router.delete('/:id/delete', autenticacao.validateJwt, categoriaAtendimentoController.delete);


module.exports = router;