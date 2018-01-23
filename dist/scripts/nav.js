/* 导航栏运动模块 */
define(["jquery"],function($){
    function Nav(){
        this.init()
    }
    Nav.prototype = {
        constructor:Nav,
        init:function(){
            this.$ul = $(".goods-list") //导航栏UL
            this.$li = this.$ul.children() //ul下的所有li
            this.$show = $(".show") //所有隐藏的模块
            
            this.$li.on("mouseenter",$.proxy(this.sccChangeOn,this))
            this.$li.on("mouseleave",$.proxy(this.sccChangeOff,this))
            this.$show.on("mouseenter",$.proxy(this.toShow,this))
            this.$show.on("mouseleave",$.proxy(this.toHide,this))
            
        },
        sccChangeOn:function(e){
            let target= e.target;
            //console.log(target);
            this.index = $(target).parent().index()  //获取li下标
            this.$width = $(".showpanel").eq(this.index).width() //获取显示板的宽度
            //console.log(this.index,this.$width)

             //li里的样式变化
            this.$li.css({
                background: "rgba(0,0,0,0)"
            }).find("a").css({
                color: "rgb(245,245,245)",                
            }).end().eq(this.index).css({
                background: "rgb(245,245,245)"                
            })
            $(target).css({
                color: "rgb(0,0,0)",                                
            })
            this.$li.eq(this.index).find("i").css({
                background:"url(../images/jiantou2.png) left top no-repeat"
            })
            
            if(this.index == 7){
                $(".goods-navmine").css({
                        width: 240 + 192
                    })
                $(".show").css({
                    width: 240
                }) 
                
            }else if(this.index == 8){
                $(".goods-navmine").css({
                    width: 192
                })
                $(".show").css({
                    width: 0
                }) 
            }else{
                $(".goods-navmine").css({
                    width: 447 + 192
                })
                $(".show").css({
                    width: 447
                })
            }

            this.$show.css({
                display:"block"
            })
            $(".showpanel").css({
                display:"none",
                //left:-this.$width
            })
            .eq(this.index).css({
                display:"block",
                left: -this.$width
            }).stop()
            .animate({
                left:0
            })
            //console.log(this.index,this.$width,$(".goods-navmine").width())
        },
        sccChangeOff:function(e){
            let target = e.target
            this.index = $(target).parent().index()
            //console.log(this.$width)

            //移除li样式变化
            this.$li.css({
                background: "rgba(0,0,0,0)"                
            })
            $(target).css({
                color: "rgb(245,245,245)",                
            })
            this.$li.eq(this.index).find("i").css({
                background:"url(../images/jiantou.png) left top no-repeat"
            })
            
            this.$show.css({
                display:"none"
            })

        },
        toShow:function(){
            //console.log(this.index)

            $(".show").eq(this.index).css({
                display:"block"
            })

            this.$li.css({
                background: "rgba(0,0,0,0)"
            }).eq(this.index).css({
                background: "rgb(245,245,245)"
            }).find("i").css({
                background:"url(../images/jiantou2.png) left top no-repeat"  
            }).end().find("a").css({
                color: "rgb(0,0,0)"                
            })
            // this.$li.eq(this.index).css({
            //     background: "rgb(245,245,245)"
            // })
            
        },
        toHide:function(){
            $(".goods-navmine").css({
                width: 192
            })
            this.$show.css({
                display:"none"
            })
            this.$li.css({
                background: "rgba(0,0,0,0)"
            }).find("i").css({
                background:"url(../images/jiantou.png) left top no-repeat"                
            }).end().find("a").css({
                color: "rgb(245,245,245)"            
            })
        },
  
    
    }
       


    return new Nav()
})
