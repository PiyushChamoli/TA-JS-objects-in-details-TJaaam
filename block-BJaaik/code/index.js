
class Person {
    constructor (name,age,gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    eat () {}
    sleep () {}
    walk () {}
}

class Player extends Person {
    constructor (name,age,gender,sport) {
        super(name,age,gender);
        this.sportsName = sport;
    }
    play () {}
}

class Teacher extends Person {
    constructor (name,age,gender,institute) {
        super(name,age,gender);
        this.instituteName = institute;
    }
    teach () {}
}

class Artist extends Person {
    constructor (name,age,gender,kind) {
        super(name,age,gender);
        this.kind = kind;
    }
    createArt() {}
}
class Cricketer extends Player {
    constructor (name,age,gender,team) {
        super(name,age,gender);
        this.teamName = team;
    }
    playCricket () {}
}