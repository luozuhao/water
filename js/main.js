    var w = $(window).width();
    var h = $(window).height();
    var New_FontSize =  w * 16/320;
    var New_FontSizeL = w * 28/320;
    var New_Lineheght = w * 17/320+"px"; 
    var index=0;
    var swiper ;
    var NAME = ["吕绍聪","佟罗实","邵明明","袁雨萱","宋妍霏","邢菲","左溢","赵顺然","史文翔","葛洧吟","程星源","高旻睿","万国鹏","张予曦"]; 
	if (w/h>0.6666) {
		$(".index").width($(window).height()*0.66667);
	};
	$(window).on("resize",function  () {
		var w = $(window).width();
		var h = $(window).height();
		if (w/h>0.6666) {
			$(".index").width($(window).height()*0.66667);
		};
	})
  if (w/h>0.6666) {
    $(".share").width($(window).height()*0.66667);
  };
  $(window).on("resize",function  () {
    var w = $(window).width();
    var h = $(window).height();
    if (w/h>0.6666) {
      $(".share").width($(window).height()*0.66667);
    };
  })
	if (w/h>0.6666) {
		$(".header").width($(window).height()*0.66667);
	};

	$(window).on("resize",function  () {
		var w = $(window).width();
		var h = $(window).height();
		if (w/h>0.6666) {
			$(".header").width($(window).height()*0.66667);
		};
	})
	if (w/h>0.56338) {
		$(".ren").width($(window).height()*0.532394);
	};
	$(window).on("resize",function  () {
		var w = $(window).width();
		var h = $(window).height();
		if (w/h>0.56338) {
			$(".ren").width($(window).height()*0.532394);
		};
	})
    if (w/h>0.56338) {
        $(".swiper-container").width($(window).height()*0.56338*0.8);

    };
    $(window).on("resize",function  () {
        var w = $(window).width();
        var h = $(window).height();
        if (w/h>0.56338) {
           $(".swiper-container").width($(window).height()*0.56338*0.8);
        };
    })
      $(".btn_one").click(function(){
        
        str = "img/game/peo"+index+"_head.png";
        str1 = "img/game/peo"+index+"_body.png";
        
        $(".header").hide();
        $("#loading").show();
         
          var aImg = ["img/game/product.png","img/index/index_logo.png","img/index/bg.jpg","img/game/biao01.png","img/game/biao02.png","img/game/chat1.png","img/game/chat2.png","img/game/chat3.png","img/game/product.gif",str,str1,"img/game/biao51.png","img/game/biao52.png","img/game/biao101.png","img/game/biao102.png","img/game/biao151.png","img/game/biao152.png"];

        $("#wrap").loading({
            imgs:aImg
        },function() {
            $(".game img").each(function(){
                var index = $(this).attr("data-src");
                $(this).attr("src",index); 

            })
            setTimeout(function(){
            $("#loading").hide();
            $("#loading p").css("backgroudPosition","0 0px");     
            $(".game_all .head").attr("src",str);
            $(".game_all .body").attr("src",str1);
            $(".game").show();
        },500)
        })
        return
      })
      $(".btn").click(function(){
         $("#loading").show();
         $(".index").hide();
         var aImg = ["img/index/index_logo.png","img/index/bg.jpg","img/choice/s_body01.PNG","img/choice/s_body02.PNG","img/choice/s_body03.PNG","img/choice/s_body04.PNG","img/choice/s_body05.PNG","img/choice/s_body06.PNG","img/choice/s_body07.PNG","img/choice/s_body08.PNG","img/choice/s_body09.PNG","img/choice/s_body10.PNG","img/choice/s_body11.PNG","img/choice/s_body12.png","img/choice/s_body13.PNG","img/choice/s_body14.PNG","img/choice/s_e01.PNG","img/choice/s_e02.PNG","img/choice/s_e03.PNG","img/choice/s_e04.PNG","img/choice/s_e05.PNG","img/choice/s_e06.PNG","img/choice/s_e07.PNG","img/choice/s_e08.PNG","img/choice/s_e09.PNG","img/choice/s_e10.PNG","img/choice/s_e11.PNG","img/choice/s_e12.PNG","img/choice/s_e13.PNG","img/choice/s_e14.PNG","img/choice/s_text01.PNG","img/choice/s_text02.PNG","img/choice/s_text03.PNG","img/choice/s_text04.PNG","img/choice/s_text05.PNG","img/choice/s_text06.PNG","img/choice/s_text07.PNG","img/choice/s_text08.PNG","img/choice/s_text09.PNG","img/choice/s_text10.PNG","img/choice/s_text11.PNG","img/choice/s_text12.PNG","img/choice/s_text13.PNG","img/choice/s_text14.PNG","img/choice/s_water01.PNG","img/choice/s_water02.PNG","img/choice/s_water03.PNG","img/choice/s_water04.PNG","img/choice/s_water05.PNG","img/choice/s_water06.PNG","img/choice/s_water07.PNG","img/choice/s_water08.PNG","img/choice/s_water09.PNG","img/choice/s_water10.PNG","img/choice/s_water11.PNG","img/choice/s_water12.PNG","img/choice/s_water13.PNG","img/choice/s_water14.PNG","img/choice/s_tab.PNG","img/choice/s_tab_l.PNG","img/choice/s_tab_r.PNG"];
         $("#wrap").loading({
            imgs:aImg
         },function() {
            $(".header img").each(function(){
                var index = $(this).attr("data-src");
                $(this).attr("src",index); 
            })
            setTimeout(function(){
            $("#loading").hide(); 
            $("#loading p").css("backgroudPosition","0 0px");    
            $(".header").show(); 
            swiper = new Swiper('.swiper-container', {
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,

                onInit: function(swiper){ 
                    swiperAnimateCache(swiper); 
                    swiperAnimate(swiper); 
                  },                 
                onSlideChangeEnd: function(swiper){
                    swiperAnimate(swiper);
                    index = swiper.activeIndex -1;
            
                    if (index==0) { swiperAnimate(swiper); };
                    if (index>13) {
                        index=0;
                    }
                    if (index<0) {
                        index=13;
                    }; 

                    if (index==0 ){
                     $(".swiper-wrapper").find("#data-a .s_a").show();
                     $(".swiper-wrapper").find("#data-a .s_b").show();
                     $(".swiper-wrapper").find("#data-a .s_c").show();
                     $(".swiper-wrapper").find("#data-a .s_d").show();
                     $(".swiper-wrapper").find("#data-a .s_a").addClass("animated bounceInRight");
                     $(".swiper-wrapper").find("#data-a .s_b").addClass("animated bounceIn");
                     $(".swiper-wrapper").find("#data-a .s_c").addClass("animated bounceInUp");
                     $(".swiper-wrapper").find("#data-a .s_d").addClass("animated bounceInLeft");
                     }
                     if (index>0) {
                     $(".swiper-wrapper").find("#data-a .s_a").hide();
                     $(".swiper-wrapper").find("#data-a .s_b").hide();
                     $(".swiper-wrapper").find("#data-a .s_c").hide();
                     $(".swiper-wrapper").find("#data-a .s_d").hide();
                     $(".swiper-wrapper").find("#data-a .s_a").removeClass("animated bounceInRight");
                     $(".swiper-wrapper").find("#data-a .s_b").removeClass("animated bounceIn");
                     $(".swiper-wrapper").find("#data-a .s_c").removeClass("animated bounceInUp");
                     $(".swiper-wrapper").find("#data-a .s_d").removeClass("animated bounceInLeft");
                     };   

                 }
                  
            })
              
        },500)    

       })
      })
      var aImg = ["img/index/index_logo.png","img/index/bg.jpg","img/index/duihua.png","img/index/in_01.png","img/index/in_bg01.png","img/index/index_logo.png","img/index/people_01.png","img/index/people_02.png","img/index/people_03.png","img/index/people_04.png","img/index/people_05.png","img/index/shouze.png","img/index/start.png"];

      window.onload = function(){
        $("#wrap").loading({
            imgs:aImg
        },function() {
            $(".index img").each(function(){
                var index = $(this).attr("data-src");
                $(this).attr("src",index); 
            })
            setTimeout(function(){
            $("#loading").hide(); 
            $("#loading p").css("backgroudPosition","0 0px");  
            $(".index").show();
            
        },500)
        })
      }
     var bol = false;
     var timebol = false;
     var _index=0;
     $(".head").on("touchstart",function(){
        _index++;
        $(".game_all .huapin").hide();
        if (timebol==false) {
            timebol = true;
            timeFn ();
            $(".foot").find(".foot_left").attr({src:"img/game/product.gif"});
        }; 
        if(bol==false){
        var timer = setInterval(function(){
        $(".head").css("webkitTransform","rotate(0deg)")
        clearInterval(timer)  
        },300) 
        $(".head").css("webkitTransform","rotate(5deg)");        
        bol=true;
        }else{
        var timer = setInterval(function(){
        $(".head").css("webkitTransform","rotate(0deg)")
        clearInterval(timer)  
        },300) 
        $(".head").css("webkitTransform","rotate(-5deg)");
        bol=false;
      };
      })
    function timeFn () {
            var $nums = 20;
            var $time = $(".time");
            var $second = $(".time_second");
            var $timer = setInterval(
                function(){
                    $nums-=0.02;
                    var $thetime = $nums.toFixed(2);
                    var $timearr = $thetime.toString().split(".");
                  if($nums<10){
                        if($nums.toFixed(2) == 0.00){
                            $time.text(0);
                            $second.text("00");
                            clearInterval($timer);
                            $(".game").hide();
                            $(".result").show();
                         
                            renwuFn ()
                            scoreFn () 
                            $("#xingming").text(NAME[index]);
                            timebol = false;
                            $(".game").hide();
                            $(".game_chat .three").hide();
                            $(".toufa").children().eq(6).hide();
                            $(".toufa").children().eq(7).hide(); 
                    }
                        $time.text("0"+$timearr[0]);
                        $second.text($timearr[1]);
                    if($nums.toFixed(2) == 5.00){
                        $(".game_chat .two").hide();
                        $(".game_chat .three").show();
                        $(".toufa").children().eq(4).hide();
                        $(".toufa").children().eq(5).hide(); 
                        $(".toufa").children().eq(6).show();
                        $(".toufa").children().eq(7).show();     
                    }
                    }else if($nums<20){
                        if($nums.toFixed(2) == 10.00){
                        $(".game_chat .one").hide();
                        $(".game_chat .two").show();
                        $(".toufa").children().eq(2).hide();
                        $(".toufa").children().eq(3).hide(); 
                        $(".toufa").children().eq(4).show();
                        $(".toufa").children().eq(5).show();     
                    }
                    if($nums.toFixed(2) == 15.00){
                        $(".game_chat .one").show(); 
                        $(".toufa").children().eq(0).hide();
                        $(".toufa").children().eq(1).hide(); 
                        $(".toufa").children().eq(2).show();
                        $(".toufa").children().eq(3).show();     
                    }
                        $time.text($timearr[0]);
                        $second.text($timearr[1]);
                    }
                },20)
         }
    
    var currentFontSize = $("body").css("font-size"); 
    var currentFontSizeNumber = parseFloat(currentFontSize); 
    var newFontSize =  w * currentFontSizeNumber/210;   
    if (w>210) {
        $(".name p").css("font-size", newFontSize);
    };
    $(window).on("resize",function  () {
        var currentFontSize = $("body").css("font-size"); 
        var currentFontSizeNumber = parseFloat(currentFontSize); 
        var w = $(window).width();
        var newFontSize =  w*currentFontSizeNumber/210; 
        if (w>210) {
            $(".name p").css("font-size", newFontSize);
        };
    })
    var new_FontSize =  w * 20/320;   
      if (w>320) {
        $(".lotteryn_phone .phone").css("font-size", new_FontSize);
    };
    if (w>640) {
        $(".lotteryn_phone .phone").css("font-size", 36);
    };
    $(window).on("resize",function  () {
        var w = $(window).width();
         var new_FontSize =  w * 20/320;   
      if (w>320) {
        $(".lotteryn_phone .phone").css("font-size", new_FontSize);
    };
    if (w>640) {
        $(".lotteryn_phone .phone").css("font-size", 36);
    };
    })


     function scoreFn () {
        var arr = [];
        var Img = [];
        var i = 0;
        while(_index>0){
            arr[i] = _index%10;
            _index = parseInt(_index/10);
            i++;
        }
        for (var i = 0; i <= arr.length-1; i++) {
            Img[i] = "img/game/"+arr[i]+".png";
        }
        for (var i = Img.length-1; i >=0 ; i--) {
            var img = document.createElement('img');
            img.src = Img[i];
            $(".result_score").append(img);
        };
   }

  function renwuFn () {
      if (_index<=60) {
         $(".result_con").children().eq(0).attr("src","img/game/rt_11.png");
         $(".result_con").children().eq(1).attr("src","img/game/rt_12.png");
         $(".result_con").children().eq(2).attr("src","img/game/r_1.png");
     }
     else if (60<_index<=120) {
         $(".result_con").children().eq(0).attr("src","img/game/rt_21.png");
         $(".result_con").children().eq(1).attr("src","img/game/rt_22.png");
         $(".result_con").children().eq(2).width("28%");
         $(".result_con").children().eq(2).attr("src","img/game/r_2.png");
      }
      if (_index>120) {
         $(".result_con").children().eq(0).attr("src","img/game/rt_31.png");
         $(".result_con").children().eq(1).attr("src","img/game/rt_32.png");
         $(".result_con").children().eq(2).width("28%");
         $(".result_con").children().eq(2).attr("src","img/game/r_3.png");
      }
  }
  function checkPhone(mobile) {
    if ( /^13\d{9}$/g.test(mobile) || /^14\d{9}$/g.test(mobile) || /^15\d{9}$/g.test(mobile) || /^17\d{9}$/g.test(mobile) || /^18\d{9}$/g.test(mobile)){
         return true;
        }else{
         return false;
     }
    } 
  $(".refer").children().eq(0).on("touchstart",function(){
     var mobile = $(".lotteryn_phone .phone").val();
  if (checkPhone(mobile)) {
     $(".lotteryn").hide();
     $(".share").show();
  }else{
    alert("请输入正确的手机号码")
  }
})

      if (w>320) {
        $(".rule_two").children().eq(3).css("font-size", New_FontSize);
        $(".rule_two").children().eq(2).css("font-size", New_FontSizeL);
        $(".rule_two ").children().eq(3).css("line-height", New_Lineheght);
    }
     if (w>640) {
         $(".rule_two").children().eq(3).css("font-size", 32);
          $(".name p").css("font-size",65);
          $(".foot p").css("font-size",48);
        $(".rule_two ").children().eq(3).css("line-height", 34+"px");

    };
    $(window).on("resize",function  () {
        var w = $(window).width();
        var New_FontSize =  w * 16/320;
        var New_FontSizeL =  w * 28/320;
        var New_Lineheght =  w * 17/320+"px"; 
      if (w>320) {
        $(".rule_two").children().eq(2).css("font-size", New_FontSizeL);
        $(".rule_two").children().eq(3).css("font-size", New_FontSize);
        $(".rule_two").children().eq(3).css("line-height", New_Lineheght);
    };
    if (w>640) {
         $(".rule_two").children().eq(3).css("font-size", 32);
         $(".name p").css("font-size",65);
         $(".foot p").css("font-size",48);
        $(".rule_two ").children().eq(3).css("line-height", 34+"px");
    }
    })

    $(".shouze").on("touchstart",function(){
        $(".index").hide();
        $(".rule").show();
      
    })
    $(".rule").children().eq(1).on("touchstart",function(){
        $(".rule").hide();
        $(".index").show();
    })
    $(".lotteryn").find("a").on("touchstart",function(){
        $(".lotteryn").hide();
        $(".rule_two").show();
    })
    $(".rule_two").children().eq(1).on("touchstart",function(){
        $(".rule_two").hide();
        $(".lotteryn").show();
    })
    $(".result_btn img").on("touchstart",function(){
        $(".result").hide();
        $(".lotteryn").show();
    })