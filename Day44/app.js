"use strict";
// Question 130: Explain how to export a function from one JavaScript file and import it into another file.
Object.defineProperty(exports, "__esModule", { value: true });
// In another file where you want to use the add function:
var mathFunction_1 = require("./mathFunction");
console.log((0, mathFunction_1.add)(7, 2));
// Demonstrates importing the add function from mathFunctions.ts and using it.
// Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.
var person_1 = require("./person");
var name = new person_1.Person("Hamza");
name.greet();
// This code illustrates the syntax and usage differences between default and named exports.
