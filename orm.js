var connection = require('./connection.js');

var orm = {

	allCharacters:function(callback){
		var s = 'SELECT * FROM characters;'
		connection.query(s, function(err, result) {
        callback(result);
        console.log(result);
    });
	},
	addCharacter:function(name, role, age, forcePoints){
		var s = "INSERT INTO characters VALUES (0,?,?,?,?,?);";
		connection.query(s,[name,name,role,age,forcePoints]);
	},

	searchCharacter:function(name, callback){
		var s = 'select * from characters where routeName=?';
		connection.query(s,[routeName], function(err, result) {
			console.log(result);
			callback(result);
		});
	},

};

module.exports = orm;