export default class Button {
    constructor(scene, image, x, y, key) {
        this.image = image;
        this.relatedScene = scene;
        this.x = x;
        this.y = y;
    }
  
    create() {
        this.Button = this.relatedScene.add.sprite(this.x, this.y, this.image).setInteractive();
  
        this.Button.on('pointerover', () => {
            if (this.image == 'playbutton' || this.image == 'menubutton' || this.image == 'shopbutton'){
                this.Button.setFrame(1);
            }
        });
        this.Button.on('pointerout', () => {
            if (this.image == 'playbutton' || this.image == 'menubutton' || this.image == 'shopbutton'){
                this.Button.setFrame(0);
            }
        });
        this.Button.on('pointerdown', () => {
            this.ClickButton();
        });
        /*this.Button.on('pointerdown', function() {
            Game.scene.tweens.add(
                {
                    targets: logo,
                    scaleX: 0.9,
                    scaleY: 0.9,
                    duration: 50,
                    yoyo: true
                }
            );
        });*/
    }
}