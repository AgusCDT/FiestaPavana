import { ShopButton } from '../components/ShopButton.js'
 
export default class Menu extends Phaser.Scene {
	constructor() {
		super({ key: 'menu' });
		this.ShopButton = new ShopButton(this); 
	}
	 // preload de la imagen del menu
	 preload() {
	 	this.load.image('menu', /*direccion imagen*/);
	 	this.ShopButton.preload();
	 }
	 // creación del botón
	 create() {
	 	this.add.image(/*posicion y key*/)
	 	this.ShopButton.create();
	 }
}
	