import MenuButton from '../components/MenuButton.js';
import LifeButton from '../components/LifeButton.js';
import TrophyButton from '../components/TrophyButton.js';
import SpaceButton from '../components/SpaceButton.js';
import SeaButton from '../components/SeaButton.js';
import BeachButton from '../components/BeachButton.js';

export default class Shop extends Phaser.Scene {
	constructor() {
		super({ key: 'shop' });
		//this.cloud = new Cloud(this);
		this.cloud;
		
	}
	init (save) {
		this.cloud = save.cloud;
	}
	preload() {
	 	this.load.image('shop',  './assets/imagenes/otras/shopWithoutButtons.png');
		this.load.image('lifebutton', './assets/componentes/featherButton.png');
		this.load.image('trophybutton', './assets/componentes/trophyButton.png');
		this.load.image('spacebutton', './assets/componentes/spaceButton.png');
		this.load.image('seabutton', './assets/componentes/seaButton.png');
		this.load.image('beachbutton', './assets/componentes/beachButton.png');
		this.load.image('soldout', './assets/imagenes/otras/soldOut.png');
	}
	 
	create() {
	 	this.add.image(0, 0, 'shop').setOrigin(0, 0);
		this.label = this.add.text(1105, 20, this.cloud.getCoins(), { fontFamily: 'Cooper Black', fontSize: 30, color: '#00FF00' });
		this.MenuButton = new MenuButton(this, this.cloud, 690, 450);
		this.LifeButton = new LifeButton(this, this.cloud);
		this.TrophyButton = new TrophyButton(this, this.cloud);
		this.SpaceButton = new SpaceButton(this, this.cloud);
		this.SeaButton = new SeaButton(this, this.cloud);
		this.BeachButton = new BeachButton(this, this.cloud);
		this.MenuButton.create();
		this.LifeButton.create();
		this.TrophyButton.create();
		this.SpaceButton.create();
		this.SeaButton.create();
		this.BeachButton.create();
	}

	updateLabel() {
		this.label.destroy();
		this.label = this.add.text(1105, 20, this.cloud.getCoins(), { fontFamily: 'Cooper Black', fontSize: 30, color: '#00FF00' });
	}
}
	