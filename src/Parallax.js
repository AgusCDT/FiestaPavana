export default class Parallax extends Phaser.GameObjects.Sprite{

	constructor(scene)
	{
		super(scene);
		this.scene.add.existing(this);
		this.parallax = this.scene.add.tileSprite(0, 0, 3200, 600, 'road').setOrigin(0,0);	
		this.id='road';	
	}
	changeBackground(id)
	{
		this.parallax = this.scene.add.tileSprite(0, 0, 3200, 600, id).setOrigin(0,0);	
		this.id=id;
	}
	update(){
		this.parallax.tilePositionX += 0.75;
	}

	checkId()
	{
		return this.id;
	}
}