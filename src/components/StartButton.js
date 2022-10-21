export class StartButton{
	
	constructor(scene){
		this.relatedScene = scene;
	}
	preload() {
		this.relatedScene.load.spritesheet('',/*direccion de imagen, { frameWidth:..})	*/	
	}
	create() {
		this.StartButton = this.relatedScene.add.sprite( , ,)
	}
}