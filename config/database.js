const mysql = require('mysql');

//mysql://b9620031cd6bcd:6b2de1bc@us-cdbr-east-02.cleardb.com/heroku_7b77483e48212ed?reconnect=true
/*const connection = mysql.createConnection({
  host     : 'localhost',
  port     : 3306,
  user     : 'paxprimavera',
  password : 'K4fq2kgq@',
  database : 'pax_primavera_app'
});*/


const connection = mysql.createConnection({
  host     : 'us-cdbr-east-02.cleardb.com',
  port     : 3306,
  user     : 'b9620031cd6bcd',
  password : '6b2de1bc',
  database : 'heroku_7b77483e48212ed'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('conectou!');
});

module.exports = connection;