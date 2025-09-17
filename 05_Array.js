// What is array
// An array is a special variable, which can hold more than one value at a time.

// How to create an array
let fruits = ["Apple", "Banana", "Mango", "Orange"];
console.log(fruits);
console.log(fruits[0]); // Accessing first element
console.log(fruits[2]); // Accessing third element
console.log(fruits.length); // Length of the array

// Modification of Array
fruits[1] = "Grapes"; // Changing second element
console.log(fruits);
fruits[4] = "Pineapple"; // Adding new element at index 4
console.log(fruits);

// Araay with loops

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Using forEach method
fruits.forEach(function(item, index) {
    console.log(index + ": " + item);
});

// Array Methods

// push() - Adds a new element at the end
fruits.push("Strawberry");
console.log(fruits);

// pop() - Removes the last element
let last = fruits.pop();
console.log(fruits);
console.log("Removed: " + last);

// shift() - Removes the first element
let first = fruits.shift();
console.log(fruits);
console.log("Removed: " + first);

// unshift() - Adds a new element at the beginning
fruits.unshift("Kiwi");
console.log(fruits);

// indexOf() - Finds the index of an element
let pos = fruits.indexOf("Mango");
console.log("Index of Mango: " + pos);

// splice() - Removes or replaces elements
fruits.splice(2, 1); // Removes 1 element at index 2
console.log(fruits);
fruits.splice(1, 1, "Peach"); // Replaces 1 element at index 1 with "Peach"
console.log(fruits);

// slice() - Extracts a section of the array
let citrus = fruits.slice(1, 3); // From index 1 to 3 (not including 3)
console.log("Citrus fruits: " + citrus);

// concat() - Merges two or more arrays
let moreFruits = ["Papaya", "Watermelon"];
let allFruits = fruits.concat(moreFruits);
console.log("All fruits: " + allFruits);

// sort() - Sorts the elements of the array
allFruits.sort();
console.log("Sorted fruits: " + allFruits);

// reverse() - Reverses the order of the elements
allFruits.reverse();
console.log("Reversed fruits: " + allFruits);

// Array with different data types

let mixedArray = [42, "Hello", true, null, { name: "Ravi" }, [1, 2, 3]];
console.log(mixedArray);
console.log(mixedArray[4].name);
console.log(mixedArray[5][1]); // Accessing second element of the nested array

// Multidimensional Array
let matrix = [
    [1, 2],
    [3,4]
];
console.log(matrix);
console.log(matrix[0][1]); // Accessing element at row 0, column 1
console.log(matrix[1][0]); // Accessing element at row 1, column 0
