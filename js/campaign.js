// Click on button in main window
$('#main-btn').on('click', function(e){
	_top = $('#programme').offset().top - 100;
	$('html, body').stop().animate({
		'scrollTop' : _top
	}, 600);
	e.preventDefault();
	return false;
});