"use strict";
// 1 - Arrays
let numbers = [1, 2, 4, 5];
numbers.push(6);
console.log(numbers[2]);
const names = ["Rafael", "William"];
names.push('Enzo');
console.log(names);
// 2 - array other syntax
const nums = [100, 200, 300];
nums.push(400);
console.log(nums);
// 3 - any
const arr1 = [1, "test", true, [], { name: "Rafael" }];
console.log(arr1);
arr1.push([1, 2, 3]);
console.log(arr1);
// 4 - typed parameters
function sum(a, b) {
    console.log(a + b);
}
sum(4, 5);
// 5 - Function return 
function greeting(name) {
    return `Olá ${name}`;
}
console.log(greeting('Rafael'));
// console.log(greeting(123))
// 6 - Anonymous functions
setTimeout(function () {
    const sallary = 1000;
    // console.log(parseFloat(sallary))
    console.log(sallary);
}, 2000);
// 7 - Object types 
function passCordinates(coord) {
    console.log("X cordinates: " + coord.x);
    console.log("Y cordinates: " + coord.y);
}
const objCoord = { x: 329, y: 84.2 };
passCordinates(objCoord);
// passCordinates(329, 84.2)
// 8 - optional properties
function showNumbers(a, b, c) {
    console.log("A: " + a);
    console.log("B: " + b);
    if (c) {
        console.log("C: " + c);
    }
}
showNumbers(1, 2, 3);
showNumbers(4, 5);
// 9 - validate optional properties
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return `Olá, ${firstName} ${lastName}, tudo bem?`;
    }
    return `Olá, ${firstName}, tudo bem?`;
}
console.log(advancedGreeting("Rafael", "Gomes"));
console.log(advancedGreeting("Erik"));
// 10 union type
function showBalance(balance) {
    console.log(`O saldo da conta é R$ ${balance}`);
}
showBalance('100');
showBalance(200);
// showBalance(true)
// 11 - advanced union types
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "Usuário não aprovado";
    }
    return `A função do usuário é: ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole('Admin'));
