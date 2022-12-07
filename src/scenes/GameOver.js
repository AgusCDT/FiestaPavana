import MenuButton from '../components/MenuButton.js';

export default class GameOver extends Phaser.Scene {
    constructor() {
        super({ key: 'GameOver' });
		this.cloud;
    }

	init(save) {
		this.cloud = save.cloud;
	}

	// Precarga de imágenes
    preload() {
		this.load.image('GameOver', './assets/escenarios/Carretera/GameOver.jpg');	 	
	 	this.load.spritesheet('playbutton', './assets/componentes/BotonPlay.png', { frameWidth: 176, frameHeight: 93});
		this.load.spritesheet('shopbutton', './assets/componentes/BotonShop.png', { frameWidth: 176, frameHeight: 93});
		this.load.audio('pressButton', './assets/sonidos/pressButonSound.mp3');
	}
	
	// Creación de los botones y la imagen de fondo
	create() {
	 	this.add.image(0, 0, 'GameOver').setOrigin(0, 0);
		this.press = this.sound.add('pressButton');
		this.MenuButton = new MenuButton(this, this.cloud, 600, 450, this.press);
		this.MenuButton.create();
	}
}