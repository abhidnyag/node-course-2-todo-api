var http = require('http');

var server = http.createServer(function(req, res){
    console.log('request was mde: ' +req.url);
   res.writeHead(200, {'Context-Type': 'text/plain'});
   res.end('Hey people!');

});

server.listen(3000,);
console.log('hey guys, now listening to port 3000');
