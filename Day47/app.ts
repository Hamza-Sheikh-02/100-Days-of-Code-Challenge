// Question 139: List three reserved words in JavaScript and create a valid use case for each.

// Reserved word: let - used to declare a block-scoped local variable
let count = 5;

// Reserved word: if - used to execute a block of code if a specified condition is true
if (count > 0) {
  console.log("Count is greater than 0.");
}

// Reserved word: return - used to exit a function and return a value from that function
function add(a, b) {
  return a + b;
}

// Demonstrates valid use cases for the reserved words 'let', 'if', and 'return'.

// Question 140: Explain the error that occurs when trying to use a reserved word as a variable name.
// Attempting to use a reserved word as a variable name
// let if = 5; // This line would cause a syntax error

console.log("Using a reserved word as a variable name causes a syntax error in JavaScript.");

// Question 141: Discuss the significance of the await reserved word in asynchronous JavaScript.

// Example use of the 'await' reserved word in asynchronous JavaScript
function fetchSomething() {
    return new Promise((resolve) => {
      const data = { message: "This is fetched data" };
      resolve(data);
    });
}

async function fetchData() {
    // Assuming fetchSomething returns a Promise
    const data = await fetchSomething();
    console.log(data);
    // The 'await' keyword pauses the execution until the Promise settles, and then resumes with the resolved value.
}
  
console.log(
    "The 'await' keyword allows asynchronous, promise-based behavior to be written in a cleaner, more linear fashion."
);
// This demonstrates how 'await' improves readability and flow in asynchronous code.
