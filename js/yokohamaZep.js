
$(function(){
	
	/*==============================/
	// contents photo viewer
	/==============================*/
	$('#light1 a,#light2 a,#light3 a').lightBox({fixedNavigation:true});

	$("#sw1").click(function(){
		$("#showCase1").show();
		$("#showCase2,#showCase3").hide();
		$("#tab ul li a").each(function(){ $(this).removeClass("current")})
		$(this).find("a").addClass("current")
	})
	
	$("#sw2").click(function(){
		$("#showCase2").show();
		$("#showCase1,#showCase3").hide();
		$("#tab ul li a").each(function(){ $(this).removeClass("current")})
		$(this).find("a").addClass("current")
	})
	
	$("#sw3").click(function(){
		$("#showCase3").show();
		$("#showCase1,#showCase2").hide();
		$("#tab ul li a").each(function(){ $(this).removeClass("current")})
		$(this).find("a").addClass("current")
	})


		
});
