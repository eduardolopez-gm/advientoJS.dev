// Object Optional chaining
// is a feature introduced in ECMAScript 2020 (ES11) that provides a concise way
// to handle situations where you want to access properties or methods of an object that may be nested or could be undefined or null.

const person = {
    name: 'John',
    address: {
      city: 'New York',
      zipCode: '10001'
    }
};

// Before optional chaining
let city = person.address && person.address.city;
console.log(city); // 'New York'

// With optional chaining
city = person?.address?.city;
console.log(city); // 'New York'
