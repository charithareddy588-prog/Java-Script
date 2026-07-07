// Task-1 Employee Bonus (Spread Operator)

// let employee = {
//     name: "Naveen",
//     salary: 35000
// }

// let employeeBonus = {
//     bonus: 5000,
//     department: "Developer"
// }

// let totalObject = { ...employee, ...employeeBonus };
// console.log(totalObject);

// Task-2 Shopping Cart (Rest Operator)

// function calculateBill(...prices) {
//     let total = 0;

//     for (let price of prices) {
//         total += price;
//     }
//     console.log("Items:", prices.length);
//     console.log("Total:", total);
// }
// calculateBill(10, 20, 30, 40)

// Task-3 Student Details (Object Destructuring)

// let student = {
//     name:"Rahul",
//     age:22,
//     course:"MERN",
//     city:"Chennai"
// }

// let a1 = student.name;
// let a2 = student.age;
// let a3 = student.course;
// let a4 = student.city;

// console.log(a1, a2, a3, a4);

// let { name, age, course, city } = student;

// console.log(name, age, course, city);

// Task-4 Online Food Order 

// let foods=[
// "Pizza",
// "Burger",
// "Fries"
// ]

// foods.pop()
// foods.push("Coke", "Ice Cream")
// console.log(foods)

// Task-5 Bank Transactions

// let transactions = [1000, 2000, 3000, 4000, 5000];
// transactions.shift();
// transactions.unshift(500);
// console.log(transactions);

// Task-6 Company Departments

// let dept1=["HR","Sales"]
// let dept2=["Developer","Testing"]
// let totalDept=dept1.concat(dept2)
// console.log(totalDept)

// Task-7 Product Search 

// let products=["Laptop", "Mouse", "Keyboard", "Monitor"]
// if (products.includes("Keyboard")) {
//     console.log("Available");
// } else {
//     console.log("Not Available");
// }

// Task-8 User Login (Callback Function)

// function dashboard() {
//     console.log("Dashboard Opened");
// }

// function login(callback) {
//     console.log("Login Success");
//     callback();
// }

// login(dashboard);

// Task-9 Coupon Generator (Generator Function)

// function* generateCoupons() {
//     yield "WELCOME10";
//     yield "SAVE20";
//     yield "MEGA50";
//     yield "FREE100";
// }

// let coupon = generateCoupons();
// console.log(coupon.next().value);
// console.log(coupon.next().value);
// console.log(coupon.next().value);
// console.log(coupon.next().value)

// Task-10 Coarse Registration (Currying)

// function course(courseName) {
//     return function (batch) {
//         return function (room) {
//             console.log("Course :", courseName);
//             console.log("Batch :", batch);
//             console.log("Room :", room);
//         };
//     };
// }

// course("JavaScript")("Morning")("Batch-36");

// Task-11 Movie Collection 

// let movies = ["Leo", "GOAT", "Dragon", "Retro", "Coolie"];

// let selectedMovies = movies.slice(2, 4);

// console.log(selectedMovies);

// Task-12 Employee IDs

// let ids = [101, 102, 103, 104, 105];

// ids.splice(2, 2, 501, 502);

// console.log(ids);

// Task-13 Sort Product Prices

// let price=[5000, 250, 700, 12000, 50]

// let sort1=price.sort()
// console.log(sort1)

// Task-14 Nested Categories

// let data=["Electronics",["Mobiles",["Samsung","Apple"]]]
// let [category, [subCategory, [brand1, brand2]]]=data
// console.log(category)
// console.log(subCategory)
// console.log(brand1)
// console.log(brand2)

// Task-15 Company Team

// let developers=["John","David"]
// let designers=["Ram","Kiran"]
// let array=[...developers,...designers]
// console.log(array)

// Task-16 Calculate Salary

// function calculateSalary() {
//     let salary = 30000;
//     let bonus = 5000;

//     return salary + bonus;
// }

// let totalSalary = calculateSalary();

// console.log("Total Salary :", totalSalary);

// Task-17 Scope Checking

// if (true) {

//     var company = "Stackly";
//     let employee = "John";
//     const salary = 50000;
// }
// console.log("Company :", company); // company: Stackly
// console.log("Employee :", employee); // ReferenceError: employee is not defined
// console.log("Salary :", salary); // ReferenceError: salary is not defined

// Task-18 Customer Orders

// let orders=["Pizza","Burger","Pizza","Sandwich","Pizza"]
// let indexOf1=orders.indexOf("Pizza")
// let indexOf2=orders.lastIndexOf("Pizza")
// console.log(indexOf1)
// console.log(indexOf2)

// Task-19 Flatten Product Categories

// let items = [1,2,[3,4,[5,6]]]
// console.log(items.flat(2))

// Task-20 Mini Shopping Cart Challenge

// let cart=["Mouse","Keyboard"]
// cart.push("Monitor")
// cart.unshift("Laptop")
// cart.splice(2, 1);
// if (cart.includes("Mouse")) {
//     console.log("Mouse is available in the cart");
// } else {
//     console.log("Mouse is not available in the cart");
// }
// let accessories = ["Webcam", "Speaker"];
// let completedCart = [...cart, ...accessories];
// console.log(completedCart);