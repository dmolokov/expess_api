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
		result += ' ' + v['name'] + ' ' + v['score'];
	});
	callback(error, result);
});

// Add your methods 
serv.addMethod('addUser', function (para, callback) {
	var error, result;
	users.push({'name' : para[0], 'score' : para[1]});
	callback(error, result);
});

// Add your methods 
serv.addMethod('deleteUser', function (para, callback) {
	var error, result;
	var index_to_delete = users.indexOf(para[0]);
	users.splice(index_to_delete, 1);
	callback(error, result);
});

function arrayObjectIndexOf(myArray, searchTerm, property) {
    for(var i = 0, len = myArray.length; i < len; i++) {
        if (myArray[i][property] === searchTerm) return i;
    }
    return -1;
}

// Add your methods 
serv.addMethod('updateUser', function (para, callback) {
	var error, result;
	var index_to_update = arrayObjectIndexOf(users, para[1], para[0]);
	console.log(index_to_update);
	console.log(para[2]);
	console.log(para[3]);
	if(index_to_update != -1) {
		users[index_to_update][para[2]] = para[3];
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