/* 更新购物车页面商品信息 */
define(["jquery", "cookie"], function ($) {
    function UpdateGoods(){
        this.init();
    }
    UpdateGoods.prototype = {
        constructor:UpdateGoods,
        init:function(){
            this.box = $(".total");
            this.$empty = $(".empty-bigwrap");//无Cookie显示页面
            this.$hasGoods = $(".has-goodswrap");//有cookie显示页面
            this.judge();
            
        },
        judge:function(){
            if($.cookie("shoppingCar")){
                this.sCookie = $.cookie("shoppingCar");
                this.aCookie = JSON.parse(this.sCookie);
                console.log(this.aCookie)
                this.$empty.css({
                    display:"none"
                })
                this.$hasGoods.css({
                    display:"block"
                })
            }else{
                this.$empty.css({
                    display:"block"
                })
                this.$hasGoods.css({
                    display:"none"
                })
                return 0;
            }
            this.loadDoods();

            $(".delet-item").on("click",$.proxy(this.deletItem,this))


        },
        loadDoods:function(){
            for(var i = 0 ;i < this.aCookie.length;i++){
                var $img = this.aCookie[i].img;
                var $title = this.aCookie[i].txt;
                var $num = this.aCookie[i].num;
                var $price = this.aCookie[i].price;
                var $xiaoji = $num * $price;
                var item =  `<div class="form-body">
                                <div class="list-chex">
                                    <input type="checkbox" name="" id="" checked>
                                </div>
                                <div class="details">
                                    <ul>
                                        <li class="details-img">
                                            <a href="###">
                                                <img class="goods-imgleft" src="${$img}" alt="">
                                            </a>
                                        </li>
                                    </ul>
                                    <a class="details-name" href="###">${$title}</a>
                                </div>
                                <div class="Show-have">支持</div>
                                <div class="Unit-Price">
                                    <i class="item-price">￥${$price}</i>
                                </div>
                                <div class="number">
                                    <div class="number_input">
                                        <span class="prev">-</span>
                                        <input class="txt" type="text" value="${$num}">
                                        <span class="next">+</span>
                                    </div>
                                    <div class="only">有货</div>
                                </div>
                                <div class="Subtotal">
                                    <i>￥0</i>
                                </div>
                                <div class="Subtotal">
                                    <i>￥${$xiaoji}</i>
                                </div>
                                <div class="Operation">
                                    <em>移入收藏夹</em><br>
                                    <strong class="delet-item" id = "${i}">删除</strong>
                                </div>
                            </div>` 
                this.box.before(item)
            }
        },
        deletItem:function(e){
            var target = e.target
            // console.log(target)
            var $index = $(target).attr("id");
            console.log($index)

            var aCookie = this.aCookie.splice($index,1);
            var sCookie = JSON.stringify(aCookie);
            $.cookie("shoppingCar",sCookie)
        }



        
    }
    return new UpdateGoods()

})