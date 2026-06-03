// function nameOfFunction(parametrs) {
//     // code to be executed
//}


// template literals or template string `${}`
// allows to combine strings, variables and expressions

let myCar = " I woke up oin a new Bugatti.";
console.log(myCar.length)


function greet(person, person2) {
    console.log(`Hello ` + person + " & " + person2 + " " + (2 * 3))
    // console.log(`Hello ${person} & ${person2} ${2 * 2}`)
}

greet("John", "Mark");
greet("Mary");
greet("Doe");

function handleAddition(num1, num2) {
    console.log(`${num1 + num2}`)
}

handleAddition(1350, 5400);
handleAddition(34, 390);

//Arrow function

let handleMultiplyByTwo = (para, para1) => {
    console.log(`This is the ${para} way of writting function`);
}

handleMultiplyByTwo("Lastest");


// Loop is used for repetitive coding, the code keeps running until a condition is meet

// for (itrationVariable, condition, incrementExpresion) {
//     // code to be executed
//}
// Note: the itration variable is also initial expression

for (let i = 1; i <= 12; i++) {
    console.log("2 x " + i + " = " + (2 * i))
}

let x = "";

for (let i = 0; i < 5; i++) {
    console.log(x += "*")

}

let jambScores = [60, 47, 63, 22, 48, 26, 53];


for (let i = 0; i < jambScores.length; i++) {
    console.log(jambScores[i] + 20)
}
