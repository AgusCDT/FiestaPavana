import ShopButton from '../src/components/ShopButton.js';
import PlayButton from '../src/components/PlayButton.js';

export default class Menu extends Phaser.Scene {
	constructor() {
		super({ key: 'menu' });
		this.ShopButton = new ShopButton(this); 
		this.PlayButton = new PlayButton(this);
	}
	 // preload de la imagen del menu
	 preload() {
	 	/*this.load.image('menu', './assets/imagenes/');*/
	 	this.ShopButton.preload();
	 	this.PlayButton.preload();
	 }
	 // creación del botón
	 create() {
	 	/*this.add.image(0, 0, 'menu').setOrigin(0, 0);*/
	 	this.ShopButton.create();
	 	this.PlayButton.create();
	 }
}
	