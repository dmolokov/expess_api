var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listUsers', function (req, res) {
	fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
		console.log( data );
		res.end( data );
	});
});
//http://127.0.0.1:8081/listUsers

var user = {
	"user4" : {
		"name" : "mohit",
		"password" : "password4",
		"profession" : "teacher",
		"score" : 25,
		"id": 4
	}
};

app.get('/addUser', function (req, res) {
	// First read existing users.
	fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
		data = JSON.parse( data );
		data["user4"] = user["user4"];
		res.end( JSON.stringify(data));
	});
});

//http://127.0.0.1:8081/addUser

app.get('/:id', function (req, res) {
	// First read existing users.
	fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
		users = JSON.parse( data );
		var user = users["user" + req.params.id] 
		console.log( user );
		res.end( JSON.stringify(user));
	});
});

//http://127.0.0.1:8081/2

var id = 2;

app.delete('/deleteUser', function (req, res) {

	// First read existing users.
	fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
		data = JSON.parse( data );
		delete data["user" + 2];
		
		console.log( data );
		res.end( JSON.stringify(data));
	});
});

//http://127.0.0.1:8081/deleteUser

var server = app.listen(8081, function () {
	var host = server.address().address
	var port = server.address().port
	console.log("Example app listening at http://%s:%s", host, port)
});