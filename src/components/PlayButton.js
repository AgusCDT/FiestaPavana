export default class PlayButton{
	
	constructor(scene){
		this.relatedScene = scene;
	}

	preload() {
		this.relatedScene.load.image('playbutton', './assets/imagenes/componentes/BotonPlay.png');
	}

	create(){
		this.startButton = this.relatedScene.add.image(400, 140, 'playbutton').setInteractive();
		this.startButton.on('pointerdown',() => {
			this.relatedScene.scene.start('tierra');
		});
	}
}