/* 检查用户登录 将头部登录改成已登录用户名 */
define(["jquery", "cookie"], function ($) {
    function CheckUser(){
        this.init();
    }
    CheckUser.prototype = {
        constructor:CheckUser,
        init:function(){
            this.$li = $(".bar-links").children().eq(0);
            this.$rightUser = $(".user-hd");
            this.$hideBtn = $(".sign-wrap");
            this.$rightbox = $(".main-login");
            this.append();
        },
        append:function(){
            if($.cookie("user-now") && $.cookie("user-now") != "null"){
                this.$li.html(
                    "欢迎您"+
                    "<span class="+"user-now"+">"+$.cookie("user-now")+"</span>"+
                    "  ,    "+
                    "<a class="+'"tuichu"'+"href="+"#"+">退出</a>"
                )
                this.$hideBtn.css({
                    display:"none"
                })
                this.$rightUser.html(
                    "您好，"+$.cookie("user-now")
                )
                var $rank = "<p class="+'rank'+">普通用户</p>"
                this.$rightbox.append($rank)
            }
            var $out = $(".tuichu");
            $out.on("click",$.proxy(this.signOut,this))
        },
        signOut:function(){
            window.location.reload();
            $.cookie("user-now",null)
        }
    }






    return new CheckUser()
})