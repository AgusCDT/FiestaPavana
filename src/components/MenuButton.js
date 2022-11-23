import Button from './Button.js';

export default class MenuButton extends Button {
    constructor(scene) {
        super(scene, 'menubutton', 690, 450);
    }

    ClickButton() {
        this.relatedScene.scene.start('menu');
    }
}