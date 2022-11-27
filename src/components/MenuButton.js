import Button from './Button.js';

export default class MenuButton extends Button {
    constructor(scene, cloud, x, y) {
        super(scene, 'menubutton', x, y);
        this.cloud = cloud;
    }

    ClickButton() {
        this.relatedScene.scene.start('menu', {cloud:this.cloud});
    }
}