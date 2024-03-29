function getCoords(item) {
	return $(item).position().top;
};

function navScroll(elem, dest) {
	$(elem).click(function(){
		var destx = "";
		destx = getCoords(dest);
		$('#content').animate({top: '-'+destx}, 350); // must animate negative, though positions are postitive
		return false;
	});
};

function movepane(elem, dest, setting) {
	$(elem).click(function(){
		var winwidth = $(window).width();
		var winheight = $(window).height();
		//alert(winheight);
	
		if (setting == 1) {
			$('#container').scrollTo(dest, {duration:500, queue:true, axis: 'yx'});
			$(dest).animate({
				'width': winwidth,
				'height': winheight
			}, 100);
		} else if (setting == 2) {
			$('#container').scrollTo(dest, {duration:500});
			$(dest).animate({
				'width': winwidth,
				'height': winheight
			}, 100);
		} else if (setting == 3) {
			$('#container').scrollTo(dest, {duration:500, queue:true, axis:'xy'});
			$(dest).animate({
				'width': winwidth,
				'height': winheight
			}, 100);
		}
		return false;
	});
};