// SolicitacaoAgendamento.js

function SolicitacaoAgendamento(id, cpfSolicitante, medico, especialidade, data, status, imei, uuid) {
    this.id             = id                || null;
    this.cpfSolicitante = cpfSolicitante    || null;
    this.medico         = medico            || null;
    this.especialidade  = especialidade     || null;
    this.data           = data              || null;
    this.status         = status            || null;
    this.imei           = imei              || null;
    this.uuid           = uuid              || null;
}

SolicitacaoAgendamento.prototype.getId = function() {
    return this.id;
}

SolicitacaoAgendamento.prototype.setId = function(id) {
    this.id = id;
}

SolicitacaoAgendamento.prototype.getCpfSolicitante = function() {
    return this.cpfSolicitante;
}

SolicitacaoAgendamento.prototype.setCpfSolicitante = function(cpfSolicitante) {
    this.cpfSolicitante = this.cpfSolicitante;
}

SolicitacaoAgendamento.prototype.getMedico = function() {
    return this.medico;
}

SolicitacaoAgendamento.prototype.setMedico = function(medico) {
    this.medico = medico;
}

SolicitacaoAgendamento.prototype.getEspecialidade = function() {
    return this.especialidade;
}

SolicitacaoAgendamento.prototype.setEspecialidade = function(especialidade) {
    this.especialidade = especialidade;
}

SolicitacaoAgendamento.prototype.getData = function() {
    return this.data;
}

SolicitacaoAgendamento.prototype.setData = function(data) {
    this.data = data;
}

SolicitacaoAgendamento.prototype.getStatus = function() {
    return this.status;
}

SolicitacaoAgendamento.prototype.setStatus = function(status) {
    this.status = status;
}

SolicitacaoAgendamento.prototype.getImei = function() {
    return this.imei;
}

SolicitacaoAgendamento.prototype.setImei = function(imei) {
    this.imei = imei;
}

SolicitacaoAgendamento.prototype.getUuid = function() {
    return this.uuid;
}

SolicitacaoAgendamento.prototype.setUuid = function(uuid) {
    this.uuid = uuid;
}

module.exports = SolicitacaoAgendamento;