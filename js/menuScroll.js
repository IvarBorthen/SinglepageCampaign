// Scroll to position using header.
$('.header ul a').on('click', function(e){
	animateScrollTo(this);
	e.preventDefault();
	return false;
});
var animateScrollTo = function(e){
	var _top = 0;
	if(typeof e ==='string'){
		_href = e;
	} else {
		_href = $(e).attr('href');
	}
	if(_href.indexOf('#') > -1){
		_href = _href.substr(_href.indexOf('#'));
		if(_href !== '#'){
			_top = $(_href).offset().top - 150;
		}
		$('html, body').stop().animate({
			'scrollTop' : _top
		}, 600);
	}
}

var updateMainVideoSize = function(){
	var scrollPos = $(document).scrollTop();
 	$('#containerMainVideo').css('height', $(window).height() - ($('#substractMainVideoHeight').outerHeight()));
}();

$(document).on('scroll', updateMainVideoSize);
$(window).on('resize', updateMainVideoSize);
