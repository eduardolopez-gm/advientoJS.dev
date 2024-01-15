// Array reduce method

const numbers = [1, 2, 3, 4, 5, 6]
// acu = acumulate value , curr = current value
const numbersSum = numbers.reduce((acum, curr) => acum + curr) 
console.log(numbersSum)