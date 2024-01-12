// Ternary operator
console.log('Normal if-else statement')
const age = 18;
function isLegalAge(age){
    if (age >= 18) {
        return 'Legal age\n'
    } else {
        return 'Underage\n'
    }
}
console.log(isLegalAge(age));

console.log('Ternary operator')
//              {condition}  {true value}  {false value}   
const legalAge = age >= 18 ? 'Legal age' : 'Underage';
console.log(legalAge);
