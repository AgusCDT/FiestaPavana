import Button from './Button.js';

export default class MenuButton extends Button {
    constructor(scene, cloud) {
        super(scene, 'menubutton', 690, 450, cloud);
    }

    ClickButton() {
        this.relatedScene.scene.start('menu');
    }
}