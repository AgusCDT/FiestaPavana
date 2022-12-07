import Button from './Button.js';

export default class ShopButton extends Button {
    constructor(scene, cloud, audio) {
        super(scene, 'shopbutton', 600, 450, audio);
        this.purchase = audio;
        this.cloud = cloud;
    }

    ClickButton() {
        this.relatedScene.scene.start('shop', {cloud:this.cloud});
    }
}