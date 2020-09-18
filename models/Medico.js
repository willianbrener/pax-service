// Medico.js

function Medico(id, nome, telefone, especialidades) {
    this.id         = id        || null;
    this.nome       = nome      || null;
    this.telefone   = telefone  || null;
    this.especialidades         = especialidades        || null;
}

Medico.prototype.getId = function() {
    return this.id;
}

Medico.prototype.setId = function(id) {
    this.id = id;
}

Medico.prototype.getNome = function() {
    return this.nome;
}

Medico.prototype.setNome = function(nome) {
    this.nome = nome;
}

Medico.prototype.getTelefone = function() {
    return this.telefone;
}

Medico.prototype.setTelefone = function(telefone) {
    this.telefone = telefone;
}

Medico.prototype.getEspecialidades = function() {
    return this.especialidades;
}

Medico.prototype.setEspecialidades = function(especialidades) {
    this.especialidades = especialidades;
}

Medico.prototype.equals = function(otherMedico) {
    return otherMedico.getNome() == this.getNome();
}

module.exports = Medico;