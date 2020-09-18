// CategoriaAtendimento.js

function CategoriaAtendimento(id, descricao) {
    this.id        = id        || null;
    this.descricao = descricao || null;
}

CategoriaAtendimento.prototype.getId = function() {
    return this.id;
}

CategoriaAtendimento.prototype.setId = function(id) {
    this.id = id;
}

CategoriaAtendimento.prototype.getDescricao = function() {
    return this.descricao;
}

CategoriaAtendimento.prototype.setDescricao = function(descricao) {
    this.descricao = descricao;
}

CategoriaAtendimento.prototype.equals = function(otherCategoriaAtendimento) {
    return otherCategoriaAtendimento.getDescricao() == this.getDescricao();
}

module.exports = CategoriaAtendimento;