// 1 - Arrays
let numbers: number[] = [1, 2, 4, 5]

numbers.push(6)

console.log(numbers[2])

const names: string[] = ["Rafael", "William"]

names.push('Enzo')

console.log(names)

// 2 - array other syntax
const nums: Array<number> = [100, 200, 300]

nums.push(400)

console.log(nums)

// 3 - any
const arr1: any = [1, "test", true, [], { name: "Rafael" }]
console.log(arr1)
arr1.push([1, 2, 3])
console.log(arr1)

// 4 - typed parameters

function sum(a: number, b: number) {
    console.log(a + b)
}

sum(4, 5)

// 5 - Function return 
function greeting(name: string): string {
    return `Olá ${ name }`
}

console.log(greeting('Rafael'))
// console.log(greeting(123))

// 6 - Anonymous functions

setTimeout(function() {
    const sallary: number = 1000

    // console.log(parseFloat(sallary))

    console.log(sallary)

}, 2000)

// 7 - Object types 

function passCordinates(coord: { x: number, y: number }) {
    console.log("X cordinates: " + coord.x)
    console.log("Y cordinates: " + coord.y)
}

const objCoord = { x: 329, y: 84.2 }

passCordinates(objCoord)

// passCordinates(329, 84.2)

// 8 - optional properties

function showNumbers(a: number, b: number, c?: number) {
    console.log("A: " + a)
    console.log("B: " + b)
    if (c) {
        console.log("C: " + c)
    }
}

showNumbers(1, 2, 3)

showNumbers(4, 5)

// 9 - validate optional properties
function advancedGreeting(firstName: string, lastName?: string) {

    if (lastName !== undefined) {
        return `Olá, ${ firstName } ${ lastName }, tudo bem?`
    }

    return `Olá, ${ firstName }, tudo bem?`
}


console.log(advancedGreeting("Rafael", "Gomes"))
console.log(advancedGreeting("Erik"))