// AtendimentoChat.js

function AtendimentoChat(id, nomePessoa, cpfPessoa, dataInicio, dataFechamento, usuarioAtendimento, categoriaAtendimento, mensagensAtendimento) {
    this.id = id || null;
    this.nomePessoa = nomePessoa || null;
    this.cpfPessoa = cpfPessoa || null;
    this.dataInicio = dataInicio || null;
    this.dataFechamento = dataFechamento || null;
    this.usuarioAtendimento = usuarioAtendimento || null;
    this.categoriaAtendimento = categoriaAtendimento || null;
    this.mensagensAtendimento = mensagensAtendimento || null;
}

AtendimentoChat.prototype.getId = function() {
    return this.id;
}

AtendimentoChat.prototype.setId = function(id) {
    this.id = id;
}

AtendimentoChat.prototype.getNomePessoa = function() {
    return this.nomePessoa;
}

AtendimentoChat.prototype.setNomePessoa = function(nomePessoa) {
    this.nomePessoa = nomePessoa;
}

AtendimentoChat.prototype.getCpfPessoa = function() {
    return this.cpfPessoa;
}

AtendimentoChat.prototype.setCpfPessoa = function(cpfPessoa) {
    this.cpfPessoa = cpfPessoa;
}

AtendimentoChat.prototype.getDataInicio = function() {
    return this.dataInicio;
}

AtendimentoChat.prototype.setDataInicio = function(dataInicio) {
    this.dataInicio = dataInicio;
}

AtendimentoChat.prototype.getDataFechamento = function() {
    return this.dataFechamento;
}

AtendimentoChat.prototype.setDataFechamento = function(dataFechamento) {
    this.dataFechamento = dataInicio;
}

AtendimentoChat.prototype.getUsuarioAtendimento = function() {
    return this.usuarioAtendimento;
}

AtendimentoChat.prototype.setUsuarioAtendimento = function(usuarioAtendimento) {
    this.usuarioAtendimento = usuarioAtendimento;
}

AtendimentoChat.prototype.getCategoriaAtendimento = function() {
    return this.categoriaAtendimento;
}

AtendimentoChat.prototype.setCategoriaAtendimento = function(categoriaAtendimento) {
    this.categoriaAtendimento = categoriaAtendimento;
}

AtendimentoChat.prototype.getMensagensAtendimento = function() {
    return this.mensagensAtendimento;
}

AtendimentoChat.prototype.setMensagensAtendimento = function(mensagensAtendimento) {
    this.mensagensAtendimento = mensagensAtendimento;
}


module.exports = AtendimentoChat;