// RetornoPaginacao.js

function RetornoPaginacao(data, total, page, itemsPerPage) {
    this.data           = data                          || null;  
    this.total          = total                         || null;
    this.page           = parseInt(page)                || null;
    this.itemsPerPage   = parseInt(itemsPerPage)        || null;
}

RetornoPaginacao.prototype.getData = function() {
    return this.data;
}

RetornoPaginacao.prototype.setData = function(data) {
    this.data = data;
}

RetornoPaginacao.prototype.getTotal = function() {
    return this.total;
}

RetornoPaginacao.prototype.setTotal = function(total) {
    this.total = total;
}

RetornoPaginacao.prototype.getPage = function() {
    return this.page;
}

RetornoPaginacao.prototype.setPage = function(page) {
    this.page = page;
}

RetornoPaginacao.prototype.getItemsPerPage = function() {
    return this.itemsPerPage;
}

RetornoPaginacao.prototype.setItemsPerPage = function(itemsPerPage) {
    this.itemsPerPage = itemsPerPage;
}

module.exports = RetornoPaginacao;