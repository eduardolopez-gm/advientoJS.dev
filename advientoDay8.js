// Objects destructuring

const person = {
    name: "Eduardo",
    lastName: "Lopez",
    job: "QA Automation"
}

const {name, job} = person

console.log("Destructuring person: " + person.name)
console.log("Destructuring person: " + person.job)