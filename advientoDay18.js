// Nullish Coalescing ??
// is a feature introduced in ECMAScript 2020 (ES11) that provides a concise way to handle default values 
// in situations where you want to use a fallback only when a variable is null or undefined, 

const input = null
let newInput 
const defaultValue = "default value for this field"

console.log(input??defaultValue)
console.log(newInput??defaultValue)

