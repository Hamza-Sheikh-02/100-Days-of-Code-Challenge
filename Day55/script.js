/*      Data Types in JavaScript      */

// no error
let message = "hello";
message = 123456;

let n = 123;
n = 12.345;

alert( 1 / 0 ); // Infinity
alert( Infinity ); // Infinity
alert( "not a number" / 2 ); // NaN, such division is erroneous
alert( NaN + 1 ); // NaN
alert( 3 * NaN ); // NaN
alert( "not a number" / 2 - 1 ); // NaN
console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992

// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;

let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

let name = "John";

// embed a variable
alert( `Hello, ${name}!` ); // Hello, John!

// embed an expression
alert( `the result is ${1 + 2}` ); // the result is 3
alert( "the result is ${1 + 2}" ); // the result is ${1 + 2} (double quotes do nothing)

let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

let isGreater = 4 > 1;
alert( isGreater ); // true (the comparison result is "yes")

let age = null;

let age1;
alert(age1); // shows "undefined"

let age2 = 100;
// change the value to undefined
age2 = undefined;
alert(age2); // "undefined"

typeof undefined // "undefined"
typeof 0 // "number"
typeof 10n // "bigint"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "symbol"
typeof Math // "object"  (1)
typeof null // "object"  (2)
typeof alert // "function"  (3)

let name2 = "Ilya";
alert( `hello ${1}` ); // ?
alert( `hello ${"name2"}` ); // ?
alert( `hello ${name2}` ); // ?

/*          Interaction: alert, prompt, confirm in JavaScript         */

alert("Hello");

// result = prompt(title, [default]);

let age3 = prompt('How old are you?', 100);
alert(`You are ${age3} years old!`); // You are 100 years old!

let test1 = prompt("Test");
let test2 = prompt("Test", '');

result = confirm(question);

let isBoss = confirm("Are you the boss?");
alert( isBoss ); // true if OK is pressed

