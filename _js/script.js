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
	console.log(header_top);

	$(window).scroll(function(){
		var window_top = $(window).scrollTop();
		console.log(window_top);


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
	});
});









