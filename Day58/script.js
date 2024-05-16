/*          Logical Operators in JavaScript       */

// What's the result of OR?
// What is the code below going to output?

alert( null || 2 || undefined ); // 2

// What's the result of OR'ed alerts?
// What will the code below output?

alert( alert(1) || 2 || alert(3) ); // first 1, then 2.

// What is the result of AND?
// What is this code going to show?

alert( 1 && null && 2 ); // null

// What is the result of AND'ed alerts?
// What will this code show?

alert( alert(1) && alert(2) ); // 1, and then undefined.

// The result of OR AND OR
// What will the result be?

alert( null || 2 && 3 || 4 ); // 3

// A question about "if"
// Which of these alerts are going to execute?
// What will the results of the expressions be inside if(...)?

if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );


/*          Nullish Coalescing Operator '??' in JavaScript        */

result = (a !== null && a !== undefined) ? a : b;

let user;
alert(user ?? "Anonymous"); // Anonymous (user is undefined)

let user1 = "John";
alert(user1 ?? "Anonymous"); // John (user is not null/undefined)

let firstName = null;
let lastName = null;
let nickName = "Supercoder";
// shows the first defined value:
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder

let firstName1 = null;
let lastName1 = null;
let nickName1 = "Supercoder";
// shows the first truthy value:
alert(firstName1 || lastName1 || nickName1 || "Anonymous"); // Supercoder

let height = 0;
alert(height || 100); // 100
alert(height ?? 100); // 0

let height1 = null;
let width1 = null;
// important: use parentheses
let area1 = (height1 ?? 100) * (width1 ?? 50);
alert(area1); // 5000

// set height=100, if height is null or undefined
height = height ?? 100;
