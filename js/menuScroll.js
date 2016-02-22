// Scroll to position using header.
$('.header ul a').on('click', function(e){
	var _href = $(this).attr('href'),
	_top = 0;
	if(_href.indexOf('#') > -1){
		_href = _href.substr(_href.indexOf('#'));
		if(_href !== '#'){
			_top = $(_href).offset().top - 100;
		}
		$('html, body').stop().animate({
			'scrollTop' : _top
		}, 600);
		e.preventDefault();
		return false;
	}
});
/*
$(document).on('scroll', function(){
 	var scrollPos = $(document).scrollTop();
 	var allLinks = $('.header ul a').removeClass('active').each(function () {
	    var _href = $(this).attr('href');
	    if(_href.indexOf('#') > -1){
	    	var $el = $(_href.substr(_href.indexOf('#')));
	    	if($el.length){
			    if ($el.position().top + $el.height() > scrollPos + 200) {
			        $(this).addClass('active');
			        return false;
			    }
			}
		}
	});
});
*/

var updateMainVideoSize = function(){
	var scrollPos = $(document).scrollTop();
 	$('#containerMainVideo').css('height', $(window).height() - ($('#substractMainVideoHeight').outerHeight()));
}();

$(document).on('scroll', updateMainVideoSize);
$(window).on('resize', updateMainVideoSize);
