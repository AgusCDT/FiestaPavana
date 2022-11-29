export default class Cloud {
    constructor() {
        this.setScore();
        this.setHighScore();
        this.setCoins();
        this.setLife();
        this.setMultiplicator();
        this.setSpace();
        this.setSea();
        this.setBeach();
        this.setMultiplicatorPrice();
        this.setLifePrice();
	}

    setScore() {
        // Coge el valor de localStorage, o 0 si no se encuentra
        // Hago el parseInt() porque los valores en localStorage se guardan como strings
        this.score = parseInt(localStorage.getItem('score')) || 0;
        localStorage.setItem('score', this.score);
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

    setMultiplicator() {
        // Coge el valor de localStorage, o 1 si no se encuentra
        // Hago el parseFloat() porque los valores en localStorage se guardan como strings
        this.multiplicator = parseFloat(localStorage.getItem('multiplicator')) || 1;
        localStorage.setItem('multiplicator', this.multiplicator);
    }

    setSpace() {
        // Coge el valor de localStorage, o 0 si no se encuentra (0 si no está desbloqueado y 1 si sí lo está)
        // Hago el parseInt() porque los valores en localStorage se guardan como strings
        this.space = parseInt(localStorage.getItem('space')) || 0;
        localStorage.setItem('space', this.space);
    }

    setSea() {
        // Coge el valor de localStorage, o 0 si no se encuentra (0 si no está desbloqueado y 1 si sí lo está)
        // Hago el parseInt() porque los valores en localStorage se guardan como strings
        this.sea = parseInt(localStorage.getItem('sea')) || 0;
        localStorage.setItem('sea', this.sea);
    }

    setBeach() {
        // Coge el valor de localStorage, o 0 si no se encuentra (0 si no está desbloqueado y 1 si sí lo está)
        // Hago el parseInt() porque los valores en localStorage se guardan como strings
        this.beach = parseInt(localStorage.getItem('beach')) || 0;
        localStorage.setItem('beach', this.beach);
    }

    setLifePrice() {
        // Coge el valor de localStorage, o 50 (aqui es donde de verdad se setea el primer precio de la mejora de vida)
        // Hago el parseInt() porque los valores en localStorage se guardan como strings
        this.lifePrice = parseInt(localStorage.getItem('lifePrice')) || 50;
        localStorage.setItem('lifePrice', this.lifePrice);
    }

    setMultiplicatorPrice() {
        // Coge el valor de localStorage, o 50 (aqui es donde de verdad se setea el primer precio de la mejora de multiplicador)
        // Hago el parseInt() porque los valores en localStorage se guardan como strings
        this.multiplicatorPrice = parseInt(localStorage.getItem('multiplicatorPrice')) || 50;
        localStorage.setItem('multiplicatorPrice', this.multiplicatorPrice);
    }
    
    updateHighScore(score) {
        if (score > this.highScore){
            // Actualiza el highscore y pone su nuevo valor en el localStorage
            this.highScore = score;
            localStorage.setItem('highScore', this.highScore);
        }
    };

    updateScore(score) {
        // Actualiza el score actual y pone su nuevo valor en el localStorage
        this.score = score;
        localStorage.setItem('score', this.score);
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

    updateMultiplicatorPrice(value) {
        this.multiplicatorPrice = value;
        localStorage.setItem('multiplicatorPrice', this.multiplicatorPrice);
    }

    updateLifePrice(value) {
        this.lifePrice = value;
        localStorage.setItem('lifePrice', this.lifePrice);
    }

    upgradeLife() {
        this.life++;
        localStorage.setItem('life', this.life);
    }

    upgradeMultiplicator() {
        this.multiplicator += 0.1;
        this.multiplicator = parseFloat(this.multiplicator.toFixed(1));
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

    getMultiplicatorPrice() {
        return this.multiplicatorPrice;
    }

    getLifePrice() {
        return this.lifePrice;
    }

    getScore() {
        return this.score;
    }
}