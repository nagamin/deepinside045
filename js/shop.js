

var imgFile= new Array(); //�摜�t�@�C�� �z��ϐ��B
  imgFile[0]="images/annexImg_1.jpg";
	imgFile[1]="images/annexImg_2.jpg";
	imgFile[2]="images/annexImg_3.jpg";
	imgFile[3]="images/annexImg_4.jpg";
	imgFile[4]="images/annexImg_5.jpg";
	imgFile[5]="images/streetImg_1.jpg";
	imgFile[6]="images/streetImg_2.jpg";
	imgFile[7]="images/streetImg_3.jpg";
	imgFile[8]="images/streetImg_4.jpg";
	imgFile[9]="images/streetImg_5.jpg";
	imgFile[10]="images/yokohamaImg_1.jpg";
	imgFile[11]="images/yokohamaImg_2.jpg";
	imgFile[12]="images/yokohamaImg_3.jpg";
	imgFile[13]="images/yokohamaImg_4.jpg";
	imgFile[14]="images/yokohamaImg_5.jpg";

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
	// Movie Slider
	/==============================*/
	/*$('#movieSlider').bxSlider({
		controls: false,
		speed: 500,
		pager: false,
		auto: true,
		pause: 4000
	});/*/
	$('#movieSlideCont').bxSlider();
	
	
		
});