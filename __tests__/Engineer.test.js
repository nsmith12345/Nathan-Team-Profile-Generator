const Engineer = require('../lib/Engineer.js');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Nathan', 7, 'nsmith_2003@hotmail.com', 'nsmith12345');

    expect(engineer.github).toEqual(expect.any(String));    
});

test('gets engineer github value', () => {
    const engineer = new Engineer('Nathan', 7, 'nsmith_2003@hotmail.com', 'nsmith12345');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('rets role of employeee', () => {
    const engineer = new Engineer('Nathan', 7, 'nsmith_2003@hotmail.com', 'nsmith12345');

    expect(engineer.getRole()).toEqual("Engineer");
});