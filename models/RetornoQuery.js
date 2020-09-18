// RetornoQuery.js

function RetornoQuery(changedRows, insertId) {
    this.changedRows           = changedRows                          || null;  
    this.insertId          = insertId                         || null;
}

RetornoQuery.prototype.getChangedRows = function() {
    return this.changedRows;
}

RetornoQuery.prototype.setChangedRows = function(changedRows) {
    this.changedRows = changedRows;
}

RetornoQuery.prototype.getInsertId = function() {
    return this.insertId;
}

RetornoQuery.prototype.setInsertId = function(insertId) {
    this.insertId = insertId;
}

module.exports = RetornoQuery;