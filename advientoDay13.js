// Logical operators

const isTrue = true;
const isFalse = false;

console.log("AND operator &&")
console.log("Only true when 2 parameters are TRUE")
console.log(isTrue && isFalse)
console.log(isTrue && isTrue)

console.log("OR operator ||")
console.log("Only false when 2 parameters are FALSE")
console.log(isTrue || isFalse)
console.log(isTrue || isTrue)
console.log(isFalse || isFalse)

console.log("Example of use")
const port = process.env.PORT || 3000;
console.log(port)