/*          Functions in JavaScript       */

function showMessage() {
    let message = "Hello, I'm JavaScript!"; // local variable
  
    alert( message );
}
  
showMessage(); // Hello, I'm JavaScript!

let userName = 'John';

function showMessage() {
    let userName = "Bob"; // declare a local variable

    let message = 'Hello, ' + userName; // Bob
    alert(message);
}
// the function will create and use its own userName
showMessage();
alert( userName ); // John, unchanged, the function did not access the outer variable

function checkAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return confirm('Do you have permission from your parents?');
    }
    }
    
let age = prompt('How old are you?', 18);
if ( checkAge(age) ) {
    alert( 'Access granted' );
} else {
    alert( 'Access denied' );
}


/*          Function Expressions in JavaScript        */

function sayHi() {   // (1) create
    alert( "Hello" );
}
  
let func = sayHi;    // (2) copy
  
func(); // Hello     // (3) run the copy (it works)!
sayHi(); // Hello    //     this still works too (why wouldn't it)

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}
  
function showOk() {
    alert( "You agreed." );
}
  
function showCancel() {
    alert( "You canceled the execution." );
}
  
// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);
