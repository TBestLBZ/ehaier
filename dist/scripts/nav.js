/* 导航栏运动模块 */
define(["jquery"],function($){
    function Nav(){
        this.init()
    }
    Nav.prototype = {
        constructor:Nav,
        init:function(){
            this.$ul = $(".goods-list")
            this.$li = this.$ul.children()
            this.$show = $(".show")
            
            this.$li.on("mouseenter",$.proxy(this.sccChangeOn,this))
            this.$li.on("mouseleave",$.proxy(this.sccChangeOff,this))
            this.$ul.on("mouseleave",$.proxy(this.leaveUl,this))
            this.$show.on("mouseenter",$.proxy(this.show,this))
            this.$show.on("mouseleave",$.proxy(this.hide,this))
        },
        sccChangeOn:function(e){
            let target = e.target
            this.index = $(target).parent().index()
            this.$width = $(".showpanel").eq(this.index).width()
            //console.log(this.$width)
            $(target).css({
                color: "rgb(0,0,0)",
                background: "rgb(245,245,245)"
            })
            this.$li.eq(this.index).find("i").css({
                background:"url(../images/jiantou2.png) left top no-repeat"
            })
            

            $(".goods-navmine").css({
                width: this.$width + 192
            })
            this.$show.css({
                width: this.width,
                display:"block"
            })
            $(".showpanel").stop(true,true)
            .animate({
                left:0
            })
           

        },
        sccChangeOff:function(e){
            let target = e.target
            this.index = $(target).parent().index()
            //console.log(this.$width)
            $(target).css({
                color: "rgb(245,245,245)",
                background: "rgba(0,0,0,0)"
            })
            this.$li.eq(this.index).find("i").css({
                background:"url(../images/jiantou.png) left top no-repeat"
            })
        }
    }
       


    return new Nav()
})
