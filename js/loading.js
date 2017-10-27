$.fn.extend({
    loading:function(options,callback) {
        var ops={
            imgs: [],
            timer:500
        }
        // var progress = document.getElementById('progress');
        var ops=$.extend(ops,options);
        var index = 0;
        for (var i = 0; i < ops.imgs.length; i++) {
        	var img = new Image();
        	img.onload = function(){
        		index++;
        		var s = parseInt((index/ops.imgs.length)*100) ;
                $(".progress").children().css("transition","0.1s");
        		$(".progress").find("p").css("backgroundPosition","0 -"+parseInt(195*(s/100))+"px");
        		$(".progress").children().eq(1).html(s + "%");
        		if (index==ops.imgs.length) {
        			setTimeout(function(){
        				callback();
        			},ops.timer)
        			
        		};
        	}
            img.src = ops.imgs[i];
        };
    }
}); 