export default class PlayButton{
	
	constructor(scene){
		this.relatedScene = scene;
	}

	preload() {
		this.relatedScene.load.image('playbutton', './assets/componentes/BotonPlay.png');
	}

	create(){
		this.playButton = this.relatedScene.add.image(400, 140, 'playbutton').setInteractive();
		this.playButton.on('pointerdown',() => {
			this.relatedScene.scene.start('tierra');
		});
	}
}