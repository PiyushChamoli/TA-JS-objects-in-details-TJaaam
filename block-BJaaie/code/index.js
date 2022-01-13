
// PseudoClassical Pattern

function Animal (location,legs) {
    this.location = location;
    this.noOfLegs = legs;
}

Animal.prototype = {
    eat: function () {
        console.log(`I live in ${this.location} and I can eat`);
    },
    changeLocation: function (newLocation) {
        this.location = newLocation;
    },
    summary: function () {
        return `I live in ${this.location} and I have ${this.numberOfLegs}`;
    }
}

function Dog (location,legs,name,color) {
    Animal.apply(this,[location,legs]);
    this.name = name;
    this.color = color;
}

Dog.prototype = {
    bark: function () {
        alert(`I am ${this.name} and I can bark 🐶`);
    },
    changeName: function (newName) {
        this.name = newName;
    },
    changeColor: function (newColor) {
        this.color = newColor;
    },
    summary: function () {
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
    }
}

Object.setPrototypeOf(Dog.prototype, Animal.prototype);

function Cat (location,legs,name,color) {
    Animal.apply(this,[location,legs]);
    this.name = name;
    this.colorOfEyes = color;
}

Cat.prototype = {
    meow: function () {
        alert(`I am ${this.name} and I can meow 😹`);
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

Object.setPrototypeOf(Cat.prototype, Animal.prototype);

// Class Pattern

class Animal {
    constructor (location,legs) {
        this.location = location;
        this.noOfLegs = legs;
    }
    eat () {
        console.log(`I live in ${this.location} and I can eat`);
    };
    changeLocation (newLocation) {
        this.location = newLocation;
    };
    summary () {
        return `I live in ${this.location} and I have ${this.numberOfLegs}`;
    }
}

class Dog extends Animal {
    constructor (location,legs,name,color) {
        super(location,legs);
        this.name = name;
        this.color = color;
    }
    bark () {
        alert(`I am ${this.name} and I can bark 🐶`);
    };
    changeName (newName) {
        this.name = newName;
    };
    changeColor (newColor) {
        this.color = newColor;
    };
    summary () {
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
    }
}

class Cat extends Animal {
    constructor (location,legs,name,color) {
        super(location,legs);
        this.name = name;
        this.colorOfEyes = color;
    }
    meow () {
        alert(`I am ${this.name} and I can meow 😹`);
    };
    changeName (newName) {
        this.name = newName;
    };
    changeColorOfEyes (newColor) {
        this.colorOfEyes = newColor;
    };
    summary () {
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
    }
}