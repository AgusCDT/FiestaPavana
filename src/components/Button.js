export default class Button {
    constructor(scene, image, x, y) {
      this.image = image;
      this.relatedScene = scene;
      this.x = x;
      this.y = y;
    }
  
    create() {
      this.Button = this.relatedScene.add.sprite(this.x, this.y, this.image).setInteractive();
  
      this.Button.on('pointerover', () => {
        this.Button.setFrame(1);
      });
      this.Button.on('pointerout', () => {
        this.Button.setFrame(0);
      });
      this.Button.on('pointerdown', () => {
        this.ClickButton();
      });
    }
  }