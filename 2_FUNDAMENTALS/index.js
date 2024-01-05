"use strict";
// 1 - numbers
let x = 10;
console.log(x);
x = 16;
console.log(typeof x);
const y = 15.5844545;
console.log(typeof y);
console.log(y);
console.log(y.toExponential(3));
// 2 string
const firstName = "Rafael";
console.log(firstName.toUpperCase());
let fullName;
const lastName = "Santos";
fullName = firstName + " " + lastName;
console.log(fullName);
console.log(typeof fullName);
// 3 boolean
let a;
console.log(a);
console.log(typeof a);
a = true;
console.log(a);
// 4 - inference and annotation
const ann = "Teste";
console.log('testando 2');
let inf = "Teste";
// inf = 1
// challenge
let num = 2;
const inst = String(num);
console.log(`O valor retornado é: ${inst}`);
