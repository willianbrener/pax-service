function MensagemRetorno(mensagem, codigo) {
    this.mensagem             = mensagem            || null;
    this.codigo               = codigo          || null;
}

MensagemRetorno.prototype.getMensagem = function() {
    return this.mensagem;
}

MensagemRetorno.prototype.setMensagem = function(mensagem) {
    this.mensagem = mensagem;
}

MensagemRetorno.prototype.getCodigo = function() {
    return this.codigo;
}

MensagemRetorno.prototype.setCodigo = function(codigo) {
    this.codigo = codigo;
}

MensagemRetorno.prototype.toJson = function() {
    obj = new Object()
    obj.mensagem = this.mensagem;
    obj.codigo = this.codigo;
    //obj[codigo] = this.codigo;

    return obj;
}


module.exports = MensagemRetorno;