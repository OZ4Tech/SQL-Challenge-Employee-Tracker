INSERT INTO department (dept_name) VALUES
("Administration"),
("Accounting"),
("Customer Service"),
("Human Resources"),
("Technology");

INSERT INTO title (title, salary, department) VALUES
("CEO", 100000, "Administration"),
("Sales Manager", 75000, "Customer Service"),
("Sales Person", 50000, "Customer Service"),
("Lead Developer", 85000, "Technology"),
("Junior Developer", 80000, "Technology"),
("Accountant", 60000, "Accounting"),
("HR Director", 65000, "Human Resources"),
("Customer Service Representative", 35000, "Customer Service");


INSERT INTO employee (first_name, last_name, title, department, salary) VALUES
("Jane", "Doe", "CEO", "Administration", 100000),
("John", "Doe", "Sales Manager", "Customer Service", 75000),
("Jill", "Doe", "Sales Person", "Customer Service", 50000),
("Jack", "Doe", "Accountant", "Accounting", 60000),
("Franklin", "Bash", "Lead Developer", "Technology", 85000),
("Kingston", "Sean", "Junior Developer", "Technology", 80000),
("Stevin", "Faulker", "Junior Developer", "Technology", 80000);
