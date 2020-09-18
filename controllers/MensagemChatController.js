const MensagemChat = require('../models/MensagemChat');
const db = require('../config/database');
const tableName = "mensagem_chat";


//POST
exports.save = function (req, res) {

    var entidade = new MensagemChat(
        null,
        req.body.conteudo,
        req.body.tipoMensagem,
        newDateToMysqlFormat(),
        req.body.uuidTelefone,
        req.body.idAtendimento
    );

    db.query(`INSERT INTO ${tableName} (conteudo, tipoMensagem, dataMensagem, uuidTelefone, atendimento_id) 
     VALUES('${entidade.getConteudo()}', '${entidade.getTipoMensagem()}', '${entidade.getDataMensagem()}', '${entidade.getUuidTelefone()}', '${entidade.getIdAtendimento()}')`, function(error, results, fields){
        if(error)
            res.stats(401).json(error);
        else
            res.json(results);
    });
};

//PUT
exports.update = function (req, res) {
    var entidade = new MensagemChat(
        req.body.id,
        req.body.conteudo,
        req.body.tipoMensagem,
        req.body.dataMensagem,
        req.body.uuidTelefone,
        req.body.idAtendimento
    );

    db.query(`UPDATE ${tableName} 
        conteudo='${entidade.getConteudo()}', tipoMensagem='${entidade.getTipoMensagem()}',
        dataMensagem='${entidade.getDataMensagem()}', uuidTelefone='${entidade.getUuidTelefone()}', atendimento_id='${entidade.getIdAtendimento()}'
        WHERE id=${entidade.getId()}`, function(error, results, fields){

        if(error)
            res.json(error);
        else
            res.json(results);
    });
};

//DELETE
exports.delete = function (req, res) {
    db.query(`DELETE FROM ${tableName} WHERE id=` + parseInt(req.params.id), function(error, results, fields){
        if(error)
            res.json(error);
        else
            res.json(results);
    });
};

//GET
exports.findById = function (req, res) {
    let filter = '';
    if(req.params.id) filter = ' WHERE id=' + parseInt(req.params.id);

    db.query(`SELECT * FROM ${tableName}` + filter, function(error, results, fields){
        if(error)
            res.json(error);
        else
            res.json(results);
    });
};

//GET
exports.findAllByAtendimentoId = function (req, res) {
    let filter = '';
    if(req.params.idAtendimento) filter = ' WHERE atendimento_id=' + parseInt(req.params.idAtendimento);

    db.query(`SELECT * FROM ${tableName}` + filter, function(error, results, fields){
        if(error)
            res.json(error);
        else
            res.json(results);
    });
};

//GET
exports.findAll = function (req, res) {
    db.query(`SELECT * FROM ${tableName}`, function(error, results, fields){
        if(error)
            res.json(error);
        else
            res.json(results);
    });
};

function twoDigits(d) {
    if(0 <= d && d < 10) return "0" + d.toString();
    if(-10 < d && d < 0) return "-0" + (-1*d).toString();
    return d.toString();
}

function newDateToMysqlFormat(){
    let newDate = new Date();

    return newDate.getUTCFullYear() + "-" + twoDigits(1 + newDate.getUTCMonth()) + "-" + twoDigits(newDate.getUTCDate()) + " " + twoDigits(newDate.getUTCHours()) + ":" + twoDigits(newDate.getUTCMinutes()) + ":" + twoDigits(newDate.getUTCSeconds());
};

