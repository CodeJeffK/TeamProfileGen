// import base employee constructor
const Employee = require("./Employee");

// extends intern constructor using base employee constructor
class Intern extends Employee {
    constructor (name, id, email, school) {

// call employee constructor data
        super (name, id, email);

        this.school = school; 
    };

// return school from user input
    getSchool () {
        return this.school;
    };

// change role from employee to intern
     getRole () {
        return "Intern";
    };
};

// export intern constructor
module.exports = Intern; 