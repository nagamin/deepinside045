

(function($){ 

$.fn.easySlides = function(options) {



    // Set default variables in an array

    var defaults = {

        noImages: 17,

        path: 'images/area45/gallery/gallery',

        captions:{
					1: 'shop entrance',
					2: 'appearance',
					3: 'appearance',
					4: 'appearance',
					5: 'collection',
					6: 'collection',
					7: 'sofa and a table',
					8: 'inside of a shop image',
					9: 'inside of a shop image',
					10: 'inside of a shop image',
					11: 'inside of a shop image',
					12: 'inside of a shop image',
					13: 'collection',
					14: 'bar counter',
					15: 'original goods',
					16: 'original goods',
					17: 'inside of a shop image'},

        links:null,

        linksOpen:'sameWindow',

        timerInterval: 6000,

	randomise:false

    };



    // Extend default variable array using supplied options, making opional arguments possible

    options = $.extend(defaults, options);



    // Initialse other global variables...

    var divNo=1;

    var imgNumber;

    var timer;

    var path;



    // Initialise image number...

    if (options.randomise===true){ // Has the user chosen to begin with a random image number?

        imgNumber = Math.ceil((options.noImages)*Math.random());  // Generate a number between 1 and noImages

    } else {

        imgNumber=1;  // Else just start at image number 1

    }

    

    // Cache some selectors...

    var container = $(this);



    // Create the elements we need to manipulate inside the main container...

    $(container).append('<div class="easy_slides_img1"></div><div class="easy_slides_img2"></div><div class="easy_slides_caption"></div>');



    // Cache some more selectors...

    var img1 = $('.easy_slides_img1',container);

    var img2 = $('.easy_slides_img2',container);

    var caption = $('.easy_slides_caption',container);



    // Define a function to be run using setInterval...

    function fi(firstRun){



        // Initialise firstRun variable...

        firstRun = typeof(firstRun) != 'undefined' ? firstRun : false;

        

        // Reset the image number if its greater than total number of images, so it loops back to 1...

        if( imgNumber>options.noImages ){ imgNumber=1; }



        // Create new image object

        var img = new Image();



        // Construct image path from the path provided by user and the image number, but should this really be hardcoded to just .jpg?

        path = options.path+imgNumber+'.jpg';



        // Is this the first time the function has been run?

        if (firstRun===true){

            

            // Load image number 1 and show it...

            $(img).load(function(){

                img1.append(img); // Append the image object to #img1

                if (options.links!==null && options.links[imgNumber]!=''){

                        cacheImgNumber=imgNumber;

                         $('img',img1).css('cursor','pointer').click(function(){

                            if (options.linksOpen==='newWindow'){

                                window.open(options.links[cacheImgNumber]);

                            } else {

                                window.location.href=options.links[cacheImgNumber];

                            }

                        });

                    }

                    img1.fadeIn(function(){

                        if (options.captions!==null){ // Check if captions have been suplied or not
														
														
														var a = '<ul><li style="font-weight:bold; margin:10px 0 5px 10px">AREA045 GALLERY No.'+ imgNumber +'</li><li style="font-size:10px; margin-left:10px">'+ options.captions[imgNumber] +'</li><li style="text-align:right; font-weight:bold; margin:0 10px 10px 0"><a class="close">× CLOSE</a></li></ul>';

                            caption.html(a).fadeIn(); // Bring up the caption
                        }

                        // Increment image number. Got to be here or it increments before fadeOut happens.

                        imgNumber++;

                    });

            })

            .error(function () {

                container.html('<b>Error Loading Image:</b> '+path); // If there is an error display a message

            })

            .attr('src', path); // attatch the image and action the stuff above like the fade in.



        } else { // If this isnt the first run...

            

            // Load image

            $(img).load(function(){



                // Toggle between the two container divs

                if (divNo==1){

                    upperImg = img1;

                    lowerImg = img2;

                } else {

                    upperImg = img2;

                    lowerImg = img1;

                }



                // To begin with we assume the following css has been applied in the stylesheet...

                // #img1{z-index:2} #img2{z-index:1;display:none;}

                lowerImg.append(img).show();                // Make image container 2 visible

                if (options.links!==null && options.links[imgNumber]!=''){

                    cacheImgNumber=imgNumber;

                    $('img',lowerImg).css('cursor','pointer').click(function(){

                        if (options.linksOpen==='newWindow'){

                            window.open(options.links[cacheImgNumber]);

                        } else {

                            window.location.href=options.links[cacheImgNumber];

                        }

                    });

                }

                upperImg.fadeOut(function(){                // Fade out container 1 to show container 2

                     upperImg.css('z-index','1');           // Put container 1 to the back

                     $('img',upperImg).remove();            // Remove the image in container 1

                     lowerImg.css('z-index','2');           // Bring container 2 to the front

                     if (options.captions!==null){       // Check if captions have been suplied or not

                         caption.fadeOut(function(){    // Do the caption
														
														var a = '<ul><li style="font-weight:bold; margin:10px 0 5px 10px">AREA045 GALLERY No.'+ imgNumber +'</li><li style="font-size:10px; margin-left:10px">'+ options.captions[imgNumber] +'</li><li style="text-align:right; font-weight:bold; margin:0 10px 10px 0"><a class="close">×&nbsp;CLOSE</a></li></ul>';
														
                            $(this).html(a).fadeIn();

                            // Increment image number. Got to be here or it increments before fadeOut happens.

                            imgNumber++;

                         });

                     } else {

                         imgNumber++;

                     }

                 });

                

            }).error(function () {

                clearInterval(timer);                       // Stop repeating!

                container.html('<b>Error Loading Image:</b> '+path); // If there is an error display a message

            })

            .attr('src', path);                             // attatch the image and action the stuff above

        }



        // Some stuff to toggle & reset the divNo counter....

        if (divNo==2){

            divNo=1;

        } else {

            divNo=2;

        }

    }



    // Finally we can run everything...

    return this.each(function() {



        fi(true); // Initially run the main function setting firstRun to true.

        timer = setInterval(fi , options.timerInterval); // Continue running it without firstRun option (this delaults to firstRun=false).



    });



};

})(jQuery);


$(function(){

	$('#slideshow_container').easySlides();
	
	/*==============================/
	// popup initialize
	/==============================*/
	$(".content").each(function(){
		$(this).hide();
	});
	
	/*==============================/
	// click event
	/==============================*/
	$("#routemap").click(function(){
																
		$("#map").fadeTo("fast", 1);
		
		setTimeout(function(){
		$("#map div").html('<iframe width="490" height="240" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.co.jp/maps?f=q&amp;source=s_q&amp;hl=ja&amp;geocode=&amp;q=%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E6%B8%AF%E5%8C%97%E5%8C%BA%E6%96%B0%E7%BE%BD%E7%94%BA1496%EF%BC%8D1A&amp;sll=34.794951,136.015481&amp;sspn=49.483815,103.007812&amp;brcurrent=3,0x601858cd254bd0a3:0xc67d53ede671ac28,0&amp;ie=UTF8&amp;hq=&amp;hnear=%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E6%B8%AF%E5%8C%97%E5%8C%BA%E6%96%B0%E7%BE%BD%E7%94%BA%EF%BC%91%EF%BC%94%EF%BC%99%EF%BC%96&amp;t=m&amp;z=14&amp;ll=35.523565,139.608418&amp;output=embed"></iframe>')
		},100);
	});
	
	$("#gallery").click(function(){
		$("#contentsGallery").fadeTo("fast", 1);
	});
	
	$(".close").live("click",function(){
		$(".content").hide();
	});
	
	/*==============================/
	// hover
	/==============================*/
	
	$(".baroon").each(function(){
		
		var galleryTimer, galleryCounter, routemapTimer, showroomTimer; 
		
		//neon image change method
		var neon = function(){
			
			function add(i){
				return galleryCounter ++;
			}
			
			add(1);
				
			(galleryCounter == 4) ? galleryCounter = 1 : galleryCounter + 1;
			$("#gallery").find("img").attr("src","images/area45/btn_gallery"+ galleryCounter +".png");
		};
		
		//hover settings
		$(this).hover(
			
			//mouseover
			function () {
				
				var a = $(this).attr("id"), This = $(this);
				
				//case of gallery
				if (a === "gallery") {
					galleryCounter = 0;
					galleryTimer = setInterval(function(){
						neon();
					},500)			
				}
				
				//case of routemap
				if (a === "routemap") {

					var routemap = $(this).find("img");
					
					routemapTimer = setInterval(function(){
						
						switch(Math.floor( Math.random() * 5 )){
							case 0 : 
								routemap.attr("src","images/area45/btn_routemap_red.png");
								setTimeout(function(){ routemap.attr("src","images/area45/btn_routemap.png")},40);
							break;
							case 1: 
								routemap.attr("src","images/area45/btn_routemap_red.png");
								setTimeout(function(){ routemap.attr("src","images/area45/btn_routemap.png")},80);
							break;
							case 2 : 
								routemap.attr("src","images/area45/btn_routemap_red.png");
								setTimeout(function(){ routemap.attr("src","images/area45/btn_routemap.png")},120);
							break;
							case 3 : 
								routemap.attr("src","images/area45/btn_routemap_red.png");
								setTimeout(function(){ routemap.attr("src","images/area45/btn_routemap.png")},150);
							break;
							case 4 : 
								routemap.attr("src","images/area45/btn_routemap_red.png");
								setTimeout(function(){ routemap.attr("src","images/area45/btn_routemap.png")},300);
							break;
						}
						
					},100);
					
				}
				
				//case of show room
				if (a === "showroom") {

					var showroom = $(this).find("img");
					
					showroomTimer = setInterval(function(){
						
						switch(Math.floor( Math.random() * 5 )){
							case 0 : 
								This.css({ top:"276px", left:"21px" });
								setTimeout(function(){ This.css({ top:"275px", left:"20px" });},30);
							break;
							case 1: 
								This.css({ top:"274px", left:"19px" });
								setTimeout(function(){ This.css({ top:"275px", left:"20px" });},60);
							break;
							case 2 : 
								This.css({ top:"275px", left:"21px" });
								setTimeout(function(){ This.css({ top:"275px", left:"20px" });},90);
							break;
							case 3 : 
								This.css({ top:"274px", left:"19px" });
								setTimeout(function(){ This.css({ top:"275px", left:"20px" });},120);
							break;
							case 4 : 
								This.css({ top:"276px", left:"20px" });
								setTimeout(function(){ This.css({ top:"275px", left:"20px" });},200);
							break;
						}
						
					},100);
					
				}
				
				//show baroon
				$("#popup").find("img").attr("src","images/area45/pop_"+ a +".gif");
				$("#popup").find("img").fadeIn("fast");
  		},
			
			//mouseout
  		function () {
				var a = $(this).attr("id");
				if (a === "gallery") clearInterval(galleryTimer);
				if (a === "routemap") clearInterval(routemapTimer);
				if (a === "showroom") clearInterval(showroomTimer);
    		$("#popup").find("img").hide();
  		}
		);
	});
});