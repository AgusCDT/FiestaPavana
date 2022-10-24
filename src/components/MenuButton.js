export default class MenuButton{

	constructor(scene){
		this.relatedScene = scene;
	}

	preload(){
		this.relatedScene.load.spritesheet('menubutton', './assets/componentes/BotonMenu.png', { frameWidth: 176, frameHeight: 93});
	}

	create(){
		this.menuButton = this.relatedScene.add.sprite(400, 550, 'menubutton').setInteractive();

		this.menuButton.on('pointerover', () => {
			this.menuButton.setFrame(1);
		});

		this.menuButton.on('pointerout', () => {
			this.menuButton.setFrame(0);
		});

		this.menuButton.on('pointerdown',() => {
			this.relatedScene.scene.start('menu');
		});
	}

}