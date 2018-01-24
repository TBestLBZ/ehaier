/* 购物车向您推荐模块 */
define(["jquery", "cookie"], function ($) {
    function CarGuess() {
        this.init();
    }
    CarGuess.prototype = {
        constructor:CarGuess,
        init:function(){
            this.$cardLeft = $(".tab1-title");
            this.$cardRight= $(".tab2-title");
            this.$showLeft = $(".tab1");
            this.$showRight = $(".tab2");

            this.$cardLeft.on("mouseenter",$.proxy(this.leftChange,this))
            this.$cardRight.on("mouseenter",$.proxy(this.rightChange,this))
        },
        leftChange:function(){
            this.$cardRight.css({
                backgroundPosition: "-84px -200px",
                color:"#666"
            })
            this.$cardLeft.css({
                backgroundPosition: "0 -200px",
                color: "#fff"
            })
            this.$showLeft.css({
                display:"block"
            })
            this.$showRight.css({
                display: "none"
            })
        },
        rightChange:function(){
            this.$cardLeft.css({
                backgroundPosition: "-84px -200px",
                color:"#666"
            })
            this.$cardRight.css({
                backgroundPosition: "0 -200px",
                color: "#fff"
            })
            this.$showRight.css({
                display:"block"
            })
            this.$showLeft.css({
                display: "none"
            })
        }
    }
    return new CarGuess()
})