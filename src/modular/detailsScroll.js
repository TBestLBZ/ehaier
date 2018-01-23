/* 商品详情页滚动吸顶条及选项卡 */
define(["jquery"], function ($) {
    function DetailScroll() {
        this.init()
    }
    DetailScroll.prototype = {
        constructor: DetailScroll,
        init: function () {
            this.$li = $(".li-tab");
            this.$nav = $(".details-nav");
            this.$zhanWei =  $(".details-nav-fb");
            this.$buyNow = $(".buy-now");
            this.$height = $(".details-cont-main").offset().top;  

            $(window).on("scroll",$.proxy(this.fixedNav,this));
            this.$li.on("click",this.changeCard);
            
        },
        fixedNav:function(){
            var $scrollHeight = $(window).scrollTop();
            if($scrollHeight >= this.$height){
                this.$buyNow.css({
                    display:"inline-block"
                })
                this.$nav.css({
                    position:"fixed"
                })
                this.$zhanWei.css({
                    display:"block"
                })
            }else{
                this.$buyNow.css({
                    display:"none"
                })
                this.$nav.css({
                    position:"static"
                })
                this.$zhanWei.css({
                    display:"none"
                })
            }
        },
        changeCard:function(){
            var $height = $(".details-cont-main").offset().top
            var index = $(this).index();
            $(".li-tab").eq(index).addClass("choose")
            .siblings().removeClass("choose")
            $(".pic").eq(index).css({
                display:"block"
            }).siblings(".pic").css({
                display:"none"
            })
            $(window).scrollTop($height)
        }
    }
    return new DetailScroll()
})