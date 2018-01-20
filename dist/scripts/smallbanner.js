/* 多图自动轮播模块 */
define(["jquery"], function ($) {
    function Smallbanner() {
        
    }
    Smallbanner.prototype = {
        constructor: Smallbanner,
        init: function () {
            this.$prev = $(".prev");//上一张按钮
            this.$next = $(".next");//下一张按钮
            this.$ul = $(".lb-list");
            this.$box = $(".lb-box")

            this.$prev.on("click", $.proxy(this.prev, this))
            this.$next.on("click", $.proxy(this.next, this))
            this.$box.on("mouseenter",$.proxy(this.stop, this))
            this.$box.on("mouseleave",$.proxy(this.start, this))
            this.auto()
        },
        prev: function () {
            //console.log(this);
            var _this = this;
            $(".lb-list li").last().prependTo(_this.$ul);
            $(".lb-list").css({
                left:-300
            }).stop(true).animate({
                left:0
            }) 
        },
        next:function(){
            var _this = this;
            $(".lb-list").stop(true).animate({
                left:"-300px"   
            },function(){
                $(".lb-list li").first().appendTo(_this.$ul);
                $(".lb-list").css({
                    left:0
                })
            })
        },
        auto:function(){
            var _this = this;
            this.timer = setInterval(function(){
                _this.next();
            },2000)
        },
        stop:function(){
           clearInterval(this.timer)
        },
        start:function(){
            this.auto()
        }
    }
    return new Smallbanner()
})