
// Create User (class/function) with the following properties.

// - [ ] properties (data):
//   - [ ] name
//   - [ ] id
//   - [ ] noOfProjects
// - [ ] methods:
//   - [ ] getProjects -> return number of project
//   - [ ] changeName -> accepts one parameter (newName)returns old user name
//   - [ ] incrementProject -> returns updated number of projects
//   - [ ] decrementProject -> returns updated number of projects


// Function Pattern

function createUser (name,id,projects) {
    let user = {};
    user.name = name;
    user.id = id;
    user.noOfProjects = projects;
    user.getProjects = function () {
        return user.noOfProjects;
    };
    user.changeName = function (newName) {
        oldName = user.name;
        user.name = newName;
        return oldName;
    };
    user.incrementProject = function () {
        return user.noOfProjects += 1;
    };
    user.decrementProject = function () {
        return user.noOfProjects -= 1;
    }
    return user;
}

// Prototypal Pattern

let userMethods = {
    getProjects = function () {
        return this.noOfProjects;
    },
    changeName = function (newName) {
        oldName = this.name;
        this.name = newName;
        return oldName;
    },
    incrementProject = function () {
        return this.noOfProjects += 1;
    },
    decrementProject = function () {
        return this.noOfProjects -= 1;
    },
}

function createUser (name,id,projects) {
    let user = Object.create(userMethods);
    user.name = name;
    user.id = id;
    user.noOfProjects = projects;
    return user;
}

// Pseudoclassical Pattern

function CreateUser (name,id,projects) {
    this.name = name;
    this.id = id;
    this.noOfProjects = projects;
}

CreateUser.prototype = {
    getProjects () {
        return this.noOfProjects;
    },
    changeName (newName) {
        oldName = this.name;
        this.name = newName;
        return oldName;
    },
    incrementProject () {
        return this.noOfProjects += 1;
    },
    decrementProject () {
        return this.noOfProjects -= 1;
    },
}

let firstUser = new CreateUser('Piyush',8001,2);
let secondUser = new CreateUser('Abhishek',5002,3)

// Class Pattern

class User {
    constructor (name,id,projects) {
        this.name = name;
        this.id = id;
        this.noOfProjects = projects;
    }
    getProjects () {
        return this.noOfProjects;
    };
    changeName (newName) {
        oldName = this.name;
        this.name = newName;
        return oldName;
    };
    incrementProject () {
        return this.noOfProjects += 1;
    };
    decrementProject () {
        return this.noOfProjects -= 1;
    };
}