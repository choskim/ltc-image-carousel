var index = 0;
var images = []; 
images[0] = "images/minions-attitude.jpg"
images[1] = "images/minions-calm.jpg"
images[2] = "images/minions-focus.jpg"

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
