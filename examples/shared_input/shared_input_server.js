var fs = require('fs');
var server = require('http').createServer(function(req, response){
  fs.readFile(__dirname+'/shared_input.html', function(err, data){
    response.writeHead(200, {'Content-Type':'text/html'});
    response.write(data);
    response.end();
  });
});
server.listen(8080);
var everyone = require("now").initialize(server);


everyone.connected(function(){
  // This may show up as undefined in IE, Firefox, Safari, because alert boxes are not blocking
  console.log("Joined: " + this.now.name);
});


everyone.disconnected(function(){
  console.log("Left: " + this.now.name);
});


everyone.now.inputUpdate = function(message)
{
	everyone.now.propagateUpdate(this.now.name, message);
};
