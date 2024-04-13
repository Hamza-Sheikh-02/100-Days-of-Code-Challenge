// Question 127: Convert a traditional function expression to an arrow function.

const traditionalFunction = function (a, b) {
  return a + b;
};

const arrowFunction = (a, b) => a + b;

console.log(traditionalFunction(10, 3));
console.log(arrowFunction(7, 2));

// Question 128: Create an arrow function that takes multiple parameters and returns the product of all parameters.

const multiplyParameters = (...numbers: number[]) =>
  numbers.reduce((total, number) => total * number, 1);

console.log(multiplyParameters(6, 2, 5));

// Question 129: Explain how this behaves differently in arrow functions compared to traditional functions.

// Demonstrating 'this' in traditional vs. arrow functions
const traditionalVsArrow = {
  value: "traditionalVsArrow value",
  traditionalFunction: function () {
    console.log("Traditional function:", this.value); // 'this' refers to traditionalVsArrow object
  },
  arrowFunction: () => {
    console.log("Arrow function:", this.value); // 'this' is not bound to traditionalVsArrow object but to the scope in which traditionalVsArrow was defined
  },
};

traditionalVsArrow.traditionalFunction(); // Logs "traditionalVsArrow value"
traditionalVsArrow.arrowFunction(); // Likely undefined, depending on the outer scope's 'this.value'
// This code snippet illustrates the difference in how 'this' is determined in traditional functions versus arrow functions.
