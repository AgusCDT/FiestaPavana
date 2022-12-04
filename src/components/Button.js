export default class Button {
    constructor(scene, image, x, y, cloud) {
        this.image = image;
        this.relatedScene = scene;
        this.x = x;
        this.y = y;
        this.cloud = cloud;
    }

    create() {
        this.button = this.relatedScene.add.sprite(this.x, this.y, this.image).setInteractive();
  
        this.button.on('pointerover', () => {
            if (this.image == 'playbutton' || this.image == 'menubutton' || this.image == 'shopbutton'){
                this.button.setFrame(1);
            }
        });
        this.button.on('pointerout', () => {
            if (this.image == 'playbutton' || this.image == 'menubutton' || this.image == 'shopbutton'){
                this.button.setFrame(0);
            }
        });
        this.button.on('pointerdown', () => {
            this.ClickButton();
            if (this.image != 'playbutton' && this.image != 'menubutton' && this.image != 'shopbutton'){
                this.relatedScene.updateLabel();
            }
        });
        this.button.on('pointerdown', function() {
            this.scene.tweens.add(
                {
                    targets: this,
                    scaleX: 0.9,
                    scaleY: 0.9,
                    duration: 50,
                    yoyo: true
                }
            );
        });
        this.button.on('pointerover', function() {
            this.scene.tweens.add(
                {
                    targets: this,
                    scaleX: 1.05,
                    scaleY: 1.05,
                    duration: 50,
                    yoyo: false
                }
            );
        });
        this.button.on('pointerout', function() {
            this.scene.tweens.add(
                {
                    targets: this,
                    scaleX: 1,
                    scaleY: 1,
                    duration: 50,
                    yoyo: false
                }
            );
        });
    }
}