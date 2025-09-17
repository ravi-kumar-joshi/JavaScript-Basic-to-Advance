// What is Function?
// A function is a block of code designed to perform a particular task.
// A function is executed when "something" invokes it (calls it).

// 1. Function Declaration
function greet() {
    console.log("Hello, World!");
}
greet(); // Calling the function

// Fuction with parameters

function greetUser(name) {
    console.log("Hello, " + name + "!");
}

greetUser("Ravi"); // Output: Hello, Ravi!
greetUser("Anita"); // Output: Hello, Anita!

// function with return value

function add(a, b) {
    return a + b;
}
console.log(add(5, 3)); // Output: 8

function multiply(x, y) {
    return x * y;
}
let result = multiply(4, 5);
console.log(result); // Output: 20

// Arrow Function

const subtract = (a, b) => {
    return a - b;
}

console.log(subtract(10, 4)); // Output: 6

const divide = (x, y) => x / y;
console.log(divide(20, 4)); // Output: 5

// Function Expression  
const square = function(num) {
    return num * num;
}
console.log(square(6)); // Output: 36

const cube = function(n) {
    return n * n * n;
}
console.log(cube(3)); // Output: 27

// Function with loops 

function printTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + (num * i));
    }
}

printTable(5);
// Output: Multiplication table of 5
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// ...
// 5 x 10 = 50

// Function with conditional statements

function checkAge(age) {
    if (age >= 18) {
        return "You can vote.";
    } else {
        return "You can't vote yet.";
    }
}

console.log(checkAge(16));
console.log(checkAge(21));
// Output:
// You can't vote yet.
// You can vote.

// Function with default parameters

function greetPerson(name = "Guest") {
    console.log("Hello, " + name + "!");
}   
greetPerson(); // Output: Hello, Guest!
greetPerson("Sam"); // Output: Hello, Sam!
