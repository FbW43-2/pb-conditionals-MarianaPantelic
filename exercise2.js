'use strict';

//1.

console.log('1.-------------------');

let isDog;

if(isDog === true){
    console.log('pat, pat')
}
else{
    console.log('Find me a dog to pat')
}
//Result: Find me a dog to pat

//2.

console.log('2.-------------------');

let speedCheck = 80;
let speedLimit = 50;

if(speedCheck > speedLimit){
    console.log("You're going too fast!")
}
else{
    console.log("You're driving below the speed limit, Oma!")
}
//Result: you're going too fast!

//3.

console.log('3.-------------------');

let Age = 18;

if(Age < 16){
    console.log("Serve butter beer")
}
else{
    console.log("Serve beer")
}
//Result: Serve beer

//4.

console.log('4.-------------------');

let isStudent;

if(isStudent === true){
    console.log("Ticket costs €5,00")
}
else{
    console.log("Ticket costs €12,00")
}
//Result: Ticket costs €12,00

//5.

console.log('5.-------------------');

let okMarie = "Chocolate cake";

if(okMarie.includes("cake") === true){
    console.log("Let them eat cake")
}
else{
    console.log("Oh, bother")
}
//Result: Let them eat cake


//6.

console.log('6.-------------------');

let number = 30;

if(number % 2 === 0){
    console.log(`${number} is even`)
}
else{
    console.log(`${number} is odd`)
}
//Result: 30 is even