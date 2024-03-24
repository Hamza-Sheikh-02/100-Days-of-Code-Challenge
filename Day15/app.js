"use strict";
// Question 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list.
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    let modified_magicians = [];
    for (let magician of magicians) {
        modified_magicians.push("The Great " + magician);
    }
    return modified_magicians;
}
let magicians = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
let copied_magicians = magicians.slice();
let great_magicians = make_great(copied_magicians);
console.log("Original Magicians:");
show_magicians(magicians);
console.log("\nMagicians with 'The Great' added:");
show_magicians(great_magicians);
// Question 44: Sandwiches: Summarize sandwich orders with varying ingredients.
function make_sandwich(...items) {
    console.log(`Making a sandwich with: ${items.join(', ')}.`);
}
make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("avocado", "sprouts", "mustard", "mayo");
function store_car_info(manufacturer, model, ...options) {
    let car_info = { manufacturer: manufacturer, model: model };
    for (let option of options) {
        let [key, value] = option;
        car_info[key] = value;
    }
    return car_info;
}
let car = store_car_info('Toyota', 'Camry', ['color', 'blue'], ['year', 2024]);
console.log(car);
