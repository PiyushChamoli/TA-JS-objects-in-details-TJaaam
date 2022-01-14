
class Person {
    constructor (name,age,gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    eat () {
        console.log(`This person ${this.name} can eat`);
    }
    sleep () {
        console.log(`This person ${this.name} can sleep`);
    }
    walk () {
        console.log(`This person ${this.name} can walk`);
    }
}

class Player extends Person {
    constructor (name,age,gender,sport) {
        super(name,age,gender);
        this.sportsName = sport;
    }
    play () {
        console.log(`This player ${this.name} can play ${this.sportsName}`);
    }
}

class Teacher extends Person {
    constructor (name,age,gender,institute) {
        super(name,age,gender);
        this.instituteName = institute;
    }
    teach () {
        console.log(`This person ${this.name} can teach`);
    }
}

class Artist extends Person {
    constructor (name,age,gender,kind) {
        super(name,age,gender);
        this.kind = kind;
    }
    createArt() {
        console.log(`This person ${this.name} can create art`);
    }
}
class Cricketer extends Player {
    constructor (name,age,gender,sport,team) {
        super(name,age,gender,sport);
        this.teamName = team;
    }
    playCricket () {
        console.log(`This person ${this.name} can playcricket`);
    }
}