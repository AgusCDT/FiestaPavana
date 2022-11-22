import MenuButton from '../components/MenuButton.js';
import LifeButton from '../components/LifeButton.js';
import TrophyButton from '../components/TrophyButton.js';
 
export default class Shop extends Phaser.Scene {
	constructor() {
		super({ key: 'shop' });
		this.MenuButton = new MenuButton(this);
		this.LifeButton = new LifeButton(this);
		this.TrophyButton = new TrophyButton(this);
	}
	 
	preload() {
	 	this.load.image('shop',  './assets/imagenes/otras/shopWithoutButtons.png');
		this.load.image('lifebutton', './assets/componentes/featherButton.png');
		this.load.image('trophybutton', './assets/componentes/trophyButton.png');
		this.load.spritesheet('menubutton', './assets/componentes/BotonMenu.png', { frameWidth: 176, frameHeight: 93});
	}
	 
	create() {
	 	this.add.image(0, 0, 'shop').setOrigin(0, 0);
	 	this.MenuButton.create();
		this.LifeButton.create();
		this.TrophyButton.create();
	}
}
	