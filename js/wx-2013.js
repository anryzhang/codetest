
/* source from: >> src/wx-2013/main.js */
/**
 * User: wb-zhangrui
 * Date: 13-9-12
 * Time: 上午10:14
 */
(function(S){
    var $ = S.all, D = S.DOM, E = S.Event,  HIDDEN = 'hiddend', win = window,doc = win.document;
    //banner显示
    var showImg={
        init:function(){
            var self = this;
            self.J_background = $("#J_background");
            self.banner = $(".bannerHover");
            self.tabNav = $(".js_bannerHover");
            self.tabcont=$('.tabcont');
            self.banImg = $(".banner");
            self.pre = $(".pre_banner");
            self.next = $(".next_banner");
            self.popShop = $('.pop-box');
            self.J_num = $('.J_num');
            self.J_send = $('.J_send');
            self.eventBinding();
            self.setScrollTop();
            self.setBannerHeight();
            self.picWidthHeight();
        },
        eventBinding:function(){
            var self = this;
            var length = self.banner.length,
                sw = 0,
                myTime;
            myTime = self.setInter(sw,length);

            self.pre.on('click',function(){
                if(myTime){
                    clearInterval(myTime);
                }
                if(sw <= 0){
                    sw = length;
                }
                sw -=  1;
                self.myShow(sw);
            });

            self.next.on('click',function(){
                if(myTime){
                    clearInterval(myTime);
                }
                sw +=1;
                if(sw >= length){
                    sw = 0;
                }
                self.myShow(sw);
            });

            $(win).on('resize',function(){
                self.setScrollTop();
                self.setBannerHeight();
                self.picWidthHeight();
            });
//            tab页面切换
            self.tabNav.item(0).addClass('cur');
            self.tabNav.on('click',function(e){
                e.preventDefault();
                var bHeight = self.J_background.height();
                $('body').height(win.screen.height + bHeight + 'px');
                $(win).animate({'scrollTop':(bHeight- 91+28+14) +'px'}, 1, "easeOut");
                var navVal;
                self.tabNav.removeClass('cur');
                $(this).addClass('cur');
                navVal = self.tabNav.item(this).attr('class').substring(0,2);
                self.tabcont.hide();
                switch(navVal){
                    case "n1":
                        self.tabcont.item(0).show();
                        break;
                    case "n2":
                        self.tabcont.item(1).show();
                        break;
                    case "n3":
                        self.tabcont.item(2).show();
                        break;
                }
            });
            self.phoneDown();
        },

        setInter:function(num,len){
            var self = this;
            setInterval(function(){
                self.myShow(num);
                num++;
                if(num == len){
                    num = 0;
                }
            },4000);
        },
// 设置滚动条高度,定位到banner顶部
        setScrollTop:function(){
            var self = this;
            D.scrollTop(win,'36px');
        },

        setBannerHeight:function(){
            var self = this;
            self.J_background.css("height", D.viewportHeight(win)+ 8 + "px");
        },

        myShow:function(i){
            var self = this;
            if(S.UA.ie <= 6){
                self.banner.item(i).stop().show().siblings(".bannerHover").hide();
            }else{
                self.banner.item(i).stop().animate({opacity:1,display:'block'},1).siblings(".bannerHover").animate({opacity:0.6,display:'none'},1);
            }
            self.J_background.attr('class','');
            self.J_background.addClass('show-' + (i+1));
        },

        picWidthHeight:function(){
            var self = this;
            var winWidth = D.viewportWidth(win),
                winHeight = D.viewportHeight(win),
                imgWidth = self.banImg.attr('width'),
                imgHeight = self.banImg.attr('height'),
                newWidth = winWidth,
                newHeight = (winWidth / imgWidth) * imgHeight,
                topMargin = ((newHeight - winHeight)/2)*-1,
                leftMargin = 0;
            var preBtnWidth = 60,
                newPreWidth = (winWidth/preBtnWidth)*10;
            if(newHeight < winHeight){
                newWidth = (winHeight /imgHeight) * imgWidth;
                newHeight = winHeight;
                topMargin=0;
                leftMargin = ((newWidth - winWidth)/2)*-1;
                self.pre.css({width:newPreWidth/2, height:newPreWidth/2});
                self.next.css({width:newPreWidth/2, height:newPreWidth/2});
                self.pre.children('img').css({width:newPreWidth/2, height:newPreWidth/2});
                self.next.children('img').css({width:newPreWidth/2, height:newPreWidth/2});
            }else if(winWidth > imgWidth){
                newWidth = imgWidth;
                newHeight = imgHeight;
                topMargin = (winHeight - imgHeight)/2;
                leftMargin = (winWidth - imgWidth) /2;
                self.pre.css({width:'60px', height:'60px'});
                self.next.css({width:'60px', height:'60px'});
                self.pre.children('img').css({width:'60px', height:'60px'});
                self.next.children('img').css({width:'60px', height:'60px'});
            }
            self.banImg.css({width:newWidth,height:newHeight,marginLeft:leftMargin,marginTop:topMargin});
            if(winHeight < 400){
                $('.btn-box').addClass(HIDDEN);
            }else{
                $('.btn-box').removeClass(HIDDEN);
            }
            //if(winWidth > 850 && winWidth <= 1199){
               // self.popShop.removeClass('bigpg').removeClass('smapg').addClass('midpg');
            if(winWidth >0 && winWidth <= 849){
                self.popShop.removeClass('bigpg').removeClass('midpg').addClass('smapg');
            }else{
                self.popShop.removeClass('smapg').removeClass('midpg').addClass('midpg');
            }
        },
        phoneDown:function(){

            var self = this;
            var VAL = unescape('%u8F93%u5165%u624B%u673A%u53F7%u7801%u5FEB%u901F%u4E0B%u8F7D');
            self.J_num.on('focus',function(){
                D.val(self.J_num,'');
            });
            /*self.J_num.on('blur',function(){
                var val = D.val(self.J_num).toString(),
                    reg2 = /^([+-]?)\d*\.?\d+$/gi;
                if(val != VAL && val == ''){
                    D.val(self.J_num,VAL);
                    alert(unescape("%u53F7%u7801%u4E0D%u6B63%u786E%uFF0C%u8BF7%u91CD%u65B0%u8F93%u5165%uFF01"));
                }else if(!reg2.test(val)){
                    D.val(self.J_num,VAL);
                }
            });*/
            self.J_send.on('click',function(){
                var val = D.val(self.J_num).toString(),
                    reg1 = /0?(13|14|15|18)[0-9]{9}/gi,
                    url_m = "http://wxapi.taobao.com/common/sendDownloadSms.do?mobile=" + val;
                if(val.length == 11 && reg1.test(val)){
                    S.getScript(url_m,function(){
                       switch (errCode){
                           case 0:
                               alert(unescape('%u53D1%u9001%u6210%u529F%21'));
                               break;
                           case -20:
                               alert(unescape("%u53D1%u9001%u5931%u8D25%21%u8BF7%u91CD%u65B0%u53D1%u9001%u3002"));
                               break;
                           case -1:
                               alert(unescape("%u624B%u673A%u53F7%u7801%u975E%u6CD5%21"));
                               break;
                           case -10:
                               alert(unescape("%u53D1%u9001%u8FC7%u4E8E%u9891%u7E41%21"));
                               break;
                       }
                    });
                }else{
                    alert(unescape("%u53F7%u7801%u4E0D%u6B63%u786E%uFF0C%u8BF7%u91CD%u65B0%u8F93%u5165%uFF01"));
                    return false;
                }
            });
        }
    };
    var Utility = {
        init:function(){
            var self = this;
            self.eleObj = $(".trait-1,.trait-2,.trait-3,.trait-4,.trait-5,.trait-6");
            self.checkEle(self.eleObj);
            $(doc).on("scroll",function(){
                self.checkEle(self.eleObj);
            });
        },
        checkEle:function(ele){
            var self = this;
            S.each(ele,function(i){
                var selfEle = $(i);
                if(self.getEleVisual(selfEle) > 0){
                    !selfEle.hasClass('tra') && selfEle.addClass('tra');
                }

            })
        },
        getEleVisual:function(ele){
            var self = this;
            var ele =$(ele),
                tt = D.height(win) + D.scrollTop(win),
                h = ele.height(),
                s = D.scrollTop(win) - h,
                t = ele.offset().top,
                c1 = t - s,
                c2 = tt - t;
            if(c1>0 && c2 >0){
                if(c1/h > 0.8 && c2/h > 0.8){
                    return 2;
                }
                return 1;
            }
            return 0;
        }
    };

    var downInfo = {
        init:function(){
            var self = this;
            self.J_downBtn = $(".J_downBtn");
            self.J_downWarp = $("#J_downWarp");
            self.J_close = $(".flow-close");
            self.eventBinding();
        },
        eventBinding:function(){
            var self = this;
            self.J_downBtn.on('click',function(e){
                e.preventDefault();
                var andVers = D.attr(this,'data-and-vers'),
                    andInfo = D.attr(this,'data-and-bbinfo'),
                    andHj = D.attr(this,'data-and-hj'),
                    andUrl = D.attr(this,'data-and-url'),
                    iosVers = D.attr(this,'data-ios-vers'),
                    iosInfo = D.attr(this,'data-ios-bbinfo'),
                    iosHj = D.attr(this,'data-ios-hj'),
                    iosUrl = D.attr(this,'data-ios-url'),
                    winVers = D.attr(this,'data-win-vers'),
                    winInfo = D.attr(this,'data-win-bbinfo'),
                    winHj = D.attr(this,'data-win-hj'),
                    winUrl = D.attr(this,'data-win-url');
                D.html('#J_and .bb',unescape("%u7248%u672C%u53F7%3A") + andVers);
                D.html('#J_and .bbinfo',andInfo);
                D.attr('#J_and .J_detect','data-hj',andHj);
                D.attr('#J_and .vers-down-btn',"href",andUrl);
                D.html('#J_ios .bb',unescape("%u7248%u672C%u53F7%3A") + iosVers);
                D.html('#J_ios .bbinfo',iosInfo);
                D.attr('#J_ios .J_detect','data-hj',iosHj);
                D.attr('#J_ios .vers-down-btn',"href",iosUrl);
                D.html('#J_win .bb',unescape("%u7248%u672C%u53F7%3A") + winVers);
                D.html('#J_win .bbinfo',winInfo);
                D.attr('#J_win .J_detect','data-hj',winHj);
                D.attr('#J_win .vers-down-btn',"href",winUrl);
                self.J_downWarp.removeClass(HIDDEN);
            });

            $('.J_detect').each(function(item){
                item.on('click',function(){
                    var J_data_hj = D.attr(item,'data-hj');
                    self.detect(J_data_hj);
                });
            });
            self.J_close.on("click",function(e){
                e.preventDefault();
                self.J_downWarp.addClass(HIDDEN);
            })
        },
        detect:function(str){
            var self = this;
            var hold = + new Date(),
                img = win[hold] = new Image(),
                nick = S.Cookie.get("lqc");
            img.src = "http://gm.mmstat.com/" + str + "?cache=" + Math.floor(Math.random()*10000000) + "&nick=" + nick;
            img.onload = (img.onerror = function(){
                win[hold] = null;
            });
            img = null;
        }
    };
    S.ready(function(){
        showImg.init();
        downInfo.init();
        Utility.init();
    })
})(KISSY);