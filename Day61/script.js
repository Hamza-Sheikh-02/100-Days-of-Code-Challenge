/*          Arrow functions Basics in JavaScript            */

let sum = (a, b) => a + b;
/* This arrow function is a shorter form of:
let sum = function(a, b) {
  return a + b;
};
*/
alert( sum(1, 2) ); // 3

let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
() => alert('Hello!') :
() => alert("Greetings!");

welcome();


/*          JavaScript specials in JavaScript         */

alert('Hello'); alert('World');

alert("There will be an error after this message")
[1, 2].forEach(alert)

typeof null == "object" // error in the language
typeof function(){} == "function" // functions are treated specially

let userName = prompt("Your name?", "Alice");
let isTeaWanted = confirm("Do you want some tea?");

alert( "Visitor: " + userName ); // Alice
alert( "Tea wanted: " + isTeaWanted ); // true

// expression on the right side
let sum1 = (a, b) => a + b;

// or multi-line syntax with { ... }, need return here:
let sum2 = (a, b) => {
  // ...
  return a + b;
}

// without arguments
let sayHi = () => alert("Hello");

// with a single argument
let double = n => n * 2;
