import Button from './Button.js';

export default class ShopButton extends Button {
    constructor(scene, cloud, audio) {
        super(scene, 'shopbutton', 600, 450, audio);
        this.press = audio;
        this.cloud = cloud;
    }

    ClickButton() {
        this.press.play();
        this.relatedScene.scene.start('shop', {cloud:this.cloud});
    }
}