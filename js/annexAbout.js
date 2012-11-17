
$(function(){
	
	/*==============================/
	// Photo Viewer
	/==============================*/
	$('#viewer').panelGallery();
	
	
	
	/*==============================/
	// contents photo viewer
	/==============================*/
	$('#light1 a,#light2 a,#light3 a').lightBox({fixedNavigation:true});

	$("#sw1").click(function(){
		$("#cont1Wrap").show();
		$("#cont2Wrap,#cont3Wrap").hide();
		$("#tab ul li a").each(function(){ $(this).removeClass("current")})
		$(this).find("a").addClass("current")
	})
	
	$("#sw2").click(function(){
		$("#cont2Wrap").show();
		$("#cont1Wrap,#cont3Wrap").hide();
		$("#tab ul li a").each(function(){ $(this).removeClass("current")})
		$(this).find("a").addClass("current")
	})
	
	$("#sw3").click(function(){
		$("#cont3Wrap").show();
		$("#cont1Wrap,#cont2Wrap").hide();
		$("#tab ul li a").each(function(){ $(this).removeClass("current")})
		$(this).find("a").addClass("current")
	})


		
});