
$(function(){
	
	/*==============================/
	// Shop Detail Behavior
	/==============================*/
  
	$("#expander").css("opacity",0);
	
	var obj = $("#expander")
	
  //display shop detail
  $("dd.trigger").each(function(){
  
  $(this).mouseenter(function(){
		var id = $(this).attr("id");
		var a = $(".shopSeeker:visible").attr("id");
		var b = id + "cont";
		
		//�G�L�X�p���h���Ă���
    if(obj.hasClass("open")){

			switch(id){
				case "shop1" : $(".shopSeeker").fadeOut("fast"); $("#shop1cont").fadeIn("slow");break;
				case "shop2" : $(".shopSeeker").fadeOut("fast"); $("#shop2cont").fadeIn("slow");break;
				case "shop3" : $(".shopSeeker").fadeOut("fast"); $("#shop3cont").fadeIn("slow");break;
			}
			
			$(".shopSeeker a.pos").hide();
			
		//�G�L�X�p���h���ĂȂ�
		}else{
			//�u���b�N�S���B��
			$(".shopSeeker").hide();
			
			var width = 715;
			
			//�Y���A�C�e�����J��
			switch(id){
				case "shop1" : $("#shop1cont").show(); obj.animate({ width: 715,opacity:1 },{duration: "fast", easing: "linear",complete: function(){ obj.addClass("open") }});break;
				case "shop2" : $("#shop2cont").show(); obj.animate({ width: 715,opacity:1 },{duration: "fast", easing: "linear",complete: function(){ obj.addClass("open") }});break;
				case "shop3" : $("#shop3cont").show(); obj.animate({ width: 715,opacity:1 },{duration: "fast", easing: "linear",complete: function(){ obj.addClass("open") }});break;
			}
			
			
		}
	});
	});
	
	$(".shopSeeker").each(function(){
		$(this).hover(
			function () {
        return;
			},
			function () {
				obj.animate({ width: 0, opacity:0 },{duration: "fast", easing: "linear",complete: function(){ obj.removeClass("open") }})
			}
		);
		
	});
	
	/*==============================/
	// Shop Button Behavior
	/==============================*/
	
	var x = $(".shopSeeker a.pos");
	x.hide();
	
	$(".shopSeeker").mouseover(function(){
		$(this).find(".pos").addClass("active").fadeIn("slow");
	});
	
	$(".shopSeeker").mouseout(function(){
		if(!$(this).find(".pos").hasClass("active")) $(this).find(".pos").removeClass("active").fadeOut("slow");
	});
		
});
