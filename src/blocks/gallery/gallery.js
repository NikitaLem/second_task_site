var i = 0;

document.querySelector('.arw-btn_right').addEventListener('click', next_img);
document.querySelector('.arw-btn_left').addEventListener('click', prev_img);

function next_img() {
    var image = document.querySelectorAll('.image');
    var text = document.querySelector('.gallery__text').innerText;
    var altName = document.querySelector('.image_show').alt;
	image[i].classList.remove('image_show');
	i++;
	if(i==image.length)
		i=0;
    image[i].classList.add('image_show');
    text = altName;
}

function prev_img() {
    var image = document.querySelectorAll('.image');
    var text = document.querySelector('.gallery__text').innerText;
    var altName = document.querySelector('.image_show').alt;
	image[i].classList.remove('image_show');
	i--;
	if(i<0)
		i=image.length-1;
    image[i].classList.add('image_show');
    console.log(altName);
    console.log(text);
    text = altName;
    console.log(text);
}

/*function setText() {
    var text = document.querySelector('.gallery__text').innerText;
    var altName = document.querySelector('.image_show').alt;
    console.log(altName);
    console.log(text);
    text = altName;
    console.log(text);
}*/