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
