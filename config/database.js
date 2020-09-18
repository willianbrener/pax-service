const mysql = require('mysql');


const connection = mysql.createConnection({
  host     : 'localhost',
  port     : 3306,
  user     : 'paxprimavera',
  password : 'K4fq2kgq@',
  database : 'pax_primavera_app'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('conectou!');
});

module.exports = connection;