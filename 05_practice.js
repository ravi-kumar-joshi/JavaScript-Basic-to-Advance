let colors = ["Red", "Green", "Blue", "Yellow"];
console.log(colors);

console.log(`second color is: ${colors[1]}`);
console.log(`last color is: ${colors[3]}`);


colors[2] = "Purple";
console.log(colors);

console.log(`length of array is: ${colors.length}`);

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

colors.push("Orange");
console.log(colors);

let removedColor = colors.pop();
console.log(colors);
console.log(`Removed color is: ${removedColor}`);

colors.unshift("Pink");
console.log(colors);

colors.shift();
console.log(colors);

let mixedArray = ["Ravi",21,true,null,{city:"Delhi"},[1,2,3]];
console.log(mixedArray);

let mattrix = [
    [2,6],
    [3,7]
];
console.log(mattrix);
console.log(mattrix[0][1]);
console.log(mattrix[1][0]);

