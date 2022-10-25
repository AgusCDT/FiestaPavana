import Pavana from '../entities/Pavana.js';
import Parallax from '../Parallax.js'

export default class Tierra extends Phaser.Scene {
	constructor() {
		super({ key: 'tierra' });
		this.Parallax = new Parallax(this);		
	}
	
	preload() {
		this.Parallax.preload(); 
	 	this.load.image('pavana', './assets/imagenes/gaviota.png');
	 	console.log("Creada");	 	
	}
	 
	create() {
		this.Parallax.create();		
	 	this.pavana = new Pavana(this, 100, 100); 		
	}

	update() {
		this.Parallax.update();
	}
}