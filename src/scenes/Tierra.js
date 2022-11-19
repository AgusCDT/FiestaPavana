import Pavana from '../entities/Pavana.js'
import Parallax from '../Parallax.js'
import Enemies from '../entities/Enemies.js'
import Pups from '../entities/Pups.js'
import HUD from '../entities/HUD.js';
import Transition from '../components/Transition.js'

export default class Tierra extends Phaser.Scene 
{
	constructor() {
		super({ key: 'tierra' });
	}
	// precarga de imágenes
	preload() {
		this.load.image('transition', './assets/imagenes/otras/backgroundBlack.png');
		this.load.image('road', './assets/escenarios/Tierra/Carretera/Carretera.jpg');
		this.load.image('space', './assets/escenarios/Espacio/space.jpg');
	 	this.load.image('pavana', './assets/imagenes/gaviota.png');
	 	this.load.image('enemy1', './assets/imagenes/enemigos/toy-car.png');
	 	this.load.spritesheet('enemy2', './assets/imagenes/obstacles/plane.png', { frameWidth: 110.86, frameHeight: 73.30});
	 	this.load.image('enemy3', './assets/imagenes/enemigos/ufo.png');
	 	this.load.image('spacePup', './assets/imagenes/objetos/astronaut-helmet.png'); 
	 	this.load.image('seaPup', './assets/imagenes/objetos/lifebuoy.png');
	 	this.load.image('roadPup', './assets/imagenes/objetos/traffic_cone.png');
	 	this.load.image('discoPup', './assets/imagenes/objetos/cloth.png');
	 	this.load.image('goldenfish', './assets/imagenes/objetos/pez-dorado.png');
		this.load.image('feather', './assets/imagenes/otras/feather.png');
		this.load.image('balloon', './assets/imagenes/obstacles/balloon.png');
	 	console.log("Creada");
	}
	 
	// creación de Pavana y el fondo
	create() {
		this.parallax = new Parallax(this);
		this.parallax.setDepth(0);
	 	this.pavana = new Pavana(this, 100, 100); 
		//this.hud = new HUD(this, 50, 50);
		//this.hud.drawLife();
		this.timerE = 0;
		this.timerP = 0;	
		this.transition = new Transition(this);
		this.id='road';
		this.limitE=Phaser.Math.Between(1,10)*100;
		this.limitP=Phaser.Math.Between(1,10)*100;
	}
	
	pupRandom()
	{
		let x = Phaser.Math.Between(1,8);
		if(this.id=='road')
		{
			if (x < 4) {this.pup= new Pups(this,1200,500,'spacePup',1);this.id='space';}
			//else if (x >= 4 && x <7) {this.pup= new Pups(this,1200,500,'seaPup',1);this.id='sea';}
			//else if (x == 7) {this.pup= new Pups(this,1200,500,'discoPup',1);this.id='disco';}
			else if (x == 8) {this.pup= new Pups(this,1200,500,'goldenFish',1);}
			else this.pupRandom();
		}
		else if(this.id=='space')
		{
			//if (x < 4) {this.pup= new Pups(this,1200,500,'seaPup',1);this.id='sea';}
			if (x >= 4 && x <7) {this.pup= new Pups(this,1200,500,'roadPup',1);this.id='road';}
			//else if (x == 7) {this.pup= new Pups(this,1200,500,'discoPup',1);this.id='disco';}
			else if (x == 8) {this.pup= new Pups(this,1200,500,'goldenFish',1);}
			else this.pupRandom();
		}
		else if(this.id=='sea')
		{
			if (x < 4) {this.pup= new Pups(this,1200,500,'spacePup',1);this.id='space';}
			else if (x >= 4 && x <7) {this.pup= new Pups(this,1200,500,'roadPup',1);this.id='road';}
			//else if (x == 7) {this.pup= new Pups(this,1200,500,'discoPup'),1;this.id='disco';}
			else if (x == 8) {this.pup= new Pups(this,1200,500,'goldenFish',1);}
			else this.pupRandom();
		}
		else if(this.id=='disco')
		{
			for (var i =0; i<10;i++)
			{
				for (var j=0; j<4;j++)
				{
					this.pup=new Pups(this,150+i*100,150+j*10,'goldenFish',0);
				}
			}
		}
	}


	/*enemyRandom()
	{
		let x = Phaser.Math.Between(1,6);
		if (x == 1) {this.enemy= new Enemies(this,1200,300,'enemy1', 0);}
		else if (x == 2) {this.enemy= new Enemies(this,1200,300,'enemy2', 1);}
		else if (x == 3) {this.enemy= new Enemies(this,1200,300,'enemy3', 2);}	
		else if (x == 4) {this.enemy= new Enemies(this,1200,300,'balloon', 2);}	
		else this.enemyRandom();

		if(this.id=='road')
		{
			let x = Phaser.Math.Between(1,6);
		if (x == 1) {this.enemy= new Enemies(this,1200,300,'enemy1', 0);}
		else if (x == 2) {this.enemy= new Enemies(this,1200,300,'enemy2', 1);}
		else if (x == 3) {this.enemy= new Enemies(this,1200,300,'enemy3', 2);}	
		else if (x == 4) {this.enemy= new Enemies(this,1200,300,'balloon', 2);}	
		else this.enemyRandom();
		}
		else if(this.id=='space')
		{
			let x = Phaser.Math.Between(1,6);
		if (x == 1) {this.enemy= new Enemies(this,1200,300,'enemy1', 0);}
		else if (x == 2) {this.enemy= new Enemies(this,1200,300,'enemy2', 1);}
		else if (x == 3) {this.enemy= new Enemies(this,1200,300,'enemy3', 2);}	
		else if (x == 4) {this.enemy= new Enemies(this,1200,300,'balloon', 2);}	
		else this.enemyRandom();
		}
		else if(this.id=='sea')
		{
			let x = Phaser.Math.Between(1,6);
		if (x == 1) {this.enemy= new Enemies(this,1200,300,'enemy1', 0);}
		else if (x == 2) {this.enemy= new Enemies(this,1200,300,'enemy2', 1);}
		else if (x == 3) {this.enemy= new Enemies(this,1200,300,'enemy3', 2);}	
		else if (x == 4) {this.enemy= new Enemies(this,1200,300,'balloon', 2);}	
		else this.enemyRandom();
		}
		else if(this.id=='disco')
		{
			let x = Phaser.Math.Between(1,6);
		if (x == 1) {this.enemy= new Enemies(this,1200,300,'enemy1', 0);}
		else if (x == 2) {this.enemy= new Enemies(this,1200,300,'enemy2', 1);}
		else if (x == 3) {this.enemy= new Enemies(this,1200,300,'enemy3', 2);}	
		else if (x == 4) {this.enemy= new Enemies(this,1200,300,'balloon', 2);}	
		else this.enemyRandom();
		}
	}*/


	update() {	
		console.log(this.limitP);
		this.parallax.update();
		this.timerE=this.timerE+1;
		this.timerP=this.timerP+1;
		if(this.timerE>=this.limitE)
		{
			//this.enemyRandom();
			this.timerE=0;
			this.limitE=Phaser.Math.Between(1,10)*100;
		}
		if(this.timerP>=this.limitP)
		{
			this.pupRandom();
			this.timerP=0;
			this.limitP=Phaser.Math.Between(1,10)*100;
		}
		
	}

	//habrá una funcion bool que devuelva el valor de si has comprado un pup u otro
}