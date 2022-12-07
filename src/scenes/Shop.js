import MenuButton from '../components/MenuButton.js';
import LifeButton from '../components/LifeButton.js';
import TrophyButton from '../components/TrophyButton.js';
import SpaceButton from '../components/SpaceButton.js';
import SeaButton from '../components/SeaButton.js';
import BeachButton from '../components/BeachButton.js';

export default class Shop extends Phaser.Scene {
	constructor() {
		super({ key: 'shop' });
        
		this.cloud;
	}

	init (save) {
		this.cloud = save.cloud;
	}
	
	// Precarga de imágenes
	preload() {
	 	this.load.image('shop',  './assets/imagenes/otras/shopWithoutButtons.png');
		this.load.image('lifebutton', './assets/componentes/featherButton.png');
		this.load.image('trophybutton', './assets/componentes/trophyButton.png');
		this.load.image('spacebutton', './assets/componentes/spaceButton.png');
		this.load.image('seabutton', './assets/componentes/seaButton.png');
		this.load.image('beachbutton', './assets/componentes/beachButton.png');
		this.load.image('soldout', './assets/imagenes/otras/soldOut.png');
		this.load.audio('buy', './assets/sonidos/ShopSound.mp3');
	}
	 
	// Creación de los botones y la imagen de fondo
	create() {
	 	this.add.image(0, 0, 'shop').setOrigin(0, 0);
		this.buy = this.sound.add('buy');
		this.label = this.add.text(1105, 10, this.cloud.getCoins(), { fontFamily: 'Cooper Black', fontSize: 30, color: '#E10000' });
		this.MenuButton = new MenuButton(this, this.cloud, 690, 450);
		this.LifeButton = new LifeButton(this, this.cloud, this.buy);
		this.TrophyButton = new TrophyButton(this, this.cloud, this.buy);
		this.SpaceButton = new SpaceButton(this, this.cloud, this.buy);
		this.SeaButton = new SeaButton(this, this.cloud, this.buy);
		this.BeachButton = new BeachButton(this, this.cloud, this.buy);
		this.MenuButton.create();
		this.LifeButton.create();
		this.TrophyButton.create();
		this.SpaceButton.create();
		this.SeaButton.create();
		this.BeachButton.create();
	}

	// Metodo para actualizar el indicador de monedas
	updateLabel() {
		this.label.destroy();
		this.label = this.add.text(1105, 10, this.cloud.getCoins(), { fontFamily: 'Cooper Black', fontSize: 30, color: '#00FF00' });
	}
}
	