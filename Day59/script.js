/*          Loops: while and for in JavaScript        */

let j = 0;
while (j < 3) { // shows 0, then 1, then 2
    alert( j );
    j++;
}


let k = 0;
do {
    alert( k );
    k++;
} while (k < 3);


for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
    alert(i);
}


/*          The "switch" statement in JavaScript          */

let a = 2 + 2;

switch (a) {
    case 3:
        alert( 'Too small' );
        break;
    case 4:
        alert( 'Exactly!' );
        break;
    case 5:
        alert( 'Too big' );
        break;
    default:
        alert( "I don't know such values" );
}
