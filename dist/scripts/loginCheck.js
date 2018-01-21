/* 登录验证 */
define(["jquery", "cookie"], function ($) {
    function LoginCheck(){
        
    }
    LoginCheck.prototype = {
        constructor:location,
        init:function(){
            this.$login = $(".btn-box a");//登录按钮

            this.nameTxt = $(".name-txt");
            this.passwordTxt = $(".password-txt");

            this.$name = $(".user-name");//用户名输入框
            this.$nameError = $(".username-error");//用户名错误提示

            this.$passWord = $(".user-password");//密码输入框
            this.$passWordError = $(".userpassword-error");//密码错误提示

            this.$name.on("blur",$.proxy(this.nameCheck,this))
            this.$name.on("click",$.proxy(this.changeNameTxt,this))
            this.nameTxt.on("click",$.proxy(this.changeNameTxt,this))
            this.$passWord.on("blur",$.proxy(this.passworkCheck,this))
            this.$passWord.on("click",$.proxy(this.changePasswordTxt,this))
            this.passwordTxt.on("click",$.proxy(this.changePasswordTxt,this))
            this.$login.on("click",$.proxy(this.cookieCheck,this))
        },
        nameCheck:function(){
            this.$nameStr = this.$name.val();
            if(this.$nameStr == ""){
                this.$nameError.html("请输入登录名")
                this.nameTxt.css({
                    display:"block"
                })
            }else{
                this.$nameError.html("&nbsp;")
            }   
        },
        changeNameTxt:function(){
            this.nameTxt.css({
                display:"none"
            })
            this.$name.focus()
        },
        passworkCheck:function(){
            this.$passWordStr = this.$passWord.val();
            if(this.$passWordStr.length < 6){
                this.$passWordError.html("密码不能少于6位")
            }else{
                this.$passWordError.html("&nbsp;")
            }
            if(this.$passWordStr == ""){
                this.passwordTxt.css({
                    display:"block"
                })
            }
        },
        changePasswordTxt:function(){
            this.passwordTxt.css({
                display:"none"
            })
            this.$passWord.focus()
        },
        cookieCheck:function(){
            
            var sCookie = $.cookie("user");
            var aCookie = JSON.parse(sCookie);
            //console.log(sCookie)
            var _this = this
            aCookie.forEach(function(item){
                if(item.name == _this.$nameStr){
                    if(item.password == _this.$passWordStr){
                        window.location.href = "http://localhost:8888/index.html";
                    }else{
                        _this.$passWordError.html("密码错误")
                    }
                }else{
                    _this.$nameError.html("用户名不存在")
                }
            })
        }
    }
    return new LoginCheck()
})