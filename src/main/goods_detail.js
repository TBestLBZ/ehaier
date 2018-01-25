/* 商品详情页业务员逻辑页面 */
require(["scripts/config.js"], function () {
    require(["jquery", "cookie", "detailsScroll", "detailsCardChange", "fdj", "numChange", "checkIndexLogin", "addShoppingCar"], function ($, cookie, detailsScroll, detailsCardChange, fdj, numChange, checkIndexLogin, addShoppingCar) {

        $(".totop").on("click", function () {//回到顶部
            $("html").animate({
                scrollTop: 0
            }, 400)
        })


        /* ---------获取地址栏请求信息----------- */

        var _this = this
        var opts = {
            url: "json/wntj.json",
            type: "GET",
            //data: data,
            context: this
        }
        $.ajax(opts).then(function (res) {//请求详情大中小图片
            //console.log(res.wntj)
            var detailsUrl = window.location.href
            var str = detailsUrl.split('?').pop();//获得？后的请求
            // console.log(str)
            var value = parseInt(str.split('=').pop()) // 获取到id对应的的value
            // console.log(value)
            
            res.wntj.forEach(function (item, index) {
                if (item.id == value) {
                    //console.log(item)
                    $(".good-title span").html(item.txt);//改变对应的标题
                    $(".good-info-list .price").html(item.price);
                    item.info.small.forEach(function (item, index) {
                        $(".pic-li").eq(index).find("img").attr("src", item.img)//加载小图
                    })
                    detailsCardChange.init(item); //传入对应对应id的所有数据
                }
            })
            $(".push-btn").on("click", function () {//点击加入购物车执行添加
                addShoppingCar.init(res.wntj,value); //传入所有数据  和   本商品的id值
            })
        })






    })
})