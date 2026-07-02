// Task 1 - Find the Highest Salary

// let employees = [
//     {
//         name: "Naveen",
//         id: 101,
//         salary: 30000
//     },
//     {
//         name: "John",
//         id: 102,
//         salary: 60000
//     },
//     {
//         name: "Arun",
//         id: 103,
//         salary: 45000
//     }
// ];

// let highestSalary = employees[0].salary;
// let employeeName = employees[0].name;

// for (let i = 1; i < employees.length; i++) {
//     if (employees[i].salary > highestSalary) {
//         highestSalary = employees[i].salary;
//         employeeName = employees[i].name;
//     }
// }

// console.log("Highest Salary :", highestSalary);
// console.log("Employee Name :", employeeName);

// Task 2 - Find Employee by ID

// let employees = [
//     {
//         name: "Naveen",
//         id: 101,
//         salary: 30000
//     },
//     {
//         name: "John",
//         id: 102,
//         salary: 60000
//     },
//     {
//         name: "Arun",
//         id: 103,
//         salary: 45000
//     }
// ];

// let searchId = 103;
// let found = false;

// for (let i = 0; i < employees.length; i++) {
//     if (employees[i].id === searchId) {
//         console.log("Employee Found");
//         console.log("Name :", employees[i].name);
//         console.log("Salary :", employees[i].salary);
//         found = true;
//         break;
//     }
// }

// if (!found) {
//     console.log("Employee Not Found");
// }

// Task 3 - Calculate Salary with Bonus

// let employees = [
//     {
//         name: "Naveen",
//         id: 101,
//         salary: 30000
//     },
//     {
//         name: "John",
//         id: 102,
//         salary: 60000
//     },
//     {
//         name: "Arun",
//         id: 103,
//         salary: 45000
//     }
// ];

// let bonus = 5000;

// for (let i = 0; i < employees.length; i++) {
//     let totalSalary = employees[i].salary + bonus;

//     console.log(employees[i].name + " : " + totalSalary);
// }

// Task 4 - Experience Check

// let employees = [
//     {
//         name: "Naveen",
//         experience: 2
//     },
//     {
//         name: "John",
//         experience: 7
//     },
//     {
//         name: "Arun",
//         experience: 5
//     }
// ];

// for (let i = 0; i < employees.length; i++) {
//     if (employees[i].experience >= 5) {
//         console.log(employees[i].name + " - Senior Employee");
//     } else {
//         console.log(employees[i].name + " - Junior Employee");
//     }
// }

// Task 5 - Display Only Employee Names

// let employees = [
//     {
//         name: "Naveen",
//         experience: 2
//     },
//     {
//         name: "John",
//         experience: 7
//     },
//     {
//         name: "Arun",
//         experience: 5
//     }
// ];

// for (let i = 0; i < employees.length; i++) {
//     console.log(employees[i].name);
// }

// Task 6 - Display Employee IDs

// let employees = [
//     {
//         name: "Naveen",
//         id: 101,
//         salary: 30000
//     },
//     {
//         name: "John",
//         id: 102,
//         salary: 60000
//     },
//     {
//         name: "Arun",
//         id: 103,
//         salary: 45000
//     }
// ];

// for (let i = 0; i < employees.length; i++) {
//     console.log(employees[i].id);
// }

// Task 7 - Find Total Salary

// let employees = [
//     {
//         name: "Naveen",
//         id: 101,
//         salary: 30000
//     },
//     {
//         name: "John",
//         id: 102,
//         salary: 60000
//     },
//     {
//         name: "Arun",
//         id: 103,
//         salary: 45000
//     }
// ];

// let totalSalary = 0;

// for (let i = 0; i < employees.length; i++) {
//     totalSalary = totalSalary + employees[i].salary;
// }

// console.log("Total Salary :", totalSalary);

// Task 8 - Employees Earning More Than ₹40,000

// let employees = [
//     {
//         name: "Naveen",
//         id: 101,
//         salary: 30000
//     },
//     {
//         name: "John",
//         id: 102,
//         salary: 60000
//     },
//     {
//         name: "Arun",
//         id: 103,
//         salary: 45000
//     }
// ];

// for (let i = 0; i < employees.length; i++) {
//     if (employees[i].salary > 40000) {
//         console.log(employees[i].name);
//     }
// }

// Task 9 - Increase Salary

// let employees = [
//     {
//         name: "Naveen",
//         id: 101,
//         salary: 30000
//     },
//     {
//         name: "John",
//         id: 102,
//         salary: 60000
//     },
//     {
//         name: "Arun",
//         id: 103,
//         salary: 45000
//     }
// ];

// for (let i = 0; i < employees.length; i++) {
//     employees[i].salary = employees[i].salary + 5000;

//     console.log(employees[i].name + " : " + employees[i].salary);
// }

// Task 10 - Employee Report

// let employees = [
//     {
//         name: "Naveen",
//         id: 101,
//         salary: 30000
//     },
//     {
//         name: "John",
//         id: 102,
//         salary: 60000
//     },
//     {
//         name: "Arun",
//         id: 103,
//         salary: 45000
//     }
// ];

// for (let i = 0; i < employees.length; i++) {
//     console.log(`Employee Name : ${employees[i].name}`);
//     console.log(`Employee ID : ${employees[i].id}`);
//     console.log(`Salary : ${employees[i].salary}`);
//     console.log(" ");
// }
//     }
// ];


// Challenge Task - Employee Management

// let employees = [
//     {
//         name: "Naveen",
//         id: 101,
//         salary: 30000
//     },
//     {
//         name: "John",
//         id: 102,
//         salary: 60000
//     },
//     {
//         name: "Arun",
//         id: 103,
//         salary: 45000
//     }
// ];

// 1. Total Number of Employees
// console.log("Total Employees :", employees.length);

// Variables
// let totalSalary = 0;
// let highestSalary = employees[0].salary;
// let lowestSalary = employees[0].salary;
// let highestEmployee = employees[0].name;
// let lowestEmployee = employees[0].name;

// console.log("\nEmployees earning more than ₹40,000:");

// for (let i = 0; i < employees.length; i++) {

//     totalSalary = totalSalary + employees[i].salary;

//     if (employees[i].salary > highestSalary) {
//         highestSalary = employees[i].salary;
//         highestEmployee = employees[i].name;
//     }

//     if (employees[i].salary < lowestSalary) {
//         lowestSalary = employees[i].salary;
//         lowestEmployee = employees[i].name;
//     }

//     if (employees[i].salary > 40000) {
//         console.log(employees[i].name);
//     }
// }

// Display Results
// console.log("\nHighest Salary :", highestSalary);
// console.log("Employee :", highestEmployee);

// console.log("\nLowest Salary :", lowestSalary);
// console.log("Employee :", lowestEmployee);

// console.log("\nTotal Salary :", totalSalary);

// 8. Search Employee by ID
// let searchId = 103;
// let found = false;

// for (let i = 0; i < employees.length; i++) {
//     if (employees[i].id === searchId) {
//         console.log("\nEmployee Found");
//         console.log("Name :", employees[i].name);
//         console.log("Salary :", employees[i].salary);
//         found = true;
//         break;
//     }
// }

// if (!found) {
//     console.log("\nEmployee Not Found");
// }

// 9. Add ₹5,000 Bonus
// console.log("\nSalary After Bonus:");

// for (let i = 0; i < employees.length; i++) {
//     employees[i].salary = employees[i].salary + 5000;
//     console.log(employees[i].name + " : " + employees[i].salary);
// }

// 10. Employee Report
// console.log("\nEmployee Report");

// for (let i = 0; i < employees.length; i++) {
//     console.log(`
// Employee Name : ${employees[i].name}
// Employee ID : ${employees[i].id}
// Salary : ${employees[i].salary}
// `);
// }

// Task 1 - Company Welcome Function

// function companyWelcome() {
//     console.log("Welcome to Stackly IT");
// }

// companyWelcome();

// Task 2 - Employee Details

// function employeeDetails(name, department, salary) {
//     console.log("Employee Name :", name);
//     console.log("Department :", department);
//     console.log("Salary :", salary);
// }

// employeeDetails("Naveen", "Developer", 30000);

// Task 3 - Calculate Bonus

// function calculateBonus(salary, bonus) {
//     let totalSalary = salary + bonus;
//     console.log("Total Salary :", totalSalary);
// }

// calculateBonus(40000, 5000);

// Task 4 - Student Result

// function studentResult(marks) {
//     if (marks >= 35) {
//         console.log("Pass");
//     } else {
//         console.log("Fail");
//     }
// }

// studentResult(45);

// Task 5 - Return Employee Name

// function getEmployeeName() {
//     return "Naveen";
// }

// let employeeName = getEmployeeName();

// console.log(employeeName);

// Task 6 - Product Price

// function getPrice() {
//     return 25000;
// }

// let price = getPrice();
// let gst = 4500;
// let totalPrice = price + gst;

// console.log("Price :", price);
// console.log("GST :", gst);
// console.log("Total Price :", totalPrice);

// function demo() {

//     if (true) {

//         var a = 10;
//         let b = 20;
//         const c = 30;

//     }

//     console.log(a);
//     console.log(b);
//     console.log(c);

// }

// demo();

// var has function scope, so it can be accessed anywhere inside the demo() function.

// let has block scope, so it can only be accessed inside the { } block where it is declared.
// const also has block scope, so it can only be accessed inside the { } block where it is declared.

// console.log(a);
// var a = 100;

//Undefined

// console.log(b);

// let b = 200;

// ReferenceError: Cannot access 'b' before initialization

// var 
// Hoisted and initialized with undefined
// Can be accessed before declaration (returns undefined)
// Function scoped

// let
// Hoisted but not initialized
// Cannot be accessed before declaration
// Block scoped

// Task 9 - Named Function

// function greet() {
//     console.log("Good Morning");
// }

// greet();

// Task 10 - Anonymous Function

// let welcome = function () {
//     console.log("Welcome Employee");
// };

// welcome();

// Task 11 - Arrow Function

// const training = () => {
//     console.log("JavaScript Training");
// };

// training();

// Task 12 - Return Function

// function getCompanyName() {
//     return "Stackly";
// }

// let company = getCompanyName();

// console.log("Welcome " + company);

// Task 13 - Higher Order Function

// function dashboard() {
//     console.log("Dashboard Loaded");
// }

// function login(callback) {
//     console.log("Login Successful");
//     callback();
// }

// login(dashboard);

// Task 14 - Callback Function

// function delivered() {
//     console.log("Delivered");
// }

// function preparingFood(callback) {
//     console.log("Preparing Food");
//     callback();
// }

// function orderReceived(callback) {
//     console.log("Order Received");
//     callback(delivered);
// }

// orderReceived(preparingFood);

// Task 15 - Generator Function

// function* coupons() {
//     yield "10% Discount";
//     yield "20% Discount";
//     yield "30% Discount";
//     yield "Better Luck Next Time";
// }

// let coupon = coupons();

// console.log(coupon.next().value);
// console.log(coupon.next().value);
// console.log(coupon.next().value);
// console.log(coupon.next().value);

// Task 16 - Return + Generator

// function* fruits() {
//     yield "Apple";
//     yield "Orange";
//     yield "Banana";
// }

// let fruit = fruits();

// console.log(fruit.next().value);
// console.log(fruit.next().value);
// console.log(fruit.next().value);

// Task 17 - Currying

// function discount(price) {
//     return function (discountPercent) {
//         let finalPrice = price - (price * discountPercent / 100);
//         console.log("Final Price :", finalPrice);
//     };
// }

// discount(1000)(10);

// Task 18 - Company Salary

// function salary(basicSalary) {
//     return function (bonus) {
//         return function (allowance) {
//             let totalSalary = basicSalary + bonus + allowance;
//             console.log("Total Salary :", totalSalary);
//         };
//     };
// }

// salary(30000)(5000)(2000);

// Task 19 - Real-Time Login System

// function loadDashboard() {
//     console.log("Load Dashboard");
// }

// function loginSuccessful() {
//     console.log("Login Successful");
//     loadDashboard();
// }

// function verifyPassword() {
//     console.log("Verify Password");
//     loginSuccessful();
// }

// function enterUsername() {
//     console.log("Enter Username");
//     verifyPassword();
// }

// enterUsername();

// ================================
// Employee Salary Management System
// ================================

// Employee Details
let employee = {
    name: "Naveen",
    id: 101,
    department: "Developer",
    salary: 30000
};

// 1. Arrow Function - Welcome Message
const welcome = () => {
    console.log("===== Welcome to Employee Salary Management System =====");
};

welcome();

// 2. Display Employee Details
function employeeDetails() {
    console.log("\nEmployee Details");
    console.log("Name :", employee.name);
    console.log("ID :", employee.id);
    console.log("Department :", employee.department);
    console.log("Salary :", employee.salary);
}

employeeDetails();

// 3. Anonymous Function - Print Department
let department = function () {
    console.log("\nDepartment :", employee.department);
};

department();

// 4. Calculate Salary + Bonus
function calculateSalary(salary, bonus) {
    return salary + bonus;
}

let finalSalary = calculateSalary(employee.salary, 5000);

console.log("\nSalary After Bonus :", finalSalary);

// 5. Higher-Order Function + Callback
function dashboard() {
    console.log("Employee Dashboard Loaded");
}

function login(callback) {
    console.log("\nLogin Successful");
    callback();
}

login(dashboard);

// 6. Generator Function - Monthly Bonus Coupons
function* coupons() {
    yield "10% Bonus Coupon";
    yield "20% Bonus Coupon";
    yield "30% Bonus Coupon";
    yield "Better Luck Next Time";
}

let coupon = coupons();

console.log("\nMonthly Bonus Coupons");
console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);

// 7. Currying - Tax Calculation
function taxCalculation(salary) {
    return function (tax) {
        let salaryAfterTax = salary - (salary * tax / 100);
        return salaryAfterTax;
    };
}

let salaryAfterTax = taxCalculation(finalSalary)(10);

console.log("\nSalary After Tax :", salaryAfterTax);

// 8. Final Employee Report
console.log("\n========== Employee Report ==========");

console.log(`Employee Name : ${employee.name}`);
console.log(`Employee ID : ${employee.id}`);
console.log(`Department : ${employee.department}`);
console.log(`Original Salary : ${employee.salary}`);
console.log(`Salary After Bonus : ${finalSalary}`);
console.log(`Salary After Tax : ${salaryAfterTax}`);

console.log("=====================================");