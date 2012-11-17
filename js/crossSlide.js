

jQuery.extend(jQuery.easing,
{
  easeInOutExpo: function (x, t, b, c, d) {
    if (t == 0) return b;
    if (t == d) return b + c;
    if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
    return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
  },
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	}
});


(function ($) {
	$.fn.extend({
		panelGallery: function (options) {
			 
			var defaults =
			{
				baseImg: "keyImage_8.jpg",
				stay: 1500,
				viewDuration: 0,
				transitionDuration: 500
			};
				 
			var options = $.extend(defaults, options);
			
			return this.each(function () {
				var o = options;
				var obj = $(this);
				var numImages = $('img', obj).length;
				var imgDimensions = { width: $('img:first', obj).width(), height: $('img:first', obj).height() };
				var currentImage = 0;
				var imageArray = new Array();
				var imageNameArray = new Array();
				var timeout;
				var firstTime = true;
				var mouseover = false;
							
				$(obj).width(imgDimensions.width).height(imgDimensions.height).css({ 'position': 'relative', 'overflow': 'hidden' });
				
				$('img', obj).each(function () {
					imageArray.push($(this).attr('src'));
					imageNameArray.push($(this).attr('name'));
					$(this).remove();
				});
				
				//start gallery
				timeout = setTimeout(function () { pickFX() }, o.viewDuration); 
					 
				function galleryFX(name) {
					if (name == 'fade') {
						$(obj).append('<img src="' + imageArray[0] + '">');
						$('img:eq(0)', obj).css({ 'position': 'absolute', 'top': '0', 'left': '0' }).hide().fadeIn(o.transitionDuration);
						setTimeout(function () {
							$('img:eq(0)', obj).fadeOut(o.transitionDuration);
							cleanupAndProceed();
						}, o.stay);
					}
					if (name == 'slideDownAndFade') {
						$(obj).append('<img src="' + imageArray[0] + '">');
						$('img:eq(0)', obj).css({ 'position': 'absolute', 'top': '0', 'left': '0' }).hide().fadeIn(o.transitionDuration);
						
						setTimeout(function () {
							$('img:eq(0)', obj).animate({ top: '100px', opacity: 0 },{ duration: o.transitionDuration * 2, easing: 'easeInQuad'});
						}, o.stay * 1.7);
						
						setTimeout(function () {
							cleanupAndProceed();
						}, o.stay * 2);
					}
				} 
				function cleanupAndProceed(delay) {
					delay = (!delay) ? o.transitionDuration : delay;
					setTimeout(function () {
						if (!mouseover) {
							firstTime = false;
							
							$('.box', obj).remove(); // Remove all div boxes - we'll rebuild them quickly
				
							timeout = setTimeout(function () {
								imageArray.push(imageArray.shift()); // moves first array element to last spot
								imageNameArray.push(imageNameArray.shift());
								$('img', obj).remove(); // Remove all images from container
								pickFX();
							}, o.viewDuration);
						}
					}, delay);
				}
				function pickFX() {
					randomFXarray = new Array(
					"fade",
					"slideDownAndFade"
					);
					
					switcher = (imageArray[0].indexOf(o.baseImg) !== -1) ? randomFXarray[1] : randomFXarray[0];
					galleryFX(switcher);
				} 
			});
		}
	});
})(jQuery);
