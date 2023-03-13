let css = document.querySelectorAll("h3")[0];
let css1 = document.querySelectorAll("h3")[1]
let color0 = document.querySelector(".color0");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");


function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	css1.textContent = body.style.background + ";";
}

function setGradientBodyText() {
	body.style.color = color0.value;

	css.textContent = body.style.color + ";";
}

color0.addEventListener('input', setGradientBodyText);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);










