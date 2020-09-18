const express = require('express');
const router = express.Router();

const autenticacaoController = require('../controllers/AutenticacaoController');


router.post('/register', autenticacaoController.register);

router.get('/login', autenticacaoController.login);

router.get('/profile/:id', autenticacaoController.profile);

module.exports = router;