import ShopButton from '../components/ShopButton.js';
import PlayButton from '../components/PlayButton.js';
import Cloud from '../Cloud.js';

export default class Menu extends Phaser.Scene {
	constructor() {
		super({ key: 'menu' });
		this.cloud;
	}

	init(save) {
		this.cloud = save.cloud;
	}
	 
	// Precarga de imágenes
	preload() {
		this.load.image('skyRoad', './assets/escenarios/Carretera/skyRoad.png');	
		this.load.image('mountains', './assets/escenarios/Carretera/mountains_1.png');
		this.load.image('hills', './assets/escenarios/Carretera/hills.png');	
		this.load.image('road', './assets/escenarios/Carretera/road.png');
	 	this.load.spritesheet('playbutton', './assets/componentes/BotonPlay.png', { frameWidth: 176, frameHeight: 93});
		this.load.spritesheet('shopbutton', './assets/componentes/BotonShop.png', { frameWidth: 176, frameHeight: 93});
		this.load.spritesheet('menubutton', './assets/componentes/BotonMenu.png', { frameWidth: 176, frameHeight: 93});
		this.load.audio('pressButton', './assets/sonidos/pressButonSound.mp3');
	}
	
	// Creación de los botones y la imagen de fondo
	create() {
		this.add.image(0, 0, 'skyRoad').setOrigin(0, 0);
		this.add.image(0, 0, 'mountains').setOrigin(0, 0);
		this.add.image(0, 0, 'hills').setOrigin(0, 0);
	 	this.add.image(0, 0, 'road').setOrigin(0, 0);
		 this.sonido = this.sound.add('pressButton');
		 this.cloud = new Cloud();
		this.ShopButton = new ShopButton(this, this.cloud, this.sonido); 
		this.PlayButton = new PlayButton(this, this.cloud, this.sonido);
	 	this.ShopButton.create();
	 	this.PlayButton.create();
	}
}
	