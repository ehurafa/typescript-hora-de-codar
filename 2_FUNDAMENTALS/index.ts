// 1 - numbers
let x: number = 10

console.log(x)

x = 16

console.log(typeof x)

const y: number = 15.5844545

console.log(typeof y)

console.log(y)

console.log(y.toExponential(3))

// 2 string
const firstName: string = "Rafael"

console.log(firstName.toUpperCase())

let fullName: string 

const lastName: string = "Santos"

fullName = firstName + " " + lastName

console.log(fullName)

console.log(typeof fullName)

// 3 boolean
let a: boolean 
console.log(a)
console.log(typeof a)

a = true 
console.log(a)

// 4 - inference and annotation
const ann: string = "Teste"

console.log('testando 2')

let inf = "Teste"

// inf = 1

// challenge
let num = 2

const inst = String(num)

console.log(`O valor retornado é: ${inst}`)


