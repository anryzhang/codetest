/**
 * Created by anry on 13-11-10.
 */
var http = require('http');
http.createServer(function(req,res){
   res.writeHead(200,{'Content-Type':'text/plain'});
   res.write('<h1>hello world !</h1>');
   res.end();
}).listen(8888,'127.0.0.1');

