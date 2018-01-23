/* 详情页细节展示大小图对应  */
define(["jquery"], function ($) {

    function Details() {
        
    }
    Details.prototype = {
        constructor: Details,
        init: function (res) {
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
            var middleSrc = this.res.middle[index].img;
            var bigSrc = this.res.big[index].img;
            this.$middle.attr("src",middleSrc)
            this.$big.attr("attr",bigSrc)
            //console.log(bigSrc)
            this.$li.find("img").css({
                border: "1px solid transparent"
            }).eq(index).css({
                border: "1px solid #ccc"
            })
        },
        turnLeft:function(){
            var $showWidth = this.$showLittle.width();
            var $length = this.$li.length;
            var $liWidth = this.$li.width();
            var $cont = Math.ceil($length * $liWidth  / $showWidth);
            console.log(this.$ul.offset().left)
            
        },
        turnRight:function(){

        }
           
       
    }





    return new Details()
})