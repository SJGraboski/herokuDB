// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// require orm
var orm = require('./orm.js');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get('/', function(req, res){
	//res.send("Welcome to the Star Wars Page!")
	res.sendFile(path.join(__dirname + '/view.html'));
})

app.get('/add', function(req, res){
	//res.send("Welcome to the Star Wars Page!")
	res.sendFile(path.join(__dirname + '/add.html'));
})

app.get('/all', function(req, res){
	//res.send("Welcome to the Star Wars Page!")
	res.sendFile(path.join(__dirname + '/all.html'));
})

// Search for Specific Character (or all characters) - provides JSON
app.get('/api/:characters?', function(req, res){

	if(req.params.characters) {
		var character = req.params.characters;
		orm.searchCharacter(character, function(data){
			res.json(data);
		});
	}
	else {
		orm.allCharacters(function(data){
			res.json(data);
		});
	}
})

// Create New Characters - takes in JSON input
app.post('/api/new', function(req, res){

	orm.addCharacter(req.body.name, req.body.role, req.body.age, req.body.forcePoints);
})

// Starts the server to begin listening 
// =============================================================
app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
})