let myname = "ravi kumar";
let age = 21;
let favorite_quote = "I can do it";

let hobbies = "coding , Writing , walking";
console.log(myname);
console.log(favorite_quote);

console.log(`lenght of quote is ${favorite_quote.length}`);


console.log(`first character of quote : ${favorite_quote[0]}`);
console.log(`last character of quote : ${favorite_quote[favorite_quote.length - 1]}`);

console.log(`UpperCase : ${favorite_quote.toUpperCase()}`);

console.log(`UpperCase : ${favorite_quote.toLowerCase()}`);

console.log(favorite_quote.indexOf("do"));

console.log(favorite_quote.includes("it"));

console.log(favorite_quote.slice(2,5));

console.log(favorite_quote.replace("I","You"));

console.log(hobbies.trim());

console.log(hobbies.split(","));

console.log(`Hello ${myname}, You are ${age} years old. and ${favorite_quote.replace("I","You") } everthings..`);















