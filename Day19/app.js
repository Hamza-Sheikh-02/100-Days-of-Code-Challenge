"use strict";
// Question 55: Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.
let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers);
// Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
let mixedArray = [1, "mango", 2, "cherry", true, "apple"];
let stringsArray = mixedArray.filter(item => typeof item === "string");
console.log(stringsArray);
// Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.
let grades = [86, 79, 81, 95, 67, 90];
let averageGrade = grades.reduce((total, grade) => total + grade, 0) / grades.length;
console.log(averageGrade);
