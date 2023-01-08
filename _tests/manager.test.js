// import manager constructor from libs folder
const Manager = require('../lib/manager.js');

// creates an object for managers
test('creates a manager object', () => {
    const manager = new Manager('Jeff', 25, 'jkasahara206@gmail.com', 7);

// set expectations for manager constructor data
    expect(manager.officeNumber).toEqual(expect.any(Number));

});

// gets employee role
test('gets employee role', () => {
    const manager = new Manager('Jeff', 25, 'jkasahara206@gmail.com', 7);

    expect(manager.getRole()).toEqual("Manager");
}); 