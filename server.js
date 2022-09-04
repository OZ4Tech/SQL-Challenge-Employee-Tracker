const inquirer = require("inquirer");
const cTable = require('console.table');
const mysql = require('mysql2');


const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '1413WolvesBite',
    database: 'employee_db'
  },
  console.log(""),
  console.log(""),
  console.log(" --------------EMPLOYEE TRACKER!-------------- "),
  console.log(""),
  console.log(""),
);

const employeetracker = {
      type: "list",
      name: "first",
      message: "Please Select An Option.:",
      choices: ["View All Employees", "Add An Employee","View All Roles", "Add A Role","View All Departments", "Add A Department","Quit"]
  };

const addDepartment = {
  type: "input",
  name: "department",
  message: "New Department Name"
};

const addRole = [
  {
      type: "input",
      name: "title",
      message: "New Role"
  },
  {
      type: "input",
      name: "salary",
      message: "Base Salary For New Role"        
  },
  {
      type: "list",
      name: "department",
      message: "Department For New Role:",
      choices: ["Administration", "Technology", "Accounting", "Human Resources", "Customer Service"]
  }
];

const addEmployee = [
  {
      type: "input",
      name: "first_name",
      message: "Employee's First Name"
  },
  {
      type: "input",
      name: "last_name",
      message: "Employee's Last Name"
  },
  {
      type: "list",
      name: "department",
      message: "Employee's Department:",
      choices: ["Administration", "Technology", "Accounting", "Human Resources", "Customer Service"]
  }
];

const getEmployeeName = [
  {
      type: "input",
      name: "first_name",
      message: "Employee's First Name"
  },
  {
      type: "input",
      name: "last_name",
      message: "Employee's Last Name"
  },
  {
      type: "list",
      name: "title",
      message: "Employee's New Role:",
      choices: ["Administrator", "Sales Manager", "Sales Person", "Lead Developer", "Junior Developer", "Accountant", "HR Coordinator", "Customer Service"]
  }
]

const customerService = {
  type: "list",
  name: "title",
  message: "Employee's Title:",
  choices: ["Sales Manager", "Sales Person"]
};

const technology = {
  type: "list",
  name: "title",
  message: "Employee's Title:",
  choices: ["Lead Developer", "Junior Developer"]
};

const humanResources = {
  type: "list",
  name: "title",
  message: "Employee's Title",
  choices: ["HR Director"]
};

init();
  

function init() {
  inquirer.prompt(employeetracker).then((response) => {
      switch (response.first) {
          case "View All Departments":
              viewAllDepartments();
              setTimeout(() => { init(); }, 1000);
              break;
          case "View All Roles":
              viewAllRoles()
              setTimeout(() => { init(); }, 1000);
              break;
          case "View All Employees":
              viewAllEmployees();
              setTimeout(() => { init(); }, 1000);
              break;
          case "Add An Employee":
              moreEmployeeInfo();
              break;
          case "Add A Role":
              addTitle();
              break;
          case "Add A Department":
              addDept();
              break;
          case "Quit":
              console.log("");
              console.log("");
              console.log(" - All Done! - ");
              console.log("");
              console.log("");
              console.log("~ctrl + c to quit~");
          }
      }
  )
};

function addTitle() {
  inquirer.prompt(addRole).then((response) => {
      db.query("INSERT INTO title (title, salary, department) VALUES (?, ?, ?)", [
          response.title,
          response.salary,
          response.department,
      ], function () {
          console.log("");
          console.log("");
          console.log(" - ROLE ADDED SUCCESSFULLY! - ");
          console.log("");
          console.log("");   
      }
      );
      setTimeout(() => { init(); }, 1000);
  }
  )
};

function addDept() {
  inquirer.prompt(addDepartment).then((response) => {
      db.query("INSERT INTO department (dept_name) VALUES (?)", [
          response.department,
      ], function () {
          console.log("");
          console.log("");
          console.log(" - DEPARTMENT ADDED SUCCESSFULLY! - ");
          console.log("");
          console.log("");   
      }
      );
      setTimeout(() => { init(); }, 1000);
  }
  )
};

function moreEmployeeInfo() {
  inquirer.prompt(addEmployee).then((response) => {
      switch (response.department) {
          case "Administration":
              db.query("INSERT INTO employee (first_name, last_name, title, department, salary) VALUES (?, ?, ?, ?, ?)", [
                  response.first_name,
                  response.last_name,
                  "Administrator",
                  response.department,
                  "100000",
              ], function () {
                  console.log("");
                  console.log("");
                  console.log("------EMPLOYEE ADDED SUCCESSFULLY!------");
                  console.log("");
                  console.log("");                        
              }
              );
              setTimeout(() => { init(); }, 1000);               
              break;
          case "Customer Service":
              inquirer.prompt(marketing).then((response) => {
                  switch (response.title) {
                      case "Sales Manager":
                          db.query("INSERT INTO employee (first_name, last_name, title, department, salary) VALUES (?, ?, ?, ?, ?)", [
                              response.first_name,
                              response.last_name,
                              "Sales Manager",
                              response.department,
                              "75000",
                          ], function () {
                              console.log("");
                              console.log("");
                              console.log("------EMPLOYEE ADDED SUCCESSFULLY!------");
                              console.log("");
                              console.log("");                                   
                          }
                          );
                          setTimeout(() => { init(); }, 1000);               
                          break;
                      case "Sales Person":
                          db.query("INSERT INTO employee (first_name, last_name, title, department, salary) VALUES (?, ?, ?, ?, ?)", [
                              response.first_name,
                              response.last_name,
                              "Sales Person",
                              response.department,
                              "50000",
                          ], function () {
                              console.log("");
                              console.log("");
                              console.log("------EMPLOYEE ADDED SUCCESSFULLY!------");
                              console.log("");
                              console.log("");
                          }
                          );
                          setTimeout(() => { init(); }, 1000);               
                          break;                        
                  }
              }
              );
          case "Technology":
              inquirer.prompt(iT).then((response) => {
                  switch (response.title) {
                      case "Lead Developer":
                          db.query("INSERT INTO employee (first_name, last_name, title, department, salary) VALUES (?, ?, ?, ?, ?)", [
                              response.first_name,
                              response.last_name,
                              "Lead Developer",
                              response.department,
                              "85000",
                          ], function () {
                              console.log("");
                              console.log("");
                              console.log("------EMPLOYEE ADDED SUCCESSFULLY!------");
                              console.log("");
                              console.log("");
                          }
                          );
                          setTimeout(() => { init(); }, 1000);               
                          break;
                      case "Junior Developer":
                          db.query("INSERT INTO employee (first_name, last_name, title, department, salary) VALUES (?, ?, ?, ?, ?)", [
                              response.first_name,
                              response.last_name,
                              "Junior Developer",
                              response.department,
                              "80000",
                          ], function () {
                              console.log("");
                              console.log("");
                              console.log("------EMPLOYEE ADDED SUCCESSFULLY!------");
                              console.log("");
                              console.log("");
                          }
                          );
                          setTimeout(() => { init(); }, 1000);               
                          break;
                  }
              }
              );
          case "Accounting":
              db.query("INSERT INTO employee (first_name, last_name, title, department, salary) VALUES (?, ?, ?, ?, ?)", [
                  response.first_name,
                  response.last_name,
                  "Accountant",
                  response.department,
                  "50000",
              ], function () {
                  console.log("");
                  console.log("");
                  console.log("------EMPLOYEE ADDED SUCCESSFULLY!------");
                  console.log("");
                  console.log("");                        
              }
              );
              setTimeout(() => { init(); }, 1000);               
              break;
       
                      case "HR Director":
                          db.query("INSERT INTO employee (first_name, last_name, title, department, salary) VALUES (?, ?, ?, ?, ?)", [
                              response.first_name,
                              response.last_name,
                              "HR Director",
                              response.department,
                              "65000",
                          ], function () {
                              console.log("");
                              console.log("");
                              console.log("------EMPLOYEE ADDED SUCCESSFULLY!------");
                              console.log("");
                              console.log("");
                          }
                          );
                          setTimeout(() => { init(); }, 1000);               
                          break;
                
          case "Customer Service Representative":
              db.query("INSERT INTO employee (first_name, last_name, title, department, salary) VALUES (?, ?, ?, ?, ?)", [
                  response.first_name,
                  response.last_name,
                  "Customer Service Representative",
                  response.department,
                  "35000",
              ], function () {
                  console.log("");
                  console.log("");
                  console.log("------EMPLOYEE ADDED SUCCESSFULLY!------");
                  console.log("");
                  console.log("");                        
              }
              );
              setTimeout(() => { init(); }, 1000);               
              break;
          }
      }
  )
};

function viewAllDepartments() {
  db.query("SELECT * FROM department", function (err, results) {
      console.table(results);
  });
};

function viewAllRoles() {
  db.query("SELECT title.id, title.title, title.salary, department.dept_name FROM title INNER JOIN department ON title.department = department.dept_name;", function (err, results) {
      console.table(results);
  })
};

function viewAllEmployees(){
  db.query("SELECT employee.id, employee.first_name, employee.last_name, title.title, department.dept_name, title.salary FROM employee INNER JOIN department ON employee.department = department.dept_name INNER JOIN title ON employee.title = title.title AND employee.salary = title.salary;", function (err, results) {
      console.table(results);
  })
};
"SELECT first_name, last_name, title FROM employee WHERE first_name = ? AND last_name = ?"