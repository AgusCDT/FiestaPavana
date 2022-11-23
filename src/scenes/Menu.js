import ShopButton from '../components/ShopButton.js';
import PlayButton from '../components/PlayButton.js';
import Cloud from '../Cloud.js';

export default class Menu extends Phaser.Scene {
	constructor() {
		super({ key: 'menu' });
		this.cloud = new Cloud();
		this.ShopButton = new ShopButton(this, this.cloud); 
		this.PlayButton = new PlayButton(this, this.cloud);
	}

	init(save) {
		this.cloud = save.cloud;
	}
	 
	preload() {
		this.load.image('skyRoad', './assets/escenarios/Carretera/skyRoad.png');	
		this.load.image('mountains', './assets/escenarios/Carretera/mountains_1.png');
		this.load.image('hills', './assets/escenarios/Carretera/hills.png');	
		this.load.image('road', './assets/escenarios/Carretera/road.png');
	 	this.load.spritesheet('playbutton', './assets/componentes/BotonPlay.png', { frameWidth: 176, frameHeight: 93});
		this.load.spritesheet('shopbutton', './assets/componentes/BotonShop.png', { frameWidth: 176, frameHeight: 93});
		this.load.spritesheet('menubutton', './assets/componentes/BotonMenu.png', { frameWidth: 176, frameHeight: 93});
	}
	
	create() {
		this.add.image(0, 0, 'skyRoad').setOrigin(0, 0);
		this.add.image(0, 0, 'mountains').setOrigin(0, 0);
		this.add.image(0, 0, 'hills').setOrigin(0, 0);
	 	this.add.image(0, 0, 'road').setOrigin(0, 0);
	 	this.ShopButton.create();
	 	this.PlayButton.create();
	}
}
	