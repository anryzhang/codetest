/**
 * User: wb-zhangrui
 * Date: 13-11-9
 * Time: ÏÂÎç8:49
 */
//HTTP·şÎñÆ÷
var http = require('http');
var url = require('url');


function start(route){

    function onRequest(request,response){
        var pathname = url.parse(request.url).pathname;
        console.log('req for' + pathname + 'received');

        response.writeHead(200,{'Content-Type':'text/plain'});
        var content = route( pathname);
        response.write(content);

        //response.write('hello world');
        response.end();

    }

    http.createServer(onRequest).listen(8888);
    console.log('server has started')
}

exports.start = start;



