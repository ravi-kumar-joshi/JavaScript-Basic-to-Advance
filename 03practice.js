// Task 1 : for loop

// console.log("For Loop");

// for(let i=1; i<=10; i++){
//     console.log(i);
// }

// Task 2 : while loop

console.log("While Loop");

let i=1;

while(i<=10){
    console.log(i);
    i++;
}

// Task 3 : do while loop

console.log("Do While Loop");

let j=1;

do{
    console.log(j);
    j++;
}while(j<=10);


// Task 4 : for loop even numbers

console.log("For Loop Even Numbers");

for(let i=1; i<=10; i++){
    if(i%2==0){
        console.log(i);
    }
}



// Task 5 : break

console.log("Break Statement");

for(let i=1; i<=10; i++){   
    if(i==4){
        break;
    }
    console.log(i);
}

// Task 6 : continue

console.log("Continue Statement");

for(let i=1; i<=10; i++){
    if(i==4){
        continue;
    }
    console.log(i);
}