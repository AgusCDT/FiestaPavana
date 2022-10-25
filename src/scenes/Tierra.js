import Pavana from '../entities/Pavana.js';

export default class Tierra extends Phaser.Scene {
	constructor() {
		super({ key: 'tierra' });		
	}
	
	preload() {
	 	this.load.image('tierra', './assets/escenarios/Tierra/Carretera/Carretera.jpg'); 
	 	this.load.image('pavana', './assets/imagenes/gaviota.png');
	 	console.log("Creada");
	}
	 
	create() {
	 	this.add.image(0, 0, 'tierra').setOrigin(0, 0);
	 	this.pavana = new Pavana(this, 100, 100);	
	}
}