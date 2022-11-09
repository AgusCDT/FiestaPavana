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
		var timerE;
		var timerP;
		this.Parallax.preload(); 
	 	this.load.image('pavana', './assets/imagenes/gaviota.png');
	 	this.load.image('enemy1', './assets/imagenes/enemigos/toy-car.png');
	 	this.load.image('enemy2', './assets/imagenes/enemigos/shark.png');
	 	this.load.image('enemy3', './assets/imagenes/enemigos/eagle.png');
	 	this.load.image('enemy4', './assets/imagenes/enemigos/ufo.png');
	 	this.load.image('espacio', './assets/imagenes/gaviota.png');
	 	this.load.image('mar', './assets/imagenes/objetos/lifebuoy.png');
	 	this.load.image('tierra', './assets/imagenes/objetos/traffic_cone.png');
	 	this.load.image('discoteca', './assets/imagenes/objetos/cloth.png');
	 	this.load.image('pezdorado', './assets/imagenes/objetos/pez-dorado.png');
	 	console.log("Creada");	 	
	}
	 
	
	create() {
		this.Parallax.create();		
	 	this.pavana = new Pavana(this, 100, 100); 	
		this.timerE=0; 
		this.timerP=0;	
	}

	puprandom()
	{
		var x = Phaser.Math.Between(1,6);
		if (x == 1) {this.enemy= new Enemies(this,800,500,'espacio');}
		else if (x == 2) {this.enemy= new Enemies(this,800,500,'mar');}
		else if (x == 3) {this.enemy= new Enemies(this,800,500,'tierra');}
		else if (x == 4) {this.enemy= new Enemies(this,800,500,'discoteca');}
		else if (x == 5) {this.enemy= new Enemies(this,800,500,'pezdorado');}
		else this.puprandom();
	}

	enemyrandom()
	{
		var x = Phaser.Math.Between(1,5);
		if (x == 1) {this.enemy= new Enemies(this,800,300,'enemy1');}
		else if (x == 2) {this.enemy= new Enemies(this,800,300,'enemy2');}
		else if (x == 3) {this.enemy= new Enemies(this,800,300,'enemy3');}
		else if (x == 4) {this.enemy= new Enemies(this,800,300,'enemy4');}
		else this.enemyrandom();
	}

	update() {
		
		this.Parallax.update();
		this.timerE=this.timerE+1;
		this.timerP=this.timerP+1;
		if(this.timerE>=100)
		{
			this.enemyrandom();
			this.timerE=0;
		}
		if(this.timerP>=300)
		{
			this.puprandom();
			this.timerP=0;
		}
	}

	//habrá una funcion bool que devuelva el valor de si has comprado un pup u otro
}