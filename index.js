var index = 0;
var images = []; 
images[0] = "https://raw.githubusercontent.com//choskim/ltc-image-carousel/blob/js-bin/images/minions-attitude.jpg";
images[1] = "https://raw.githubusercontent.com//choskim/ltc-image-carousel/blob/js-bin/images/minions-calm.jpg";
images[2] = "https://raw.githubusercontent.com//choskim/ltc-image-carousel/blob/js-bin/images/minions-focus.jpg";

var currentImg = document.getElementsByTagName('img')[0];
currentImg.setAttribute("src", images[index]); 

function nextImage(){
	index++;

	if (index > 2) {
    index = 0;
	}

	var currentImg = document.getElementsByTagName('img')[0];
	currentImg.setAttribute("src", images[index]); 
}
