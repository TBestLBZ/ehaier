//弹出按钮模块

define(["jquery"], function ($) {
    function Pop() {

    }
    Pop.prototype = {
        constructou: Pop,
        init: function (string_ele) {
            this.createMask()
            this.createEle(string_ele)
        },
        createMask: function () {
            var $div = $("<div></div>")
            $("body", "html").css({
                height: "100%"
            })
            $div.css({
                height: "100%",
                width: "100%",
                position: "fixed",
                left: 0,
                top: 0,
                background: "rgba(0,0,0,.3)",
                zIndex: "9000"
            })
            $("body").append($div)
            this.mask = $div
        },
        createEle: function (string_ele) {
            var $ele = $(string_ele)

            $ele.css({
                width: "360px",
                visibility: "visible",
                position: "fixed",
                top: "50%",
                left: "50%",
                marginTop: "-74px",
                marginLeft: "-180px",
                zIndex: 9000,
                display: "block"
            })
            $("body").append($ele);

            var _this = this
            $(".guanbi").on("click", function () {
                $ele.remove()
                _this.mask.remove()
            })
            $(".popbtn").on("click",function(){
                $ele.remove()
                _this.mask.remove()
            })
        }
    }
return new Pop()
});