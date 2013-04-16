/* Author: 

*/




// adding expanded class to .sidebar-mod
$('.sidebar-mod a').click(function (e) {
	e.preventDefault();
	$('.sidebar-mod').toggleClass('expanded');
	
});




// fixed header
// function sticky_header() {
// 	var window_top = $(window).scrollTop();
// 	var header_top = $('.activity-nav-mod').offset().top;
// 	if (window_top > header_top) {
// 		$(header_top).addClass('fixed');
// 	} else {
// 		$(header_top).removeClass('fixed');
// 	}
	

// };








// $(document).ready(function() {
// 	var window_top = $(window).scrollTop();
// 	var header_top = $('.activity-nav-mod');

// 	if ( window_top > header_top ) {
// 		$('.activity-nav-mod').addClass('fixed');
// 		console.log('fixie');
// 	} else {
// 		$('activity-nav-mod').removeClass('fixed');
// 		console.log('no fixie');
// 	}

// 	console.log('yo yolo yo');

// }); 
// end document.ready


$(document).ready(function(){
	var window_top = $(window).scrollTop();
	var header_top = $('.activity-nav-mod').offset().top;

	$(window).scroll(function(){

		if( $(window).scrollTop() > header_top ) {
			$('.activity-nav-mod').addClass('fixed');
			console.log('fixed');
		} else {
			$('.activity-nav-mod').removeClass('fixed');
			console.log('no fixie');
		}
	});
	console.log('yo yolo');
});









