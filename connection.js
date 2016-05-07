var mysql = require('mysql');

var source = {

	localhost: {
		port: 3306,
		host: 'localhost', 
		user: 'root',
		password: '',
		database:starwars
	},
	heroku: {
		database: "gh3skg4o4t43nk9s",
		host: 'l9dwvv6j64hlhpul.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
		user: "k1mxo3c56hgag837",
		password: "vok3g94mbi1b6vk8",
		port: 3306
	}
}
var connection = mysql.createConnection(source.heroku);

module.exports = connection;