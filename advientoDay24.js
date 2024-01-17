// Obejct Date
// is used for working with dates and times. It provides methods for creating, formatting, and manipulating dates.

const myDate = new Date()

console.log(myDate.toDateString())
console.log(myDate.getDay())
console.log(myDate.getMonth())
console.log(myDate.toLocaleDateString("es"))
console.log(myDate.toLocaleDateString("en"))

const year = myDate.getFullYear();
const month = myDate.getMonth(); // Month is 0-based (0 for January)
const day = myDate.getDate();
const hours = myDate.getHours();
const minutes = myDate.getMinutes();
const seconds = myDate.getSeconds();
const milliseconds = myDate.getMilliseconds();

console.log(`${year}-${month + 1}-${day} ${hours}:${minutes}:${seconds}`);

