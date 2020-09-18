// Especialidade.js

function Especialidade(id, descricao) {
    this.id        = id        || null;
    this.descricao = descricao || null;
}

Especialidade.prototype.getId = function() {
    return this.id;
}

Especialidade.prototype.setId = function(id) {
    this.id = id;
}

Especialidade.prototype.getDescricao = function() {
    return this.descricao;
}

Especialidade.prototype.setDescricao = function(descricao) {
    this.descricao = descricao;
}

Especialidade.prototype.equals = function(otherEspecialidade) {
    return otherEspecialidade.getDescricao() == this.getDescricao();
}

module.exports = Especialidade;