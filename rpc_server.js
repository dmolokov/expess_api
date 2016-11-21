var rpc = require('node-json-rpc');
 
var options = {
	// int port of rpc server, default 5080 for http or 5433 for https 
	port: 5080,
	// string domain name or ip of rpc server, default '127.0.0.1' 
	host: '127.0.0.1',
	// string with default path, default '/' 
	path: '/',
	// boolean false to turn rpc checks off, default true 
	strict: true
};

var users = [];
 
// Create a server object with options 
var serv = new rpc.Server(options);
 
// Add your methods 
serv.addMethod('listUsers', function (para, callback) {
	var error, result = '';
	users.forEach(function (v, i) {
		result += ' ' + v;
	});
	callback(error, result);
});

// Add your methods 
serv.addMethod('addUser', function (para, callback) {
	var error, result;
	users.push(para[0]);
	callback(error, result);
});

// Add your methods 
serv.addMethod('deleteUser', function (para, callback) {
	var error, result;
	var index_to_delete = users.indexOf(para[0]);
	users.splice(index_to_delete, 1);
	callback(error, result);
});

// Add your methods 
serv.addMethod('updateUser', function (para, callback) {
	var error, result;
	var index_to_update = users.indexOf(para[0]);
	if(index_to_update != -1) {
		users.splice(index_to_update, 1, para[1]);
	}
	callback(error, result);
});

//function callback(error, result) {
//}
 
// Start the server 
serv.start(function (error) {
	// Did server start succeed ? 
	if (error)
			throw error;
	else
		console.log('Server running ...');
});