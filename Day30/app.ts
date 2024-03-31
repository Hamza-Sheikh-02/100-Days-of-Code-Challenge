// Question 88: Rounding to the Nearest Integer: Write a function that takes a decimal number as input and returns the number rounded to the nearest integer.

function roundToNearestInteger(num: number): number {
    return Math.round(num);
}

console.log(roundToNearestInteger(6.8));
console.log(roundToNearestInteger(6.3));

// Question 89: Converting Strings to Numbers: Create a function that takes a string representing a number (like "123") and converts it into an actual number type.

function convertStringToNumber(str: string): number {
    return parseFloat(str);
}

console.log(convertStringToNumber("182.81"));
console.log(convertStringToNumber("69"));

// Question 90: Checking if a Value is NaN: Demonstrate how to check if a variable's value is NaN (Not a Number) and return a boolean result.

function isValueNaN(value: any): boolean {
    return isNaN(value);
}

console.log(isValueNaN("hamza")); // Outputs: true because "hamza" is not a number
console.log(isValueNaN(592)); // Outputs: false because 592 is a number
