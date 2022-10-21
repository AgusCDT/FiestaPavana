/*Escena del juego. Aquí debería importarse el script de la pavana*/

export default class Tierra extends Phaser.Scene {
	constructor() {
		super({ key: 'tierra' });		
	}
	 // preload de la imagen de fondo
	 preload() {
	 	this.load.image('tierra', 'assets/imagenes/otras/TRIOLIC.png');
	 	
	 }
	 
	 create() {
	 	this.add.image(200, 200, 'tierra');
	 	
	 }
}