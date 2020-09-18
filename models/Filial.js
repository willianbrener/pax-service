// Filial.js

function Filial(id, nome_filial, host_banco, nome_banco, usuario_banco, senha_banco) {
    this.id             = id              || null;
    this.nome_filial    = nome_filial     || null;
    this.host_banco     = host_banco      || null;
    this.nome_banco     = nome_banco      || null;
    this.usuario_banco  = usuario_banco   || null;
    this.senha_banco    = senha_banco     || null;
}

Filial.prototype.getId = function() {
    return this.id;
}

Filial.prototype.setId = function(id) {
    this.id = id;
}

Filial.prototype.getNomeFilial = function() {
    return this.nome_filial;
}

Filial.prototype.setNomeFilial = function(nome_filial) {
    this.nome_filial = nome_filial;
}

Filial.prototype.getHostBanco = function() {
    return this.host_banco;
}

Filial.prototype.setHostBanco = function(host_banco) {
    this.host_banco = host_banco;
}

Filial.prototype.getNomeBanco = function() {
    return this.nome_banco;
}

Filial.prototype.setNomeBanco = function(nome_banco) {
    this.nome_banco = nome_banco;
}

Filial.prototype.getUsuarioBanco = function() {
    return this.usuario_banco;
}

Filial.prototype.setUsuarioBanco = function(usuario_banco) {
    this.usuario_banco = usuario_banco;
}

Filial.prototype.getSenhaBanco = function() {
    return this.senha_banco;
}

Filial.prototype.setSenhaBanco = function(senha_banco) {
    this.senha_banco = senha_banco;
}

Filial.prototype.equals = function(otherFilial) {
    return otherFilial.getNomeFilial() == this.getNomeFilial();
}

module.exports = Filial;