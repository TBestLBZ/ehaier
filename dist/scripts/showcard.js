/* 加载选项卡图片模块 */
define(["jquery"], function ($) {
    function Lodcard() {
        var opts = {
            url: "json/showcard.json",
            type: "GET",
            //data: data,
            context: this
        }
        $.ajax(opts).then(function (res) {
            $(".card1").children(".show-banner").find("img").attr("src",res.xyj[0].banner)
            res.xyj[1].list.forEach(function(item,index){ 
                //console.log($(".card1").find(".show-a").children("img").eq(index))
                $(".card1").find(".show-txt").eq(index).html(item.txt)
                $(".card1").find(".show-price").eq(index).html(item.price)
                $(".card1").find(".show-a").children("img").eq(index).attr("src",item.img)
            })

            $(".card2").children(".show-banner").find("img").attr("src",res.bg[0].banner)
            res.bg[1].list.forEach(function(item,index){ 
                $(".card2").find(".show-txt").eq(index).html(item.txt)
                $(".card2").find(".show-price").eq(index).html(item.price)
                $(".card2").find(".show-a").children("img").eq(index).attr("src",item.img)
            })

            $(".card3").children(".show-banner").find("img").attr("src",res.bx[0].banner)
            res.bx[1].list.forEach(function(item,index){ 
                $(".card3").find(".show-txt").eq(index).html(item.txt)
                $(".card3").find(".show-price").eq(index).html(item.price)
                $(".card3").find(".show-a").children("img").eq(index).attr("src",item.img)
            })

            $(".card4").children(".show-banner").find("img").attr("src",res.tv[0].banner)
            res.tv[1].list.forEach(function(item,index){ 
                $(".card4").find(".show-txt").eq(index).html(item.txt)
                $(".card4").find(".show-price").eq(index).html(item.price)
                $(".card4").find(".show-a").children("img").eq(index).attr("src",item.img)
            })

            $(".card5").children(".show-banner").find("img").attr("src",res.kt[0].banner)
            res.kt[1].list.forEach(function(item,index){ 
                $(".card5").find(".show-txt").eq(index).html(item.txt)
                $(".card5").find(".show-price").eq(index).html(item.price)
                $(".card5").find(".show-a").children("img").eq(index).attr("src",item.img)
            })

            $(".card6").children(".show-banner").find("img").attr("src",res.rsq[0].banner)
            res.rsq[1].list.forEach(function(item,index){ 
                $(".card6").find(".show-txt").eq(index).html(item.txt)
                $(".card6").find(".show-price").eq(index).html(item.price)
                $(".card6").find(".show-a").children("img").eq(index).attr("src",item.img)
            })

            $(".card7").children(".show-banner").find("img").attr("src",res.cd[0].banner)
            res.cd[1].list.forEach(function(item,index){ 
                $(".card7").find(".show-txt").eq(index).html(item.txt)
                $(".card7").find(".show-price").eq(index).html(item.price)
                $(".card7").find(".show-a").children("img").eq(index).attr("src",item.img)
            })

            $(".card8").children(".show-banner").find("img").attr("src",res.shjd[0].banner)
            res.shjd[1].list.forEach(function(item,index){ 
                $(".card8").find(".show-txt").eq(index).html(item.txt)
                $(".card8").find(".show-price").eq(index).html(item.price)
                $(".card8").find(".show-a").children("img").eq(index).attr("src",item.img)
            })

        })
    }

    return Lodcard;
})