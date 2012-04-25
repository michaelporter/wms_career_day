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
