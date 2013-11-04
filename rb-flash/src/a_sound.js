/**
 * User: wb-zhangrui
 * Date: 13-6-13
 * Time: 上午9:43
 */

(function(S){
    var $ = S.all, D = S.DOM, E = S.Event, IO = S.io, J= S.JSON, win = window, doc = document,
        EMPTY = '',timeID;
    var API = {
        sound:'src/sound.json'
    };

    var getSound = {
        init:function(){
            var self = this;

            self.soundBox = $('#J_sound');
            self.soundList = $('.sound-list-box');

            self.fetchData();
            self.eventBinding();

        },
        eventBinding:function(){
            var self = this;

            self.soundList.on('click',function(e){
                var target = e.target;

                if(target.nodeName.toUpperCase() == 'P' ){

                    clearInterval(timeID);
                    var oSoundUrl = D.attr(target,'sound-url'),
                        oSoundTime = D.attr(target,'sound-time'),
                        seed = oSoundTime ;
                    $(target).addClass('sound-play');
                    $(target).siblings().removeClass('sound-play');
                    self.createSound(oSoundUrl,oSoundTime);

                    timeID = setInterval(function(){
                        seed--;
                        if(seed == 0){
                            $(target).removeClass('sound-play');
                            clearInterval(timeID);

                        }

                    },1000);

                }

                if(target.nodeName.toUpperCase() == 'SPAN' ){

                    clearInterval(timeID);
                    var oSoundUrl = D.attr(target.parentNode,'sound-url'),
                        oSoundTime = D.attr(target.parentNode,'sound-time'),
                        seed = oSoundTime ;
                        $(target.parentNode).addClass('sound-play');
                        $(target.parentNode).siblings().removeClass('sound-play');
                        self.createSound(oSoundUrl,oSoundTime);

                        timeID = setInterval(function(){
                            seed--;
                            if(seed == 0){
                                $(target.parentNode).removeClass('sound-play');
                                clearInterval(timeID);

                            }

                        },1000);

                }

            })


        },
        getHost:function(){
            return win.location.host.indexOf('taobao.com') > -1 ? 'taobao.com': 'daily.taobao.net';
        },
        clear: function(el){
            el.html(EMPTY);
        },
        isEmpty:function(str){
            return (str === undefined || str == '' || str.length == 0)
        },
        fetchData:function(){

            var self = this;
            IO({
                type:'get',
                url:API.sound,
                data: S.now(),
                success:function(rs){
                    var data;
                        data = rs;

                    if(data && data.code == 200 && data.data.dialogs && data.data.dialogs.length){
                        var span='';

                        for(var i = 0; i < data.data.dialogs.length; i++){
                            span += '<p sound-url="'+ data.data.dialogs[i].soundUrl +'" sound-time="'+ data.data.dialogs[i].soundTime +'"><span class="sound-time">'+ data.data.dialogs[i].soundTime +'s</span></p>';

                        }

                        self.soundList.append(span)

                    }


                },
                error:function(){
                    alert("请求发生错误!");
                }
            });
        },
        createSound:function(soundUrl, soundTime){
            var self = this;
            var soundSwf;

            self.soundBox.html(EMPTY);

            soundSwf='<object width="165" height="52" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id="Player-demoPlay1">\
                <param value="rb3.swf?soundurl='+soundUrl+'&timeVal='+soundTime+'"  name="movie">\
                <param name="play" value="true" />\
                <param value="high" name="quality">\
                <param value="always" name="allowScriptAccess">\
                    <param name="flashvars" value="targetPlay=demoPlay" />\
                    <embed width="165" height="52" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" play="true" quality="high" src="rb3.swf?soundurl='+soundUrl+'&timeVal='+soundTime+'" allowscriptaccess="always" flashvars="targetPlay=demoPlay" name="movie">\
                    </object>';
            self.soundBox.html(soundSwf);
        }



    };

    S.ready(function(){
        getSound.init();
    })
})(KISSY);
