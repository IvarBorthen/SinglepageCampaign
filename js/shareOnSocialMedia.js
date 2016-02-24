function PopupCenter(url, title, w, h) {
    // Fixes dual-screen position                         Most browsers      Firefox
    var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
    var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

    var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    var left = ((width / 2) - (w / 2)) + dualScreenLeft;
    var top = ((height / 2) - (h / 2)) + dualScreenTop;
    var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

    // Puts focus on the newWindow
    if (window.focus) {
        newWindow.focus();
    }
}

$(function(){
	// Share on Facebook
	$('[data-share-facebook]').on('click', function(e){
		// share this page //
		PopupCenter('https://www.facebook.com/sharer/sharer.php?u='+window.location.href.split("#")[0],'Share on Facebook','500','500');  
	});
	// Share on Twitter
	$('[data-share-twitter]').on('click', function(e){
		// share this page //
		PopupCenter('https://twitter.com/home?status='+window.location.href.split("#")[0],'Share on Twitter','500','500');  
	});
	// Share on Google+
	$('[data-share-googleplus]').on('click', function(e){
		// share this page //
		PopupCenter('https://plus.google.com/share?url='+window.location.href.split("#")[0],'Share on Google+','500','500');  
	});
	// Share on LinkedIn
	$('[data-share-linkedin]').on('click', function(e){
		// Change title and add summary if you want.
		var _requiredTitle = 'Title'; // REQUIRED
		var _optionalSummary = ''; // OPTIONAL
		// share this page //
		PopupCenter('https://www.linkedin.com/shareArticle?mini=true&url='+window.location.href.split("#")[0]+'&title='+_requiredTitle+(_optionalSummary!=='' ? '&'+_optionalSummary : ''),'Share on Google+','500','500');  
	});
});