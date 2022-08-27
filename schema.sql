DROP DATABASE IF EXISTS employeetracker_db;
CREATE DATABASE employeetracker_db

CREATE TABLE Department (
  ID INT NOT NULL,
  name VARCHAR(30) NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE Role (
  ID INT NOT NULL,
  title VARCHAR(30) NULL,
  salary DECIMAL,
  department_id INT,
  
);

CREATE TABLE Employee (
  id INT NOT NULL,
    LastName varchar(30),
    FirstName varchar(30),
  role_id INT NULL,
  manager_id INT NULL,
  PRIMARY KEY (ID)
);