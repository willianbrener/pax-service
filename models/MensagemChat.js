// MensagemChat.js

function MensagemChat(id, conteudo, tipoMensagem, dataMensagem, uuidTelefone, idAtendimento) {
    this.id        = id        || null;
    this.conteudo = conteudo || null;
    this.tipoMensagem = tipoMensagem || null;
    this.dataMensagem = dataMensagem || null;
    this.uuidTelefone = uuidTelefone || null;
    this.idAtendimento = idAtendimento || null;
}

MensagemChat.prototype.getId = function() {
    return this.id;
}

MensagemChat.prototype.setId = function(id) {
    this.id = id;
}

MensagemChat.prototype.getConteudo = function() {
    return this.conteudo;
}

MensagemChat.prototype.setConteudo = function(conteudo) {
    this.conteudo = conteudo;
}

MensagemChat.prototype.getTipoMensagem = function() {
    return this.tipoMensagem;
}

MensagemChat.prototype.setTipoMensagem = function(tipoMensagem) {
    this.tipoMensagem = tipoMensagem;
}

MensagemChat.prototype.getDataMensagem = function() {
    return this.dataMensagem;
}

MensagemChat.prototype.setDataMensagem = function(dataMensagem) {
    this.dataMensagem = dataMensagem;
}

MensagemChat.prototype.getUuidTelefone = function() {
    return this.uuidTelefone;
}

MensagemChat.prototype.setUuidTelefone = function(uuidTelefone) {
    this.uuidTelefone = uuidTelefone;
}

MensagemChat.prototype.getIdAtendimento = function() {
    return this.idAtendimento;
}

MensagemChat.prototype.setIdAtendimento = function(idAtendimento) {
    this.idAtendimento = idAtendimento;
}


module.exports = MensagemChat;