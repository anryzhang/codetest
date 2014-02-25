/**
 * Created by wb-zhangrui on 14-1-21.
 */
var i = 0;
function test(){
    if(i<10){
        i++;
    }
    console.log(i);
    return i;
}
/**
 * Created by wb-zhangrui on 14-1-21.
 */
(function(S){
    var $ = S.all, D = S.DOM, E = S.Event, HIDDEN = 'hidden', win = window, doc = document;
    var modules = {

        init:function(){
            var self = this;
            self.eventBinding();
        },
        eventBinding:function(){
            var self = this;
            console.log(self);
        }

    };
    S.ready(function(){
       modules.init();
    });
})(KISSY);