// Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.

let laptop = {
    make: "ROG",
    model: "Strix SCAR 18",
    year: 2024,
    describe: function() {
        console.log(`This laptop is a ${this.year} ${this.make} ${this.model}.`);
    }
};
laptop.describe();

// Question 47: Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.

let laptops = [
    { make: "MSI", model: "Titan 18 HX A14VIG-034SG", year: 2024 },
    { make: "Apple", model: "MacBook Pro", year: 2022 },
    { make: "HP", model: "Probook 650 G1", year: 2017 }
];
let [laptop1, laptop2] = laptops;
console.log(laptop1);
console.log(laptop2);

// Question 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.

let pricesSet1 = [1300, 1600, 1200];
let pricesSet2 = [1100, 1400, 1700];
let combinedPrices = [...pricesSet1, ...pricesSet2].sort((a, b) => a - b);
console.log(combinedPrices);
