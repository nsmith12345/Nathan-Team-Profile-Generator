const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
    const manager = new Manager('Nathan', 7, 'nsmith_2003@hotmail.com', 7);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    const manager = new Manager('Nathan', 7, 'nsmith_2003@hotmail.com');

    expect(manager.getRole()).toEqual("Manager");
});