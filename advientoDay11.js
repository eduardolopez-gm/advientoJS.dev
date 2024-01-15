// Http requests
// Using https://wizard-world-api.herokuapp.com/swagger/index.html

// Trying to use directly returns a promise with state pending, so...
console.log(fetch("https://wizard-world-api.herokuapp.com/Elixirs"))

// with .then i can access to promise resolve
fetch("https://wizard-world-api.herokuapp.com/Elixirs")
    // transfor response to json format
    .then( response => response.json())
    .then(data => console.log(data))
