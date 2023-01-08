// import base employee constructor
const Employee = require("./Employee");

// extends manager constructor using base employee constructor
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {

// call employee constructor data
        super (name, id, email);

        this.officeNumber = officeNumber; 
    };

// change role from employee to manager
     getRole () {
        return "Manager";
    };
};

// export manager constructor
module.exports = Manager; 