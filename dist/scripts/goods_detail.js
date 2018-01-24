/* 商品详情页业务员逻辑页面 */
require(["scripts/config.js"], function () {
    require(["jquery", "cookie","detailsScroll","detailsCardChange","fdj","numChange","checkIndexLogin"], function ($,cookie,detailsScroll,detailsCardChange,fdj,numChange,checkIndexLogin) {

        $(".totop").on("click", function () {//回到顶部
            $("html").animate({
                scrollTop: 0
            }, 400)
        })


        var _this = this
        var opts = {
            url: "json/details.json",
            type: "GET",
            //data: data,
            context: this
        }
        $.ajax(opts).then(function (res) {//请求详情大中小图片
            
            res.small.forEach(function (item, index) {
                $(".pic-li").eq(index).find("img").attr("src", item.img)
            })     
            detailsCardChange.init(res)      
        })


    })
})