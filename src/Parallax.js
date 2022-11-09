export default class Parallax{

	constructor(scene){
		this.relatedScene = scene;
	}

	preload(){
		this.relatedScene.load.image('parallax', './assets/escenarios/Espacio/space.jpg');
	}

	create(){
		this.parallax = this.relatedScene.add.tileSprite(0, 0, 3200, 600, 'parallax').setOrigin(0,0);		
	}

	update(){
		this.parallax.tilePositionX += 0.75;
	}
}