// Task-1 Employee Salary Dashboard

// let employees = [
//     {name : "Naveen" , salary : 140000},
//     {name : "Ramu" , salary : 68000},
//     {name : "Chandra" , salary : 160000},
//     {name : "Dinesh" , salary : 30000},
//     {name : "Esha" , salary : 170000}
// ]

// Display employee names using map()

// let employeeNames = employees.map((employee)=>{
//     return employee.name;
// })

// console.log(employeeNames);

// Show employees with salary greater than 50000 using filter()
// let highEarners = employees.filter((employee)=>{
//     return employee.salary > 50000;
// });
// console.log(highEarners);

// Find the first employee whose salary is above ₹1,00,000 using find()
// let firstHighEarner = employees.find((employee)=>{
//     return employee.salary > 100000;
// });
// console.log(firstHighEarner);

// Calculate the total salary expense using reduce().
// let totalSalaryExpense = employees.reduce((sum, employee) => 
//     sum + employee.salary, 0);
// console.log(totalSalaryExpense);

// Task-2 E-Commerce Cart Management

// let electronics = ["Laptop", "Mouse"];
// let accessories = ["Keyboard", "Monitor"];

// let cart = [...electronics, ...accessories];
// console.log(cart);

// let updatedCart = [...cart, "Headphones"];
// console.log(updatedCart);

// function checkout(...products) {
//     console.log("Products:", products);
//     console.log("Total Products:", products.length);
// }


// checkout(...updatedCart);


// Task-3 Student Report Card

// let student = {
//     name: "Charitha",
//     department: "Computer Science",
//     marks: [85, 90, 95, 80, 88]
// };


// let { name, department, marks } = student;

// let [subject1, subject2, subject3] = marks;

// let totalMarks = subject1 + subject2 + subject3;
// let averageMarks = totalMarks / 3;

// console.log("Student Name :", name);
// console.log("Department :", department);
// console.log("Total Marks :", totalMarks);
// console.log("Average Marks :", averageMarks);

// Task-4 Product Search System

// let searchText = "   Laptop   ";
// let product = "Gaming Laptop";

// let keyword = searchText.trim();

// keyword = keyword.toLowerCase();
// let productName = product.toLowerCase();

// if (productName.includes(keyword)) {
//     console.log("Product Found");

//     let highlightedProduct = product.replace("Laptop", "[Laptop]");
//     console.log("Product :", highlightedProduct);
// } else {
//     console.log("Product Not Found");
// }

// Task-5 Movie Collection Manager

// Movie List
let movies = ["Leo", "Dragon", "Retro"];

// 1. Add a new movie using push()
movies.push("Coolie");
console.log("Push :", movies);

// 2. Remove the last movie using pop()
movies.pop();
console.log("Pop :", movies);

// 3. Remove the first movie using shift()
movies.shift();
console.log("Shift :", movies);

// 4. Add a featured movie at the beginning using unshift()
movies.unshift("GOAT");
console.log("Unshift :", movies);

// 5. Replace one movie using splice()
movies.splice(1, 1, "Jailer");
console.log("Splice :", movies);

// 6. Sort movie ratings in descending order
let ratings = [4.5, 3.8, 5.0, 4.2, 4.8];

ratings.sort((a, b) => b - a);

console.log("Ratings (Descending) :", ratings);

// 7. Check whether a movie exists using includes()
if (movies.includes("GOAT")) {
    console.log("Movie Available");
} else {
    console.log("Movie Not Available");
}