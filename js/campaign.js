// Scroll to position using header.
$('header a').on('click', function(e){
	var _href = $(this).attr('href'),
	_top = 0;
	_href = _href.substr(_href.indexOf('#'));
	if(_href !== '#'){
		_top = $(_href).offset().top - 100;
	}
	$('html, body').stop().animate({
		'scrollTop' : _top
	}, 600);
	e.preventDefault();
	return false;
});

$('#main-btn').on('click', function(e){
	_top = $('#signup').offset().top - 100;
	$('html, body').stop().animate({
		'scrollTop' : _top
	}, 600);
	e.preventDefault();
	return false;
});


// Instafeed setup
var feed = new Instafeed({
    // get: 'tagged',
    // tagName: 'awesome',
    sortBy: 'most-liked',
    clientId: '467ede5a6b9b48ae8e03f4e2582aeeb3', // replace with your instagram id 
    limit: '30'
});
feed.run();