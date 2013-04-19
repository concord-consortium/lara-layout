/* Author: 

*/


$(document).ready(function(){
	// var window_top = $(window).scrollTop();
	// var header_top = $('.activity-nav-mod').offset().top;
	var header_top = $('.content-hdr').offset().top;
	var interactive_top = $('.interactive-mod').offset().top;
	var content_top = $('.content-mod').offset().top;
	// console.log(header_top);

	$(window).scroll(function(){
		var window_top = $(window).scrollTop();

		// Activity nav fixing
		if( window_top >= header_top/2 ) {
			$('.activity-nav-mod').addClass('fixed');
			$('.content-hdr').addClass('extra-pad');
			$('.activity-nav-mod.fixed').fadeIn();
			$('.activity-nav-mod.fixed .activity-nav-logo .h2').addClass('visible');
			
		} else {
			$('.activity-nav-mod').removeClass('fixed');
			$('.content-hdr').removeClass('extra-pad');
			$('.activity-nav-mod .activity-nav-logo .h2').removeClass('visible');
		}


		// reveal sidebar-mod
		if( window_top >= content_top/2 ) {
			$('.sidebar-mod').delay(400).fadeIn(1600);
		};
	

	});


	


	// interactive sticky
	$('.interactive-mod').waypoint('sticky', {
		offset: 120
	});


	// adding expanded class to .sidebar-mod
	$('.sidebar-hdr').add('.sidebar-bd-close').click(function() {
		$('.sidebar-mod').toggleClass('expanded');
	});


	// prototyping save interaction
	var i = 0;
	setInterval(function(){
		$("#save").toggleClass('saved');
		if(i==0){
			$("#save").html("Saved.");
			$("#save").animate({'opacity': '0'}, 'slow');
		} else {
			$("#save").animate({'opacity': '1.0'}, 'slow');
			$("#save").html("Saving...");
		}
		i = 1-i;
	}, 5000);



	// Prototyping collapsing headers
	var w = $('.question-hdr-collapse').width();
	var h = $('.question-hdr-collapse').height();
	var count = $('.question-hdr-collapse').length;
	var x = 1;

	$('.question-hdr-collapse').waypoint(function() {
		$(this).toggleClass('stuck');
		$(this).css('width', w);
		$(this).css('top', 55+x*h);
		x++;
	}, {
		offset: 55+x*h
	});

});  // end document.ready














