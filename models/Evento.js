// Evento.js

function Evento(id, titulo, data, descricao) {
    this.id         = id        || null;
    this.titulo     = titulo    || null;
    this.data       = data      || null;
    this.descricao  = descricao || null;
}

Evento.prototype.getId = function() {
    return this.id;
}

Evento.prototype.setId = function(id) {
    this.id = id;
}

Evento.prototype.getDescricao = function() {
    return this.descricao;
}

Evento.prototype.setDescricao = function(descricao) {
    this.descricao = descricao;
}

Evento.prototype.getTitulo = function() {
    return this.titulo;
}

Evento.prototype.setTitulo = function(titulo) {
    this.titulo = this.titulo;
}

Evento.prototype.getData = function() {
    return this.data;
}

Evento.prototype.setData = function(data) {
    this.data = data;
}

Evento.prototype.equals = function(otherEvento) {
    return otherEvento.getDescricao() == this.getDescricao();
}

module.exports = Evento;