// 1 - type guard
function sum(a: number | string, b: number | string) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b))
    } else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b)
    } else {
        console.log('impossível realizar a soma!')
    }
}

sum("5", "66");

sum(77, 12);

sum(77, "12");