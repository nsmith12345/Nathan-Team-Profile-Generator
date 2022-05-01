const Employee = require('../lib/Employee.js');

test('creates a new employee object', () => {
    const employee = new Employee('Nathan', 7, 'nsmith_2003@hotmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    
});

test('gets employee name', () => {
    const employee = new Employee('Nathan', 7, 'nsmith_2003@hotmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('gets employee id', () => {
    const employee = new Employee('Nathan', 7, 'nsmith_2003@hotmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('gets employee email', () => {
    const employee = new Employee('Nathan', 7, 'nsmith_2003@hotmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('gets role of employee', () => {
    const employee = new Employee('Nathan', 7, 'nsmith_2003@hotmail.com');

    expect(employee.getRole()).toEqual("Employee");
});
