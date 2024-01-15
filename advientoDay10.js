// Promises and Async await
// Aync function, returns data when the promise is resolved
async function getData() {
    let promise = new Promise(resolve => 
        setTimeout(()=> resolve("Requested Data"), 1000))
    let result = await promise
    console.log(result)
}

getData()