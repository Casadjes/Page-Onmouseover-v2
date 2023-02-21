function toggle() {
	const menuToggle = document.querySelector(".menuToggle");
	const navigation = document.querySelector(".navigation");
	menuToggle.classList.toggle("active");
	navigation.classList.toggle("active");
}

function imgSlider(param) {
	document.getElementById("slider").src = param;
}
