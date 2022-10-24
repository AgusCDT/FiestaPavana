var ancho=1310;
var alto=500;
var canvas,ctx;

var terreno1,terreno2;
function Imagenes()
{
	terreno1=new Image();

	terreno1.src= 'assets/escenarios/Tierra/Carretera/prueba.png';
}

function inicializa()
{
	canvas=document.getElementById('canvas');
	ctx=canvas.getContext('2d');
	Imagenes();
}

function borraCanvas()
{
	canvas.width=ancho;
	canvas.height=alto;
}

function pintaFondo()
{
	ctx.drawImage(terreno1,0,0,512,512,200,200,100,100)
}



var FPS=20;
setInterval(function(){principal();},1000/10)


function principal()
{
	borraCanvas();
	pintaFondo();
}