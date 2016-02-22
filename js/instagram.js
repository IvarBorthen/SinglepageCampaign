var instaZ = 0;
setInterval(function(){
	instaZ++;
	var _imgs = $('#instafeed a');
	console.log(instaZ);
	console.log((instaZ%2));
	$('#instafeed a').eq(Math.floor(Math.random()*_imgs.length)).css({
		zIndex : instaZ,
		top : (instaZ%2)+'px',
		'left' : (instaZ%2)+'px'
	});
	console.log('move', Math.floor(Math.random()*_imgs.length));
}, 3000);

$('#instafeed a').each(function(){
	instaZ++;
	$(this).css({
		zIndex : instaZ,
		top : ((instaZ%2) * 154)+'px',
		'left' : ((instaZ%5 * 154))+'px'
	}).hide().fadeIn(500);
});

// Instafeed setup
var feed = new Instafeed({
    // get: 'tagged',
    // tagName: 'awesome',
    sortBy: 'most-liked',
    clientId: '467ede5a6b9b48ae8e03f4e2582aeeb3', // replace with your instagram id 
    limit: '30',
    after : function(){
    	$('#instafeed a').each(function(){
			instaZ++;
			$(this).css({
				zIndex : instaZ,
				top : ((instaZ%2) * 154)+'px',
				'left' : ((instaZ%5 * 154))+'px'
			});

		})
	}
});
    
feed.run();