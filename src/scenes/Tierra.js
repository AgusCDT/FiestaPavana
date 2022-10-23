import Pavana from '../entities/Pavana.js';

export default class Tierra extends Phaser.Scene {
	constructor() {
		super({ key: 'tierra' });		
	}
	/*precarga de las imagenes que van en las escenas*/ 
	preload() {
		/*hay que colocar la direccion de la imagen del escenario. Ahora está una de ejemplo*/
	 	this.load.image('tierra', './assets/imagenes/otras/TRIOLIC.png'); 
	 	this.load.image('pavana', './assets/imagenes/gaviota.png');
	}
	 
	create() {
		/*hay que instanciarla de manera que cubra toda la pantalla(cambiar parámetros)*/
	 	this.add.image(0, 0, 'tierra').setOrigin(0, 0);

	 	/* instancio la pavana(cambiar parámetros)*/
	 	//let pavana = new Pavana(this, 20, 20);
	 	this.pavana = new Pavana(this, 20, 20);	
	 	this.spawn();	
	}
}