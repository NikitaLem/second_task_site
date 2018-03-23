var i = 0;

document.querySelector('.arw-btn_right').addEventListener('click', next_img);
document.querySelector('.arw-btn_left').addEventListener('click', prev_img);

function next_img() {
    var image = document.querySelectorAll('.image');
	image[i].classList.remove('image_show');
	i++;
	if(i==image.length)
		i=0;
    image[i].classList.add('image_show');
    document.querySelector('.gallery__text').innerText = document.querySelector('.image_show').alt;;
}

function prev_img() {
    var image = document.querySelectorAll('.image');
	image[i].classList.remove('image_show');
	i--;
	if(i<0)
		i=image.length-1;
    image[i].classList.add('image_show');
    document.querySelector('.gallery__text').innerText = document.querySelector('.image_show').alt;;
}