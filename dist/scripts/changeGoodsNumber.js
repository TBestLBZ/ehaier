/* 商品数量增减及手动输入 */
define(["jquery"], function ($) {
    function NumChange(){
        this.init()
    }
    NumChange.prototype = {
        constructor:NumChange,
        init:function(){
            this.$add = $(".jia");
            this.$reduce = $(".jian");
            this.$show = $(".change-num");//输入框
            this.$add.on("click",$.proxy(this.add,this))
            this.$add.on("selectstart",function(){return false})
            this.$reduce.on("click",$.proxy(this.reduce,this))
            this.$reduce.on("selectstart",function(){return false});//阻止快速点击时选中文字情况
            this.$show.on("input",$.proxy(this.oninput,this))
        },
        add:function(){
            this.$showVal = parseInt(this.$show.val());//输入框中的值            
            var $count = this.$showVal + 1;
            this.$show.val($count)
        },
        reduce:function(){
            this.$showVal = parseInt(this.$show.val());//输入框中的值                        
            var $count = this.$showVal - 1;
            if(this.$showVal == 1){
                return 0;
            }
            this.$show.val($count)
        },
        oninput:function(){
            var $val = this.$show.val();//输入的值
            // console.log($val)
        }
    }
    return new NumChange()
})