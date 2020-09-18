// Usuario.js
var jwt = require('jsonwebtoken');

function Usuario(id, nome, nome_usuario, senha, perfil, idFilial, bool) {
    this.id             = id            || null;
    this.nome           = nome          || null;
    this.nome_usuario   = nome_usuario  || null;
    this.senha          = senha         || null;
    this.perfil         = perfil        || null;
    this.idFilial         = idFilial        || null;
    this.jwt = bool ? this.generateJwt() : null;
}

Usuario.prototype.getId = function() {
    return this.id;
}

Usuario.prototype.setId = function(id) {
    this.id = id;
}

Usuario.prototype.getNome = function() {
    return this.nome;
}

Usuario.prototype.setNome = function(nome) {
    this.nome = nome;
}

Usuario.prototype.getNomeUsuario = function() {
    return this.nome_usuario;
}

Usuario.prototype.setNomeUsuario = function(nome_usuario) {
    this.nome_usuario = nome_usuario;
}

Usuario.prototype.getSenha = function() {
    return this.senha;
}

Usuario.prototype.setSenha = function(senha) {
    this.senha = senha;
}

Usuario.prototype.getIdFilial = function() {
    return this.idFilial;
}

Usuario.prototype.setIdFilial = function(idFilial) {
    this.idFilial = idFilial;
}

Usuario.prototype.getPerfil = function() {
    return this.perfil;
}

Usuario.prototype.setPerfil = function(perfil) {
    this.perfil = perfil;
}

Usuario.prototype.equals = function(otherUsuario) {
    return otherUsuario.getNomeUsuario() == this.getNomeUsuario()
        && otherUsuario.getNome() == this.getNome();
}

Usuario.prototype.fill = function(newFields) {
    for (var field in newFields) {
        if (this.hasOwnProperty(field) && newFields.hasOwnProperty(field)) {
            if (this[field] !== 'undefined') {
                this[field] = newFields[field];
            }
        }
    }
};

Usuario.prototype.generateJwt = function() {
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
  
    return jwt.sign({
      id: this.id,
      nome: this.nome,
      nome_usuario: this.nome_usuario,
      exp: parseInt(expiry.getTime()),
    }, "MY_SECRET"); // DO NOT KEEP YOUR SECRET IN THE CODE!
};

module.exports = Usuario;