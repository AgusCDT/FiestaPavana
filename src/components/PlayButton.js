export default class PlayButton{
	
	constructor(scene){
		this.relatedScene = scene;
	}

	preload() {
		this.relatedScene.load.spritesheet('playbutton', './assets/componentes/BotonPlay.png', { frameWidth: 176, frameHeight: 93});
	}

	create(){
		this.playButton = this.relatedScene.add.sprite(400, 450, 'playbutton').setInteractive();

		this.playButton.on('pointerover', () => {
			this.playButton.setFrame(1);
		});

		this.playButton.on('pointerout', () => {
			this.playButton.setFrame(0);
		});

		this.playButton.on('pointerdown',() => {
			this.relatedScene.scene.start('tierra');
		});
	}
}