// Question 136: Use console.log() to debug and track the value of a variable inside a loop.
for (var j = 1; j <= 5; j++) {
    console.log("Iteration ".concat(j, ", j value:, j"));
}
// Question 137: Implement a try-catch block to handle potential errors in a block of code.
try {
    throw new Error("Something went wrong");
}
catch (error) {
    console.log(error.message);
}
// Question 138: Describe how to use breakpoints in browser developer tools to debug JavaScript code.
// Sample code snippet for setting a breakpoint
console.log("Before breakpoint");
// Set a breakpoint on the following line using your browser's developer tools
console.log("This line has a breakpoint set on it in the browser's developer tools");
console.log("After breakpoint");
// To use breakpoints, open this code in your browser, open the developer tools, navigate to the Source tab, find this script, and click on the line number where you want to pause execution. When you reload or run your page, execution will pause at the breakpoint.
