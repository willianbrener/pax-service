// ParceiroConvenio.js

function ParceiroConvenio(id, descricao) {
    this.id        = id        || null;
    this.descricao = descricao || null;
}

ParceiroConvenio.prototype.getId = function() {
    return this.id;
}

ParceiroConvenio.prototype.setId = function(id) {
    this.id = id;
}

ParceiroConvenio.prototype.getDescricao = function() {
    return this.descricao;
}

ParceiroConvenio.prototype.setDescricao = function(descricao) {
    this.descricao = descricao;
}

ParceiroConvenio.prototype.equals = function(otherParceiroConvenio) {
    return otherParceiroConvenio.getDescricao() == this.getDescricao();
}

module.exports = ParceiroConvenio;