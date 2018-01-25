/* 购物车业务员逻辑页面 */
require(["scripts/config.js"], function () {
    require(["jquery", "cookie","nav","checkIndexLogin","guessCar","updateGoods"], function ($,cookie,nav,checkIndexLogin,guessCar,updateGoods) {

        $(".totop").on("click", function () {//回到顶部
            $("html").animate({
                scrollTop: 0
            }, 400)
        })

        

    })
})