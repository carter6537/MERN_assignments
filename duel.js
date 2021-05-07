class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, resilience) {
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }

    attack(target) {
        let tHP;
        let tPO;
        let mHP;
        let mPO;
        console.log(`${this.name} attacks ${target.name}!`);
        tHP = target.resilience; // target hp
        tPO = target.power; // target power
        mHP = this.resilience; // my hp
        mPO = this.power; // my power
        target.resilience = tHP - mPO; // target remaining hp
        this.resilience = mHP - tPO; // my remaining hp
        console.log(`${this.name} has ${this.resilience} resilience left.\n${target.name} has ${target.resilience} resilience left.`)
    }

    stat() {
        console.log(`Name: ${this.name}\nPower: ${this.power}\nResilience: ${this.resilience}`);
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    use(target) {
        console.log(`Casting (${this.name}) on (${target.name})!`);
        let mag = this.magnitude;
        if (this.stat == "power") {
            target.power += mag;
        } else if (this.stat == "resilience") {
            target.resilience += mag;
        }
        console.log(`${target.name} now has (${target.power} power), and (${target.resilience} resilience).`)
    }

    info() {
        console.log(`Name: ${this.name}\nCost: ${this.cost}\nText: ${this.text}\nStat: ${this.stat}\nMagnitude: ${this.magnitude}`)
    }
}

const red = new Unit("Red Belt Ninja", 3, 3, 4);
const black = new Unit("Black Belt Ninja", 4, 5, 4);

const hardAlgo = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3);
const unhandledRejection = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2);
const pairProgramming = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2);

hardAlgo.use(red);
unhandledRejection.use(red);
pairProgramming.use(red);
red.attack(black);

// hardAlgo.info();
// unhandledRejection.info();
// pairProgramming.info();