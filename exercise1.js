'use strict';

//1.

console.log('1.----------------');

/*let arr2Integers = [12, 78];

for(let Index = 0; Index <= 1; Index++){
    if(arr2Integers[Index] >= 50 && arr2Integers[Index] <= 99)
        console.log(true);
}*/

// 2nd option

let integer1 = 12;
let integer2 = 78;

if((integer1 >= 50 && integer1 <= 99) || (integer2 >= 50 && integer2 <= 99)){
    console.log(true)
}
// Result: true

//2.

console.log('2.----------------');

/*let arr3Integers = [12, 78, 55];

for(let Index = 0; Index <= 2; Index++){
    if(arr3Integers[Index] >= 50 && arr3Integers[Index] <= 99)
        console.log(true);
}*/

//2nd option

let integer3 = 55;

if((integer1 >= 50 && integer1 <= 99) || (integer2 >= 50 && integer2 <= 99) || (integer3 >= 50 && integer3 <= 99)){
    console.log(true)
}
// Result: true


//3.

console.log('3.----------------');

let a = 5;
let b = 81;
let c = 27;

if(a > b && a > c){
    console.log(`${a} has the largest value`);
}
else{
    if(b > c){
        console.log(`${b} has the largest value`);
    }
    else{
        console.log(`${c} has the largest value`)
    }
}
// Result: 81 has the largest value
// For a=15679, b=789544, c=768,  Result: 789544 has the largest value



//4.

console.log('4.----------------');

let str = "Python";
let strPy = "Py" + str;
let first2Char = str.charAt(0) + str.charAt(1);

console.log(strPy);
console.log(first2Char);

if(first2Char === "Py"){
    console.log(str)
}
else{
    console. log(strPy)
}
//Result: Python


//5.

console.log('5.----------------');

integer1 = 55;
integer2 = 77;
let sum = integer1 + integer2;

console.log(sum);

if(sum >= 50 && sum <= 80){
    console.log(65)
}
else{
    console.log(80)
}
// Result: 80
// For integer1=25, integer2=39 , Result:  65


//6.

console.log('6.----------------');

let dif = integer2 - integer1;
console.log(dif);

if(sum === 8 || dif ===8){
    console.log(true)
}
else{
    console.log(false)
}
//Result: false


//7.

console.log('7.----------------');

if(integer1 === 15 || integer2 === 15 || sum === 15){
    console.log(true)
}
else{
    console.log(false)
}
// Result: false

//8.

console.log('8.----------------');

if(integer1 % 7 === 0 || integer1 % 11 === 0 || integer2 % 7 === 0 || integer2 % 11 === 0){
    console.log(true)
}
else{
    console.log(false)
}
//Result: true



//10.

console.log('10.----------------');

let difference = integer1 - 19;

if(integer1 > 19){
    console.log(difference *2)
}
//Result: 72


//11.

console.log('11.----------------');

let firstName = "Mariana";
let age = 25;

if(age < 13){
    console.log(`${firstName} is a child`)
}
else{
    if(age >= 13 && age < 20){
        console.log(`${firstName} is a teenager`)
    }
    else{
        if(age >= 20 && age < 30){
            console.log(`${firstName} is a young adult`)
        }
        else{
           console.log(`${firstName} is an adult`) 
        }
    }
}
//Result: Mariana is a young adult

