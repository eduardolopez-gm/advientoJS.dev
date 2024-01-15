// Class

class Person {
    // 1. Properties
    // Build the object properties when the instance of the object is created.
    constructor(name='Sofia', job){
        // If you want to set some default value to the properties specified in the constructor
        this.name = name;
        this.job = job;
    }
    age;
    
    // 2. Methods, operate over object properties
    greet(){
        console.log(`Hello ${this.name}`)
    }
}

const person1 = new Person("Edu")
person1.greet();
console.log(person1)


const person2 = new Person()
person2.job = "QA"
person2.greet();
console.log(person2)