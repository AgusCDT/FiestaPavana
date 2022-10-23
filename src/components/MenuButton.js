export default class MenuButton{

	constructor(scene){
		this.relatedScene = scene;
	}

	preload(){
		this.relatedScene.load.image('menubutton', './assets/componentes/BotonMenu.png');
	}

	create(){
		this.menuButton = this.relatedScene.add.image(400, 230, 'menubutton').setInteractive();
		this.menuButton.on('pointerdown',() => {
			this.relatedScene.scene.start('menu');
		});
	}

}