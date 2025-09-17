console.log("Loops in JavaScript\n");
// Defination: A loop is a programming construct that allows you to repeat a block of code multiple times until a certain condition is met. Loops are used to automate repetitive tasks and make code more efficient.

// 1.  For Loop

// defination : A for loop is a control flow statement that allows code to be executed repeatedly based on a condition. It consists of three main parts: initialization, condition, and update.

// syntax : 
// for(initialization; condition; update){
//     // code to be executed
// }

// Example:
for(let i=1; i<5; i++){
    console.log(i);
}

// example2: Table of 2
console.log("Table of 2");

for(let i=1; i<=10; i++){
    console.log(`2 x ${i} = ${2*i}`);
}


// 2. While Loop
// defination : A while loop is a control flow statement that allows code to be executed repeatedly based on a condition. The loop continues to execute as long as the specified condition evaluates to true.


// syntax :

// initialization
// while(condition){
//     // code to be executed
//      update
// }

// Example:

let j = 1; // initialization
while(j<=5){ // condition
    console.log(j);
    j++; // update
}

// 3. Do While Loop

// defination : A do...while loop is a control flow statement that allows code to be executed repeatedly based on a condition. The loop will always execute the code block at least once, and then it will continue to execute as long as the specified condition evaluates to true.

// syntax :

// initialization
// do{
//     // code to be executed
//     update
// }while(condition);

// Example:

let k = 1; // initialization
do{
    console.log(k);
    k++; // update
}while(k<=5);

// 4. Break and Continue Statements
// defination : The break statement is used to exit a loop or switch statement before it has completed all its iterations. The continue statement is used to skip the current iteration of a loop and move on to the next iteration.

// Break Statement
console.log("Break Statement");


for(let i=1; i<=10; i++){
    if(i===5){
        break; // exit the loop when i is 5
    }
    console.log(i);
}

// Continue Statement
console.log("Continue Statement");

for(let i=1; i<=10; i++){
    if(i===5){
        continue; // skip the iteration when i is 5
    }
    console.log(i);
}

// 5. Nested Loops

// Example:
console.log("Nested Loops");
for(let i=1; i<=3; i++){
    for(let j=1; j<=3; j++){
        console.log(`i = ${i}, j = ${j}`);
    }
}



// 6. For...in Loop

// Example:
console.log("For...in Loop");

const person = {
    name: "John",
    age: 30,
    city: "New York",
    course : "MERN"
};

for(let key in person){
    console.log(`${key}: ${person[key]}`);
}

// 7. For...of Loop

// Example:
console.log("For...of Loop");

const colors = ["Red", "Green", "Blue", "Yellow"];

for(let color of colors){
    console.log(color);
}

// 8. for each Loop

// Example:
console.log("for each Loop");

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number){
    console.log(number);
});

// Diffrence between for...in and for...of and forEach loop

// for...in loop is used to iterate over the properties of an object.
// for...of loop is used to iterate over the values of an iterable object like an array, string, etc.
// forEach loop is a method of an array that is used to execute a function for each element in the array.

// Diffrence between for...of and forEach loop
// for...of loop can be used with any iterable object like an array, string, etc. and it can be exited using break or continue statements.
// forEach loop is a method of an array and it cannot be exited using break or continue statements. It always iterates over all elements in the array.
