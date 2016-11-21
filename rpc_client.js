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
 
// Create a server object with options 
var client = new rpc.Client(options);

client.call(
	{"jsonrpc": "2.0", "method": "addUser", "params": ['user01', 25], "id": 1}, function (err, res) {
		// Did it all work ? 
		if (err)
			{ console.log(err); }
		else
			{ console.log(res); }
	}
);

client.call(
	{"jsonrpc": "2.0", "method": "addUser", "params": ['user02', 34], "id": 2}, function (err, res) {
		// Did it all work ? 
		if (err)
			{ console.log(err); }
		else
			{ console.log(res); }
	}
);

client.call(
	{"jsonrpc": "2.0", "method": "listUsers", "params": ['user01'], "id": 3}, function (err, res) {
		// Did it all work ? 
		if (err)
			{ console.log(err); }
		else
			{ console.log(res); }
	}
);

client.call(
	{"jsonrpc": "2.0", "method": "deleteUser", "params": ['user02'], "id": 4}, function (err, res) {
		// Did it all work ? 
		if (err)
			{ console.log(err); }
		else
			{ console.log(res); }
	}
);

client.call(
	{"jsonrpc": "2.0", "method": "listUsers", "params": ['user01'], "id": 5}, function (err, res) {
		// Did it all work ? 
		if (err)
			{ console.log(err); }
		else
			{ console.log(res); }
	}
);

client.call(
	{"jsonrpc": "2.0", "method": "updateUser", "params": ['name', 'user01', 'name', 'user03'], "id": 6}, function (err, res) {
		// Did it all work ? 
		if (err)
			{ console.log(err); }
		else
			{ console.log(res); }
	}
);

client.call(
	{"jsonrpc": "2.0", "method": "listUsers", "params": ['user01'], "id": 7}, function (err, res) {
		// Did it all work ? 
		if (err)
			{ console.log(err); }
		else
			{ console.log(res); }
	}
);
 