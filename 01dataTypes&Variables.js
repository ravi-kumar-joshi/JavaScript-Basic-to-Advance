// ↗️Variable : It is a container that holds data values. In JavaScript, you can declare a variable using var, let, or const keywords.


// syntax : 

let variableName = value;
const constantName = value;
var oldVariableName = value; // Not recommended for use in modern JavaScript    

// Example:
let age = 25;
const name = "John";
var isStudent = true; // Not recommended for use in modern JavaScript

// ↗️Data Types : Data types are the different types of values that can be stored and manipulated in a programming language. JavaScript has several built-in data types:

// 1. Primitive Data Types:

// - Number: Represents both integer and floating-point numbers.
let num = 42; // Number
let floatNum = 3.14; // Floating-point Number

// - String: Represents a sequence of characters enclosed in single or double quotes.
let str = "Hello, World!"; // String
let char = 'A'; // Character (also a String in JavaScript) 
let templateStr = `This is a template string with a variable: ${name}`; // Template String

// - Boolean: Represents a logical entity that can have two values: true or false.
let isTrue = true; // Boolean
let isFalse = false; // Boolean 

// - Null: Represents the intentional absence of any object value.
let emptyValue = null; // Null  

// - Undefined: Represents a variable that has been declared but not assigned a value.
let notAssigned; // Undefined
console.log(notAssigned); // Output: undefined

// - Symbol: Represents a unique identifier. Symbols are often used to create unique property keys for objects.
let sym = Symbol('uniqueIdentifier'); // Symbol 
console.log(sym); // Output: Symbol(uniqueIdentifier)
let anotherSym = Symbol('uniqueIdentifier'); // Different Symbol
console.log(sym === anotherSym); // Output: false  
console.log(typeof sym); // Output: symbol 

// - BigInt: Represents integers with arbitrary precision. It is used for very large integers that exceed the safe integer limit for the Number type.
let bigIntNum = BigInt(9007199254741991n); // BigInt
let anotherBigInt = 9007199254741991n;      // BigInt using 'n' suffix
console.log(bigIntNum + anotherBigInt); // Output: 18014398509483982n 
console.log(typeof bigIntNum); // Output: bigint

// 2. Non-Primitive Data Types: 

// - Object: Represents a collection of key-value pairs. Objects can store multiple values and can be used to represent complex data structures.
let person = {
    name: "Ravi",
    age: 21,
    isEmployed: true
}; // Object
console.log(person.name); // Output: Ravi 
console.log(typeof person); // Output: object

// - Array: Represents an ordered list of values. Arrays can hold multiple values of different data types.  
let numbers = [1, 2, 3, 4, 5]; // Array of Numbers
let mixedArray = [1, "two", true, null]; // Array of Mixed Data Types
console.log(numbers[0]); // Output: 1
console.log(mixedArray[1]); // Output: two
console.log(typeof numbers); // Output: object (Arrays are a type of Object in JavaScript)  
console.log(Array.isArray(numbers)); // Output: true (Check if it's an Array)

// - Function: Represents a block of code designed to perform a particular task. Functions can be treated as first-class citizens in JavaScript, meaning they can be assigned to variables, passed as arguments, and returned from other functions.
function greet() {
    return "Hello!";
} // Function   

let greetFunc = function () {
    return "Hi there!";
}
console.log(greet()); // Output: Hello!
console.log(greetFunc()); // Output: Hi there!
console.log(typeof greet); // Output: function
console.log(typeof greetFunc); // Output: function
console.log(greet === greetFunc); // Output: false (Different functions)

// - Date: Represents a specific point in time. The Date object provides methods for working with dates and times.
let currentDate = new Date(); // Date Object
console.log(currentDate); // Output: Current date and time
console.log(typeof currentDate); // Output: object (Date is a type of Object in JavaScript)

// - RegExp: Represents a regular expression, which is used for pattern matching within strings.
let pattern = /ab+c/; // Regular Expression
let testString = "abbbbc";
console.log(pattern.test(testString)); // Output: true (Pattern matches)
console.log(typeof pattern); // Output: object (RegExp is a type of Object in JavaScript)

// - Map: Represents a collection of key-value pairs where keys can be of any data type.
let map = new Map();
map.set('name', 'Bob');
map.set(1, 'One');
console.log(map.get('name')); // Output: Bob
console.log(map.get(1)); // Output: One
console.log(map.size); // Output: 2 (Size of the Map)
console.log(typeof map); // Output: object (Map is a type of Object in JavaScript)
console.log(map instanceof Map); // Output: true (Check if it's a Map)

// - Set: Represents a collection of unique values. Sets can store any type of values, and duplicate values are automatically removed.
let set = new Set();
set.add(1);
set.add(2);
set.add(2);
console.log(set.has(1)); // Output: true
console.log(set.has(3)); // Output: false
console.log(set.size); // Output: 2 (Size of the Set)
console.log(typeof set); // Output: object (Set is a type of Object in JavaScript)
console.log(set instanceof Set); // Output: true (Check if it's a Set)

// Note: In JavaScript, everything that is not a primitive data type is considered an object, including arrays, functions, dates, and more. This is why the typeof operator returns "object" for these non-primitive types.

// Summary:
// Primitive Data Types: Number, String, Boolean, Null, Undefined, Symbol, BigInt
// Non-Primitive Data Types: Object, Array, Function, Date, RegExp, Map, Set
// Variables can be declared using let, const, or var (with var being less recommended in modern JavaScript).
// Use typeof operator to check the data type of a variable or value.
// Use instanceof operator to check if an object is an instance of a specific class (like Map or Set).  
// Use Array.isArray() method to check if a variable is an array.   
// Use BigInt for very large integers that exceed the safe integer limit for the Number type.
// Use Symbol to create unique identifiers for object properties.
// Use const for variables that should not be reassigned, and let for variables that can be reassigned. 
// Avoid using var in modern JavaScript due to its function-scoped behavior and potential for hoisting issues.
// Always initialize variables to avoid undefined values unless intentionally needed.
// Use template literals (backticks) for easier string interpolation and multi-line strings.
// Use strict equality (===) to avoid type coercion issues in comparisons.
// Use descriptive variable names to improve code readability and maintainability.
// Use comments to explain complex logic or important details in your code.


// Practice: Try declaring variables of different data types and logging their values and types to the console.

let practiceNum = 100;
let practiceStr = "Practice String";    
let practiceBool = false;
let practiceNull = null;
let practiceUndefined; // Not assigned
let practiceSym = Symbol('practiceSymbol');
let practiceBigInt = 12345678901234567890n;
let practiceObj = { key: "value" };
let practiceArr = [1, 2, 3];    
let practiceFunc = function() { return "Practice Function"; };
let practiceDate = new Date();
let practiceRegExp = /practice/;
let practiceMap = new Map();
let practiceSet = new Set();
console.log(typeof practiceNum); // number
console.log(typeof practiceStr); // string
console.log(typeof practiceBool); // boolean
console.log(typeof practiceNull); // object (this is a known quirk in JavaScript)
console.log(typeof practiceUndefined); // undefined
console.log(typeof practiceSym); // symbol
console.log(typeof practiceBigInt); // bigint
console.log(typeof practiceObj);    // object
console.log(typeof practiceArr); // object (Arrays are a type of Object)
console.log(typeof practiceFunc); // function
console.log(typeof practiceDate); // object (Date is a type of Object)
console.log(typeof practiceRegExp); // object (RegExp is a type of Object)
console.log(typeof practiceMap); // object (Map is a type of Object)
console.log(typeof practiceSet); // object (Set is a type of Object)    
console.log(practiceFunc()); // Output: Practice Function


// --------------------------------------------------------End of dataTypes%26Variables.js-------------------------------------------------------------------------





