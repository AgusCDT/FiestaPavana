import ShopButton from '../components/ShopButton.js';
import PlayButton from '../components/PlayButton.js';
import Cloud from '../Cloud.js';

export default class Menu extends Phaser.Scene {
	constructor() {
		super({ key: 'menu' });
		this.ShopButton = new ShopButton(this); 
		this.PlayButton = new PlayButton(this);
	}
	 
	preload() {
		this.load.image('menu', './assets/escenarios/Tierra/Carretera/Carretera.jpg');	 	
	 	this.load.spritesheet('playbutton', './assets/componentes/BotonPlay.png', { frameWidth: 176, frameHeight: 93});
		this.load.spritesheet('shopbutton', './assets/componentes/BotonShop.png', { frameWidth: 176, frameHeight: 93});
	}
	
	create() {
	 	this.add.image(0, 0, 'menu').setOrigin(0, 0);
	 	this.ShopButton.create();
	 	this.PlayButton.create();
	}
}
	