// Question 22: Intentional Error: Try to produce an array index error in one of your programs. Correct the error before finishing.

let friends: string[] = ["Ali", "Usman", "Ahmed"];

console.log(friends[3]);
friends[2] = "Bilal";

// Question 23: Conditional Tests: Write a series of conditional tests. Predict the results of each test.

let p = 5;
let q = 10;
let r = 5;

console.log("Is p == 5? I predict False.");
console.log(p == 5);

console.log("Is p != 10? I predict True.");
console.log(p != 5);

console.log("Is q > p? I predict False.");
console.log(q > p);

console.log("Is q <= 10? I predict False.");
console.log(q <= 10);

console.log("Is r === 5? I predict True.");
console.log(r === 5);

console.log("Is r < p? I predict False.");
console.log(r < p);

console.log("Is p + q === 15? I predict True.");
console.log(p + q === 5);

console.log("Is p - r === 0? I predict True.");
console.log(p - r === 10);

console.log("Is q * r === 50? I predict False.");
console.log(q * r === 60);

console.log("Is q / p === 2? I predict True.");
console.log(q / p === 2);

// Question 24: More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons.

// Tests for equality and inequality with strings :
let str1 = 'hello';
let str2 = 'world';

console.log("Is str1 == 'hello'? I predict True.");
console.log(str1 == 'hello');

console.log("Is str1 != str2? I predict True.");
console.log(str1 != str2);

// Tests using the lower case function :
let str = 'Hello';

console.log("Is str.toLowerCase() == 'hello'? I predict True.");
console.log(str.toLowerCase() == 'hello');

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to:
let a = 5;
let b = 10;

console.log("Is a > b? I predict False.");
console.log(a > b);

console.log("Is a < b? I predict True.");
console.log(a < b);

console.log("Is a >= 5? I predict True.");
console.log(a >= 5);

console.log("Is b <= 10? I predict True.");
console.log(b <= 10);

// Tests using "and" and "or" operators:
let x = 5;
let y = 10;

console.log("Is x > 3 and y < 15? I predict True.");
console.log(x > 3 && y < 15);

console.log("Is x < 3 or y > 15? I predict False.");
console.log(x < 3 || y > 15);

// Test whether an item is in an array:
let numbers = [1, 2, 3, 4, 5];

console.log("Is 3 in numbers? I predict True.");
console.log(numbers.includes(3));

// Test whether an item is not in an array:
let fruits = ['apple', 'banana', 'orange'];

console.log("Is 'grape' not in fruits? I predict True.");
console.log(!fruits.includes('grape'));
