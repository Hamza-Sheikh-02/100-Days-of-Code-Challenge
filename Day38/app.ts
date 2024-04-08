// Question 112: Create a Map that stores the names of countries as keys and their capitals as values. Add three countries to the Map.

const countries = new Map<string, string>();
countries.set("UAE", "Abu Dhabi");
countries.set("Pakistan", "Karachi");
countries.set("India", "New Delhi");

console.log(countries);

// Question 113: Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.

function logCapitalOfCanada(countries: Map<string, string>): void {
  if (countries.has("Canada")) {
    console.log(`The capital of Canada is ${countries.get("Canada")}`);
  } else {
    console.log("Canada is not in the Map.");
  }
}

logCapitalOfCanada(countries);

// Question 114: Iterate over a Map of student IDs and names, and log each pair to the console.

const students = new Map<number, string>();
students.set(1, "Hamza");
students.set(2, "Kabeer");
students.set(3, "Usman");

students.forEach((name, id) => {
  console.log(`Student ID: ${id}, Name: ${name}`);
});
