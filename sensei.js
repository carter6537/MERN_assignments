class Ninja {
    constructor (name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(`Hi my name is ${this.name}!`)
    }

    showStats() {
        console.log(`Name: ${this.name}\nHP: ${this.health}\nSpeed: ${this.speed}\nStrength: ${this.strength}`)
    }

    drinkShake() {
        this.health += 10;
        console.log(`Drank a shake, new HP total is ${this.health}`)
    }
}

class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.health = 200;
        this.wisdom = 10;
        this.strength = 10;
        this.speed = 10;
    }

    speakWisdom() {
        console.log("What one programmer can do in one month, two programmers can do in two months.");
        super.drinkShake();
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();

const superSensei = new Sensei("Master Splinter");
superSensei.sayName();
superSensei.speakWisdom();
superSensei.showStats();