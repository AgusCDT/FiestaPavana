import { MenuButton } from '../components/MenuButton.js'
 
export default class Shop extends Phaser.Scene {
	constructor() {
		super({ key: 'shop' });
		this.MenuButton = new MenuButton(this); 
	}
	 // preload de la imagen de la shop
	 preload() {
	 	this.load.image('shop', /*direccion imagen*/);
	 	this.MenuButton.preload();
	 }
	 // creación del botón
	 create() {
	 	this.add.image(/*posicion y key*/)
	 	this.MenuButton.create();
	 }
}
	