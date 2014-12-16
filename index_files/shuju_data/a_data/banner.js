// JavaScript Document
$(function(){
	(function(){
		var curr = 0;
		var imglen = $(".focusbox li").length;
		$("#jsNav .trigger").each(function(i){
			$(this).click(function(){
				this.blur();
				curr = i;
				$(".focusbox li").eq(i).css("z-index","10").siblings("li").css("z-index","1");
				$(".focusbox li").eq(i).fadeIn(1500).siblings("li").fadeOut(1500);
				$(this).siblings(".trigger").removeClass("current").end().addClass("current");
				return false;
			});
		});
		
		var pg = function(flag){
			//flag:true表示前翻， false表示后翻
			if (flag) {
				if (curr == 0) {
					todo = (imglen-1);
				} else {
					todo = (curr - 1) % imglen;
				}
			} else {
				todo = (curr + 1) % imglen;
			}
			$("#jsNav .trigger").eq(todo).click();
		};
		
		//前翻
		$(".banPrev").click(function(){
			pg(true);
			return false;
		});
		
		//后翻
		$(".banNext").click(function(){
			pg(false);
			return false;
		});
		
		//自动翻
		var timer = setInterval(function(){
			todo = (curr + 1) % imglen;
			$("#jsNav .trigger").eq(todo).click();
		},6000);
		
		//鼠标悬停在触发器上时停止自动翻
		$("#jsNav a").hover(function(){
				clearInterval(timer);
			},
			function(){
				timer = setInterval(function(){
					todo = (curr + 1) % imglen;
					$("#jsNav .trigger").eq(todo).click();
				},6000);			
			}
		);
	})();
});