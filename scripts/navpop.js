function navPop(elem, ofclass) {
	ofclass = ofclass || '.rightnav';


	$(elem).click(function(){
		$(ofclass).each(function(i) {
			$(this).removeClass('current');
		});
		
		$(this).addClass('current');
	});
};

function navHighlight(elem, ofclass, newclass) {
	$(elem).click(function() {
		$(ofclass).each(function(i) { 
			$(this).removeClass(newclass);
		}); 
		
		$(elem).addClass(newclass);

	});
};

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
