/**
 * User: wb-zhangrui
 * Date: 13-6-4
 * Time: œ¬ŒÁ5:07
 */
var win = window, doc = document, Util = win.PUBLIC.Util;

var moudleTest = {
    o_url:'/test/js/c_testJS.js',
    init:function(){
        var self = this;
        Util.createActScript(self.o_url);
        console.log('≤‚ ‘');
    }
};

win.onload = function(){
  moudleTest.init();
};
