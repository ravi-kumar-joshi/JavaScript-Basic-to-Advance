function greet() {
    console.log("Hello World!");
}

greet();


function greetUser(name) {
    console.log(`Hello ${name} What's up!😊`);
}

greetUser("Ravi");

function sum(a, b) {
    return a + b;
}

console.log(sum(4, 2));

const Avarage = (a, b, c) => {
    return (a + b + c) / 3;
}

console.log(Avarage(1, 2, 3));

function printTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} * ${i} = ${num * i}`);
    }
}

printTable(2);


function checkAge(age) {
    if (age >= 18) {
        console.log("You can vote!");

    }
    else {
        console.log("You can't vote");

    }
}

checkAge(17);
checkAge(21);


const sqr = (num) => num * num;

console.log(sqr(4));


function greets() {
    console.log("Hello");

}
function welcome() {
    greets();
    console.log("Welcome to javascript");

}

welcome();

function countdown(n) {
    // for(let i = n ; i >= 1; i--){
    //     console.log(i);

    // }

    while (n >= 1) {
        console.log(n);
        n--;

    } 
}

countdown(5);









