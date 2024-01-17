// Regular expressions

const mail = 'eduardo.o.lopez85@gmail.com'
const mail2 = 'eduardo@hotmail.com'

const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/

console.log(regex.test(mail))
console.log(regex.test(mail2))