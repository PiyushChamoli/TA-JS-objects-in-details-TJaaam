
let animalMethods = {
    eat: function () {
        return `I live in ${this.location} and I can eat`
    },
    changeLocation: function (location) {
        this.location = location;
    },
    summary: function () {
        return `I live in ${this.location} and I have ${this.numberOfLegs}`;
    }
}

let dogMethods = {
    bark: function () {
        alert(`I am ${this.name} and I can bark 🐶`)
    },
    changeName: function (newName) {
        this.name = newName;
    },
    changeColor (newColor) {
        this.color = newColor;
    },
    summary: function () {
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
    }
}

Object.setPrototypeOf(dogMethods,animalMethods);

let catMethods = {
    meow: function () {
        alert(`I am ${this.name} and I can do meow meow 😹`)
    },
    changeName: function (newName) {
        this.name = newName;
    },
    changeColorOfEyes: function (newColor) {
        this.colorOfEyes = newColor;
    },
    summary: function () {
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
    }
}

Object.setPrototypeOf(catMethods,animalMethods);

function animal (location,legs) {
    let newAnimal = Object.create(animalMethods);
    newAnimal.location = location;
    newAnimal.numberOfLegs = legs;
    return newAnimal;
}

function dog (location,legs,name,color) {
    let newDog = Object.create(dogMethods);
    newDog.location = location;
    newDog.numberOfLegs = legs;
    newDog.name = name;
    newDog.color = color;
    return newDog;
}

function cat (location,legs,name,color) {
    let newCat = Object.create(catMethods);
    newCat.location = location;
    newCat.numberOfLegs = legs;
    newCat.name = name;
    newCat.colorOfEyes = color;
    return newCat;
}