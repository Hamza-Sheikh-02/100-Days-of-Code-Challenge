// Question 124: Create a function inside an object that returns the object's own name property using the this keyword.

const person = {
  name: "Hamza",
  getName: function () {
    return this.name;
  },
};

console.log(person.getName());

// Question 125: Modify a method in an object to use the this keyword to access another property in the same object.

const rectangle = {
  length: 10,
  width: 15,
  calculateArea: function () {
    return this.length * this.width;
  },
};
console.log(rectangle.calculateArea());

// Question 126: Explain how the this keyword changes its value when used inside a nested function within a method.

// Demonstrates 'this' behavior change in a nested function
const myObject = {
  property: "Value",
  outerMethod: function () {
    console.log(this.property); // Works as expected, logs "Value"

    const innerMethod = () => {
      console.log(this.property); // Still accesses myObject's 'property' due to arrow function capturing 'this' from outer scope
    };

    innerMethod();
  },
};

myObject.outerMethod();
// This example shows that using an arrow function for the inner method preserves the 'this' context from the outer method.
