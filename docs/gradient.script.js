const color1 = document.getElementById('first-color')
const color2 = document.getElementById('second-color')
const body = document.getElementById('gradient')
const css = document.getElementById('css')
const sColor1 = document.getElementById('sColor1')
const sColor2 = document.getElementById('sColor2')
let x = 254;
let y = 1;
let z = 1;
let a = 254;
let b = 254;
let c = 1;

function gradient() {
	document.body.style.background=`linear-gradient(to right, ${color1.value}, ${color2.value})`
	css.textContent = `linear-gradient(to right, ${color1.value}, ${color2.value})`
}
color1.addEventListener('input', gradient)
color2.addEventListener('input', gradient)

function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function wheelgradient1() {
	if (event.deltaY>0) {
		if (x+1<=255) {
			x=x+1
		} else {
			x=x-255
		}
		if (y+3<=255) {
			y=y+3
		} else {
			y=y-255
		}
		if (z+5<=255) {
			z=z+5
		} else {
			z=z-255
		}
	} else if (event.deltaY<0) {
		if (x-2>=0) {
			x=x-2
		} else {
			x=x+255
		}
		if (y-4>=0) {
			y=y-4
		} else {
			y=y+255
		}
		if (z-6>=0) {
			z=z-6
		} else {
			z=z+255
		}
	}
	color1.value=`${rgbToHex(x, y, z)}`
	document.body.style.background=`linear-gradient(to right, ${color1.value}, ${color2.value})`
	css.textContent = `linear-gradient(to right, ${color1.value}, ${color2.value})`
}

function wheelgradient2() {
	if (event.deltaY>0) {
		if (a+1<=255) {
			a=a+1
		} else {
			a=a-255
		}
		if (b+3<=255) {
			b=b+3
		} else {
			b=b-255
		}
		if (c+5<=255) {
			c=c+5
		} else {
			c=c-255
		}
	} else if (event.deltaY<0) {
		if (a-2>=0) {
			a=a-2
		} else {
			a=a+255
		}
		if (b-4>=0) {
			b=b-4
		} else {
			b=b+255
		}
		if (c-6>=0) {
			c=c-6
		} else {
			c=c+255
		}
	}
	color2.value=`${rgbToHex(a, b, c)}`
	document.body.style.background=`linear-gradient(to right, ${color1.value}, ${color2.value})`
	css.textContent = `linear-gradient(to right, ${color1.value}, ${color2.value})`
}

sColor1.addEventListener('wheel', wheelgradient1)
sColor2.addEventListener('wheel', wheelgradient2)

document.body.style.background=`linear-gradient(to right, ${color1.value}, ${color2.value})`
css.textContent = `linear-gradient(to right, ${color1.value}, ${color2.value})`




/*
	document.body.style.background=
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";
	css.textContent = document.body.style.background + ";"*/
