// Base constructor for the Employee generator
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email 
    };

// return name from user input
    getName () {
        return this.name;
    };

// return ID from user input
    getId () {
        return this.id;
    }; 

// return email from user input
    getEmail () {
        return this.email;
    };

// return employee type from user input
    getRole () {
        return 'Employee'; 
    };
};

// export employee constructor
module.exports = Employee; 