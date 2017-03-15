var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'NaijaBoy1785',
  database: 'chefcasa'
});

connection.connect(function () {
  console.log(' you are now connected to the database.');
});


module.exports = connection;