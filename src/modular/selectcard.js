/* 选项卡 */
define(["jquery"], function ($) {
    function Selectcard(){

    }
    Selectcard.prototype = {
        constructor:Selectcard,
        init:function(){
            this.$li = $(".card").children()
            var _this = this
            this.$li.on("mouseenter",this.change)
            
        },
        change:function(){
            let index = $(this).index()
            $(".card").find("h4").css({
                color:"#999"
            })
            $(this).css({
                borderColor: "#2979ff"
            }).find("h4").css({
                color:"#2979ff"
            }).end()
            .siblings().css({
                borderColor: "#eaeaea"
            })
            $(".card").find("i").css({
                backgroundPositionY: "-356px"
            })
            $(this).find("i").css({
                backgroundPositionY: "-402px"
            })

            $(".show-wrap").eq(index).css({
                display:"block"
            }).siblings().css({
                display:"none"
            })
        }

    }
    return new Selectcard()
})