/**
 * User: wb-zhangrui
 * Date: 13-11-9
 * Time: 下午8:49
 */
//HTTP服务器
var http = require('http');
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.write('hello word');
    response.end();
}).listen(8888);

//函数传递
function say(word){
    console.log(word);
}
function execute(someFunction, value){
    someFunction(value);
}
execute(say,'hello');