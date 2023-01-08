// import base employee constructor
const Employee = require('../lib/employee.js');

// creates an object for employees
test('creates an employee object', () => {
    const employee = new Employee('Jeff', 25, 'jkasahara206@gmail.com');

// set expectations for employee constructor data
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

});

// gets employee name
test('gets employee name', () => {
    const employee = new Employee('Jeff', 25, 'jkasahara206@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// gets employee id
test('gets employee id', () => {
    const employee = new Employee('Jeff', 25, 'jkasahara206@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// gets employee email
test('gets employee email', () => {
    const employee = new Employee('Jeff', 25, 'jkasahara206@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// gets employee role
test('gets employee role', () => {
    const employee = new Employee('Jeff', 25, 'jkasahara206@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
}); 