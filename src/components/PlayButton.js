import Button from './Button.js';

export default class PlayButton extends Button {
    constructor(scene, cloud) {
        super(scene, 'playbutton', 600, 350);
        this.cloud = cloud;
    }

    ClickButton() {
        this.relatedScene.scene.start('tierra', {save:this.cloud});
    } 
}