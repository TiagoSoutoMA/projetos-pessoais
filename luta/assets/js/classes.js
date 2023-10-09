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
    }

    update() {
        this.fighter1El.querySelector(".name").innerHTML = this.fighter1.name;
        this.fighter2El.querySelector(".name").innerHTML = this.fighter2.name;
    }
}