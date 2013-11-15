/**
 * Created by anry on 13-11-10.
 */
var server = require('./server');
var router = require('./router');

server.start(router.route);