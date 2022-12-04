//import Tierra from "./scenes/Tierra";

export default class Parallax extends Phaser.GameObjects.Sprite{

	constructor(scene)
	{
		super(scene);
		this.scene.add.existing(this);
		this.parallax1 = this.scene.add.tileSprite(0, 0, 3200, 600, 'skyRoad').setOrigin(0,0);
		this.parallax2 = this.scene.add.tileSprite(0, 0, 3200, 600, 'mountains').setOrigin(0,0);
		this.parallax3 = this.scene.add.tileSprite(0, 0, 3200, 600, 'hills').setOrigin(0,0);
		this.parallax4 = this.scene.add.tileSprite(0, 0, 3200, 600, 'road').setOrigin(0,0);	
		this.id = 'roadId';
		this.id1 = 'skyRoad';
		this.id2 = 'mountains';
		this.id3 = 'hills';
		this.id4 = 'road';	
	}
	changeBackground(id, id1, id2, id3, id4)
	{
		this.parallax1 = this.scene.add.tileSprite(0, 0, 3200, 600, id1).setOrigin(0,0);
		this.parallax2 = this.scene.add.tileSprite(0, 0, 3200, 600, id2).setOrigin(0,0);
		this.parallax3= this.scene.add.tileSprite(0, 0, 3200, 600, id3).setOrigin(0,0);
		this.parallax4 = this.scene.add.tileSprite(0, 0, 3200, 600, id4).setOrigin(0,0);	
		this.id = id;	
		this.id1 = id1;
		this.id2 = id2;
		this.id3 = id3;
		this.id4 = id4;
	}
	update(){
		if(this.id == 'hawaiiId')
		{
			this.parallax1.tilePositionX = 0.0; // escenario estático
		}
		else
		{
			this.parallax1.tilePositionX += 0.01;
			this.parallax2.tilePositionX += 0.2;
			this.parallax3.tilePositionX += 0.4;
			this.parallax4.tilePositionX += 0.75;
		}	
	}

	checkId()
	{
		return this.id;
	}
}