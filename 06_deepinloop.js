
// syntax 

for(initilization; condition; increment) {
    // code block to be executed
}

// example

for(let i = 0; i < 5; i++) {
    console.log("Count: " + i);
}


while(condition) {
    // code block to be executed
}   
// example

let count = 0;
while(count < 5) {
    console.log("Count: " + count);
    count++;
}

// do...while loop
do {
    // code block to be executed
} while (condition);

// example

let i = 0;
do {
    console.log("Count:" + i);
    i++;
}while(i < 5);

// break
for(let i = 0; i < 10; i++) {
    if(i === 5) {
        break; // exit the loop when i is 5
    }   
    console.log(i);
}
// continue
for(let i = 0; i < 10; i++) {
    if(i % 2 === 0) {
        continue; // skip the even numbers
    }   
    console.log(i); // prints only odd numbers
}

// Nested loops
for(let i = 1; i <= 3; i++) {
    for(let j = 1; j <= 3; j++) {   
        console.log(`i = ${i}, j = ${j}`);
    }
}
