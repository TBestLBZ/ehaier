/* 详情页加入购物车模块(存入id img地址 标题 价格 数量增加) */
define(["jquery", "cookie"], function ($) {
    function AddshoppingCar(){
        
    }
    AddshoppingCar.prototype = {
        constructor:AddshoppingCar,
        init:function(res,value){
            var _this = this
            this.$pushBtn = $(".push-btn");//加入购物车按钮
            this.$title = $(".good-title span").html();//商品名称
            this.$count = $(".change-num").val();//商品数量input框
            this.$price= $(".good-info-list .price").html();//  里边内容还是<i>￥<i>5199.00 
            //console.log(this.$count)      
            res.forEach(function(item,index){
                if(item.id == value){
                    _this.$img = item.img
                }
            })
            this.addGoods(res,value);//数据和将要加入购物车商品的id值
        },
        addGoods:function(res,value){ //购物车结构建立及其数量增加
            //console.log(res,value)
            var reg = /[1-9]\d*\.?\d*/g;
            var $price = this.$price.match(reg)[0]
            
            if($.cookie("shoppingCar")){
                var sCookie = $.cookie("shoppingCar");
                var aCookie = JSON.parse(sCookie);
                var _this = this;
                var flag = false;
                aCookie.forEach(function(item,index){
                    if(item.id == value){
                        //console.log(item.num,_this.$count)
                        item.num += parseInt(_this.$count)
                        flag = true
                    }
                })
                if(!flag){
                    var item = {
                        "id" : value,
                        "img": this.$img,
                        "txt":this.$title,
                        "price":parseInt($price),
                        "num":parseInt(this.$count)
                    }
                    aCookie.push(item)
                }
                sCookie = JSON.stringify(aCookie)
                $.cookie("shoppingCar",sCookie)
                console.log(JSON.parse($.cookie("shoppingCar")))
            }else{
                var item = '[{"id":'+value+',"img":"'+this.$img+'","txt":"'+this.$title+'","price":'+$price+',"num":'+this.$count+'}]'
                $.cookie("shoppingCar",item,{ expires: 7, path: '/' })
            }
        }
    }
    return new AddshoppingCar()
})