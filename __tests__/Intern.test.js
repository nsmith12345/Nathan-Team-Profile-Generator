const Intern = require('../lib/Intern.js');

test('creates an intern object', () => {
    const intern = new Intern('Nathan', 7, 'nsmith_2003@hotmail.com', '2University');

    expect(intern.school).toEqual(expect.any(String));
});

test('gets employee school value', () => {
    const intern = new Intern('Nathan', 7, 'nsmith_2003@hotmail.com', '2University');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets role of employee', () => {
    const intern = new Intern('Nathan', 7, 'nsmith_2003@hotmail.com', '2University');

    expect(intern.getRole()).toEqual("Intern");
});