import ShopButton from '../components/ShopButton.js';
import PlayButton from '../components/PlayButton.js';
import MenuButton from '../components/MenuButton.js';

export default class GameOver extends Phaser.Scene{
    constructor() {
        super({ key: 'GameOver' });
		this.cloud;
    }

	init(save) {
		this.cloud = save.save;
	}

    preload() {
		this.load.image('GameOver', './assets/escenarios/SobreMar/SobreMar.jpg');	 	
	 	this.load.spritesheet('playbutton', './assets/componentes/BotonPlay.png', { frameWidth: 176, frameHeight: 93});
		this.load.spritesheet('shopbutton', './assets/componentes/BotonShop.png', { frameWidth: 176, frameHeight: 93});
	}
	
	create() {
	 	this.add.image(0, 0, 'GameOver').setOrigin(0, 0);
		this.MenuButton = new MenuButton(this, this.cloud);
		this.MenuButton.create();
	}
}