/* 更新购物车页面商品信息（数量增加减少 删除商品 全选  单个商品操作） */
define(["jquery", "cookie"], function ($) {
    function UpdateGoods(){
        this.init();
    }
    UpdateGoods.prototype = {
        constructor:UpdateGoods,
        init:function(){
            this.box = $(".total");//动态加载的商品加到它之前
            this.$empty = $(".empty-bigwrap");//无Cookie显示页面
            this.$hasGoods = $(".has-goodswrap");//有cookie显示页面
            this.judge();
        },
        judge:function(){//判断显示空白页还是有商品的页面
            if($.cookie("shoppingCar")){//是否存在cookie
                this.sCookie = $.cookie("shoppingCar");
                this.aCookie = JSON.parse(this.sCookie);
                if(this.aCookie.length == 0){//当删除商品后商品为0个时
                    this.$empty.css({
                        display:"block"
                    })
                    this.$hasGoods.css({
                        display:"none"
                    })
                    return 0;
                }
                this.$empty.css({
                    display:"none"
                })
                this.$hasGoods.css({
                    display:"block"
                })
            }else{//不存在cookie时
                this.$empty.css({
                    display:"block"
                })
                this.$hasGoods.css({
                    display:"none"
                })
                return 0;
            }
            this.loadDoods();
            this.sum();
            $(".delet-item").on("click",$.proxy(this.deletItem,this));
            $(".allselect").on("click",$.proxy(this.allChange,this))
            $(".next").on("click",this.changeCountAdd)
            $(".prev").on("click",this.changeCountReduce)
            $(".itemCheck").on("click",this.itemChange)
        },
        loadDoods:function(){//动态加载商品
            for(var i = 0 ;i < this.aCookie.length;i++){
                var $img = this.aCookie[i].img;
                var $title = this.aCookie[i].txt;
                var $num = this.aCookie[i].num;
                var $price = this.aCookie[i].price;
                var $xiaoji = $num * $price;
                var item =  `<div class="form-body" id="${i}">
                                <div class="list-chex">
                                    <input class="itemCheck" type="checkbox" name="" id="${i}" checked>
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
                                        <span class="prev" id="${i}" >-</span>
                                        <input class="txt" id="${i}" type="text" value="${$num}">
                                        <span class="next" id="${i}">+</span>
                                    </div>
                                    <div class="only">有货</div>
                                </div>
                                <div class="Subtotal">
                                    <i>￥0</i>
                                </div>
                                <div class="Subtotal xiaoji">
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
        deletItem:function(e){//商品删除
            var target = e.target
            var $index = $(target).attr("id");
            //console.log($index)
            this.aCookie.splice($index,1);
            var sCookie = JSON.stringify(this.aCookie);
            $.cookie("shoppingCar",sCookie)
            location.reload();//重新加载页面获取cookie信息
        },
        allChange:function(){//全选按钮
            if( $(".allselect").prop("checked")){
                $(".allselect").prop("checked",true)
                $(".itemCheck").prop("checked",true)
                $(".form-body").css({
                    background:"#eaf9ff"
                })
                this.sum()
            }else{
                $(".allselect").prop("checked",false)
                $(".itemCheck").prop("checked",false)
                $(".form-body").css({
                    background:"#fff"
                })
                $(".count").html(0)
                $(".sum").html("￥"+0)    
            }
        },
        sum:function(){//页面加载后计算总价与数量
            var reg = /[1-9]\d*\.?\d*/g;
            var arrPrice = $(".xiaoji i");
            var arrCount = $(".txt")
            var sum = 0
            var count = 0
            for(var i = 0; i < arrPrice.length ; i++){
                var sPrice = $(arrPrice[i]).html().match(reg);
                var sCount = $(arrCount[i]).val()
                var nPrice = parseInt(sPrice)
                var nCount = parseInt(sCount)
                count += nCount
                sum += nPrice
            }
            $(".count").html(count)
            $(".sum").html("￥"+sum)
        },
        changeCountAdd:function(){//商品数量增加
            var sCookie = $.cookie("shoppingCar");
            var aCookie= JSON.parse(sCookie)
            var $id = $(this).attr("id");
            var $sNum = aCookie[$id].num;//得到cookie原存有的商品数
            var $sCount = $(".txt[id="+$id+"]").val();//得到对应的input框里的字符串值
            var $nCount = parseInt($sCount)
            $nCount += 1;
            $nowNum = $nCount;
            aCookie[$id].num = $nowNum
            var item = JSON.stringify(aCookie)
            $.cookie("shoppingCar",item)
            $(".txt[id="+$id+"]").val($nCount)

            var reg = /[1-9]\d*\.?\d*/g;
            var $sUnitPrice = $(".form-body[id="+$id+"] .item-price").html();
            var $nUnitPrice = parseInt($sUnitPrice.match(reg)[0])
            var $xiaoji = $nCount * $nUnitPrice
            $(".form-body[id="+$id+"] .xiaoji i").html("￥"+$xiaoji)

            var arrPrice = $(".xiaoji i");
            var arrCount = $(".txt")
            var count = 0            
            var sum = 0
            for(var i = 0 ; i < arrPrice.length ; i ++){
                var sPrice = $(arrPrice[i]).html().match(reg);
                var sCount = $(arrCount[i]).val()
                var nPrice = parseInt(sPrice)
                var nCount = parseInt(sCount)
                count += nCount
                sum += nPrice
            }
            $(".sum").html("￥"+sum)
            $(".count").html(count)
        },
        changeCountReduce:function(){//商品数量减少
            var sCookie = $.cookie("shoppingCar");
            var aCookie= JSON.parse(sCookie)
            var $id = $(this).attr("id");
            var $sNum = aCookie[$id].num;//得到cookie原存有的商品数            
            var $sCount = $(".txt[id="+$id+"]").val();//得到对应的input框里的字符串值
            var $nCount = parseInt($sCount)
            if($nCount > 1){
                $nCount -= 1
                $nowNum = $nCount;                
                aCookie[$id].num = $nowNum
                var item = JSON.stringify(aCookie)
                $.cookie("shoppingCar",item)                
                $(".txt[id="+$id+"]").val($nCount)
            }else{
                return 0;
            }

            var reg = /[1-9]\d*\.?\d*/g;
            var $sUnitPrice = $(".form-body[id="+$id+"] .item-price").html();
            var $nUnitPrice = parseInt($sUnitPrice.match(reg)[0])
            var $xiaoji = $nCount * $nUnitPrice
            $(".form-body[id="+$id+"] .xiaoji i").html("￥"+$xiaoji)
            var arrPrice = $(".xiaoji i");
            var arrCount = $(".txt")
            var count = 0            
            var sum = 0
            for(var i = 0 ; i < arrPrice.length ; i ++){
                var sPrice = $(arrPrice[i]).html().match(reg);
                var sCount = $(arrCount[i]).val()
                var nPrice = parseInt(sPrice)
                var nCount = parseInt(sCount)
                count += nCount
                sum += nPrice
            }
            $(".sum").html("￥"+sum)
            $(".count").html(count)
        },
        itemChange:function(){//取消某件商品
            var index = $(this).attr("id")
            var $xiaoji = $(".form-body[id="+index+"] .xiaoji i").html()
            var reg = /[0-9]\d*\.?\d*/g;
            var $nXiaoji = parseInt($xiaoji.match(reg)[0])
            var $count = $(".form-body[id="+index+"] .txt").val()
            var $nCount = parseInt($count)
            var $allSum = $(".sum").html()
            var $nAllSum = parseInt($allSum.match(reg)[0])
            var $allCount = parseInt($(".count").html())
            if( $(".itemCheck[id="+index+"]").prop("checked")){
                $(".itemCheck[id="+index+"]").prop("checked",true)
                $(".form-body[id="+index+"]").css({
                    background:"#eaf9ff"
                })
                var $reduceThenPrice = $nAllSum + $nXiaoji
                var $reducThenCount = $allCount + $nCount
                $(".count").html($reducThenCount)
                $(".sum").html("￥"+$reduceThenPrice)

            }else{
                $(".itemCheck[id="+index+"]").prop("checked",false)
                $(".form-body[id="+index+"]").css({
                background:"#fff"
                })
                var $reduceThenPrice = $nAllSum - $nXiaoji
                var $reducThenCount = $allCount - $nCount
                $(".count").html($reducThenCount)
                $(".sum").html("￥"+$reduceThenPrice)
            }
        }

    }
    return new UpdateGoods()
})