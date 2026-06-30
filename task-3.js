// Task-1 Employee Login Eligibility

// let employeeAge=prompt("Enter your age")
// let employeeIdAvailability=confirm("Do you have an employee ID?")
// let employeeAttendance=prompt("Enter your attendance percentage")

// if (employeeAge>=18 && employeeIdAvailability && employeeAttendance>=75) {
//     console.log("Access Granted")
// } else {
//     console.log("Access Denied")
// }

// Task-2 Student Grade System

// let marks= 87
// if(marks>=90 && marks<=100) {
//     console.log("Grade A+")
// } else if(marks>=80 && marks<90) {
//     console.log("Grade A")
// } else if(marks>=70 && marks<80) {
//     console.log("Grade B")
// } else if(marks>=60 && marks<70) {
//     console.log("Grade C")
// } else if(marks<60) {
//     console.log("Fail")
// } else {
//     console.log("Invalid Marks")
// }

// Task-3 ATM Withdrawl

// let balance=5000
// let withdraw=3000
// if (withdraw<=balance) {
//     let remainingBalance=balance-withdraw
//     console.log("Transaction Successful")
//     console.log("Remaining Balance :", remainingBalance)
// } else {
//     console.log("Insufficient Balance")
// }

// Task-4 Food Ordering App

// let orderNumber=4 
// switch(orderNumber) {
//     case 1 : console.log("You Ordered Pizza"); break;
//     case 2 : console.log("You Ordered Burger"); break;
//     case 3 : console.log("You Ordered Shawarma"); break;
//     case 4 : console.log("You Ordered Biriyani"); break;
//     case 5 : console.log("You Ordered Juice"); break;

//     default : console.log("Check your Order")
// }

// Task-5 E-Commerce Discount

// let purchaseAmount=prompt("Enter the purchase amount")
// let isPremiumUser=confirm("Are you a premium user?")
// let discount=0
// if (purchaseAmount>5000 && isPremiumUser) {
//     discount=purchaseAmount*0.20 // 20% discount
// } else {
//     discount=purchaseAmount*0.10 //10% discount
// }

// let finalPrice=purchaseAmount-discount
// console.log("Original Price :", purchaseAmount)
// console.log("Discount :", discount)
// console.log("Final Price :", finalPrice)

// Task-6 Attendance report

// for(let a=1; a<=30; a++) {
//     console.log("Day", a, "Present")
// }

// Task-7 Even Number Generator

// for(let i=1; i<=100; i++) {
//     if(i%2===0) {
//         console.log(i)
//     }
// }

// Task-8 Mobile Number Validation

// let mobileNumber=prompt("Enter your mobile number")
// if (mobileNumber.length===10 && (mobileNumber.startsWith("6") || mobileNumber.startsWith("7") || mobileNumber.startsWith("8") || mobileNumber.startsWith("9"))) {
//     console.log("Valid Mobile Number")
// } else {
//     console.log("Invalid Mobile Number")
// }

// Task-9 Shopping Cart

// let cart=["Milk", "Bread", "Egg", "Rice", "Oil"]
// console.log("First Item :", cart[0])
// console.log("Last Item :", cart[cart.length-1])
// console.log("Total Items :", cart.length)

// Task-10 Employee Database

// let employee={
//     name: prompt("Enter Employee Name"),
//     salary: prompt("Enter Employee Salary"),
//     department: prompt("Enter Employee Department"),
//     experience: prompt("Enter Employee Experience in years")
// }

// console.log("Employee Name :", employee.name)
// console.log("Department :", employee.department)
// console.log("Experience :", employee.experience)

// task-11 Company ID Generator

// let employeeDetails={
//     name: "Naveen",
//     id: "1045",
//     department: "Development"
// }
// console.log("Welcome ", employeeDetails.name)
// console.log(`Your Employee ID is EMP${employeeDetails.id}`)
// console.log("Department :", employeeDetails.department)

// Task-12 User Registration

// prompt("Enter your Full Name")
// prompt("Enter your Age")
// confirm("Do you accept Terms?")
// alert("Registered Successfully")

// Task-13 Salary Increment Calculator

// let salary=35000
// let incrementAmount=salary*0.15 // 15% increment amount
// let newSalary=salary+incrementAmount
// console.log("Old Salary :", salary)
// console.log("Increment Amount :", incrementAmount)
// console.log("New Salary :", newSalary)

// Task-14 Restaurant Bill Generator

// let burgerPrice=150
// let pizzaPrice=300
// let juicePrice=80
// let subTotal=burgerPrice+pizzaPrice+juicePrice
// let gst=subTotal*0.18 // 18% GST
// let grandTotal=subTotal+gst
// console.log("Sub Total :", subTotal)
// console.log("GST :", gst)
// console.log("Grand Total :", grandTotal)

// Task-15 Company Attendance Dashboard

// let employees= {
//     Rahul: "Present",
//     Arun: "Absent",
//     Kamal: "Present",
//     Priya: "Present",
//     Divya: "Absent"
// };

// let presentCount=0;
// let absentCount=0;

// console.log("Present Employees:")

// for (let employee in employees) {
//     if (employees[employee] === "Present") {
//         console.log(employee)
//         presentCount++
//     }
// }
// console.log("Absent Employees:")

// for (let employee in employees) {
//     if (employees[employee] === "Absent") {
//         console.log(employee)
//         absentCount++
//     }
// }
// console.log("Total Present :", presentCount)
// console.log("Total Absent :", absentCount)

// Mini project (Team Assignment)
// Employee Management System (Console Version)


let employees = [];

while (true) {

    let found=false;

    let choice = Number(prompt(
`======== Employee Management System ========

1. Add Employee
2. View All Employees
3. Search Employee by ID
4. Calculate Salary with Bonus
5. Check Experience Level
6. Delete Employee
7. Exit

Enter Your Choice:
`));

    switch (choice) {

        case 1:

            let id = prompt("Enter Employee ID:");
            let name = prompt("Enter Employee Name:");
            let salary = Number(prompt("Enter Salary:"));
            let experience = Number(prompt("Enter Experience (Years):"));

            employees.push({
                id: id,
                name: name,
                salary: salary,
                experience: experience
            });

            console.log("Employee Added Successfully!");
            break;


        case 2:

            if (employees.length === 0) {
                console.log("No Employees Found.");
            } else {

                console.log("------ Employee List ------");

                for (let emp of employees) {

                    console.log(`ID : ${emp.id}`);
                    console.log(`Name : ${emp.name}`);
                    console.log(`Salary : ₹${emp.salary}`);
                    console.log(`Experience : ${emp.experience} Years`);
                    console.log("---------------------------");

                }

            }

            break;


        case 3:

            let searchId = prompt("Enter Employee ID:");

            found = false;

            for (let emp of employees) {

                if (emp.id === searchId) {

                    console.log("Employee Found");
                    console.log(`ID : ${emp.id}`);
                    console.log(`Name : ${emp.name}`);
                    console.log(`Salary : ₹${emp.salary}`);
                    console.log(`Experience : ${emp.experience} Years`);

                    found = true;
                    break;

                }

            }

            if (!found) {
                console.log("Employee Not Found.");
            }

            break;


        case 4:

            let bonusId = prompt("Enter Employee ID:");

            found = false;

            for (let emp of employees) {

                if (emp.id === bonusId) {

                    let bonus = emp.salary * 10 / 100;
                    let totalSalary = emp.salary + bonus;

                    console.log(`Employee : ${emp.name}`);
                    console.log(`Salary : ₹${emp.salary}`);
                    console.log(`Bonus : ₹${bonus}`);
                    console.log(`Total Salary : ₹${totalSalary}`);

                    found = true;
                    break;

                }

            }

            if (!found) {
                console.log("Employee Not Found.");
            }

            break;


        case 5:

            let expId = prompt("Enter Employee ID:");

            found = false;

            for (let emp of employees) {

                if (emp.id === expId) {

                    console.log(`Employee : ${emp.name}`);

                    if (emp.experience >= 5) {
                        console.log("Experience Level : Senior");
                    } else {
                        console.log("Experience Level : Junior");
                    }

                    found = true;
                    break;

                }

            }

            if (!found) {
                console.log("Employee Not Found.");
            }

            break;


        case 6:

            let deleteId = prompt("Enter Employee ID:");

            found = false;

            for (let i = 0; i < employees.length; i++) {

                if (employees[i].id === deleteId) {

                    employees.splice(i, 1);

                    console.log("Employee Deleted Successfully!");

                    found = true;
                    break;

                }

            }

            if (!found) {
                console.log("Employee Not Found.");
            }

            break;


        case 7:

            console.log("Thank You! Visit Again.");
            break;


        default:

            console.log("Please Enter a Valid Choice.");

    }

    if (choice === 7) {
        break;
    }

}