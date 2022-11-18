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
    
    updateHighScore(score){
        if (score > this.highScore){
            // Updates the score and stores the new value in the localStorage
            this.highScore = score;
            localStorage.setItem('highScore', this.highScore);
        }
        // Updates the score and stores the new value in the localStorage
        //this.highScore += increment;
        //localStorage.setItem('highScore', this.highScore);
    };
}