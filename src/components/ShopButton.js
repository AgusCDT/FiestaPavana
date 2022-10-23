export default class ShopButton{

	constructor(scene){
		this.relatedScene = scene;
	}

	preload(){
		this.relatedScene.load.image('shopbutton', '.../assets/imagenes/componentes/BotonShop.png');
	}

	create(){
		this.shopButton = this.relatedScene.add.image(400, 400, 'shopbutton').setInteractive();
		this.shopButton.on('pointerdown',() => {
			this.relatedScene.scene.start('shop');
		});
	}
}