import Button from './Button.js';

export default class MenuButton extends Button {
    constructor(scene, cloud) {
        super(scene, 'menubutton', 690, 450);
        this.cloud = cloud;
    }

    ClickButton() {
        this.relatedScene.scene.start('menu', {save:this.cloud});
    }
}