
	
var imgFile= new Array(); //�摜�t�@�C�� �z��ϐ��B
  imgFile[0]="images/keyImage_1.jpg";
  imgFile[1]="images/keyImage_2.jpg";
	imgFile[2]="images/keyImage_3.jpg";
	imgFile[3]="images/keyImage_4.jpg";
	imgFile[4]="images/keyImage_5.jpg";
	imgFile[5]="images/keyImage_6.jpg";
	imgFile[6]="images/keyImage_7.jpg";
	imgFile[8]="images/keyImage_8.jpg";
	

  var prImg= new Array();
  for (i=0; i<imgFile.length; i++){ //imgFile.length �͂��̌��B
  	prImg[i] = new Image();//�V�����C���[�W(�摜)�I�u�W�F�N�g�𐶐�
  	prImg[i].src = imgFile[i];//src�v���p�e�B�ŉ摜�t�@�C���̃A�h���X�iURL)��ݒ�B
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


