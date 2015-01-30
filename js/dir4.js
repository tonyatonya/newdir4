$(function(){
	var wH = $(window).height();
	$("#body").css({
		'min-height': wH
	})
	
	function ready(player_id) {
	    var froogaloop = $f(player_id);
	    froogaloop.addEvent('play');
	    froogaloop.addEvent('pause');
	}
	/********************************************/
	/* 				all page event				*/
	/********************************************/
		
		//check page condition
			
		$(".company-nav-tab").mouseenter(function(){
			$("body").addClass("openMenu");
		})
		$(".topool a").click(function(){
			$("body").addClass("openMenu");
		})
		$(".company-nav").mouseleave(function(){
			setTimeout(function(){
				$("body").removeClass("openMenu");
			},100);
		})
		$(".videolist .pagesection.video .swap-box").click(function(){
			var getUrl = $(this).attr("data-src");
			var mytarget = $(this).parent().parent().parent();
			var oldUrl = $("body .pagesection.video.active");
			setTimeout(function(){
				oldUrl.find("iframe").removeAttr("src");
				oldUrl.removeClass("active");
				mytarget.find("iframe").attr("src",getUrl);
				mytarget.addClass("active");
			},1000);
		})
		$(".videolist .pagesection .bottomcontent").click(function(){
			var mytarget = $(this).parent();
			setTimeout(function(){
				mytarget.find("iframe").removeAttr("src");
				mytarget.removeClass("active");
			},1000);
		})	
		$(".tv-child .vintagebtn").click(function(e){
			var getUrl = $(this).attr('data-src');
			console.log("getUrl = ",getUrl);
			var mytarget = $(this).parent().parent().parent().parent().parent().parent().parent();
			var oldtarget = $("#tv-list .tv-child.active");
			console.log("mytarget = ",mytarget);
			mytarget.find("iframe").attr("src",getUrl);
			setTimeout(function(){
				oldtarget.removeClass("active");
				oldtarget.find("iframe").removeAttr("src");
				mytarget.addClass("active");
			},1000);
			
			e.preventDefault();
		})
		
		
		//home-news readmore
		$(".home-news a.readmore").click(function(e){
			$(this).parent().parent().parent().parent().addClass("active");
			var newscontent = $(this).parent().parent().parent().parent().find(".bottomcontent");
			newscontent.slideDown();
			e.preventDefault();
		})
		$(".home-news .close").click(function(){
			$(this).parent().slideUp();
		})
		
		
		//shownewspage	
		/*		
		$("body.shownewspage .pagesection").css({
			'min-height' : wH
		})
		*/
				
		//contact page new
		$(".contact-info-list .toppagebar").click(function(){
			var target = $(this).parent().find("article");
			var parent = $(this).parent();
				if(parent.hasClass("active")== false){
					parent.addClass("active");
					target.slideDown('slow');
				}else{
					parent.removeClass("active");
					target.slideUp('slow');
				}
				
		})
		
		
		
		/************** Mobile ********************/
		$(".openside").click(function(){
			if($("body").hasClass("openmobilemenu") == false){
				$("body").addClass("openmobilemenu");	
			}else{
				$("body").removeClass("openmobilemenu");	
			}
			if($("body").hasClass("opencompanymobilemenu")== true){
				$("body").removeClass("opencompanymobilemenu");
			}
		})
		
		//opencompanymobilemenu
		$(".opencompany").click(function(){
			if($("body").hasClass("opencompanymobilemenu") == false){
				$("body").addClass("opencompanymobilemenu");
			}else{
				$("body").removeClass("opencompanymobilemenu");
			}
			if($("body").hasClass("openmobilemenu") == true){
				$("body").removeClass("openmobilemenu");	
			}
		})
		
})