//LOCALSTORAGE
// is a web storage API in JavaScript that allows you to store key-value pairs in a web browser with no expiration time.
// This data persists even when the browser is closed and reopened
// reference https://developer.mozilla.org/es/docs/Web/API/Web_Storage_API

// Setting an item
// localStorage.setItem('key', 'value');

// Get the value
// const storeValue = localStorage.getItem('key')
// console.log(storeValue)

// Updating the value
// localStorage.setItem('key', 'new_value');

// Removing a value
// localStorage.removeItem('key');

// Clearing all values
// localStorage.clear();

// localStorage can only store strings, so if you want to store objects,
// you need to serialize them to JSON before storing and deserialize them after retrieving:

// const myObject = { key: 'value' };

// Storing an object
// localStorage.setItem('myObject', JSON.stringify(myObject));

// Retrieving and parsing the object
// const retrievedObject = JSON.parse(localStorage.getItem('myObject'));
// console.log(retrievedObject);  // Output: { key: 'value' }



if (typeof(Storage) !== "undefined") {
    // Retrieve data from localStorage
    
    const storedData = localStorage.getItem('exampleKey');
  
    if (storedData) {
      console.log('Data found in localStorage:', storedData);
    } else {
      console.log('No data found in localStorage. Setting default value.');
        // Set data in localStorage
        localStorage.setItem('exampleKey', 'Hello, localStorage!');    
    }
  } else {
    console.log('Sorry, localStorage is not supported in this browser.');
  }



