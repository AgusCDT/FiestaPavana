export default class ShopButton{

	constructor(scene){
		this.relatedScene = scene;
	}

	preload(){
		this.relatedScene.load.spritesheet('shopbutton', './assets/componentes/BotonShop.png', { frameWidth: 176, frameHeight: 93});
	}

	create(){
		this.shopButton = this.relatedScene.add.sprite(400, 550, 'shopbutton').setInteractive();

		this.shopButton.on('pointerover', () => {
			this.shopButton.setFrame(1);
		});

		this.shopButton.on('pointerout', () => {
			this.shopButton.setFrame(0);
		});

		this.shopButton.on('pointerdown',() => {
			this.relatedScene.scene.start('shop');
		});
	}
}