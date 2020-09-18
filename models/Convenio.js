// Convenio.js

function Convenio(id, descricao) {
    this.id        = id        || null;
    this.descricao = descricao || null;
}

Convenio.prototype.getId = function() {
    return this.id;
}

Convenio.prototype.setId = function(id) {
    this.id = id;
}

Convenio.prototype.getDescricao = function() {
    return this.descricao;
}

Convenio.prototype.setDescricao = function(descricao) {
    this.descricao = descricao;
}

Convenio.prototype.equals = function(otherConvenio) {
    return otherConvenio.getDescricao() == this.getDescricao();
}

module.exports = Convenio;