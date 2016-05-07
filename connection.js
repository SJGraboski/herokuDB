var mysql = require('mysql');

var connection = mysql.createConnection({
	database: "starwars_db",
	host: 'localhost',
	user: "root",
	password: "",
	port: 3306
});

module.exports = connection;