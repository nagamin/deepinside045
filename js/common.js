

$(function(){
	
	

//======================================================================================
// “§–¾“xRO
//======================================================================================		
		
		$(".over").fadeTo(100,1);
	
		$(".over").hover(function(){
			$(this).fadeTo(20,0.7);
		},
		function(){
			$(this).fadeTo(200,1);
		});
		
		

    if ($.browser.msie && $.browser.version.substr(0,1)<7){
			$('li').has('ul').mouseover(function(){
				$(this).children('ul').show();}).mouseout(function(){
				$(this).children('ul').hide();})
			
			
    }




	//======================================================================================
	// Mouse hover
	//======================================================================================	

	jQuery(function($) {
		var postfix = '_over';
		$('img.Hover').not('[src*="'+ postfix +'."]').each(function() {
			var img = $(this);
			var src = img.attr('src');
			var src_on = src.substr(0, src.lastIndexOf('.'))
								 + postfix
								 + src.substring(src.lastIndexOf('.'));
			$('<img>').attr('src', src_on);
			img.hover(function() {
				img.attr('src', src_on);
			}, function() {
				img.attr('src', src);
			});
		});
	});
	
	
	/*==============================/
	// lead block
	/==============================*/
	var leadBlock = $("#leadBlock");
	
	if(leadBlock){
		$("#shop1cont").click(function(){
			location.href = "annex.html";
		})
		$("#shop2cont").click(function(){
			location.href = "street.html";
		})
		$("#shop3cont").click(function(){
			location.href = "yokohama.html";
		})
	}
	
	
});