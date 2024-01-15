// Spread operator
// Creates a copy of original array
const arr1 = [1, 2]
const arr2 = [3, 4]

const combinedArrays = [...arr1, ...arr2]
const reversedArrays = [...combinedArrays].reverse()

console.log(combinedArrays)
console.log(reversedArrays)
