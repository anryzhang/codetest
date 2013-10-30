/**
 * User: wb-zhangrui
 * Date: 13-10-30
 * Time: обнГ3:25
 */
(function (a) {
    a(document).ready(function () {
        var e = a(document.body).height();
        a.browser.msie && a.browser.version == "6.0" && !a.support.style && a("#blackBg").css("height", e);
        a("#featureList li").click(function () {
            for (var d = a("#featureList .showItem").length, b = a(this).attr("rel"), c = 0; c <= d; c++)b == c && (a("#d" + b).animate({opacity: "1"}, 800), a("#blackBg").css("display", "block"), a("#d" + b).css("display", "block"))
        });
        a(".floatDiv .closeBtn").click(function () {
            for (var d = a("#featureList .showItem").length, b = a(this).attr("rel"),
                     c = 0; c <= d; c++)b == c && (a("#d" + b).animate({margin: "0 0 0 -243px", opacity: "0"}, 300), a("#d" + b).css("display", "none"), a("#blackBg").css("display", "none"))
        })
    })
})(jQuery);