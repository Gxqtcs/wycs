$(function(){
	//home
	$(window).resize(function(){
		var wW=$(window).width();
		var wH=$(window).height();
		var aboutLi=$(".aboutTit ul li").width();
		var aboutLiLeng=$(".aboutTit ul li").length;
		
		
		if(wW <= 768){
			$(".nav").css({"max-height":wH-80});
			
			$(".aboutTit ul").width((aboutLi+6)*aboutLiLeng+'px');
			
			
			
			
		}
		
		
	}).resize();
	
	$(window).scroll(function() {
		animat();
	})
	
	//nav
//	$(window).scroll(function() {
//				var sTop=$(window).scrollTop();
//				if(sTop < 100){
//					$(".top").show();
//					$(".navWrapTop").stop().animate({"top":'-100px'},500);
//				}else{
//					$(".top").fadeOut();
//					$(".navWrapTop").stop().animate({"top":'0'},800);
//				};
//	})
//	
	
//	banner
	$('.slider1').bxSlider({
		'auto':true,
    'controls':false,
    'touchEnabled':true,
    'pager':false,
    'speed':1000,
		'pause':6000,
		onSliderLoad:function(currentIndex){
			console.log(currentIndex)
			$('.writ1').find('h2').animate({
        'opacity':1,
        'left':'0'
      },500);
      $('.writ1').find('h3').delay(400).animate({
        'opacity':1,
        'right':'0'
      },500);
      $('.writ1').find('h4').delay(800).animate({
        'opacity':1,
        'top':'0'
      },500);
      $('.writ1').find('p').delay(1200).animate({
        'opacity':1,
        'top':'0'
      },500);
      $('.writ1').find('.bannerMore1').delay(1300).animate({
        'opacity':1,
        'left':'0'
      },500);
      $('.writ1').find('.bannerMore2').delay(1800).animate({
        'opacity':1,
        'right':'0'
      },500);
		},
		onSlideBefore:function($slideElement, oldIndex, newIndex){
			$slideElement.find('h2').css({
        'opacity':0,
        'left':'-100px'
      });
			$slideElement.find('h3').css({
        'opacity':0,
        'right':'-100px'
      });
			$slideElement.find('h4').css({
        'opacity':0,
        'top':'40px'
      });
			$slideElement.find('p').css({
        'opacity':0,
        'top':'40px'
      });
			$slideElement.find('.bannerMore1').css({
        'opacity':0,
        'left':'-60px'
      },500);
      $slideElement.find('.bannerMore2').css({
        'opacity':0,
        'right':'-60px'
      },500);
		},
		onSlideAfter:function($slideElement, oldIndex, newIndex){
			$slideElement.find('h2').delay(100).animate({
        'opacity':1,
        'left':'0'
      });
			$slideElement.find('h3').delay(400).animate({
        'opacity':1,
        'right':'0'
      });
			$slideElement.find('h4').delay(800).animate({
        'opacity':1,
        'top':'0'
      });
			$slideElement.find('p').delay(1200).animate({
        'opacity':1,
        'top':'0'
      });
			$slideElement.find('.bannerMore1').delay(1300).animate({
        'opacity':1,
        'left':'0'
      },500);
      $slideElement.find('.bannerMore2').delay(1800).animate({
        'opacity':1,
        'right':'0'
      },500);
			
		}
		
});

	//销售信息-homeCom
	$(".homeCom h2").click(function(){
		$(this).addClass("active").siblings("h2").removeClass("active");
		$(this).next(".homeComSelect").slideDown().siblings(".homeComSelect").slideUp();
	})
	
	//
	$('.slider2').bxSlider({
		'auto':true,
//  'controls':false,
    'touchEnabled':true,
    'pager':false,
//  'speed':1000,
//		'pause':6000,
		'slideWidth': 300,
    'minSlides': 2,
    'maxSlides': 4,
    'moveSlides': 1,
//  'slideMargin': 30
	})
	
	//wap-nav
	var wapNav=function(){
		$(".navBtn").click(function(){
			$(".navBtn").stop().removeClass("on");
			$(".submenu").stop().slideUp();
			$(this).stop().toggleClass("on");
			$(this).stop().siblings(".submenu").slideToggle()
		})
		
		var i=0;
		
		$(".menu").click(function(){
			console.log(i)
			if(i==0){
				$(this).parents(".navWrap").find(".nav").stop().animate({"right":'0'});
				i=1;
			}else if(i==1){
				$(this).parents(".navWrap").find(".nav").stop().animate({"right":'-220px'});
				i=0;
			}
			
		})
		
		$(window).scroll(function() {
			$(".nav").stop().animate({"right":'-220px'});
			i=0;
		})
		
		$(".nav").scroll(function(event){
			event.stopPropagation();
		})
		
		
	}
	
	//page
	var page=function(){
				$(".page a").click(function(){
					$(this).addClass("active").siblings(".page a").removeClass("active");
					$(this).parent(".page").find("em").removeClass("active");
					$(this).parent(".page").find("i").removeClass("active");
				})
				$(".page em").click(function(){
					$(this).addClass("active").siblings(".page em").removeClass("active");
					$(this).parent(".page").find("i").removeClass("active");
				})
				$(".page i").click(function(){
					$(this).addClass("active").siblings(".page i").removeClass("active");
					$(this).parent(".page").find("em").removeClass("active");
				})
			}
			
	//donghua
	var animat = function() {
		var stop = $(window).scrollTop();
		var he = $(window).height();
		function use(ele) {
			ele.each(function() {
				var eoffset = $(this).offset().top;
				if (stop + he > eoffset) {
					$(this).stop().animate({
						"top": "0px",
						"opacity": "1"
					}, 600)
				}
			})

		}

		use($(".notice ul li,.homeNews,.homeNewsList li, .homeInfor .pic, .homeInfor .right, .homeInforBottom, .homeCom, .homeJt, .homeCyqy .wrap, .bottom, .footer, .aboutTit"));
		use($(".animate"));
//		use($(".homeNewsList li"));
		
		
		
	}
	//详情页
	$(".detailHead p span").click(function(){
		$(this).addClass("on").siblings("span").removeClass("on");
	})
	$(".detailHead p span").eq(2).click(function(){
		$(".detailCont p").css({
			"font-size":18+'px',
			"line-height":32+'px'
		});
	})
	$(".detailHead p span").eq(1).click(function(){
		$(".detailCont p").css({
			"font-size":16+'px',
			"line-height":30+'px'
		});
	})
	$(".detailHead p span").eq(0).click(function(){
		$(".detailCont p").css({
			"font-size":14+'px',
			"line-height":28+'px'
		});
	})
	
	
	
	
	
	wapNav();
	page();    //page
	animat();    //donghua
})