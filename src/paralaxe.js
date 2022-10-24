const canvas=document.getElementById('canvas');
const ctx=canvas.getContext('2d');
const player= new Image();
player.src= './assets/imagenes/gaviota.png';

const fondo= new Image(),
fondo.src='prueba.png';
const FND =
{
	x1:0,
	x2:canvas.width,
	y:0,
	width: canvas.width,
	height: canvas.height
}

function controlFondo()
{
	if (FND.x1<=-canvas.width) FND.x1=FND.width;
	else FND.x1-=5;
	ctx.drawImage(fondo,FND.x1,FND.y,FND.width,FND.height);
	ctx.drawImage(fondo,FND.x2,FND.y,FND.width,FND.height);
}

function paralaje()
{
	ctx.clearRect(0,0,canvas.width,canvas.height);
	controlFondo();
	requestAnimationFrame(paralaje);
}