/* 业务逻辑页面 */
require(["scripts/config.js"], function () {
    require(["jquery", "nav", "banner","loadcard","selectcard","smallbanner"], function ($, nav, banner,loadcard,selectcard,smallbanner) {
     
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

      loadcard();//加载选项卡显示图片及数据
      selectcard.init(); //选项卡
      smallbanner.init();//小无缝轮播图

      $(".totop").on("click",function(){//回到顶部
          $("html").animate({
              scrollTop:0
          },400)
      })

    })
})