// Question 64: Combine Strings and Numbers: Write a function that merges a piece of text with a number. For example, if provided with "Age: " and 30, it should give back "Age: 30".

function combineStringAndNumber(text: string, number: number): string {
    return text + number;
}

console.log(combineStringAndNumber("Age: ", 14));

// Question 65: Determine the Remainder: Make a function that gets two numbers and shows the leftover from dividing them using the % sign. For example, remainder(5, 2) should give 1.

function remainder(num1: number, num2: number): number {
    return num1 % num2;
}

console.log(remainder(5, 2));

// Question 66: Logical AND Verification: Create a function that checks two boolean (true or false) values. It should only say true if both are true, using the && operator. For instance, checkBothTrue(true, false) should be false.

function checkBothTrue(val1: boolean, val2: boolean): boolean {
    return val1 && val2;
}

console.log(checkBothTrue(true, false));
