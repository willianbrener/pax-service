const express = require('express');
const router = express.Router();

const filialController = require('../controllers/FilialController');
const autenticacao = require('../controllers/AutenticacaoController');

router.get('/findAll', filialController.findAll);

router.post('/save', autenticacao.validateJwt, filialController.save);

router.get('/:id', filialController.findById);

router.put('/:id/update', autenticacao.validateJwt, filialController.update);

router.delete('/:id/delete', autenticacao.validateJwt, filialController.delete);


module.exports = router;