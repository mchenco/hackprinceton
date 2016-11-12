//import HTTP module
var http = require('http');

//define a port to listen to
const PORT = 8080;

//function that handles requests, sends response
function handleRequest(request, response){
	response.end('It Works!! Path Hit: ' + request.url);
}

//create a server
var server = http.createServer(handleRequest);
