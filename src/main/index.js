/* 业务逻辑页面 */
require(["scripts/config.js"], function () {
    require(["jquery", "nav", "banner"], function ($, nav, banner) {
        //console.log(nav)
        $(".main-banner").supperBanner({
            src: [
                "http://cdn21.ehaier.com/file/5a5d71c858e14c2548632a99.png",
                "http://cdn22.ehaier.com/file/5a5c5e02b702db8ac7587a4f.png",
                "http://cdn22.ehaier.com/file/5a5dd534fac0128ed035e3dc.png",
                "http://cdn21.ehaier.com/file/5a5eb6313e7eb74c2d90a589.png",
                "http://cdn21.ehaier.com/file/5a58915afac0128ed035e32d.png",
                "http://cdn22.ehaier.com/file/5a44dadb3e7e304add6c08c2.png",
                "http://cdn22.ehaier.com/file/59a5388658e1317ad08e1221.png",
            ],
            autoplay: true,
            movement_mode: "scroll",
        })

        var opts = {
            url: "json/salehot.json",
            type: "GET",
            //data: data,
            context: this
        }
        $.ajax(opts).then(function (res) {//加载热卖图片
            //console.log(res.pic)
            res.pic.forEach(function(item,index){
                $(".salehot-body").children().children().eq(index).find("img").attr("src",item.url)
            })
        })  

        var opts = {
            url: "json/jptj.json",
            type: "GET",
            //data: data,
            context: this
        }
        $.ajax(opts).then(function (res) {//加载精品推荐图片
            //console.log(res)
            res.infoinformation.forEach(function(item,index){
                $(".tj-img").eq(index).find("img").attr("src",item.img)
                $(".tj-imgname").eq(index).html(item.text)
                $(".tj-price").eq(index).find("span").html(item.price)
                if(!item.tags){//是否有tags
                    $(".tags").eq(index).css({background : "rgba(0,0,0,0)"})
                }else{
                    $(".tags").eq(index).html(item.tags)
                }
                
            })
        })  




    })
})