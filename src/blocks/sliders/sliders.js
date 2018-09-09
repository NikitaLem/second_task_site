const sliderWithTrack = function() {
	const sliderTracks = [...document.querySelectorAll('.slider_track')];

	const changeSliderTrack = function changeOnInputSliderTrack(event) {
    const target = event.target;
    let val = target.value;
		target.style.background = `-webkit-linear-gradient(left, #4eb7a8 0%, #4eb7a8 ${val}%, #e5e5e5 ${val}% ,#e5e5e5 100%)`;
	};

	sliderTracks.forEach((item) => {
		item.addEventListener('input', changeSliderTrack, false);
	});
};

export {
  sliderWithTrack,
};
