var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.getElementById("btn");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomBackground () {
	color1.value = colorRandomGenerator();
	color2.value = colorRandomGenerator();
	setGradient();
}


function colorRandomGenerator () {
	var hexColor = Math.random().toString(16);
	hexColor = '#' + hexColor.slice(2,8);
	return hexColor;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

btn.addEventListener("click", randomBackground);

