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