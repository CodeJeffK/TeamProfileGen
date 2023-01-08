// import engineer constructor from libs folder
const Engineer = require('../lib/engineer.js');

// creates an object for engineers
test('creates an engineer object', () => {
    const engineer = new Engineer('Jeff', 25, 'jkasahara206@gmail.com', 'CodeJeffK');

// set expectations for engineer constructor data
    expect(engineer.github).toEqual(expect.any(String));

});

// gets engineer github
test('gets engineer github', () => {
    const engineer = new Engineer('Jeff', 25, 'jkasahara206@gmail.com', 'CodeJeffK');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});


// gets employee role
test('gets employee role', () => {
    const engineer = new Engineer('Jeff', 25, 'jkasahara206@gmail.com', 'CodeJeffK');

    expect(engineer.getRole()).toEqual("Engineer");
}); 