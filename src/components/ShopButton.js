import Button from './Button.js';

export default class ShopButton extends Button {
    constructor(scene, cloud) {
        super(scene, 'shopbutton', 600, 450);
        this.cloud = cloud;
    }

    ClickButton() {
        this.relatedScene.scene.start('shop', {save:this.cloud});
    }
}