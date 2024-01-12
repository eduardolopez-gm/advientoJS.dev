// Arrow functions
const testName = 'User';

function greet(name) {
    console.log(`Hello ${name}`);
}
greet(testName);

const greetUser = name => `Hi ${name} from an arrow function` ;
console.log(greetUser(testName));
