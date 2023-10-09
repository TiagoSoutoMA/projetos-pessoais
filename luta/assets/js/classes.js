class Character {
    _life = 1;
    maxLife = 1;
    attack = 0;
    defense = 0;

    constructor(name) {
        this.name = name;
    }

    get life() {
        return this._life;
    }

    set life(newLife) {
        this._life = newLife < 0 ? 0 : newLife;
    }
}

class TeamHarry extends Character {
    constructor(name) {
        super(name);
        this.life = 100;
        this.attack = 7;
        this.defense = 10;
        this.maxLife = this.life;
    }
}

class Grawp extends Character {
    constructor(name) {
        super("Grawp");
        this.life = 80;
        this.attack = 12;
        this.defense = 7;
        this.maxLife = this.life;
    }
}

class TeamVoldemort extends Character {
    constructor(name) {
        super(name);
        this.life = 85;
        this.attack = 10;
        this.defense = 5;
        this.maxLife = this.life;
    }
}

class Trasgo extends Character {
    constructor(name) {
        super("Trasgo");
        this.life = 70;
        this.attack = 15;
        this.defense = 4;
        this.maxLife = this.life;
    }
}

class Stage {
    constructor(fighter1, fighter2, fighter1El, fighter2El) {
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;
    }

    start() {
        this.update();

        this.fighter1El.querySelector(".attackButton").addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2));
        this.fighter2El.querySelector(".attackButton").addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1));
    }

    update() {
        // Fighter 1
        this.fighter1El.querySelector(".name").innerHTML = `${this.fighter1.name} - ${this.fighter1.life} HP`;
        let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
        this.fighter1El.querySelector(".bar").style.width = `${f1Pct}%`;

        // Fighter 2
        this.fighter2El.querySelector(".name").innerHTML = `${this.fighter2.name} - ${this.fighter2.life} HP`;
        let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
        this.fighter2El.querySelector(".bar").style.width = `${f2Pct}%`;
    }

    doAttack(attacking, attacked) {
        if(attacking.life <= 0 || attacked.life <= 0) {
            console.log("atacando morto");
            return;
        } 

        this.update();
    }
}