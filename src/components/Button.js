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
        
        this.button.on('pointerover', () => { // Al pasar el ratón por encima del botón
            if (this.image == 'playbutton' || this.image == 'menubutton' || this.image == 'shopbutton'){
                this.button.setFrame(1);
            }
        });
        this.button.on('pointerout', () => { // Al sacar el ratón del botón
            if (this.image == 'playbutton' || this.image == 'menubutton' || this.image == 'shopbutton'){
                this.button.setFrame(0);
            }
        });
        this.button.on('pointerdown', () => { // Al clicar el botón
            this.ClickButton();
            if (this.image != 'playbutton' && this.image != 'menubutton' && this.image != 'shopbutton'){
                this.relatedScene.updateLabel();
            }
        });
        this.button.on('pointerdown', function() { // Tween al clicar el botón
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
        this.button.on('pointerover', function() { // Tween al pasar el ratón por encima del botón
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
        this.button.on('pointerout', function() { // Tween al sacar el ratón del botón
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