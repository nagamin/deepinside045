
	
var imgFile= new Array(); //画像ファイル 配列変数。
  imgFile[0]="images/keyImage_1.jpg";
  imgFile[1]="images/keyImage_2.jpg";
	imgFile[2]="images/keyImage_3.jpg";
	imgFile[3]="images/keyImage_4.jpg";
	imgFile[4]="images/keyImage_5.jpg";
	imgFile[5]="images/keyImage_6.jpg";
	imgFile[6]="images/keyImage_7.jpg";
	imgFile[8]="images/keyImage_8.jpg";
	

  var prImg= new Array();
  for (i=0; i<imgFile.length; i++){ //imgFile.length はその個数。
  	prImg[i] = new Image();//新しいイメージ(画像)オブジェクトを生成
  	prImg[i].src = imgFile[i];//srcプロパティで画像ファイルのアドレス（URL)を設定。
  }
	
$(function(){
		
	/*==============================/
	// Photo Viewer
	/==============================*/
	$('#viewer').panelGallery();

	/*==============================/
	// Slide Items
	/==============================*/
	$('.slideItems').cycle({
		fx: 'scrollLeft',
		speed: 800,
		timeout: 6000
	});
	
	/*==============================/
	// Slide Magazines
	/==============================*/
	$('.slideMagazines').cycle({
		fx: 'scrollLeft',
		speed: 500,
		timeout: 5000
	});
	
	/*==============================/
	// Png Fix
	/==============================*/
	$("#mask").fixPng();
	
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
	
	/*==============================/
	// em banner
	/==============================*/
	var lightBox = $('#em a');
	
	if(lightBox.length){
		$('#em a').lightBox({fixedNavigation:true});
	}
	
	
	
});


