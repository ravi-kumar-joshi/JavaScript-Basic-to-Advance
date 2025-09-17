// Welcome to your JavaScript practice session!
// Niche diye gaye tasks ko complete karein.

// Task 1: Apni personal details store karne ke liye variables banayein.
// - Ek variable `fullName` banayein aur usme apna poora naam (string) store karein. `const` ka use karein.
// - Ek variable `age` banayein aur usme apni age (number) store karein. `let` ka use karein.
// - Ek variable `isLearning` banayein aur usme `true` (boolean) value store karein. `let` ka use karein.

// Task 1 Solution:
const fullName = "Ravi Kumar";
let age = 21;
let isLearning = true;
// console.log(fullName); // Ravi Kumar
// console.log(typeof fullName); // string
// console.log(age); // 21
// console.log(typeof age); // number
// console.log(isLearning); // true
// console.log(typeof isLearning); // boolean

  


// Task 2: Ek object banayein.
// - Ek object `myMobile` banayein jisme 3 properties ho: `brand` (string), `model` (string), aur `price` (number).
// - `myMobile` object ko `const` ke saath declare karein kyunki hum is object ko reassign nahi karenge.

// Task 2 Solution:
const myMobile = {
    brand: "OPPO",
    model: "A53",
    price: 6000,
}
// console.log(myMobile);
// console.log(typeof myMobile); // object
// console.log(myMobile instanceof Object); // true
// console.log(myMobile.brand); // OPPO
// console.log(myMobile.model); // A53
// console.log(myMobile.price); // 6000


// Task 3: Ek array banayein.
// - Apne 3 favorite programming languages ka ek array banayein jiska naam `favoriteLanguages` ho.
// - `favoriteLanguages` array ko `let` ke saath declare karein kyunki hum is array ko modify kar sakte hain (jaise naye languages add karna).


// Task 3 Solution:
let favoriteLanguages = ["JavaScript", "C", "C++"];
// console.log(favoriteLanguages); // [ 'JavaScript', 'Python', 'C++' ]
// console.log(typeof favoriteLanguages); // object
// console.log(Array.isArray(favoriteLanguages)); // true
// console.log(favoriteLanguages[0]); // JavaScript
// console.log(favoriteLanguages[1]); // Python
// console.log(favoriteLanguages[2]); // C++


// Task 4: Ek function banayein.
// - Ek function `greet` banayein jo ek parameter `name` le aur console par "Hello, [name]! Welcome to JavaScript." print kare.
// - `greet` function ko `function` keyword ka use karke declare karein.

// Task 4 Solution:
function greet(name) {
    console.log("Hello, " + name + "! Welcome to JavaScript.");
    console.log(`Hello, ${name}! Welcome to JavaScript.`);
    
}
// greet("Ravi Kumar"); // Hello, Ravi! Welcome to JavaScript.


// Task 5: Apne banaye hue variables aur unke types ko console par print karein.
// - `fullName`, `age`, `isLearning`, `myMobile`, aur `favoriteLanguages` ki value aur type (`typeof` operator ka use karke) console par print karein.
// Example: console.log("Value:", fullName, "Type:", typeof fullName);

console.log("Value:", fullName, "Type:", typeof fullName);
console.log("Value:", age, "Type:", typeof age);
console.log("Value:", isLearning, "Type:", typeof isLearning);
console.log("Value:", myMobile, "Type:", typeof myMobile);
console.log("Value:", favoriteLanguages, "Type:", typeof favoriteLanguages);



// Task 6: Apne function ko call karein.
// - `greet` function ko apne naam ke saath call karein.
greet("Ravi Kumar");




// --- Yahan apna code likhein ---
// --------------------------------------------------------End of practice.js-------------------------------------------------------------------------

