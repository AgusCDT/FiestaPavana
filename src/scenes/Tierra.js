import Pavana from '../entities/Pavana.js';
import Parallax from '../Parallax.js'
import Enemies from '../entities/Enemies.js'

export default class Tierra extends Phaser.Scene 
{
	constructor() {
		super({ key: 'tierra' });
		this.Parallax = new Parallax(this);		
	}
	
	preload() {
		this.Parallax.preload(); 
	 	this.load.image('pavana', './assets/imagenes/gaviota.png');
	 	this.load.image('enemy1', './assets/imagenes/enemigos/toy-car.png');
	 	this.load.image('enemy2', './assets/imagenes/enemigos/shark.png');
	 	this.load.image('enemy3', './assets/imagenes/enemigos/eagle.png');
	 	this.load.image('enemy4', './assets/imagenes/enemigos/ufo.png');
	 	this.load.image('espacio', './assets/imagenes/gaviota.png');
	 	this.load.image('mar', './assets/imagenes/enemigos/lifebuoy.png');
	 	this.load.image('tierra', './assets/imagenes/enemigos/traffic_cone.png');
	 	this.load.image('discoteca', './assets/imagenes/enemigos/eagle.png');
	 	this.load.image('pezdorado', './assets/imagenes/enemigos/pez-dorado.png');
	 	console.log("Creada");	 	
	}
	 
	create() {
		this.Parallax.create();		
	 	this.pavana = new Pavana(this, 100, 100); 		
	}

	update() {

		this.Parallax.update();
		setTimeOut(enemyrandom,5000);
	}

	puprandom()
	{
		var x = Math.Floor((Math.Random()*6);
		if (x == 1) {this.enemy= new Enemies(this,1200,300,'espacio');}
		else if (x == 2) {this.enemy= new Enemies(this,1200,300,'mar');}
		else if (x == 3) {this.enemy= new Enemies(this,1200,300,'tierra');}
		else if (x == 4) {this.enemy= new Enemies(this,1200,300,'discoteca');}
		else if (x == 5) {this.enemy= new Enemies(this,1200,300,'pezdorado');}
		else puprandom();
	}

	enemyrandom()
	{
		var x = Math.Floor((Math.Random()*5));
		if (x == 1) {this.enemy= new Enemies(this,1200,300,'enemy1');}
		else if (x == 2) {this.enemy= new Enemies(this,1200,300,'enemy2');}
		else if (x == 3) {this.enemy= new Enemies(this,1200,300,'enemy3');}
		else if (x == 4) {this.enemy= new Enemies(this,1200,300,'enemy4');}
		else enemyrandom();
	}
	//habrá una funcion bool que devuelva el valor de si has comprado un pup u otro
}