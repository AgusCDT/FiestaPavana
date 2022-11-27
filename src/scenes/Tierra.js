import Pavana from '../entities/Pavana.js';
import Parallax from '../Parallax.js';
import Enemies from '../entities/Enemies/Enemies.js';
import Asteroid from '../entities/Enemies/Asteroid.js';
import UFO from '../entities/Enemies/UFO.js';
import Plane from '../entities/Enemies/Plane.js';
import Car from '../entities/Enemies/Car.js';
import Dolphin from '../entities/Enemies/Dolphin.js';
import Balloon from '../entities/Enemies/Balloon.js';
import Eagle from '../entities/Enemies/Eagle.js';
import Island from '../entities/Enemies/Island.js';
import Boat from '../entities/Enemies/Boat.js';
/*import Enemies from '../entities/Enemies/Enemies.js';
import Enemies from '../entities/Enemies/Enemies.js';*/
import Pups from '../entities/Pups.js';
import Transition from '../components/Transition.js';

export default class Tierra extends Phaser.Scene 
{
	constructor() 
	{
		super({ key: 'tierra' });
		this.width = 1200;
		this.height = 600;
		this.cloud;
	}
	init(save) {
		this.cloud = save.cloud;
	}
	// precarga de imágenes
	preload() 
	{
		this.load.image('backgroundTransition', './assets/imagenes/otras/backgroundBlack.png');
		// Road Parallax
		this.load.image('skyRoad', './assets/escenarios/Carretera/skyRoad.png');	
		this.load.image('mountains', './assets/escenarios/Carretera/mountains_1.png');
		this.load.image('hills', './assets/escenarios/Carretera/hills.png');	
		this.load.image('road', './assets/escenarios/Carretera/road.png');
		// Sea Parallax
		this.load.image('skySea', './assets/escenarios/SobreMar/skySea.png');
		this.load.image('clouds', './assets/escenarios/SobreMar/clouds.png');
		this.load.image('islands', './assets/escenarios/SobreMar/islands.png');
		this.load.image('sea', './assets/escenarios/SobreMar/sea.png');
		// Space Parallax
		this.load.image('space_1', './assets/escenarios/Espacio/space_1.png');
		this.load.image('space_2', './assets/escenarios/Espacio/space_2.png');
		this.load.image('planets_1', './assets/escenarios/Espacio/planets_1.png');
		this.load.image('planets_2', './assets/escenarios/Espacio/planets_2.png');
		// Disco background
		this.load.image('hawaii','./assets/escenarios/Fiesta/Fiesta.jpg');
		// Pavana 
	 	this.load.image('pavana', './assets/imagenes/gaviota.png');
		// Enemies
		this.load.image('car', './assets/imagenes/enemigos/car.png');
		this.load.spritesheet('ufo', './assets/imagenes/enemigos/UFO.png', { frameWidth: 100, frameHeight: 100});
		this.load.image('eagle', './assets/imagenes/enemigos/eagle.png');
		this.load.spritesheet('dolphin', './assets/imagenes/enemigos/delfin.png', { frameWidth: 90, frameHeight: 90});
		this.load.spritesheet('plane', './assets/imagenes/obstacles/plane.png', { frameWidth: 111, frameHeight: 73});
		// Obstacles
		this.load.image('asteroid', './assets/imagenes/obstacles/asteroid.png');
		this.load.spritesheet('island', './assets/imagenes/obstacles/island.png', { frameWidth: 194, frameHeight: 254});
		this.load.image('boat', './assets/imagenes/obstacles/boat.png');
		this.load.spritesheet('balloon', './assets/imagenes/obstacles/balloonAnimation.png', { frameWidth: 99, frameHeight: 154});
		// Pups
	 	this.load.image('spacePup', './assets/imagenes/objetos/astronaut.png'); 
	 	this.load.image('seaPup', './assets/imagenes/objetos/lifebuoy.png');
	 	this.load.image('roadPup', './assets/imagenes/objetos/traffic_cone.png');
	 	this.load.image('hawaiiPup', './assets/imagenes/objetos/shirt.png');
		// Coins
	 	this.load.image('goldenFish', './assets/imagenes/objetos/pez-dorado.png');
		// HUD
		this.load.image('feather', './assets/imagenes/otras/feather.png');
	}
	 
	// creación de Pavana y el fondo
	create() 
	{
		this.parallax = new Parallax(this);
		this.parallax.setDepth(0);
	 	this.pavana = new Pavana(this, 100, 100);
		this.pavana.loadLife();
		this.timerE = 0;
		this.timerP = 0;
		this.timerC = 0;	
		this.playTime=0;
		this.transition = new Transition(this);
		this.id ='road';
		this.limitE=100;
		this.limitP=Phaser.Math.Between(1,10)*100;
		this.limitC=Phaser.Math.Between(1,10)*100;
	}

	cleanObjects()
	{
		this.enemy.destroy();
		this.pup.destroy();
	}
	
	pupRandom()
	{
		this.id=this.parallax.checkId();
		let x = Phaser.Math.Between(1,7);
		if(this.id=='roadId')
		{
			if (x < 4) {this.pup= new Pups(this,1200,500,'spacePup');}
			else if (x >= 4 && x <7) {this.pup= new Pups(this,1200,500,'seaPup');}
			else if (x == 7) {this.pup= new Pups(this,1200,500,'hawaiiPup');}
		}
		else if(this.id=='spaceId')
		{
			if (x < 4) {this.pup= new Pups(this,1200,500,'seaPup');}
			else if (x >= 4 && x <7) {this.pup= new Pups(this,1200,500,'roadPup');}
			else if (x == 7) {this.pup= new Pups(this,1200,500,'hawaiiPup');}
		}
		else if(this.id=='seaId')
		{
			if (x < 4) {this.pup= new Pups(this,1200,500,'spacePup');}
			else if (x >= 4 && x <7) {this.pup= new Pups(this,1200,500,'roadPup');}
			else if (x == 7) {this.pup= new Pups(this,1200,500,'hawaiiPup');}
		}
		else if(this.id=='hawaiiId')
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
		this.id = this.parallax.checkId();
		let x = 4;//Phaser.Math.Between(1,5);
		if(this.id=='roadId')
		{
			//if (x == 1) {new Car(this,1200,(Phaser.Math.Between(0,1)*40)+440);}
			//else if (x == 2) {new Plane(this,1200,100);}
			//else if (x == 3) {new Eagle(this,1200,100);}	
			if (x == 4) {new Plane(this,1200,Phaser.Math.Between(100,400));}	
			else this.enemyRandom();
		}
		else if(this.id=='spaceId')
		{
			//if (x == 1) {new Asteroid(this,1200,300);}
			if (x <= 5) {new UFO(this,1200,Phaser.Math.Between(100, 500));}
			//else this.enemyRandom(); 
		}
		else if(this.id=='seaId')
		{
			//if (x == 1) {new Boat(this,1200,Phaser.Math.Between(42,52)*10);}
			if (x == 2) {new Plane(this,1200, Phaser.Math.Between(100, 400));}
			else if (x == 3) {new Island(this,1200,440);}
			else if(x==4){new Dolphin(this,1200,550);}
			else this.enemyRandom();
		}
	}


	update() 
	{	
		this.parallax.update();
		this.timerE=this.timerE+1;
		this.timerP=this.timerP+1;
		this.timerC=this.timerC+1;
		this.playTime+=1;
		if(this.timerE>=this.limitE)
		{
			this.enemyRandom();
			this.timerE=0;
			this.limitE=Phaser.Math.Between(1,10)*100-(this.playTime/200);
			console.log(this.limitE);
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