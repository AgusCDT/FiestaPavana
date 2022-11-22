export default class Cloud {
    constructor(scene) {
		this.relatedScene = scene;
        this.setHighScore();
        this.setCoins();
        this.setLife();
        this.setMultiplicator();
        this.setSpace();
        this.setSea();
        this.setBeach();
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

    setLife() { 
        // Coge el valor de localStorage, o 2 si no se encuentra
        // Hago el parseInt() porque los valores en localStorage se guardan como strings
        this.life = parseInt(localStorage.getItem('life')) || 2;
        localStorage.setItem('life', this.life);
    }

    setMultiplicator(){
        // Coge el valor de localStorage, o 1 si no se encuentra
        // Hago el parseInt() porque los valores en localStorage se guardan como strings
        this.multiplicator = parseInt(localStorage.getItem('multiplicator')) || 1;
        localStorage.setItem('multiplicator', this.multiplicator);
    }

    setSpace(){
        // Coge el valor de localStorage, o 0 si no se encuentra (0 si no está desbloqueado y 1 si sí lo está)
        // Hago el parseInt() porque los valores en localStorage se guardan como strings
        this.space = parseInt(localStorage.getItem('space')) || 0;
        localStorage.setItem('space', this.space);
    }

    setSea(){
        // Coge el valor de localStorage, o 0 si no se encuentra (0 si no está desbloqueado y 1 si sí lo está)
        // Hago el parseInt() porque los valores en localStorage se guardan como strings
        this.sea = parseInt(localStorage.getItem('sea')) || 0;
        localStorage.setItem('sea', this.sea);
    }

    setBeach(){
        // Coge el valor de localStorage, o 0 si no se encuentra (0 si no está desbloqueado y 1 si sí lo está)
        // Hago el parseInt() porque los valores en localStorage se guardan como strings
        this.beach = parseInt(localStorage.getItem('beach')) || 0;
        localStorage.setItem('beach', this.beach);
    }
    
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

    upgradeLife() {
        this.life++;
        localStorage.setItem('life', this.life);
    }

    upgradeMultiplicator() {
        this.multiplicator += 0.1;
        localStorage.setItem('multiplicator', this.multiplicator);
    }

    upgradeSpace() {
        this.space = 1;
        localStorage.setItem('space', this.space);
    }

    upgradeSea() {
        this.sea = 1;
        localStorage.setItem('sea', this.sea);
    }

    upgradeBeach() {
        this.beach = 1;
        localStorage.setItem('beach', this.beach);
    }

    getSea() {
        return this.sea;
    }

    getBeach() {
        return this.beach;
    }

    getSpace() {
        return this.space;
    }

    getMultiplicator(){
        return this.multiplicator;
    }

    getCoins() {
        return this.coins;
    }

    getLife() {
        return this.life;
    }
}