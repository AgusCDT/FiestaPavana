import ShopButton from '../components/ShopButton.js';
import PlayButton from '../components/PlayButton.js';

export default class Menu extends Phaser.Scene {
	constructor() {
		super({ key: 'menu' });
		this.ShopButton = new ShopButton(this); 
		this.PlayButton = new PlayButton(this);
	}
	 
	preload() {
		this.load.image('menu', './assets/escenarios/Tierra/Carretera/Carretera.jpg');
	 	this.ShopButton.preload();
	 	this.PlayButton.preload();
	}
	
	create() {
	 	this.add.image(0, 0, 'menu').setOrigin(0, 0);
	 	this.ShopButton.create();
	 	this.PlayButton.create();
	}
}
	