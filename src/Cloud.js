export default class Cloud {
    constructor(scene) {
		this.relatedScene = scene;
        this.setHighScore();
        this.setCoins();
	}
 
    setHighScore() {
        // Coge el valor de localStorage, o 0 si no se encuentra
        // Hago el parseInt() porque los valores en localStorage se guardan como strings
        this.highScore = parseInt(localStorage.getItem('highScore')) || 0;
        localStorage.setItem('highScore', this.highScore);
    };

    setCoins() {
        // Coge el valor de localStorage, o 0 si no se encuentra
        // Hago el parseInt() porque los valores en localStorage se guardan como strings
        this.coins = parseInt(localStorage.getItem('coins')) || 0;
        localStorage.setItem('coins', this.coins);
    };
    
    updateHighScore(score){
        if (score > this.highScore){
            // Actualiza el score y pone su nuevo valor en el localStorage
            this.highScore = score;
            localStorage.setItem('highScore', this.highScore);
        }
    };

    pickUpCoins() {
        // Actualiza las monedas y pone su nuevo valor en el localStorage
        this.coins++;
        localStorage.setItem('coins', this.coins);
    };

    updateCoins(decrement) {
        this.coins -= decrement;
        localStorage.setItem('coins', this.coins);
    }

    getCoins() {
        return this.coins;
    }
}