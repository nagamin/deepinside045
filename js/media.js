
$(function(){
	
	/*==============================/
	// Photo Viewer
	/==============================*/
	$('#viewer').panelGallery();
	
	
	
	/*==============================/
	// contents photo viewer
	/==============================*/
	$('ul.thumbLight a').lightBox({fixedNavigation:true});
	
	
	
	/*==============================/
	// Media Slider
	/==============================*/

	$('#mediaSlideCont').bxSlider();
	
	/*==============================/
	// Ticker
	/==============================*/
	$('#js-news').bxSlider({
		controls: false,
		speed: 500,
		pager: false,
		auto: true,
		pause: 4000
	});


});