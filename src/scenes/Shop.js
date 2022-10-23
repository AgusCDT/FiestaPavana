import MenuButton from '../components/MenuButton.js';
 
export default class Shop extends Phaser.Scene {
	constructor() {
		super({ key: 'shop' });
		this.MenuButton = new MenuButton(this); 
	}
	 // preload de la imagen de la shop
	 preload() {
	 	this.load.image('shop',  './assets/imagenes/otras/shop.png');
	 	this.MenuButton.preload();
	 }
	 // creación del botón
	 create() {
	 	this.add.image(0, 0, 'shop').setOrigin(0, 0);
	 	this.MenuButton.create();
	 }
}
	