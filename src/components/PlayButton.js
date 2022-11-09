import Button from './button.js';

export default class PlayButton extends Button {
  constructor(scene) {
    super(scene, 'playbutton', 600, 350);
  }

  ClickButton() {
    this.relatedScene.scene.start('tierra');
  } 
}