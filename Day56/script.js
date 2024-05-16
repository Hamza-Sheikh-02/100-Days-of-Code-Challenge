/*          Type Conversions in JavaScript        */

let value = true;
alert(typeof value); // boolean
value = String(value); // now value is a string "true"
alert(typeof value); // string

alert( "6" / "2" ); // 3, strings are converted to numbers

let str = "123";
alert(typeof str); // string
let num = Number(str); // becomes a number 123
alert(typeof num); // number

let age = Number("an arbitrary string instead of a number");
alert(age); // NaN, conversion failed

alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (error reading a number at "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0

alert( Boolean(1) ); // true
alert( Boolean(0) ); // false
alert( Boolean("hello") ); // true
alert( Boolean("") ); // false
alert( Boolean("0") ); // true
alert( Boolean(" ") ); // spaces, also true (any non-empty string is true)


/*          Operators in JavaScript       */

let x1 = 1;
x1 = -x1;
alert( x ); // -1, unary negation was applied

let x2 = 1, y2 = 3;
alert( y2 - x2 ); // 2, binary minus subtracts values

alert( 5 % 2 ); // 1, the remainder of 5 divided by 2
alert( 8 % 3 ); // 2, the remainder of 8 divided by 3
alert( 8 % 4 ); // 0, the remainder of 8 divided by 4

alert( 2 ** 2 ); // 2² = 4
alert( 2 ** 3 ); // 2³ = 8
alert( 2 ** 4 ); // 2⁴ = 16

alert( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)
alert( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)

let s = "my" + "string";
alert(s); // mystring

alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"

alert(2 + 2 + '1' ); // "41" and not "221"
alert('1' + 2 + 2); // "122" and not "14"

alert( 6 - '2' ); // 4, converts '2' to a number
alert( '6' / '2' ); // 3, converts both operands to numbers

// No effect on numbers
let x = 1;
alert( +x ); // 1
let y = -2;
alert( +y ); // -2
// Converts non-numbers
alert( +true ); // 1
alert( +"" );   // 0

let apples = "2";
let oranges = "3";
alert( apples + oranges ); // "23", the binary plus concatenates strings

let apples1 = "2";
let oranges1 = "3";

// both values converted to numbers before the binary plus
alert( +apples1 + +oranges1 ); // 5

// the longer variant
// alert( Number(apples1) + Number(oranges1) ); // 5

let x3 = 2 * 2 + 1;
alert( x3 ); // 5

let a = 1;
let b = 2;
let c = 3 - (a = b + 1);
alert( a ); // 3
alert( c ); // 0

let a1, b1, c1;
a1 = b1 = c1 = 2 + 2;
alert( a1 ); // 4
alert( b1 ); // 4
alert( c1 ); // 4

c = 2 + 2;
b = c;
a = c;

let n = 2;
n = n + 5;
n = n * 2;

let n1 = 2;
n1 += 5; // now n = 7 (same as n = n + 5)
n1 *= 2; // now n = 14 (same as n = n * 2)

alert( n1 ); // 14

let n2 = 2;
n2 *= 3 + 5; // right part evaluated first, same as n *= 8
alert( n2 ); // 16

let counter = 2;
counter++;        // works the same as counter = counter + 1, but is shorter
alert( counter ); // 3

let counter1 = 2;
counter1--;        // works the same as counter = counter - 1, but is shorter
alert( counter1 ); // 1

let counter2 = 1;
let a2 = ++counter2; // (*)

alert(a2); // 2

let counter3 = 1;
let a3 = counter3++; // (*) changed ++counter to counter++

alert(a3); // 1
