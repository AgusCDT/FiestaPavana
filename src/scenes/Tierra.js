import Pavana from '../entities/Pavana.js';
import Parallax from '../Parallax.js';
import Asteroid from '../entities/Enemies/Asteroid.js';
import UFO from '../entities/Enemies/UFO.js';
import Plane from '../entities/Enemies/Plane.js';
import Car from '../entities/Enemies/Car.js';
import Tree from '../entities/Enemies/Tree.js';
import Dolphin from '../entities/Enemies/Dolphin.js';
import Balloon from '../entities/Enemies/Balloon.js';
import Eagle from '../entities/Enemies/Eagle.js';
import Island from '../entities/Enemies/Island.js';
import Boat from '../entities/Enemies/Boat.js';
import Pups from '../entities/Pups.js';
import Goldenfish from '../entities/Goldenfish.js';
import Transition from '../components/Transition.js';
import Sign from '../entities/Enemies/Sign.js';

export default class Tierra extends Phaser.Scene 
{
	constructor() {
		super({ key: 'tierra' });
		this.width = 1200;
		this.height = 600;
		this.cloud;
	}

	init(save) {
		this.cloud = save.cloud;
	}

	// Precarga de imágenes
	preload() {
		this.load.image('backgroundTransition', './assets/imagenes/otras/backgroundBlack.png');
		this.load.image('bomb', './assets/imagenes/otras/bomba-nuclearM.png');
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
		this.load.image('space', './assets/escenarios/Espacio/Espacio.jpg');
		// this.load.image('space_1', './assets/escenarios/Espacio/space_1.png');
		// this.load.image('space_2', './assets/escenarios/Espacio/space_2.png');
		// this.load.image('planets_1', './assets/escenarios/Espacio/planets_1.png');
		// this.load.image('planets_2', './assets/escenarios/Espacio/planets_2.png');
		// Disco background
		this.load.image('hawaii','./assets/escenarios/Fiesta/Fiesta.jpg');
		// Pavana 
		this.load.spritesheet('pavanaRight', './assets/imagenes/PavanaRightAnimation.png', { frameWidth: 75, frameHeight: 39});
		this.load.spritesheet('pavanaLeft', './assets/imagenes/PavanaLeftAnimation.png', { frameWidth: 75, frameHeight: 39});
		this.load.spritesheet('pavanaLeftDeath', './assets/imagenes/PavanaLeftAnimationDeath1.png', { frameWidth: 75, frameHeight: 39});
		this.load.spritesheet('pavanaRightDeath', './assets/imagenes/PavanaRightAnimationDeath1.png', { frameWidth: 75, frameHeight: 39});
		// Enemies
		this.load.spritesheet('car', './assets/imagenes/enemigos/car.png', { frameWidth: 175, frameHeight: 100});
		this.load.spritesheet('ufo', './assets/imagenes/enemigos/UFO.png', { frameWidth: 100, frameHeight: 100});
		this.load.spritesheet('eagle', './assets/imagenes/enemigos/eagleAnimation.png', { frameWidth: 79, frameHeight: 77});
		this.load.spritesheet('dolphin', './assets/imagenes/enemigos/delfin.png', { frameWidth: 90, frameHeight: 90});
		this.load.spritesheet('plane', './assets/imagenes/obstacles/plane.png', { frameWidth: 111, frameHeight: 73});
		// Obstacles
		this.load.spritesheet('asteroid', './assets/imagenes/obstacles/asteroid.png', { frameWidth: 199, frameHeight: 201});
		this.load.spritesheet('island', './assets/imagenes/obstacles/island.png', { frameWidth: 194, frameHeight: 254});
		this.load.spritesheet('boat', './assets/imagenes/obstacles/boatAnimation.png', { frameWidth: 75, frameHeight: 90});
		this.load.spritesheet('balloon', './assets/imagenes/obstacles/balloonAnimation.png', { frameWidth: 99, frameHeight: 154});
		this.load.spritesheet('tree1','./assets/imagenes/obstacles/tree1.png', { frameWidth: 102, frameHeight: 116});
		this.load.spritesheet('sign', './assets/imagenes/obstacles/StopSign.png', { frameWidth: 47, frameHeight: 116});
		// Pups
	 	this.load.image('spacePup', './assets/imagenes/objetos/astronaut.png'); 
	 	this.load.image('seaPup', './assets/imagenes/objetos/lifebuoy.png');
	 	this.load.image('roadPup', './assets/imagenes/objetos/traffic_cone.png');
	 	this.load.image('hawaiiPup', './assets/imagenes/objetos/shirt.png');
		// Coins
	 	this.load.image('goldenFish', './assets/imagenes/objetos/pez-dorado.png');
		this.load.image('gold', './assets/imagenes/otras/gold.png');
		// HUD
		this.load.image('feather', './assets/imagenes/otras/feather.png');
		// Audio
		//Music
        this.load.audio('roadSound', './assets/sonidos/roadSound.mp3');
        this.load.audio('spaceSound', './assets/sonidos/spaceSound.mp3');
        this.load.audio('seaSound', './assets/sonidos/seaSound.mp3');
        this.load.audio('hawaiiSound', './assets/sonidos/hawaiiSound.mp3');
		//inGame
        this.load.audio('damage', './assets/sonidos/Damage.mp3');
		this.load.audio('coin', './assets/sonidos/coin.mp3');
		this.load.audio('pupSound', './assets/sonidos/pupSound.mp3');
	}
	 
	// Creación de componentes y parámetros
	create() {
		this.parallax = new Parallax(this, this.music);
		this.parallax.setDepth(0);
	 	this.pavana = new Pavana(this, 100, 100);
		this.timerE = 0;
		this.timerP = 0;
		this.timerC = 0;	
		this.gameTime=0;
		this.music = this.sound.add('roadSound');
		this.music.play();
		this.music.setLoop(true);
		this.transition = new Transition(this);
		this.id ='road';
		this.limitE=Phaser.Math.Between(1,10);
		this.limitP=Phaser.Math.Between(2,10);
		this.limitC=Phaser.Math.Between(4,10);
		this.elementsArray = [];
		this.hawaiiPlace=false;
		this.hawaiiCoins=false;
		this.hawaiiTime=0;
		this.coinsCounterHawaii=0;
		this.HUD();
	}

	HUD() {
		// Texto e imagen de las monedas
		this.labelFish = this.add.text(1105, 10, this.cloud.getCoins(), { fontFamily: 'Cooper Black', fontSize: 30, color: '#E10000' });
		this.imageFish = this.add.image(1075, 30, 'goldenFish').setScale(0.7,0.7).setRotation(0.6);
		// Texto score
		this.labelScore = this.add.text(370, 20, this.cloud.getScore(), { fontFamily: 'Cooper Black', fontSize: 30, color: '#E10000' }); 
		this.highScore = this.add.text(700, 20, 'HighScore: ' +this.cloud.getHighScore(), { fontFamily: 'Cooper Black', fontSize: 30, color: '#E10000' });
		// Vidas
		this.pavana.loadLife();
		
		this.labelFish.setDepth(2);
		this.labelScore.setDepth(2);
		this.highScore.setDepth(2);
		this.imageFish.setDepth(2);
	}

	updateLabelFish() { // Actualización al coger una moneda
		this.labelFish.destroy();
		this.labelFish = this.add.text(1105, 10, this.cloud.getCoins(), { fontFamily: 'Cooper Black', fontSize: 30, color: '#E10000' });
		this.imageFish.destroy();
		this.imageFish = this.add.image(1075, 30, 'goldenFish').setScale(0.7,0.7).setRotation(0.6);
	}

	updateLabelScore() { // Actualización del score durante la run
		this.labelScore.destroy();
		this.labelScore = this.add.text(370, 20, 'Score: '+ this.cloud.getScore(), { fontFamily: 'Cooper Black', fontSize: 30, color: '#E10000' });
	}

	cleanObjects() {
		this.elementsArray.forEach(element => element.destroy());
		this.elementsArray.length = 0;
	}
	
	pupRandom() {
		this.id = this.parallax.checkId();
		let x = Phaser.Math.Between(1,7);
		if(this.id=='roadId')
		{
			if (x < 4 && this.cloud.getSpace() == 1) { this.elementsArray.push(new Pups(this,Phaser.Math.Between(50, 1150),-70,'spacePup'));}
			else if (x >= 4 && x < 7 && this.cloud.getSea() == 1) { this.elementsArray.push(new Pups(this,Phaser.Math.Between(50, 1150),-70,'seaPup'));}
			else if (x == 7 && this.cloud.getBeach() == 1) { this.elementsArray.push(new Pups(this,Phaser.Math.Between(50, 1150),-70,'hawaiiPup'));}
		}
		else if(this.id=='spaceId')
		{
			if (x < 4 && this.cloud.getSea() == 1) { this.elementsArray.push(new Pups(this,Phaser.Math.Between(50, 1150),-70,'seaPup'));}
			else if (x >= 4 && x <7) { this.elementsArray.push(new Pups(this,Phaser.Math.Between(50, 1150),-70,'roadPup'));}
			else if (x == 7 && this.cloud.getBeach() == 1) { this.elementsArray.push(new Pups(this,Phaser.Math.Between(50, 1150),-70,'hawaiiPup'));}
		}
		else if(this.id=='seaId')
		{
			if (x < 4 && this.cloud.getSpace() == 1) { this.elementsArray.push(new Pups(this,Phaser.Math.Between(50, 1150),-70,'spacePup'));}
			else if (x >= 4 && x < 7) { this.elementsArray.push(new Pups(this,Phaser.Math.Between(50, 1150),-70,'roadPup'));}
			else if (x == 7 && this.cloud.getBeach() == 1) { this.elementsArray.push(new Pups(this,Phaser.Math.Between(50, 1150),-70,'hawaiiPup'));}
		}
	}

	coinRandom() {
		if(this.id != 'hawaiiId')
		{
			let coinProbability = Phaser.Math.Between(1,3);
			if (coinProbability == 1) 
			{
				this.elementsArray.push(new Goldenfish(this,1200,Phaser.Math.Between(50,this.height - 50),'goldenFish',false, 'coin'));
			}
		}
	}
	
	enemyRandom() {
		this.id = this.parallax.checkId();
		let x = Phaser.Math.Between(1,7);
		//let x = 7;
		if(this.id == 'roadId')
		{
			if (x == 1) {this.elementsArray.push(new Car(this,1200,(Phaser.Math.Between(0,1)*40)+440));}
			else if (x == 2) {this.elementsArray.push(new Balloon(this,1200,Phaser.Math.Between(100,300)));}
			else if (x == 3) {this.elementsArray.push(new Eagle(this,1200,Phaser.Math.Between(100,500)));}
			else if (x == 4) {this.elementsArray.push(new Plane(this,1200,Phaser.Math.Between(100,400), 1));}
			else if (x == 5) {this.elementsArray.push(new Tree(this,1200,500));}
      		else if(x == 6) {this.elementsArray.push(new Sign(this,1200,500));}
			else this.enemyRandom();
		}
		else if(this.id =='spaceId')
		{
			if (x == 1) {this.elementsArray.push(new Asteroid(this,1200,Phaser.Math.Between(100,500)));}
			else if (x <= 5) {this.elementsArray.push(new UFO(this,1200,Phaser.Math.Between(50, 550)));}
			else this.enemyRandom(); 
		}
		else if(this.id =='seaId')
		{
			if (x == 1) {this.elementsArray.push(new Boat(this,1200,Phaser.Math.Between(42,52)*10));}
			else if (x == 2) {this.elementsArray.push(new Dolphin(this,1200,550));}
			else if (x == 3) {this.elementsArray.push(new Island(this,1200,440));}
			else if (x == 4) {this.elementsArray.push(new Plane(this,1200, Phaser.Math.Between(100, 400), 2));}
			else this.enemyRandom();
		}
	}

	goldenHawaii() {
		this.hawaiiCoins=true;
		for(let i=0; i<5;i++)
		{
			for(let j=0;j<5;j++)
			{
				this.elementsArray.push(new Goldenfish(this,400+i*100,200+j*50,'goldenFish',true));
				this.coinsCounterHawaii=(i+1)*(j+1)	;
			}
		}
		this.hawaiiPlace=true;
	}

	coinsHawaii() {
		this.coinsCounterHawaii-=1;	
		if(this.coinsCounterHawaii==0)
		{
			this.hawaiiCoins=false;
		}
	}
	update(t,dt) {	
		this.gameTime += dt/1000;
		this.parallax.update();
		this.updateLabelScore(); 
		this.timerE += dt/1000;
		this.timerP += dt/1000;
		this.timerC += dt/1000;
		if(parseInt(this.timerE)>=this.limitE)
		{
			this.enemyRandom();
			this.timerE = 0;
			let value = Phaser.Math.Between(1,10)-parseInt(this.gameTime/10);
			this.limitE=Phaser.Math.Clamp(value,1,10);
		}
		if(parseInt(this.timerP)>=this.limitP) 
		{
			this.pupRandom();
			this.timerP = 0;
			this.limitP = Phaser.Math.Between(2,10);
		}
		if(parseInt(this.timerC)>=this.limitC)
		{
			this.coinRandom();
			this.timerC = 0;
			this.limitC = Phaser.Math.Between(4,10);
		}
		if(this.hawaiiPlace)
		{
			this.hawaiiTime += dt/1000;
			if(parseInt(this.hawaiiTime)>=10||!this.hawaiiCoins)
			{
				this.transition.transition('roadPup');
				this.updateLabelFish();
				this.hawaiiPlace = false;
				this.hawaiiTime = 0;	
			}
		}
	}
}