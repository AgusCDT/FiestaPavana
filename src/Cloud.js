export default class Cloud {
    constructor(scene) {
		this.relatedScene = scene;
        this.setHighScore();
	}
 
    setHighScore() {
        // Gets the value stored in localStorage, or 0 if nothing is found
        // Don't fortget to parseInt(), all values are stored as strings in localStorage
        this.highScore = parseInt(localStorage.getItem('highScore')) || 0;
    };
    
    updateHighScore(increment){
        // Updates the score and stores the new value in the localStorage
        this.highScore += increment;
        //this.highScoreTxt.setText(this.highScore);
        localStorage.setItem('highScore', this.highScore);
    };
}