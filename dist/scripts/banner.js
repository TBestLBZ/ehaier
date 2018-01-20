/* 轮播图模块 */
define(["jquery"], function ($) {
    function Banner(){
        this.init();
    }
    Banner.prototype = {
        constructor:Banner,
        init:function(){
            this.$bannerBox = $(".main-banner");//banner外套
            this.$left = $(".left");//左按钮
            this.$right = $(".right");//右按钮
            this.$circularBtn = $(".circular-btn");//多有圆点按钮
            this.$li = $(".banner-list li");//所有带有图片的li
            this.index = 0;//当前的显示图片和圆点
            this.$circularBtn.on("click",$.proxy(this.circularChange,this))
            this.$right.on("click",$.proxy(this.rightBtn,this));
            this.$left.on("click",$.proxy(this.leftBtn,this));
            this.$bannerBox.on("mouseenter",$.proxy(this.stop,this));
            this.$bannerBox.on("mouseleave",$.proxy(this.begin,this));
            this.auto()
        },
        circularChange:function(e){
            //console.log(this)
            let target = e.target;
            let index = $(target).index(); //所点击圆点对应的下标 0 1 2 3 4
            //this.index = index
            console.log(this.index,index)
            $(".circular-btn").css({
                background:"#b6b6b6"
            })
            .eq(index).css({
                background:"#ff4949"
            })
            if(index > this.index){//this.index出去的图 左移出去   index进入的图 左移进入
                this.right(this.$li.eq(this.index),this.$li.eq(index))
            }else{
                this.left(this.$li.eq(this.index),this.$li.eq(index))
            }
            this.index = index;//更新 当前图片下标
        },
        right:function(out,goin){
            //console.log("right")
            out.css({
                left:0
            }).stop().animate({
                left:"-952px"
            })
            goin.css({
                left:"952px"
            }).stop().animate({
                left:0
            })

        },
        left:function(out,goin){
            //console.log("left")
            out.css({
                left:0
            }).stop().animate({
                left:"952px"
            })

            goin.css({
                left:"-952px"
            }).stop().animate({
                left:0
            })
        },
        rightBtn:function(){
            //console.log(this.$li.length)
            if(this.index == this.$li.length-1){
                var nOut = this.index;
                var nGoin = 0;
                this.index = 0;
            }else{
                var nOut = this.index;
                var nGoin = ++this.index;
            }
            this.right(this.$li.eq(nOut),this.$li.eq(nGoin));
            $(".circular-btn").css({
                background:"#b6b6b6"
            })
            .eq(this.index).css({
                background:"#ff4949"
            })
        },
        leftBtn:function(){
            //console.log(2)
            if(this.index == 0){
                var nOut = this.index;
                var nGoin = this.$li.length - 1;
                this.index = this.$li.length - 1;
            }else{
                var nOut = this.index;
                var nGoin = --this.index;
            }
            this.left(this.$li.eq(nOut),this.$li.eq(nGoin));
            $(".circular-btn").css({
                background:"#b6b6b6"
            })
            .eq(this.index).css({
                background:"#ff4949"
            })
        },
        auto:function(){
            var _this = this;
            this.timer = setInterval(function(){
                _this.rightBtn();
            },2000)
        },
        stop:function(){
            clearInterval(this.timer);
        },
        begin:function(){
            this.auto()
        }




    }

    return new Banner();
})