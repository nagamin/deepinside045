
$(function(){
	
	var streetCustom = function(){

		this.setAction = {
			
			bodySelector: function(){ 
				$("#bodySelector ul li").each(function(){
					$(this).click(function(){
						
					})
				})
			}(),
			
			colorSelector: function(){ 
				var color;
				$("#colorWrap dl dd").each(function(){
					$(this).click(function(){
						var recentColor = $("#masterColor").attr("class");
						color = $(this).attr("id");
						changeColor(color,recentColor);
					})
				})
			}(),
			
			partsSelector: function(){
				var category,type;
				$("#partsBlockWrap ul li").each(function(){
					$(this).click(function(){
						category = $(this).parent().attr("class");
						type = $(this).find("a").attr("class");
						flows.changePartsSelected($(this),$(this).parent())
						changeParts(category,type);
					})
				})
			}(),
			
		};
		
		this.changeColor = function(color,recentColor){
			var category,type,flows
			
			
			$("#partsBlockWrap").find("img").each(function(){
				var a = $(this).attr("src").replace(recentColor,color); 
				$(this).attr("src",a);
			});
			
			//パーツ初期化
			$("#base").find("div").each(function(){
				var src = "images/streetCustom/majesty_" + color + "_" + $(this).attr("id") + "_1" +".png";
				var a = $(this).find("img").attr("src",src)
			});
			
			//サムネ初期化
			$("div.partsBlock").each(function(){
				$(this).find("img:first").addClass("selected");
				$(this).find("img:last").removeClass();
			})
			
			
			
			$("#masterColor").removeClass().addClass(color);
			
			
			
						
		}
		
		this.changeParts = function(category,type){
			var selector = "#" + category;
			//$(selector).removeClass()
			var which;
			(type == "a") ? which = "1" : which = "2";
			//$(selector).attr("class",type);
			var src = "images/streetCustom/majesty_" + $("#masterColor").attr("class") + "_" + category + "_" + which +".png";
			$(selector).find("img").attr("src",src)
		}
		
		this.flows = {
			
			changePartsSelected: function(This,parent){
				parent.find(".selected").removeClass();
				This.find("img").addClass("selected");
			}
			
		}
		
	};
	
	
	streetCustom();
		
});