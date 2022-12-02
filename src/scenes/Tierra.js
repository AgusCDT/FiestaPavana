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
import Pups from '../entities/Pups.js';
import Goldenfish from '../entities/Goldenfish.js';
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
		this.load.spritesheet('pavanaRight', './assets/imagenes/PavanaRightAnimation.png', { frameWidth: 75, frameHeight: 39});
		this.load.spritesheet('pavanaLeft', './assets/imagenes/PavanaLeftAnimation.png', { frameWidth: 75, frameHeight: 39});
		// Enemies
		this.load.image('car', './assets/imagenes/enemigos/car.png');
		this.load.spritesheet('ufo', './assets/imagenes/enemigos/UFO.png', { frameWidth: 100, frameHeight: 100});
		this.load.spritesheet('eagle', './assets/imagenes/enemigos/eagleAnimation.png', { frameWidth: 79, frameHeight: 77});
		this.load.spritesheet('dolphin', './assets/imagenes/enemigos/delfin.png', { frameWidth: 90, frameHeight: 90});
		this.load.spritesheet('plane', './assets/imagenes/obstacles/plane.png', { frameWidth: 111, frameHeight: 73});
		// Obstacles
		this.load.spritesheet('asteroid', './assets/imagenes/obstacles/asteroid.png', { frameWidth: 199, frameHeight: 201});
		this.load.spritesheet('island', './assets/imagenes/obstacles/island.png', { frameWidth: 194, frameHeight: 254});
		this.load.spritesheet('boat', './assets/imagenes/obstacles/boatAnimation.png', { frameWidth: 75, frameHeight: 90});
		this.load.spritesheet('balloon', './assets/imagenes/obstacles/balloonAnimation.png', { frameWidth: 99, frameHeight: 154});
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
		//Audio
        this.load.audio('roadSound', './assets/sonidos/roadSound.wav');
        this.load.audio('spaceSound', './assets/sonidos/spaceSound.wav');
        this.load.audio('seaSound', './assets/sonidos/seaSound.wav');
        this.load.audio('hawaiiSound', './assets/sonidos/hawaiiSound.wav');
        //this.load.audio('coin', './assets/sonidos/Coin.mp3');
	}
	 
	// creación de Pavana y el fondo
	create() 
	{
		this.parallax = new Parallax(this);
		this.parallax.setDepth(0);
	 	this.pavana = new Pavana(this, 100, 100);
		this.timerE = 0;
		this.timerP = 0;
		this.timerC = 0;	
		this.playTime=0;
		this.transition = new Transition(this);
		this.id ='road';
		this.limitE=100;
		this.limitP=Phaser.Math.Between(1,10)*100;
		this.limitC=Phaser.Math.Between(1,10)*100;
		this.elementsArray = [];
		//this.coin = this.make.sprite(1105, 20, 'goldenFish');
		this.HUD();
		//this.events.on('goldenParticle', particle);
	}

	HUD() {
		this.labelFish = this.add.text(1105, 20, this.cloud.getCoins(), { fontFamily: 'Arial', fontSize: 20, color: '#E10000' });
		this.labelScore = this.add.text(800, 20, this.cloud.getScore(), { fontFamily: 'Arial', fontSize: 20, color: '#E10000' });
		this.pavana.loadLife();
		
		this.labelFish.setDepth(2);
		this.labelScore.setDepth(2);
	}

	updateLabelFish() { // actualización al coger una moneda
		this.labelFish.destroy();
		this.labelFish = this.add.text(1105, 20, this.cloud.getCoins(), { fontFamily: 'Arial', fontSize: 20, color: '#E10000' });
	}

	updateLabelScore(){ // actualización del score durante la run
		this.labelScore.destroy();
		this.labelScore = this.add.text(400, 20, 'Score: '+ this.cloud.getScore(), { fontFamily: 'Arial', fontSize: 20, color: '#E10000' });
	}

	cleanObjects()
	{
		this.elementsArray.forEach(element => element.destroy());
		this.elementsArray.length = 0;
	}
	
	pupRandom()
	{
		this.id=this.parallax.checkId();
		let x = Phaser.Math.Between(1,7);
		if(this.id=='roadId')
		{
			if (x < 4 && this.cloud.getSpace() == 1) { this.elementsArray.push(new Pups(this,1200,500,'spacePup'));}
			else if (x >= 4 && x < 7 && this.cloud.getSea() == 1) { this.elementsArray.push(new Pups(this,1200,500,'seaPup'));}
			else if (x == 7 && this.cloud.getBeach() == 1) { this.elementsArray.push(new Pups(this,1200,500,'hawaiiPup'));}
		}
		else if(this.id=='spaceId')
		{
			if (x < 4 && this.cloud.getSea() == 1) { this.elementsArray.push(new Pups(this,1200,500,'seaPup'));}
			else if (x >= 4 && x <7) { this.elementsArray.push(new Pups(this,1200,500,'roadPup'));}
			else if (x == 7 && this.cloud.getBeach() == 1) { this.elementsArray.push(new Pups(this,1200,500,'hawaiiPup'));}
		}
		else if(this.id=='seaId')
		{
			if (x < 4 && this.cloud.getSpace() == 1) { this.elementsArray.push(new Pups(this,1200,500,'spacePup'));}
			else if (x >= 4 && x < 7) { this.elementsArray.push(new Pups(this,1200,500,'roadPup'));}
			else if (x == 7 && this.cloud.getBeach() == 1) { this.elementsArray.push(new Pups(this,1200,500,'hawaiiPup'));}
		}
		else if(this.id=='hawaiiId')
		{
			if ((x == 1 || x == 2 ) && this.cloud.getSpace() == 1) { this.elementsArray.push(new Pups(this,1200,500,'spacePup'));}
			else if (x == 3 || x == 4) { this.elementsArray.push(new Pups(this,1200,500,'roadPup'));}
			else if ((x == 5 || x == 6) && this.cloud.getSea() == 1) { this.elementsArray.push(new Pups(this,1200,500,'seaPup'));}
		}
	}

	coinRandom() 
	{
		let coinProbability = Phaser.Math.Between(1,3);
		if (coinProbability == 1) 
		{
			//this.goldenfish = new Goldenfish(this,1200,Phaser.Math.Between(50,this.height - 50),'goldenFish');
			//this.scene.events.emit('goldenParticle');
			this.elementsArray.push(new Goldenfish(this,1200,Phaser.Math.Between(50,this.height - 50),'goldenFish'));
		}
	}
	
	enemyRandom()
	{
		this.id = this.parallax.checkId();
		let x = Phaser.Math.Between(1,5);
		//let x = 3;
		if(this.id == 'roadId')
		{
			if (x == 1) {new Car(this,1200,(Phaser.Math.Between(0,1)*40)+440);}
			if (x == 2) {this.elementsArray.push(new Balloon(this,1200,100));}
			else if (x == 3) {new Eagle(this,1200,100);}
			else if (x == 4) {this.elementsArray.push(new Plane(this,1200,Phaser.Math.Between(100,400)));}	
			else this.enemyRandom();
		}
		else if(this.id =='spaceId')
		{
			if (x == 1) {this.elementsArray.push(new Asteroid(this,1200,300));}
			else if (x <= 5) {this.elementsArray.push(new UFO(this,1200,Phaser.Math.Between(100, 500)));}
			else this.enemyRandom(); 
		}
		else if(this.id =='seaId')
		{
			//if (x == 1) {new Boat(this,1200,Phaser.Math.Between(42,52)*10);}
			if (x == 2) {this.elementsArray.push(new Plane(this,1200, Phaser.Math.Between(100, 400)));}
			else if (x == 3) {this.elementsArray.push(new Island(this,1200,440));}
			else if(x == 4){this.elementsArray.push(new Dolphin(this,1200,550));}
			else this.enemyRandom();
		}
	}

	soundManager(){
        this.id = this.parallax.checkId();
        if(this.id =='roadId')
        {
            this.audio = this.sound.add("roadSound");
        }
        else if(this.id =='spaceId')
        {
            this.audio = this.sound.add("spaceSound");
        }
        else if(this.id =='seaId')
        {
            this.audio = this.sound.add("seaSound");
        }
        else if(this.id == 'hawaiiId')
        {
            this.audio = this.sound.add("hawaiiSound");
            console.log('audio cambiado');
        }
        this.audio.play();
        this.audio.setLoop(true);
    }
	update() 
	{	
		this.parallax.update();
		this.updateLabelScore(); 
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
/*function particle () {
	var particles = this.scene.add.particles('gold');

var emitter = particles.createEmitter();

emitter.setPosition(200, 200);
emitter.setSpeed(100);
emitter.setBlendMode(Phaser.BlendModes.ADD);
}*/