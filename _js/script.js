/* Author: 

*/




// adding expanded class to .sidebar-mod
$('.sidebar-mod a').click(function (e) {
	e.preventDefault();
	$('.sidebar-mod').toggleClass('expanded');
	
});







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

});


// $(document).ready(function(){
// 	$('.interactive-mod').waypoint('sticky', {
// 		offset: 72
// 	});
// 	console.log('sticky');

// });








