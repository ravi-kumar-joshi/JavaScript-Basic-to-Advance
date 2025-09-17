// Operators & Conditional Statements

// Arithmetic Operators
let a = 10;
let b = 3;
console.log(a + b); // Addition: 13
console.log(a - b); // Subtraction: 7
console.log(a * b); // Multiplication: 30
console.log(a / b); // Division: 3.3333
console.log(a % b); // Modulus: 1
console.log(a ** b); // Exponentiation: 1000 (10^3)
console.log(++a); // Pre-increment: 11
console.log(b--); // Post-decrement: 3 (b becomes 2 after this line)
console.log(b); // 2
console.log(typeof a); // number
console.log(typeof b); // number
console.log(typeof (a + b)); // number

// Assignment Operators
let x = 5;
x += 3; // x = x + 3
console.log(x); // 8
x *= 2; // x = x * 2
console.log(x); // 16
x -= 4; // x = x - 4
console.log(x); // 12
x /= 3; // x = x / 3
console.log(x); // 4
x %= 3; // x = x % 3
console.log(x); // 1
console.log(typeof x); // number

// Comparison Operators
let p = 7;
let q = '7';
console.log(p == q); // Equality: true (value is equal)
console.log(p === q); // Strict Equality: false (value and type are not equal)
console.log(p != q); // Inequality: false (value is equal)
console.log(p !== q); // Strict Inequality: true (value and type are not equal)
console.log(p > 5); // Greater than: true
console.log(p < 10); // Less than: true
console.log(p >= 7); // Greater than or equal to: true
console.log(p <= 6); // Less than or equal to: false
console.log(typeof p); // number
console.log(typeof q); // string
console.log(typeof (p == q)); // boolean
console.log(typeof (p === q)); // boolean

// Logical Operators
let isAdult = true;
let hasID = false;
console.log(isAdult && hasID); // Logical AND: false
console.log(isAdult || hasID); // Logical OR: true
console.log(!isAdult); // Logical NOT: false
console.log(typeof isAdult); // boolean 
console.log(typeof hasID); // boolean
console.log(typeof (isAdult && hasID)); // boolean
console.log(typeof (isAdult || hasID)); // boolean
console.log(typeof (!isAdult)); // boolean
console.log(isAdult === (p == q)); // false

// Conditional Statements
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
}
else if (score >= 70) {
    console.log("Grade: C");
}
else {
    console.log("Grade: F");
}
// Output: Grade: B

let day = 3;
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
// Output: Wednesday

// Ternary Operator
let age2 = 20;
let canVote = (age2 >= 18) ? "Yes, can vote" : "No, cannot vote";
console.log(canVote); // Output: Yes, can vote

// Typeof Operator
console.log(typeof age2); // number
console.log(typeof canVote); // string
console.log(typeof (age2 >= 18)); // boolean
console.log(typeof (age2 >= 18 ? "Yes" : "No")); // string
console.log(typeof (age2 >= 18 ? true : false)); // boolean

// Nullish Coalescing Operator
let userInput = null;
let defaultValue = "Default Value";
let finalValue = userInput ?? defaultValue;
console.log(finalValue); // Output: Default Value   
console.log(typeof userInput); // object (null is of type object in JavaScript)
console.log(typeof defaultValue); // string
console.log(typeof finalValue); // string
console.log(userInput ?? "Another Default"); // Output: Another Default
console.log(null ?? "Fallback Value"); // Output: Fallback Value
console.log(undefined ?? "Fallback Value"); // Output: Fallback Value
console.log(0 ?? "Fallback Value"); // Output: 0
console.log(false ?? "Fallback Value"); // Output: false
console.log("" ?? "Fallback Value"); // Output: (empty string)
console.log(NaN ?? "Fallback Value"); // Output: NaN
console.log(typeof (userInput ?? defaultValue)); // string
console.log(typeof (null ?? "Fallback Value")); // string
console.log(typeof (undefined ?? "Fallback Value")); // string
console.log(typeof (0 ?? "Fallback Value")); // number
console.log(typeof (false ?? "Fallback Value")); // boolean
console.log(typeof ("" ?? "Fallback Value")); // string
console.log(typeof (NaN ?? "Fallback Value")); // number    
console.log((userInput ?? defaultValue) === finalValue); // true
console.log((null ?? "Fallback Value") === "Fallback Value"); // true
console.log((undefined ?? "Fallback Value") === "Fallback Value"); // true
console.log((0 ?? "Fallback Value") === 0); // true
console.log((false ?? "Fallback Value") === false); // true
console.log(("" ?? "Fallback Value") === ""); // true
console.log((NaN ?? "Fallback Value") === NaN); // true
console.log((userInput ?? defaultValue) === (null ?? "Another Default")); // false
console.log((userInput ?? defaultValue) === (undefined ?? "Another Default")); // false
console.log((userInput ?? defaultValue) === (0 ?? "Another Default")); // false 
console.log((userInput ?? defaultValue) === (false ?? "Another Default")); // false
console.log((userInput ?? defaultValue) === ("" ?? "Another Default")); // false
console.log((userInput ?? defaultValue) === (NaN ?? "Another Default")); // false

// Optional Chaining Operator
let user = {
    name: "Alice",
    address: {
        street: "123 Main St",
        city: "Wonderland"
    }
};
console.log(user?.name); // Output: Alice
console.log(user?.address?.city); // Output: Wonderland
console.log(user?.contact?.phone); // Output: undefined
console.log(typeof user); // object
console.log(typeof user?.name); // string
console.log(typeof user?.address); // object
console.log(typeof user?.address?.city); // string
console.log(typeof user?.contact); // undefined
console.log(typeof user?.contact?.phone); // undefined
console.log(user?.name === "Alice"); // true
console.log(user?.address?.city === "Wonderland"); // true
console.log(user?.contact?.phone === undefined); // true
console.log(user?.contact?.email === undefined); // true
console.log(user?.address?.street === "123 Main St"); // true
console.log(user?.address?.zip === undefined); // true
console.log(user?.address?.street === user.address.street); // true
console.log(user?.contact?.phone === user.contact?.phone); // true
console.log(user?.contact?.email === user.contact?.email); // true
console.log(user?.address?.zip === user.address?.zip); // true
console.log(user?.address?.city === (user.address ? user.address.city : undefined)); // true
console.log(user?.contact?.phone === (user.contact ? user.contact.phone : undefined)); // true
console.log(user?.contact?.email === (user.contact ? user.contact.email : undefined)); // true
console.log(user?.address?.zip === (user.address ? user.address.zip : undefined)); // true
console.log(user?.address?.city === (user.address && user.address.city)); // true
console.log(user?.contact?.phone === (user.contact && user.contact.phone)); // true
console.log(user?.contact?.email === (user.contact && user.contact.email)); // true
console.log(user?.address?.zip === (user.address && user.address.zip)); // true 


// Note: The above examples demonstrate various operators and conditional statements in JavaScript along with the use of the typeof operator to check data types. Each section includes examples and explanations to help understand how these operators work.
// Summary:
// Arithmetic Operators: +, -, *, /, %, **, ++, --
// Assignment Operators: =, +=, -=, *=, /=, %=
// Comparison Operators: ==, ===, !=, !==, >, <, >=, <=
// Logical Operators: &&, ||, !
// Conditional Statements: if, else if, else, switch
// Ternary Operator: condition ? expr1 : expr2
// Typeof Operator: typeof
// Nullish Coalescing Operator: ??
// Optional Chaining Operator: ?.
// Use typeof to check data types of variables and expressions.
// Use instanceof to check if an object is an instance of a specific class (like Map or Set).
// Practice Tasks:
// 1. Create a variable `num1` and assign it a number value. Create another variable `num2` and assign it another number value. Use arithmetic operators to perform addition, subtraction, multiplication, division, and modulus operations on these two variables. Print the results along with their types.
// 2. Create a variable `str1` and assign it a string value. Create another variable `str2` and assign it another string value. Use comparison operators to compare these two strings for equality and inequality (both loose and strict). Print the results along with their types.
// 3. Create a variable `isRaining` and assign it a boolean value (true or false). Create another variable `hasUmbrella` and assign it another boolean value. Use logical operators to determine if you should take an umbrella based on the values of these two variables. Print the result along with its type.
// 4. Create a variable `temperature` and assign it a number value representing the temperature in Celsius. Use conditional statements to determine if the temperature is "Cold" (below 15), "Warm" (between 15 and 25), or "Hot" (above 25). Print the result.
// 5. Create a variable `dayOfWeek` and assign it a number value (1-7) representing the day of the week. Use a switch statement to print the name of the day based on the value of `dayOfWeek`. Print the result.
// 6. Create a variable `age` and assign it a number value. Use the ternary operator to determine if the person is a "Minor" (below 18) or an "Adult" (18 and above). Print the result along with its type.
// 7. Create an object `person` with properties `name`, `age`, and `address` (which is another object with properties `street` and `city`). Use optional chaining to safely access the `city` property of the `address` object. Print the result along with its type.
// 8. Create a variable `userInput` and assign it a value of null or undefined. Use the nullish coalescing operator to  assign a default value to another variable `finalInput` if `userInput` is null or undefined. Print the result along with its type.
// 9. Create a variable `myMap` and assign it a new Map object. Add some key-value pairs to the map. Use the instanceof operator to check if `myMap` is an instance of Map. Print the result along with its type.
// 10. Create a variable `mySet` and assign it a new Set object. Add some values to the set (including duplicate values). Use the instanceof operator to check if `mySet` is an instance of Set. Print the result along with its type.
// Solutions:
// 1.
let num1 = 15;
let num2 = 4;
console.log(num1 + num2, typeof (num1 + num2)); // 19, number
console.log(num1 - num2, typeof (num1 - num2)); // 11, number
console.log(num1 * num2, typeof (num1 * num2)); // 60, number
console.log(num1 / num2, typeof (num1 / num2)); // 3.75, number
console.log(num1 % num2, typeof (num1 % num2)); // 3, number
// 2.
let str1 = "Hello";
let str2 = "hello";
console.log(str1 == str2, typeof (str1 == str2)); // false, boolean
console.log(str1 === str2, typeof (str1 === str2)); // false, boolean
console.log(str1 != str2, typeof (str1 != str2)); // true, boolean
console.log(str1 !== str2, typeof (str1 !== str2)); // true, boolean
// 3.
let isRaining = true;
let hasUmbrella = false;
let shouldTakeUmbrella = isRaining && !hasUmbrella ? "Yes" : "No";
console.log(shouldTakeUmbrella, typeof shouldTakeUmbrella); // Yes, string
// 4.
let temperature = 22;
if (temperature < 15) {
    console.log("Cold");
}
else if (temperature <= 25) {
    console.log("Warm");
}
else {
    console.log("Hot");
}
// Output: Warm
// 5.
let dayOfWeek = 5;
switch (dayOfWeek) {
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
// Output: Friday
// 6.
let age3 = 17;
let ageGroup = (age3 < 18) ? "Minor" : "Adult";
console.log(ageGroup, typeof ageGroup); // Minor, string
// 7.
let person = {
    name: "Bob",
    age: 30,
    address: {
        street: "456 Elm St",
        city: "Metropolis"
    }
};
console.log(person?.address?.city, typeof person?.address?.city); // Metropolis, string
// 8.
let userInput2 = undefined;
let finalInput = userInput2 ?? "Default Input";
console.log(finalInput, typeof finalInput); // Default Input, string
// 9.
let myMap = new Map();
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');
console.log(myMap instanceof Map, typeof myMap); // true, object
// 10.
let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2);
console.log(mySet instanceof Set, typeof mySet); // true, object
// Note: The solutions provided above demonstrate the use of various operators and conditional statements in JavaScript along with the use of the typeof and instanceof operators to check data types and object instances. Each task includes examples and explanations to help understand how these operators work.   
// Summary of Practice Tasks:
// 1. Arithmetic operations on two numbers and printing results with types.
// 2. Comparison of two strings using equality and inequality operators and printing results with types.
// 3. Logical operations on two boolean values to determine if an umbrella is needed and printing the result with its type.
// 4. Conditional statements to determine temperature category and printing the result.
// 5. Switch statement to print the name of the day based on a number value and printing the result.
// 6. Ternary operator to determine if a person is a minor or adult and printing the result with its type.
// 7. Optional chaining to safely access a nested property in an object and printing the result with its type.
// 8. Nullish coalescing operator to assign a default value if a variable is null or undefined and printing the result with its type.
// 9. Using instanceof to check if a variable is an instance of Map and printing the result with its type.
// 10. Using instanceof to check if a variable is an instance of Set and printing the result with its type.
// End of Practice Tasks