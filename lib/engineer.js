// import base employee constructor
const Employee = require("./Employee");

// extends engineer constructor using base employee constructor
class Engineer extends Employee {
    constructor (name, id, email, github) {

// call employee constructor data
        super (name, id, email);

        this.github = github; 
    };

// return github from user input
    getGithub () {
        return this.github;
    };

// change role from employee to engineer
     getRole () {
        return "Engineer";
    };
};

// export engineer constructor
module.exports = Engineer; 