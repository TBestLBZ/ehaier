/* 详情页细节展示大小图对应  */
define(["jquery"], function ($) {
    function Details() {
        
    }
    Details.prototype = {
        constructor: Details,
        init: function (res) {
            //console.log(res)
            this.res = res;//数据
            this.$li = $(".pic-li");//小图
            this.$middle = $(".pic-show img");//中图
            this.$big = $(".pic-hide img");//大图
            this.$left = $(".pic-left");//向左
            this.$right = $(".pic-right");//向左
            this.$showLittle = $(".small-pic");//小图显示的div
            this.$ul = $(".pic-ul");//小图ul
            var _this = this;

            this.$li.on("mouseenter",function(){
               _this.change($(this).index());
            })
            this.$left.on("click",$.proxy(this.turnLeft,this))
            this.$right.on("click",$.proxy(this.turnRight,this))
        },
        change:function(index){//鼠标移入切换 大中小三个图
            var middleSrc = this.res.info.middle[index].img;
            var bigSrc = this.res.info.big[index].img;
            this.$middle.attr("src",middleSrc)
            this.$big.attr("src",bigSrc)
            //console.log(bigSrc)
            this.$li.find("img").css({
                border: "1px solid transparent"
            }).eq(index).css({
                border: "1px solid #ccc"
            })
        },
        turnRight:function(){
            this.$showWidth = this.$showLittle.width();//显示li区域宽度
            this.$length = this.$li.length;//li个数
            this.$liWidth = this.$li.width();//一个li宽度
            this.$cont = Math.ceil(this.$length * this.$liWidth  / this.$showWidth);
            this.$maxWidth = -(this.$cont - 1) * this.$showWidth + "px"
            this.$ulLeft = this.$ul.css("left")
            if(this.$ulLeft <= this.$maxWidth){
                return 0;
            }else{
                this.$ul.animate({
                    left: "-="+this.$showWidth
                })
            }
        },
        turnLeft:function(){
            this.$showWidth = this.$showLittle.width();//显示li区域宽度
            this.$length = this.$li.length;//li个数
            this.$liWidth = this.$li.width();//一个li宽度
            this.$cont = Math.ceil(this.$length * this.$liWidth  / this.$showWidth);
            this.$maxWidth = -(this.$cont - 1) * this.$showWidth + "px"
            this.$ulLeft = this.$ul.css("left")
            if(this.$ulLeft == "0px"){
                return 0;
            }else{
                this.$ul.animate({
                    left: "+="+this.$showWidth
                })
            }
        }           
    }
    return new Details()
})