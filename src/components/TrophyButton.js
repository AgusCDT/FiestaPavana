import Button from './Button.js';

export default class TrophyButton extends Button {
    constructor(scene) {
        super(scene, 'trophybutton', 850, 305);
    }

    ClickButton() {
        console.log('trophyButton');
    }
}