// CONSOLE METHODS
console.log('Hi world \n');

// Display a table, with key values args
let data = {
    name: "Eduardo",
    job: "QA Automation",
    company: "Globant"
}
console.table(data);

// Group elements
console.group("group of messages");
console.log("Group 1");
console.log("Group 2\n");
console.groupEnd();

// 
console.log(" === Especial messages ===")
console.warn("Warning msg");
console.error("Error msg");