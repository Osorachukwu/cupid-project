// NOTE: 
// 💥 .length is a property used to return the number of charaters in a string or the number of items in an array
// 💥typeof is an operator used to return the data type of a variable or value. 
// e.g console.log(typeof numberOfActiveStudents);

//string is a sequence of characters written withen qoutes. It can be written withen single quotes, double quotes or backticks. (', ", `). Used when writting text.

// let cohortName = `Cupid`;
// let cohortName = 'Cupid';
let cohortName = "Cohort Cupid.";

let age = "12";



// number inlcude digits 0-9 and decimals. They are not written with qoutes.
let numberOfActiveStudents = 4;


//  boolean represents true or false values
let isCohortActive = true;

//  null intential absence of data
let completeStudents = null;

// undefined an un-assigned or un-initialized varaible (empty)
let emptyClass;

// array is used to store a list of items written withen square brackets [] and separated by commas. An array can hold any data type including other arrays (nested array) and can be minupulated using array methods or square brackets. Array items are zero index based which means the first item is at index 0, the second item is at index 1 and so on.
let studentsInAttendance = ["Jude", "Abraham", "Nathaniel", "Kate"];

let totalStudents = [];

// push() is used to add an item to the end of an array
totalStudents.push("Kate");
totalStudents.push("Nathaniel");
totalStudents.push("Abraham");
totalStudents.push("Jude");
totalStudents.push("Emma");

// pop() is used to remove the last item in an array
totalStudents.pop()

//shift() is used to remove the first item in an array
totalStudents.shift();

//unShift() is used to add an item to the brgining of an array
totalStudents.unshift("Nzekwe")

console.log(studentsInAttendance[4])

console.log(totalStudents)
console.log(totalStudents.length); // returns the number of items in the array


// map(), forEach(), splice(), slice(), concat().


// object is used to store multiple related variables as key-value pairs written withen curly braces {}. An object can hold any data type including other objects (nested objects) and can be manipulated using dot notation or square brackets. Object properties are manipulated using dot notation.

let myPhone = {
    brand: "Redmi",
    screen: "6.5 inches",
    battery: "5000mah"
}


delete myPhone.screen;
myPhone.battery = "4000mah"
myPhone.mainCamera = "40mpx"
console.log("the battery of this phone is " + myPhone.battery)
console.log(myPhone)



