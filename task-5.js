// Task-1. Employee Login (Scope)

// function employeeLogin() {

//     if (true) {

//         var companyName = "Stackly IT";
//         let employeeId = 101;
//         const password = "stack123";

//         console.log("Employee ID :", employeeId);
//         console.log("Password :", password);
//     }

//     console.log("Company Name :", companyName);

//     // These will throw an error
//     console.log("Employee ID :", employeeId);
//     console.log("Password :", password);
// }

// employeeLogin();

// Task-2. ATM Machine (Hoisting)

// Using var
// console.log(accountBalance);

// var accountBalance = 50000; // undefined

// Using let
// console.log(withdrawAmount);

// let withdrawAmount = 10000; // Uncaught Error

// Using const
// console.log(pin);

// const pin = 1234; // Uncaught Error

// Task-3 Food Delivery App - Named Function

// function orderFood(foodName) {
//     console.log("Order Placed :", foodName);
// }

// orderFood("Chicken Biryani");

// Task-4 WhatsApp Status - Anonymous Function

// let updateStatus = function (status) {
//     console.log("Status Updated :", status);
// };

// updateStatus("Busy in Meeting");

// Task-5 Weather App - Arrow Function

// const weatherReport = (city, temperature) => {
//     console.log(city + " Temperature is " + temperature + "°C");
// };

// weatherReport("Chennai", 36);

// Task-6 Flipkart Offer - IIFE

// (function () {
//     console.log("Today's Offer");
//     console.log("Flat 60% Discount");
// })();

// Task-7 Online Payment - Higher Order Function + Callback

// function paymentSuccess() {
//     console.log("Payment Successful");
// }

// function makePayment(callback) {
//     console.log("Payment Processing...");
//     callback();
// }

// makePayment(paymentSuccess);

// Task-8 YouTube Playlist - Generator Function

// function* playList() {
//     yield "Video 1";
//     yield "Video 2";
//     yield "Video 3";
//     yield "Video 4";
//     return "Playlist Completed";
// }

// let videos = playList();

// console.log(videos.next().value);
// console.log(videos.next().value);
// console.log(videos.next().value);
// console.log(videos.next().value);
// console.log(videos.next().value);

// Task-9 Student Result - Return Function

// function calculateTotal() {
//     let totalMarks = 485;
//     return totalMarks;
// }

// let result = calculateTotal();

// console.log("Total Marks :", result);

// Task-10 Shopping Cart - Return Function

// function cartTotal(price1, price2, price3) {
//     let totalAmount = price1 + price2 + price3;
//     return totalAmount;
// }

// let total = cartTotal(500, 1000, 1500);

// console.log("Total Amount :", total);

// Task-11 Salary Calculator - Uncurrying

// function salary(basic, hra, bonus) {
//     let totalSalary = basic + hra + bonus;
//     console.log("Total Salary :", totalSalary);
// }

// salary(50000, 5000, 3000);

// Task-12 Food Bill - Currying

// function foodBill(food) {
//     return function (drinks) {
//         return function (dessert) {
//             let totalBill = food + drinks + dessert;
//             console.log(totalBill);
//         };
//     };
// }

// foodBill(200)(100)(80);

// Task-13 E-commerce Coupon Generator

// function* couponGenerator() {
//     yield "WELCOME10";
//     yield "SAVE20";
//     yield "SUPER30";
//     yield "MEGA50";
//     return "No More Coupons";
// }

// let coupon = couponGenerator();

// console.log(coupon.next().value);
// console.log(coupon.next().value);
// console.log(coupon.next().value);
// console.log(coupon.next().value);
// console.log(coupon.next().value);

// Task-14 Bank Transaction - Higher Order Function + Callback

// function transactionSuccessful() {
//     console.log("Transaction Successful");
// }

// function withdraw(callback) {
//     console.log("Processing...");
//     callback();
// }

// withdraw(transactionSuccessful);

// Task-15 Employee Profile - Scope

// function employeeProfile() {

//     if (true) {

//         var company = "Stackly";
//         let designation = "MERN Developer";
//         const salary = 50000;

//     }

    // Accessible because 'var' has function scope
//     console.log("Company :", company);
    // These will throw an error because
    // 'let' and 'const' have block scope
//     console.log("Designation :", designation);
//     console.log("Salary :", salary);
// }

// employeeProfile();