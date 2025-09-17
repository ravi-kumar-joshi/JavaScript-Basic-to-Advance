// what is string in js 
// A string is a sequence of characters used to represent text in JavaScript.

// Creating strings
let singleQuoteString = 'Hello, World!';
let doubleQuoteString = "Hello, World!";
let templateLiteralString = `Hello, World!`;


let name = "Ravi";
let massage = 'welcome to javascript ';
let greeting = `Hello, ${name}! ${massage}`;

console.log(name);
console.log(massage);
console.log(greeting);

let text = "hello world";
console.log(text.length); // Output: 11 (length of the string)

console.log(text[0]); // Output: 'h' (first character of the string)
console.log(text[4]); // Output: 'o' (fifth character of the string)

// strings mathods

let str = "Hello, World!";

console.log(str.toUpperCase()); // Output: "HELLO, WORLD!"

console.log(str.toLowerCase()); // Output: "hello, world!"

console.log(str.indexOf("World")); // Output: 7 (index of the substring "World")

console.log(str.includes("Hello")); // Output: true (checks if "Hello" is in the string)

console.log(str.slice(4)); // Output: "o, World!" (extracts a substring starting from index 4)

console.log(str.slice(0, 5)); // Output: "Hello" (extracts a substring from index 0 to 5)

console.log(str.replace("World", "JavaScript")); // Output: "Hello, JavaScript!" (replaces "World" with "JavaScript")

console.log(str.split(", ")); // Output: ["Hello", "World!"] (splits the string into an array at ", ")

console.log(str.trim()); // Output: "Hello, World!" (removes whitespace from both ends of the string)

let str1 = "Ravi";
let age = 25;
console.log(`Hello ${str1}, you are ${age} years old.`); // Output: "Hello Ravi, you are 25 years old."

// Escape characters
let escapedString = 'He said, "Hello!"'; // Using single quotes with double quotes inside
console.log(escapedString);

let escapedString2 = "He said, \"Hello!\""; // Using double quotes with escaped double quotes inside
console.log(escapedString2);







