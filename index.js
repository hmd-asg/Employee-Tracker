const inquirer = require("inquirer");
const logo = require("asciiart-logo");
const pool = require('./db/connection.js');



function init() {
    const logoText = logo({ name: "Employee Manager" }).render();

    console.log(logoText);
    pool.connect();
    startPrompt();
}

function startPrompt() {
    inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "What would you like to do?",
            choices: [
                {
                    name: "View All Employees",
                    value: "VIEW_EMPLOYEES",
                },
                {
                    name: "Add Employee",
                    value: "ADD_EMPLOYEE",
                },
                {
                    name: "Update Employee Role",
                    value: "UPDATE_EMPLOYEE_ROLE",
                },
                {
                    name: "View All Roles",
                    value: "VIEW_ROLES",
                },
                {
                    name: "Add Role",
                    value: "ADD_ROLE",
                },
                {
                    name: "View All Departments",
                    value: "VIEW_DEPARTMENTS",
                },
                {
                    name: "Add Department",
                    value: "ADD_DEPARTMENT",
                },
                {
                    name: "Quit",
                    value: "QUIT",
                },
            ],
        },
    ]).then((res) => {
        switch (res.choice) {
            case "VIEW_EMPLOYEES":
                viewEmployees();
                break;
            case "ADD_EMPLOYEE":
                addEmployee();
                break;
            case "UPDATE_EMPLOYEE_ROLE":
                updateEmployeeRole();
                break;
            case "VIEW_DEPARTMENTS":
                viewDepartments();
                break;
            case "ADD_DEPARTMENT":
                addDepartment();
                break;
            case "VIEW_ROLES":
                viewRoles();
                break;
            case "ADD_ROLE":
                addRole();
                break;
            default:
                quit();
        }
    });
}

function viewEmployees() {
    let sql = `SELECT employee.id, employee.first_name, employee.last_name, role.title AS role, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager 
                 FROM employee LEFT JOIN role on employee.role_id = role.id 
                 LEFT JOIN department on role.department = department.id 
                 LEFT JOIN employee manager on manager.id = employee.manager_id;`;
    pool.query(sql, (err, { rows }) => {
        if (err) {
            console.log(err);
        }
        console.table(rows);
        startPrompt();
    });
}


function addEmployee() { }

function updateEmployeeRole() {
    const employeesQuery = `SELECT * FROM employee;`;
    const rolesQuery = `SELECT * FROM role;`;
    pool.query(employeesQuery, (err, { rows }) => {
        if (err) console.log(err);
        inquirer.prompt([
            {
                type: "list",
                name: "employee",
                message: "Which employee's role do you want to update?",
                choices: rows.map((em) => `${em.first_name} ${em.last_name}`)
            }
        ]).then((answer) => {
            const empl = rows.find((emp) => { `${emp.first_name} ${emp.last_name}` === answer.employee; });
            pool.query(rolesQuery, (err, { roleRows }) => {
                inquirer.prompt([
                    {
                        type: "list",
                        name: "role",
                        message: "Which role do you want to assign to the selected employee?",
                        choices: roleRows.map(role => role.name)
                    }
                ]).then((ans) => {
                    const role = roleRows.find(role => role.name === ans.role);
                    const sql = `UPDATE employee SET role_id = $1 WHERE id = $2`;
                    pool.query(sql, [role.id, empl.id], (err, result) => {
                        if (err) console.log(err);
                        console.log('Employee updated successfully');
                        startPrompt();
                    });
                });

            });

        });
    });
}



function viewRoles() {
    let sql = `SELECT role.id, role.title,role.salary, department.name AS department 
               FROM role LEFT JOIN department on role.department = department.id;`;
    pool.query(sql, (err, { rows }) => {
        if (err) {
            console.log(err);
        }
        console.table(rows);
        startPrompt();
    });
}


function addRole() {
    let sql = `SELECT * FROM department;`;
    pool.query(sql, (err, { rows }) => {
        if (err) console.log(err);
        inquirer.prompt([
            {
                name: "title",
                message: "What is the name of the role?",
            },
            {
                name: "salary",
                message: "What is the salary of the role?",
            },
            {
                type: "list",
                name: "department",
                message: "Which department does the role belong to?",
                choices: rows.map((departement) => departement.name)
            },
        ]).then((answer) => {
            let departmentChoice = rows.find((departement) => departement.name === answer.department);
            console.log(departmentChoice);
            pool.query('INSERT INTO role (title, salary, department) VALUES ($1, $2, $3)',
                [answer.title, answer.salary, departmentChoice.id],
                (err, rows) => {
                    if (err) {
                        console.log(err);
                    }
                    console.log('Role added to the database');
                    startPrompt();
                });
        });
    });
}



function viewDepartments() {
    let sql = `SELECT * FROM department;`;
    pool.query(sql, (err, { rows }) => {
        if (err) {
            console.log(err);
        }
        console.table(rows);
        startPrompt();
    });

}


function addDepartment() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of the department?",
        },
    ]).then((answer) => {
        let sql = `INSERT INTO department (name) VALUES ($1)`;
        pool.query(sql, [answer.name], (err, result) => {
            if (err) console.log(err);
            console.log('Departement added to database');
            startPrompt();
        });
    });
}

function quit() {
    process.exit();
}

init();