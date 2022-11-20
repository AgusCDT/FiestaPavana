import Pavana from '../entities/Pavana.js';
import Parallax from '../Parallax.js';
import Enemies from '../entities/Enemies.js';
import Pups from '../entities/Pups.js';
import Transition from '../components/Transition.js';
import Cloud from '../Cloud.js';

export default class Tierra extends Phaser.Scene 
{
	constructor() 
	{
		super({ key: 'tierra' });
		this.width = 1200;
		this.height = 600;
	}

	// precarga de imágenes
	preload() 
	{
		this.load.image('backgroundTransition', './assets/imagenes/otras/backgroundBlack.png');
		this.load.image('road', './assets/escenarios/Tierra/Carretera/Carretera.jpg');
		this.load.image('space', './assets/escenarios/Espacio/Espacio.jpg');
		this.load.image('sea', './assets/escenarios/SobreMar/SobreMar.jpg');
		this.load.image('disco','./assets/escenarios/Tierra/Discoteca/Discoteca.jpg');
	 	this.load.image('pavana', './assets/imagenes/gaviota.png');
	 	this.load.image('enemy1', './assets/imagenes/enemigos/toy-car.png');
	 	this.load.image('enemy3', './assets/imagenes/enemigos/ufo.png');
	 	this.load.image('spacePup', './assets/imagenes/objetos/astronaut.png'); 
	 	this.load.image('seaPup', './assets/imagenes/objetos/lifebuoy.png');
	 	this.load.image('roadPup', './assets/imagenes/objetos/traffic_cone.png');
	 	this.load.image('discoPup', './assets/imagenes/objetos/cloth.png');
	 	this.load.image('goldenFish', './assets/imagenes/objetos/pez-dorado.png');
		this.load.image('feather', './assets/imagenes/otras/feather.png');
		this.load.image('balloon', './assets/imagenes/obstacles/balloon.png');
		this.load.spritesheet('enemy2', './assets/imagenes/obstacles/plane.png', { frameWidth: 110.86, frameHeight: 73.30});
	}
	 
	// creación de Pavana y el fondo
	create() 
	{
		this.parallax = new Parallax(this);
		this.parallax.setDepth(0);
	 	this.pavana = new Pavana(this, 100, 100);
		this.cloud = new Cloud(this);
		this.timerE = 0;
		this.timerP = 0;
		this.timerC = 0;	
		this.transition = new Transition(this);
		this.id='road';
		this.limitE=Phaser.Math.Between(1,10)*100;
		this.limitP=Phaser.Math.Between(1,10)*100;
		this.limitC=Phaser.Math.Between(1,10)*100;
	}
	
	pupRandom()
	{
		let x = Phaser.Math.Between(1,7);
		if(this.id=='road')
		{
			if (x < 4) {this.pup= new Pups(this,1200,500,'spacePup');}
			else if (x >= 4 && x <7) {this.pup= new Pups(this,1200,500,'seaPup');}
			else if (x == 7) {this.pup= new Pups(this,1200,500,'discoPup');}
		}
		else if(this.id=='space')
		{
			if (x < 4) {this.pup= new Pups(this,1200,500,'seaPup');}
			else if (x >= 4 && x <7) {this.pup= new Pups(this,1200,500,'roadPup');}
			else if (x == 7) {this.pup= new Pups(this,1200,500,'discoPup');}
		}
		else if(this.id=='sea')
		{
			if (x < 4) {this.pup= new Pups(this,1200,500,'spacePup');}
			else if (x >= 4 && x <7) {this.pup= new Pups(this,1200,500,'roadPup');}
			else if (x == 7) {this.pup= new Pups(this,1200,500,'discoPup');}
		}
		else if(this.id=='disco')
		{
			if (x == 1 || x == 2) {this.pup= new Pups(this,1200,500,'spacePup');}
			else if (x == 3 || x == 4) {this.pup= new Pups(this,1200,500,'roadPup');}
			else if (x == 5 || x == 6) {this.pup= new Pups(this,1200,500,'seaPup');}
		}
	}

	coinRandom() 
	{
		let coinProbability = Phaser.Math.Between(1,3);
		if (coinProbability == 1) 
		{
			this.pup = new Pups(this,1200,Phaser.Math.Between(50,this.height - 50),'goldenFish');
		}
	}
	
	enemyRandom()
	{
		let x = Phaser.Math.Between(1,6);
		if(this.id=='road')
		{
			if (x == 1) {this.enemy= new Enemies(this,1200,300,'enemy1', 0);}
			else if (x == 2) {this.enemy= new Enemies(this,1200,300,'enemy2', 1);}
			else if (x == 3) {this.enemy= new Enemies(this,1200,300,'enemy3', 2);}	
			else if (x == 4) {this.enemy= new Enemies(this,1200,300,'balloon', 2);}	
			else this.enemyRandom();
		}
		else if(this.id=='space')
		{
			if (x == 1) {this.enemy= new Enemies(this,1200,300,'enemy1', 0);}
			else if (x == 2) {this.enemy= new Enemies(this,1200,300,'enemy2', 1);}
			else if (x == 3) {this.enemy= new Enemies(this,1200,300,'enemy3', 2);}	
			else if (x == 4) {this.enemy= new Enemies(this,1200,300,'balloon', 2);}	
			else this.enemyRandom();
		}
		else if(this.id=='sea')
		{
			if (x == 1) {this.enemy= new Enemies(this,1200,300,'enemy1', 0);}
			else if (x == 2) {this.enemy= new Enemies(this,1200,300,'enemy2', 1);}
			else if (x == 3) {this.enemy= new Enemies(this,1200,300,'enemy3', 2);}	
			else if (x == 4) {this.enemy= new Enemies(this,1200,300,'balloon', 2);}	
			else this.enemyRandom();
		}
		else if(this.id=='disco')
		{
			if (x == 1) {this.enemy= new Enemies(this,1200,300,'enemy1', 0);}
			else if (x == 2) {this.enemy= new Enemies(this,1200,300,'enemy2', 1);}
			else if (x == 3) {this.enemy= new Enemies(this,1200,300,'enemy3', 2);}	
			else if (x == 4) {this.enemy= new Enemies(this,1200,300,'balloon', 2);}	
			else this.enemyRandom();
		}
	}


	update() 
	{	
		console.log(this.limitP);
		this.parallax.update();
		this.timerE=this.timerE+1;
		this.timerP=this.timerP+1;
		this.timerC=this.timerC+1;

		if(this.timerE>=this.limitE)
		{
			this.enemyRandom();
			this.timerE=0;
			this.limitE=Phaser.Math.Between(1,10)*100;
		}
		if(this.timerP>=this.limitP) 
		{
			this.pupRandom();
			this.timerP=0;
			this.limitP=Phaser.Math.Between(1,10)*100;
		}
		if(this.timerC>=200)
		{
			this.coinRandom();
			this.timerC=0;
			this.limitC=Phaser.Math.Between(1,10)*100;
		}	
	}
}