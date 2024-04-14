// Question 130: Explain how to export a function from one JavaScript file and import it into another file.

// In another file where you want to use the add function:
import { add } from "./mathFunction";

console.log(add(7, 2));
// Demonstrates importing the add function from mathFunctions.ts and using it.

// Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.

import { Person } from "./person";

const name = new Person("Hamza");
name.greet();

// Question 132: Discuss the difference between default and named exports in JavaScript modules.

// Importing named exports:
import { utilOne, utilTwo } from "./utils";

// Importing a default export:
import Calculator from "./calculator";

// This code illustrates the syntax and usage differences between default and named exports.
