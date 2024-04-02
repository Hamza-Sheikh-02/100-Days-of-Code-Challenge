// Question 94: Use the .map() method to create a new array that contains the length of each word from an array of words.

const words: string[] = ["Hi", "TypeScript", "JavaScript", "Python"];
const lengths: number[] = words.map(word => word.length);

console.log(lengths);

// Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.

function filterGreaterThanTen(numbers: number[]): number[] {
    return numbers.filter(number => number > 20);
}

const numbers: number[] = [18, 20, 22, 24, 26];
console.log(filterGreaterThanTen(numbers));

// Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.

function calculateSum(num: number[]): number {
    return num.reduce((accumulator, current) => accumulator + current, 0);
}

const num: number[] = [1, 2, 3, 4, 5];
console.log(calculateSum(num));
