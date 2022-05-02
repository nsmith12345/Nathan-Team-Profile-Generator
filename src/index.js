const Manager = require('.lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const generateHTML = require('./src/generateHTML');
const teamArray = [];

const addManager = () => {
    return inquirer.promt ([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ('Please enter the managers name!');
                    return false;
                }
            }    
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the managers ID number!',
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log ('Please enter the managers ID!');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the managers email!',
            validate: email => {
                valid = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter an email address');
                    return false;
                }    
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter the managers office number',
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log ('Please enter the managers office number!');
                    return false;
                } else {
                    return true;
                }
            }
        }
    ])
    .then(managerInput => {
        const {name, id, email, officeNumber } = managerInput;
        const manager = new Manager (name, id, email, officeNumber);

        teamArray.push(manager);
        console.log(manager);
    })
};

const addEmployee = () => {
    console.log('adding employees to the team');

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: 'Please choose your employees role',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: 'Whats the name of the employee?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ('Please enter the employees name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Whats the employees ID?',
            validate: nameInput => {
                if (isNaN(nameInput)) {
                   console.log ('Please enter the employees name!');
                   return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the employees email.',
            validate: email => {
                valid = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter an email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter the employees github username.',
            when: (input) => input.role === 'Engineer',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ('Plese enter the employees github username!');
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Please enter the interns school',
            when: (input) => input.role === 'intern',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ('Please enter the interns school!');
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
    .then(employeeData => {

        let { name, id, email, role, github, school, confirmAddEmployee } = employeeData;
        let employee;

        if (role === 'Engineer') {
            employee = new Engineer (name, id, email, github);

            console.log (employee);

        } else if (role === 'Intern') {
            employee = new Intern (name, id, email, school);

            console.log(employee);            
        }

        teamArray.push(employee);

        if (confirmAddEmployee) {
            return addEmployee(teamArray);
        } else {
            return teamArray;
        }
    })
};


