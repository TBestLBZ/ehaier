/* 注册表单验证模块同事存cookie*/
define(["jquery", "cookie"], function ($) {
    function Form() {
        this.init()
    }
    Form.prototype = {
        construcctor: Form,
        init: function () {
            this.flagPhone = false;
            this.flagYzm = false;
            this.flagSjyzm = false;
            this.flagPssword = false;
            this.flagRePssword = false;
            this.flag = true;

            this.$stepOne = $(".phone-user-step1");//第一步整体的box
            this.$stepTwo = $(".phone-user-step2");//第二步整体的box
            this.$end = $(".success");//完成注册

            this.$send = $(".send-btn");//发送验证码按钮
            this.$next = $(".next");//下一步按钮
            this.$finish = $(".passwordfinish");//完成按钮

            this.$phone = $(".phone-input");//手机号输入框
            this.$phonError = $(".phone-error");//手机号错误提示div

            this.$yzm = $(".yzm-input");//图片验证码输入框
            this.$yzmError = $(".yzm-error");//图片验证码错误提示div

            this.$sjyzm = $(".sjyzm-input");//手机验证码输入框
            this.$sjyzmError = $(".sjyzm-error");//手机验证码错误提示div            

            this.$passWord = $(".phone-password");//密码输入框
            this.$passWordError = $(".password-error");//密码输入框错误提示div

            this.$rePassWord = $(".phone-repassword");//确认密码输入框
            this.$rePassWordError = $(".repassword-error");//确认密码输入框错误提示div

            this.$phone.on("blur", $.proxy(this.phoneCheck, this));
            this.$yzm.on("blur", $.proxy(this.yzmCheck, this));
            this.$sjyzm.on("blur", $.proxy(this.sjyzmCheck, this));
            this.$send.on("click", $.proxy(this.sendNum, this));
            this.$next.on("click", $.proxy(this.nextStep, this))
            this.$passWord.on("blur", $.proxy(this.passWordCheck, this));
            this.$rePassWord.on("blur", $.proxy(this.rePassWordCheck, this));
            this.$finish.on("click", $.proxy(this.pushCookie, this));
        },
        phoneCheck: function () {
            var reg = /^1(3|5|8|7|4)\d{9}$/g;
            this.$num = this.$phone.val();
            if (reg.test(this.$num)) {
                this.$phonError.css({
                    display: "none"
                })
                this.flagPhone = true;
            } else {
                this.$phonError.css({
                    display: "inline-block"
                }).html("手机格式不正确！")
                this.flagPhone = false;
            }
            if (this.$num == "") {
                this.$phonError.css({
                    display: "inline-block"
                }).html("请输入手机号")
                this.flagPhone = false;
            }
        },
        yzmCheck: function () {
            var $yzm = "ggeg";//自己定义的固定验证码
            var $str = this.$yzm.val();
            if ($str == $yzm) {
                this.$yzmError.css({
                    display: "none"
                })
                this.flagYzm = true;
            } else {
                this.$yzmError.css({
                    display: "inline-block"
                }).html("验证码错误")
                this.flagYzm = false;
            }
            if ($str == "") {
                this.$yzmError.css({
                    display: "inline-block"
                }).html("验证码不能为空")
                this.$flagYzm = false;
            }
        },
        sjyzmCheck: function () {
            var str = "1234"
            var $str = this.$sjyzm.val();
            if ($str == str) {
                this.$sjyzmError.css({
                    display: "none"
                })
                this.flagSjyzm = true;
            } else {
                this.$sjyzmError.css({
                    display: "inline-block"
                }).html("请输入正确的手机验证码")
                this.flagSjyzm = false;
            }
            if ($str == "") {
                this.$sjyzmError.css({
                    display: "inline-block"
                }).html("手机验证码不能为空")
                this.flagSjyzm = false;
            }
        },
        // sendNum:function(){
        //     var str =1000 + Math.round(Math.random() * 8999)
        //     this.sjyzmCheck(str);
        //     alert(str)
        //     return false
        // }
        nextStep: function () {//下一步跳转设置密码
            //console.log(this.flagPhone, this.flagYzm, this.flagSjyzm)
            if (this.flagPhone && this.flagYzm && this.flagSjyzm) {
                this.$stepOne.css({
                    display: "none"
                })
                this.$stepTwo.css({
                    display: "block"
                })
                $(".step2 ").addClass("finished").removeClass("unfinished")
            }
        },
        passWordCheck: function () {
            var reg = /^[^/\\\*!<>\|\?]{6,20}$/g;
            this.$passWordStr = this.$passWord.val();
            if (reg.test(this.$passWordStr)) {
                this.$passWordError.css({
                    display: "none"
                })
                this.flagPssword = true;
            } else {
                this.$passWordError.css({
                    display: "inline-block"
                }).html("密码格式错误")
                this.flagPssword = false;
            }
            if (this.$passWordStr == "") {
                this.$passWordError.css({
                    display: "inline-block"
                }).html("密码不能为空")
                this.flagPssword = false;
            }
        },
        rePassWordCheck: function () {
            var $rePassWord = $(".phone-repassword").val();
            if ($rePassWord == "") {
                this.$rePassWordError.css({
                    display: "inline-block"
                }).html("密码不能为空")
                this.flagRePssword = false;
            }
            if ($rePassWord == this.$passWordStr) {
                this.$rePassWordError.css({
                    display: "none"
                })
                this.flagRePssword = true;
            } else if ($rePassWord != this.$passWordStr && $rePassWord != "") {
                this.$rePassWordError.css({
                    display: "inline-block"
                }).html("密码不一致")
                this.flagRePssword = false;
            }
        },
        finish: function () {
            if (this.flagPssword && this.flagRePssword && this.flag) {
                this.$stepTwo.css({
                    display: "none"
                })
                this.$end.css({
                    display: "block"
                })
                $(".step3").addClass("finished").removeClass("unfinished");
                // $.cookie("user", this.$num, { expires: 7, path: '/' });//把注册的手机号存入cookie
                // $.cookie("password", this.$passWordStr, { expires: 7, path: '/' });//把登录密码存入cookie
            }
        },
        pushCookie:function(){
            if($.cookie("user")){
                var sCookie = $.cookie("user");
                var aCookie = JSON.parse(sCookie);
                var _this = this
                
                aCookie.forEach(function(item){
                    if(item.name == _this.$num){
                        _this.flag = false
                        alert("用户已经存在")
                        return 0;
                    }
                    if(this.flag){
                        var item = {
                            "name":_this.$num,
                            "password":_this.$passWordStr
                        }
                        aCookie.push(item);
                    }
                    sCookie = JSON.stringify(aCookie);
                    $.cookie("user",sCookie)
                })
                //console.log(aCookie)
            }else{
                $.cookie("user",'[{"name":"' + this.$num + '","password":"'+ this.$passWordStr +'"}]',{ expires: 7, path: "/" })
            }
            this.finish()
        }
    }
    return new Form()
})