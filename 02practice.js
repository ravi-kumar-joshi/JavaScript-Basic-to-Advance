// Task 1: Arithmetic Operations

let a = 10;
let b = 3;


console.log("Addition:", a + b); // Output: 13
console.log("Subtraction:", a - b); // Output: 7
console.log("Multiplication:", a * b); // Output: 30
console.log("Division:", a / b); // Output: 3.3333333333333335
console.log("Modulus:", a % b); // Output: 1
console.log("Exponentiation:", a ** 2); // Output:  100

// Task 2 : Assignment Operators
console.log("\nTask 2 : Assignment Operators:");


let x = 5;
x += 3; // x = x + 3
console.log("After += :", x); // Output: 8

x-= 2; // x = x - 2
console.log("After -= :", x); // Output: 6

x *= 2 ; // x = x * 2
console.log("After *= :", x); // Output: 12

x /= 3; // x = x / 3
console.log("After /= :", x); // Output: 4


// Task 3: Comparison Operators
console.log("\nTask 3: Comparison Operators:");

let p = 5;
let q = "5";

console.log(`${p} == ${q} : ${p == q}`); // Output: true (loose equality)
console.log(`${p} === ${q} : ${p === q}`); // Output: false (strict equality)
console.log(`${p} != ${q} : ${p != q}`); // Output: false (loose inequality)
console.log(`${p} !== ${q} : ${p !== q}`); // Output: true (strict inequality)
console.log(`${p} > 3 : ${p > 3}`); // Output: true
console.log(`${p} < 3 : ${ p < 3}`); // Output: false
console.log(`${p} >= 5 :  ${p >= 5}`); // Output: true
console.log(`${p} <= 4 : ${p <= 4}`); // Output: false       

// Task 4: Logical Operators
console.log("\nTask 4: Logical Operators:");

let isAdult = true;
let hasID = false;

console.log("isAdult && hasID :", isAdult && hasID); // Output: false (AND)
console.log("isAdult || hasID :", isAdult || hasID); // Output: true (OR)
console.log("!isAdult :", !isAdult); // Output: false (NOT)
console.log("!hasID :", !hasID); // Output: true (NOT)

// Task 5 : if...else Statement
console.log("\nTask 5 : if...else Statement");

let marks = 85;

if (marks >= 90) {
    console.log("Grade: A");
}else if (marks >= 80) {
    console.log("Grade: B");
} else if (marks >= 70) {
    console.log("Grade: C");
} else if (marks >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}

// Task 6: switch Statement
console.log("\nTask 6: switch Statement");

let day = 4;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;      
    case 3:
        console.log("Wednesday");
        break;  
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}





