// SolicitacaoPagamento.js

function SolicitacaoPagamento(
    id, cpfSolicitante, nomeSolicitante, data, formaPagamento,
    status, cepEndereco, logradouroEndereco, complementoEndereco,
    bairroEndereco, dataAgendamento,
    cidadeEndereco,
    estadoEndereco, telefonePrimario, telefoneSecundario, quantidadeParcelas, idFilial) {
    this.id                     = id                   || null;
    this.cpfSolicitante         = cpfSolicitante       || null;
    this.nomeSolicitante        = nomeSolicitante      || null;
    this.data                   = data                 || null;
    this.formaPagamento         = formaPagamento       || null;
    this.status                 = status               || null;
    this.cepEndereco            = cepEndereco          || null;
    this.logradouroEndereco     = logradouroEndereco   || null;
    this.complementoEndereco    = complementoEndereco  || null;
    this.bairroEndereco         = bairroEndereco       || null;
    this.dataAgendamento = dataAgendamento || null;
    this.cidadeEndereco = cidadeEndereco || null;
    this.estadoEndereco = estadoEndereco || null;
    this.telefonePrimario = telefonePrimario || null;
    this.telefoneSecundario = telefoneSecundario || null;
    this.quantidadeParcelas  = quantidadeParcelas || null;
    this.idFilial  = idFilial || null;
}

SolicitacaoPagamento.prototype.getId = function() {
    return this.id;
};

SolicitacaoPagamento.prototype.setId = function(id) {
    this.id = id;
};

SolicitacaoPagamento.prototype.getFormaPagamento = function() {
    return this.formaPagamento;
};

SolicitacaoPagamento.prototype.setFormaPagamento = function(formaPagamento) {
    this.formaPagamento = formaPagamento;
};

SolicitacaoPagamento.prototype.getCpfSolicitante = function() {
    return this.cpfSolicitante;
};

SolicitacaoPagamento.prototype.setCpfSolicitante = function(cpfSolicitante) {
    this.cpfSolicitante = this.cpfSolicitante;
};

SolicitacaoPagamento.prototype.getNomeSolicitante = function() {
    return this.nomeSolicitante;
};

SolicitacaoPagamento.prototype.setNomeSolicitante = function(nomeSolicitante) {
    this.nomeSolicitante = this.nomeSolicitante;
};

SolicitacaoPagamento.prototype.getData = function() {
    return this.data;
};

SolicitacaoPagamento.prototype.setData = function(data) {
    this.data = data;
};

SolicitacaoPagamento.prototype.getStatus = function() {
    return this.status;
};

SolicitacaoPagamento.prototype.setStatus = function(status) {
    this.status = status;
};

SolicitacaoPagamento.prototype.getCepEndereco = function() {
    return this.cepEndereco;
};

SolicitacaoPagamento.prototype.setCepEndereco = function(cepEndereco) {
    this.cepEndereco = cepEndereco;
};

SolicitacaoPagamento.prototype.getLogradouroEndereco = function() {
    return this.logradouroEndereco;
};

SolicitacaoPagamento.prototype.setLogradouroEndereco = function(logradouroEndereco) {
    this.logradouroEndereco = logradouroEndereco;
};

SolicitacaoPagamento.prototype.getComplementoEndereco = function() {
    return this.complementoEndereco;
};

SolicitacaoPagamento.prototype.setComplementoEndereco = function(complementoEndereco) {
    this.complementoEndereco = complementoEndereco;
};

SolicitacaoPagamento.prototype.getBairroEndereco = function() {
    return this.bairroEndereco;
};

SolicitacaoPagamento.prototype.setBairroEndereco = function(bairroEndereco) {
    this.bairroEndereco = bairroEndereco;
};

SolicitacaoPagamento.prototype.getDataAgendamento = function() {
    return this.dataAgendamento;
};

SolicitacaoPagamento.prototype.setDataAgendamento = function(dataAgendamento) {
    this.dataAgendamento = dataAgendamento;
};

SolicitacaoPagamento.prototype.getCidadeEndereco = function() {
    return this.cidadeEndereco;
};

SolicitacaoPagamento.prototype.setCidadeEndereco = function(cidadeEndereco) {
    this.cidadeEndereco = cidadeEndereco;
};

SolicitacaoPagamento.prototype.getEstadoEndereco = function() {
    return this.estadoEndereco;
};

SolicitacaoPagamento.prototype.setEstadoEndereco = function(estadoEndereco) {
    this.estadoEndereco = estadoEndereco;
};

SolicitacaoPagamento.prototype.getTelefonePrimario = function() {
    return this.telefonePrimario;
};

SolicitacaoPagamento.prototype.setTelefonePrimario = function(telefonePrimario) {
    this.telefonePrimario = telefonePrimario;
};

SolicitacaoPagamento.prototype.getTelefoneSecundario = function() {
    return this.telefoneSecundario;
};

SolicitacaoPagamento.prototype.setTelefoneSecundario = function(telefoneSecundario) {
    this.telefoneSecundario = telefoneSecundario;
};

SolicitacaoPagamento.prototype.getQuantidadeParcelas = function() {
    return this.quantidadeParcelas;
};

SolicitacaoPagamento.prototype.setQuantidadeParcelas = function(quantidadeParcelas) {
    this.telefoneSecundario = quantidadeParcelas;
};


SolicitacaoPagamento.prototype.getIdFilial = function() {
    return this.idFilial;
};

SolicitacaoPagamento.prototype.setIdFilial = function(idFilial) {
    this.idFilial = idFilial;
};


module.exports = SolicitacaoPagamento;





