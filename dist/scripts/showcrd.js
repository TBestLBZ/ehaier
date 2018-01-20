/* 加载选项卡图片模块 */
define(["jquery"], function ($) {
    function Lodcard(){

    }
    var opts = {
        url: "json/showcard.json",
        type: "GET",
        //data: data,
        context: this
    }
    $.ajax(opts).then(function (res) {
        console.log(res)

    })
    return new Lodcard()
})