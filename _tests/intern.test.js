// import intern constructor from libs folder
const Intern = require('../lib/intern.js');

// creates an object for interns
test('creates an intern object', () => {
    const intern = new Intern('Jeff', 25, 'jkasahara206@gmail.com', 'UW');

// set expectations for intern constructor data
    expect(intern.school).toEqual(expect.any(String));

});

// gets intern school
test('gets intern school', () => {
    const intern = new Intern('Jeff', 25, 'jkasahara206@gmail.com', 'UW');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});


// gets employee role
test('gets employee role', () => {
    const intern = new Intern('Jeff', 25, 'jkasahara206@gmail.com', 'UW');

    expect(intern.getRole()).toEqual("Intern");
}); 