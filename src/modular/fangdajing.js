/* 放大镜模块 */
define(["jquery"], function ($) {
    function Fdj(){
        this.init()
    }
    Fdj.prototype = {
        constructor:Fdj,
        init:function(){
            this.$wrap = $(".pic-wrap");//蒙版
            this.$smallBox = $(".fdj");//跟随鼠标div
            this.$middleBox = $(".pic-show");//左侧div
            this.$hide = $(".pic-hide");//隐藏的最大图div
            this.$bigImg = this.$hide.children();//最大图片
            this.$middleImg = $(".middle-pic");//中等图
            this.$hideImg = $(".pic-hide img");//隐藏大图
           
            this.$wrap.on("mouseenter",$.proxy(this.show,this))
            this.$wrap.on("mousemove",$.proxy(this.flow,this))
            this.$wrap.on("mousemove",$.proxy(this.bigMove,this))
            this.$middleBox.on("mouseleave",$.proxy(this.hide,this))
        },
        show:function(){
            this.$smallBox.css({
                display:"block",
            })
            this.$hide.css({
                visibility: "visible",
                zIndex:10
            })
        },
        hide:function(){
            this.$smallBox.css({
                display:"none",
            })
            this.$hide.css({
                visibility: "hidden",
            })
            this.$bigImg.css({
                top:0,
                left:0
            })
        },
        flow:function(e){
            this.$left = e.offsetX - this.$smallBox.width() / 2;//在鼠标中心
           
            this.$top = e.offsetY - this.$smallBox.height() / 2;
            this.$maxLeft = this.$middleBox.width() - this.$smallBox.width();//小盒子的最大left
            this.$maxTop = this.$middleBox.height() - this.$smallBox.height();
            this.$smallBox.css({
                left:this.$left,
                top:this.$top
            })
            //边界检测
            this.$left = this.$left <= 0 ? 0 : this.$left;
            this.$left = this.$left >= this.$maxLeft ? this.$maxLeft : this.$left;
            this.$smallBox.css({left:this.$left})
            this.$top = this.$top <= 0 ? 0 : this.$top;
            this.$top = this.$top >= this.$maxTop ? this.$maxTop : this.$top; 
            this.$smallBox.css({top:this.$top})
        },
        bigMove:function(){
            var $hideWidth = this.$hide.width();
            var $hideImgWidth = this.$hideImg.width();
            var $maxBigImgLeft = $hideImgWidth - $hideWidth;//大图最大left
            var $propLeft = Math.round($maxBigImgLeft / this.$maxLeft * 100) / 100;//left对应比例
            

            var $hideTop = this.$hide.height();
            var $hideImgTop = this.$hideImg.height();
            var $maxBigImgTop = $hideImgTop - $hideTop;//大图最大TOP
            var $propTop = Math.round($maxBigImgTop / this.$maxTop * 100) /100;//top对应比例
            
            var $bigLeft = this.$left * $propLeft;//大图时时left
            var $bigTop = this.$top * $propTop;
            this.$hideImg.css({
                left: -$bigLeft,
                top: -$bigTop
            })
        }
    }
    return new Fdj()
})