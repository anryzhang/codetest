/**
 * User: wb-zhangrui
 * Date: 13-6-4
 * Time: ����5:23
 */

var win = window, doc = document;

var Util = {
    //��̬����JS�ļ�
    createActScript:function(url){
        var J_url =document.createElement('script');
        J_url.setAttribute('type','text/javascript');
        J_url.setAttribute('src',url);
        document.getElementsByTagName('head')[0].appendChild(J_url);
    }

};

PUBLIC =  win.PUBLIC || {};
PUBLIC.Util = Util;
