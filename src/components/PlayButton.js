import Button from './Button.js';

export default class PlayButton extends Button {
    constructor(scene, cloud, audio) {
        super(scene, 'playbutton', 600, 350, audio);
        this.sonido = audio;
        this.cloud = cloud;
    }

    ClickButton() {
        this.sonido.play();
        this.relatedScene.scene.start('tierra', {cloud:this.cloud});
    } 
}