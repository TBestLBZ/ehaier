/* 购物车业务员逻辑页面 */
require(["scripts/config.js"], function () {
    require(["jquery", "cookie","checkIndexLogin","guessCar"], function ($,cookie,checkIndexLogin,guessCar) {

        $(".totop").on("click", function () {//回到顶部
            $("html").animate({
                scrollTop: 0
            }, 400)
        })

        

    })
})