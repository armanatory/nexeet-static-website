
(function($) {
	/*------------------
		Navigation for responsive design
	--------------------*/
	$('.nav-switch').on('click', function(event) {
		$(this).toggleClass('active');
		$('.nav-warp').slideToggle(400);
		event.preventDefault();
	});

})(jQuery);
