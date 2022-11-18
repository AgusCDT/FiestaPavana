import Button from './Button.js';

export default class ShopButton extends Button {
  constructor(scene) {
    super(scene, 'shopbutton', 600, 450);
  }

  ClickButton() {
    this.relatedScene.scene.start('shop');
  } 
}