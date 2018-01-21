/* 表单验证模块 */
define(["jquery"],function($){
    function Form(){
        this.init()
    }
    Form.prototype = {
        construcctor:Form,
        init:function(){
            this.flagPhone = false;
            this.flagYzm = false;
            this.flagSjyzm = false;

            this.$send = $(".send-btn");//发送验证码模块

            this.$phone = $(".phone-input");//手机号输入框
            this.$phonError = $(".phone-error");//手机号错误提示div

            this.$yzm = $(".yzm-input");//图片验证码输入框
            this.$yzmError = $(".yzm-error");//图片验证码错误提示div

            this.$sjyzm = $(".sjyzm-input");//手机验证码输入框

            this.$phone.on("blur",$.proxy(this.phoneCheck,this));
            this.$yzm.on("blur",$.proxy(this.yzmCheck,this));
            this.$sjyzm.on("blur",$.proxy(this.sjyzmCheck,this));
            this.$send.on("click",$.proxy(this.sendNum,this));
        },
        phoneCheck:function(){
            var reg = /^1(3|5|8|7|4)\d{9}$/g;
            var $num = this.$phone.val();
            if(reg.test($num)){
                this.$phonError.css({
                    display:"none"
                })
                this.flagPhone = true;
            }else{
                this.$phonError.css({
                    display:"inline-block"
                }).html("手机格式不正确！")
                this.flagPhone = false;
            }
            if($num == ""){
                this.$phonError.css({
                    display:"inline-block"
                }).html("请输入手机号")
                this.flagPhone = false;
            }
        },
        yzmCheck:function(){
            var $yzm = "ggeg";//自己定义的固定验证码
            var $str = this.$yzm.val();
            if($str == $yzm){
                this.$yzmError.css({
                    display:"none"
                })
                this.$flagYzm = true;
            }else{
                this.$yzmError.css({
                    display:"inline-block"
                }).html("验证码错误")
                this.$flagYzm = false;
            }
            if($str == ""){
                this.$yzmError.css({
                    display:"inline-block"
                }).html("验证码不能为空")
                this.$flagYzm = false;
            } 
        },
        sjyzmCheck:function(str){
            var $str = this.$sjyzm.val(); 
            if($str == str){
                this.flagSjyzm = true;
            }else{
                this.flagSjyzm = false;
            }
        },
        sendNum:function(){
            var str =1000 + Math.round(Math.random() * 8999)
            alert(str)
            this.sjyzmCheck(str);
        }

    }


    return new Form()
})