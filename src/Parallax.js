export default class Parallax{

	constructor(scene){
		this.relatedScene = scene;
		this.filename = 'Tierra/Carretera/Carretera.jpg';
	}

	preload(){
		this.relatedScene.load.image('parallax', './assets/escenarios/' + this.filename);
	}

	create(){
		this.parallax = this.relatedScene.add.tileSprite(0, 0, 3200, 600, 'parallax').setOrigin(0,0);		
	}

	updateBackground(filename){
		
		console.log("Carga");
	}
	update(){
		this.parallax.tilePositionX += 0.75;
	}
}