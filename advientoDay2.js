// Variables and Constants
console.log(' === Variables === ')
let myVar = 'Content that could change';
console.log(myVar);
myVar = 'new content';
console.log(myVar+'\n');


// only for strings, numbers and booleans
console.group(" === Constants === ")
const myconst1 = 'text on myconst1'
try {
    myconst1 = 'new text on myconst1'
} catch (error) {
    console.log("Error trying to change string const")
    //console.log(error)
}

const myconst2 = 123456;
try {
    myconst2 = 78910;
} catch (error) {
    console.log("Error trying to change number const")
    //console.log(error)
}

const myconst3 = true;
try {
    myconst3 = false;
} catch (error) {
    console.log("Error trying to change boolean const \n")
   // console.log(error)
}

console.groupEnd();


console.group(" === Constants with Object and Array === ")
const myObject = { name: "Eduardo", job: "QA Automation"}
console.info(myObject)
myObject.job = 'sales';
console.log(myObject)

const myArray = [ 1 , 2 , 3 , 4]
console.log(myArray)
myArray[0] = 0;
console.log(myArray)
console.groupEnd();