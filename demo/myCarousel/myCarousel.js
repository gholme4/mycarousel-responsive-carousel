// myCarousel v1.0
// by George Holmes II

(function( $ ) {
	$.fn.myCarousel = function(options) {
	  
		// Set default options
		var options = $.extend({
		  numberVisibleItems:   '5',
		  animationSpeed: 500,
		  carouselSpeed: 3000,
		  automaticPlay: true,
		  pauseOnHover: true,
		  easing: "swing"
		  
		}, options);
		
		 return this.each(function() {
			 var carousel = $(this);
			 
			 // Create mark-up of carousel
			 carousel.addClass("mc-ul");
			 var listHtml = carousel.html();
			 $("<div class='mc-container'><div class='mc-inner'></div></div>").insertBefore(carousel);
			 $(".mc-inner").html(carousel);
			 $(".mc-ul").append("<div style='clear:both;'></div>");
			 $(".mc-container").prepend("<div class='mc-nav-left'><div class='mc-nav-button left'></div></div>");
			 $(".mc-container").append("<div class='mc-nav-right'><div class='mc-nav-button right'></div></div>");
			 carousel.find("li").addClass("mc-item");
			 
			 // Declare the global width of each item in carousel
			 var itemsWidth;
			 
			 // Declare boolean variable of whether nav buttons are active or not
			 var canNavigate = true;
			 
			 $(window).resize(function() {
			 	// Set the height of the nav buttons upon window resize
				var innerHeight = $(".mc-inner").height();
				$(".mc-nav-left, .mc-nav-right").css("height", innerHeight);
				
				// Set the width of the items upon window resize
				var innerWidth = $(".mc-inner").width();
				itemsWidth = (innerWidth)/options.numberVisibleItems;
				$(".mc-item").width(itemsWidth);
				$('.mc-ul').css({'left' : -itemsWidth});
				
				// Set the top property of each item upon window resize
				$(".mc-item").each(function (index) {
					var itemHeight = $(this).height();
					var itemTop = (innerHeight-itemHeight)/2;
					$(this).css("top", itemTop + "px");
				});
				
				
			});
			
			// Delay necessary to correctly calculate certain dimension
			setTimeout(function () {
				// Initially set the height of the nav buttons
				var innerHeight = $(".mc-inner").height();
				$(".mc-nav-left, .mc-nav-right").css("height", innerHeight);
				
				// Set the top property of each item
				$(".mc-item").each(function (index) {
					var itemHeight = $(this).height();
					var itemTop = (innerHeight-itemHeight)/2;
					$(this).css("top", itemTop + "px");
				});
								
			}, 1000);
			
			// Initially set the width of each item
			var innerWidth = $(".mc-inner").width();
			itemsWidth = (innerWidth)/options.numberVisibleItems;
			$(".mc-item").width(itemsWidth);
			
			
			
			// Get last item and insert it before the first; this will allow navigation to the left
			$('.mc-item:last').insertBefore($('.mc-item:first'));
			$('.mc-ul').css({'left' : -itemsWidth});
			
			// Slide carousel to left when left nav button is clicked
			$(".mc-nav-left").live("click", function () {
				if(canNavigate == true) {
					canNavigate = false;
					innerWidth = $(".mc-inner").width();
					itemsWidth = (innerWidth)/options.numberVisibleItems;
					$('.mc-ul').animate({
							'left' : "+=" + itemsWidth
						},
						{
							queue:false, 
							duration:options.animationSpeed,
							easing: options.easing,
							complete: function() {  
								// Get the first list item and put it after the last list item (that's how the infinite effects is made)   
								$('.mc-item:first').before($('.mc-item:last'));
								
								// Reset the left indent of the carousel
								$('.mc-ul').css({'left' : -itemsWidth});
								
								// Allow for navigation once animation is complete
								canNavigate = true;
							}
						}
					);
				}
			});
			
			// Slide carousel to right when right nav button is clicked
			$(".mc-nav-right").live("click", function () {
				if(canNavigate == true) {
					canNavigate = false;
					innerWidth = $(".mc-inner").width();
					itemsWidth = (innerWidth)/options.numberVisibleItems;
					$('.mc-ul').animate({
							'left' : "-=" + itemsWidth
						},
						{
							queue:false, 
							duration:options.animationSpeed,
							easing: options.easing,
							complete: function() {  
								// Gset the first list item and put it after the last list item (that's how the infinite effects is made)   
								$('.mc-item:last').after($('.mc-item:first'));
								
								// Reset the left indent of the carousel
								$('.mc-ul').css({'left' : -itemsWidth});
								
								// Allow for navigation once animation is complete
								canNavigate = true;
								
							}
						}
					);
				}
			});
			
			var CarouselSpeed = options.carouselSpeed;
			var AutomaticPlay = options.automaticPlay
			
			// Slide carousel to right automatically after specified number of milliseconds
			setInterval(function () {
				if(AutomaticPlay == true)
				{
					if(canNavigate == true)
						$(".mc-nav-right").trigger("click");
				}
			}, CarouselSpeed);
			
		 	// Pause animation when hovering over items
			$(".mc-item").hover(
				function () {
					canNavigate = false;
				},
				function () {
					canNavigate = true;
				}
			);
			
			
			////////////////////////////////////////////////////////////////
		});/// End return this.each(function () {})

  

	};
})( jQuery );