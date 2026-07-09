// Task-1  Employee Age Calculator

// let dob = new Date("2002-07-09");
// let today = new Date();
// let age = today.getFullYear() - dob.getFullYear();

// console.log("Employee Age :", age, "Years");

// Task-2 Online Appointment Scheduler

// let appointment =new Date()
// appointment.setFullYear(2027);
// appointment.setMonth(11);
// appointment.setDate(31);
// appointment.setHours(15);
// appointment.setMinutes(20);

// console.log("Updated Appointment :", appointment);

// Task-3 Multi-Country Meeting Time

// Current Date and Time
// let currentDate = new Date();

// India Time
// console.log(
//     "India Time :",
//     currentDate.toLocaleString("en-IN", {
//         timeZone: "Asia/Kolkata",
//     })
// );

// New York Time
// console.log(
//     "New York Time :",
//     currentDate.toLocaleString("en-US", {
//         timeZone: "America/New_York",
//     })
// );

// Tokyo Time
// console.log(
//     "Tokyo Time :",
//     currentDate.toLocaleString("en-JP", {
//         timeZone: "Asia/Tokyo",
//     })
// );

// Task-4 Product Warrenty Expiry

// Purchase Date
// let purchaseDate = new Date();

// Warranty Expiry Date
// let warrantyExpiry = new Date(purchaseDate);

// warrantyExpiry.setFullYear(warrantyExpiry.getFullYear() + 2);

// Print the dates
// console.log("Purchase Date :", purchaseDate);
// console.log("Warranty Expiry :", warrantyExpiry);

// Task-5 Digital Clock

function showTime() {

    let currentTime = new Date();

    console.log(currentTime.toLocaleTimeString());

}

setInterval(showTime, 1000);