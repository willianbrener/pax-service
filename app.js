// app.js
const usuarioRoute = require('./routes/UsuarioRoute');
const perfilRoute = require('./routes/PerfilRoute');
const autenticacaoRoute = require('./routes/AutenticacaoRoute');
const medicoRoute = require('./routes/MedicoRoute');
const eventoRoute = require('./routes/EventoRoute');
const especialidadeRoute = require('./routes/EspecialidadeRoute');
const convenioRoute = require('./routes/ConvenioRoute');
const categoriaAtendimentoRoute = require('./routes/CategoriaAtendimentoRoute');
const filialRoute = require('./routes/FilialRoute');
const solicitacaoPagamentoRoute = require('./routes/SolicitacaoPagamentoRoute');
const solicitacaoAgendamentoRoute = require('./routes/SolicitacaoAgendamentoRoute');
const atendimentoChatRoute = require('./routes/AtendimentoChatRoute');
const mensagemChatRoute = require('./routes/MensagemChatRoute');


const express = require('express');
const app = express();
const http = require('http');
const bodyParser = require('body-parser');
const port = 3001; //porta padrão

const swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');

const configCors = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Authorization");

    next();
}

app.use(configCors);

//configurando o body parser para pegar POSTS mais tarde
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// rotas
app.use('/auth', autenticacaoRoute);
app.use('/usuarios', usuarioRoute);
app.use('/perfis', perfilRoute);
app.use('/medicos', medicoRoute);
app.use('/eventos', eventoRoute);
app.use('/convenios', convenioRoute);
app.use('/especialidades', especialidadeRoute);
app.use('/categoriasAtendimento', categoriaAtendimentoRoute);
app.use('/filiais', filialRoute);
app.use('/solicitacoesPagamento', solicitacaoPagamentoRoute);
app.use('/solicitacoesAgendamento', solicitacaoAgendamentoRoute);
app.use('/atendimentoChat', atendimentoChatRoute);
app.use('/mensagemChat', mensagemChatRoute);

//swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.set('port', process.env.PORT || port);

const server = http.createServer(app);

const io = require('socket.io').listen(server);


io.on('connection', function(socket){
    var msgObj;

    msgObj = {
        'timestamp': new Date().getTime(),
        'msg': 'Um usuário entrou.'
    };

    // quando um usuário se conectar
    io.emit('guest_connected', msgObj)


    // quando um usuário se desconectar
    socket.on('disconnect', function() {
        var obj;

        obj = {
            'timestamp': new Date().getTime(),
            'msg': 'Um usuário saiu.'
        };

        io.emit('guest_disconnect', obj);
    });


    // quando um usuário escrever uma mensagem
    socket.on('chat message', function(msg) {
        io.emit('chat_message', msg);
    });

    // quando um novo usuário entrar
    socket.on('novo_usuario', function(obj) {
        io.emit('new_user', obj);
    })
});


//
// Startando o server
server.listen(app.get('port'), function() {
    console.log('PAX Backend funcionando na porta: ', app.get('port'));
});
