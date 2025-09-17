for(let i = 1; i < 10; i++){
    if(i % 2 === 0){
        console.log(`${i} is even`);
    }
}

let i = 10;
while(i >= 1){
    console.log(i);
    i--;
}


let j = 1;
do{
    console.log("Hello!");
    j++;
}while(j <= 5);


for(let k = 1; k <= 10; k++){
    if(k === 7){
        console.log("Loop is stopping at 7");
        break;
    }
    console.log(k);
}

for(let k = 1; k <= 10; k++){
    if(k === 5){
        console.log("Skipping 5");
        
        continue;
    }
    console.log(k);
}

for(let a = 1; a <= 20; a++){
    if(a % 2 === 0){
        console.log(`${a} is even`);
    } else {
        console.log(`${a} is odd`);
    }
}

