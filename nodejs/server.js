/**
 * User: wb-zhangrui
 * Date: 13-11-9
 * Time: ����8:49
 */
//HTTP������
var http = require('http');
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.write('hello word');
    response.end();
}).listen(8888);

//��������
function say(word){
    console.log(word);
}
function execute(someFunction, value){
    someFunction(value);
}
execute(say,'hello');