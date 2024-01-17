// Object Set
// Allows to eliminate duplicates in Arrays or Objects

const set = new Set( [1, 2, 3, 4, 3] )
console.log(set)

// Creating a Set
const mySet = new Set();

// Adding elements to the Set
mySet.add(1);
mySet.add('Hello');
mySet.add({ key: 'value' });

// Adding a duplicate element (ignored because Set only allows unique values)
mySet.add(1);

// Checking the size of the Set
console.log('Size of the Set:', mySet.size); // Output: 3

// Checking if an element exists in the Set
console.log('Is "Hello" in the Set?', mySet.has('Hello')); // Output: true
console.log('Is 2 in the Set?', mySet.has(2)); // Output: false

// Removing an element from the Set
mySet.delete('Hello');

// Iterating over the elements in the Set
console.log('Elements in the Set: \n');
mySet.forEach(element => {
  console.log(element);
});
console.log('\n')

// Clearing all elements from the Set
mySet.clear();

// Checking the size after clearing
console.log('Size of the Set after clearing:', mySet.size); // Output: 0
