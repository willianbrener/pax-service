// Perfil.js

function Perfil(id, descricao, nivel) {
    this.id        = id        || null;
    this.descricao = descricao || null;
    this.nivel     = nivel     || null;
}

Perfil.prototype.getId = function() {
    return this.id;
}

Perfil.prototype.setId = function(id) {
    this.id = id;
}

Perfil.prototype.getDescricao = function() {
    return this.descricao;
}

Perfil.prototype.setDescricao = function(descricao) {
    this.descricao = descricao;
}

Perfil.prototype.getNivel = function() {
    return this.nivel;
}

Perfil.prototype.setNivel = function(nivel) {
    this.nivel = nivel;
}

Perfil.prototype.equals = function(otherPerfil) {
    return otherPerfil.getDescricao() == this.getDescricao();
}

module.exports = Perfil;