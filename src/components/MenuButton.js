import Button from './button.js';

export default class MenuButton extends Button {
  constructor(scene) {
    super(scene, 'menubutton', 600, 450);
  }

  ClickButton() {
    this.relatedScene.scene.start('menu');
  }
}