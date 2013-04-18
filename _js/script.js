/* Author: 

*/


$(document).ready(function(){
	// var window_top = $(window).scrollTop();
	// var header_top = $('.activity-nav-mod').offset().top;
	var header_top = $('.content-hdr').offset().top;
	var interactive_top = $('.interactive-mod').offset().top;
	console.log(header_top);

	$(window).scroll(function(){
		var window_top = $(window).scrollTop();
		// console.log(window_top);


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

		// if ( window_top >= interactive_top - 50 ) {
		// 	$('.interactive').css('background-color', 'red');
		// 	$('.interactive').addClass('interactive-fixed');
		// } else {
		// 	$('.interactive').css('background-color', 'yellow');
		// 	$('.interactive').removeClass('interactive-fixed');
		// };
	});

	// interactive sticky
	$('.interactive-mod').waypoint('sticky', {
		offset: 120
	});


	// adding expanded class to .sidebar-mod
	$('.sidebar-hdr').click(function() {
		$('.sidebar-mod').toggleClass('expanded');
	});


	//prototyping save interaction
	var i = 0;
	setInterval(function(){
		$("#save").toggleClass('saved');
		if(i==0){
			$("#save").html("Saved.");
		} else {
			$("#save").html("Saving...");
		}
		i = 1-i;
	}, 5000);


	//Prototyping collapsing headers
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

});


// $(document).ready(function(){
// 	$('.interactive-mod').waypoint('sticky', {
// 		offset: 72
// 	});
// 	console.log('sticky');

// });








