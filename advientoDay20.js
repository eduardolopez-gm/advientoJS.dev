// Arrays, method FIND
// It is used to search through an array and return the first element that satisfies a given condition.
// If no element satisfies the condition, it returns undefined.

const myArray = [
    {id: 1, name:"JavaScript"},
    {id: 2, name:"React"},
    {id:3, name:"TypeScript"}
]

const find = myArray.find(item => item.name === "React")
console.log(find)
const find2 = myArray.find( item => item.name === "Java")
console.log(find2)