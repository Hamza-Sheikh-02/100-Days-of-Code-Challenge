// Question 94: Use the .map() method to create a new array that contains the length of each word from an array of words.
var words = ["Hi", "TypeScript", "JavaScript", "Python"];
var lengths = words.map(function (word) { return word.length; });
console.log(lengths);
// Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.
function filterGreaterThanTen(numbers) {
    return numbers.filter(function (number) { return number > 20; });
}
var numbers = [18, 20, 22, 24, 26];
console.log(filterGreaterThanTen(numbers));
// Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
function calculateSum(num) {
    return num.reduce(function (accumulator, current) { return accumulator + current; }, 0);
}
var num = [1, 2, 3, 4, 5];
console.log(calculateSum(num));
