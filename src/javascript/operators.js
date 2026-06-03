//JS Operators: are used to perform operations on variables and values.
//Arrithmetic operators: +, -, *, /, % (modulus), ** (exponentiation), ++ (increment), -- (decrement)

let x = 11;
let y = 11;
// console.log(x + y);
// console.log(450 - 30)

// let groom = "Obi";
// let bride = "Adaeze";
// console.log(groom + " " + bride);

// console.log(10 % 3); // modulus operator returns the remainder of a division operation

// console.log(10**5); // exponentiation operator returns the result of a base raised to the power of an exponent

// x++; //increases a value by 1
// x--; //decreses a value by 1

// console.log(x) 

// Assignment operators =, +=, -=, *=, /=, %=, **=;
// Simple assignment operators is used to initialize or assign value/data to a variable.

// console.log(x + y)
// x += y
// console.log("the value of x is " + x)

// Comparison operators >, >=, <, <=, ===, ==, !=
// loose equality
// console.log(x == y)
// strict equality
// console.log(x === y)

// console.log(x != y)

// Logical operators &&, ||, !
// logical && only returns true when all the operands in an expression are true, which it returns false if any of the operands in the expression is false

// console.log(true && true && false && true && true)
// console.log(false || false || false || true || false)

// let engAverage = 80;
// let mathsAverage = 50;

// let passedEng = engAverage >= 70;  
// let passedMaths = mathsAverage >= 70;

// console.log("You passed Eng " + passedEng)
// console.log("You passed Maths " + passedMaths)

// console.log("Promoted " + (passedEng && passedMaths))
// // console.log(`Promoted ${passedEng || passedMaths}`)

// // Ternary ?

// let accountBal = 1000;
// console.log(accountBal <= 0)

// console.log(accountBal <= 0 ? "Red" : "Green")

// console.log(3 > 2 ? "3 is greater than" : "3 is not greater than")

// let DOB = 2010;

// let personAge = 2026 - DOB;
// console.log(personAge >= 18 ? "Eligible" : "Ineligible")


// Dont worry
// console.log(personAge >= 18 ? ("You are " + personAge + " years old therfore you are Eligible") : ("You are " + personAge + " years old therfore you are Ineligible"))

// let timeOfDay = 22;

// console.log(timeOfDay > 0 && timeOfDay < 12 ? "Morning" : "Afternoon")

// console.log(timeOfDay > 0 && timeOfDay < 12 ? "Morning" : timeOfDay > 12 && timeOfDay < 18 ? "Afternoon" : timeOfDay > 18 && timeOfDay < 21 ? "Evening" : "Good Night")

// A: 90 - 100 
// B: 80 - 90 
// C: 70 - 80 
// D: 50 - 70 

let score = 65;

console.log(score >= 90 ? "A" : score >= 80 && score < 90 ? "B" : score >= 70 && score < 80 ? "C" : "D")

// Conditional statements

// if (condition) {
    // Code to be executed
// } else if (condition) {
  // code to be execute if this condition is true 
// }
// else {
    // otherwise execute this one
 // }


 let yourAccBal = 100;

 if (yourAccBal <= 0) {
    console.log("RED")
 } 
 else {
    console.log("GREEN")
 }

 let dob = 1931;

 let personsAge = 2026 - dob;

 if (personsAge >= 18) {
    console.log("Eligible")
 } else {
    console.log("Inieigible")
 }

 let scoree = 70;

if (scoree >= 90) {
    console.log("a")
} else if (scoree >= 80) {
    console.log("b")
} else if (scoree >= 70) {
    console.log("c")
} else {
    console.log("d")
}