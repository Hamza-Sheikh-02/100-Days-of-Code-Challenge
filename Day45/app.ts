// Question 133: Write a JavaScript object and convert it into a JSON string.

const person1 = {
    name: "Hamza",
    age: 14,
    city: "Karachi",
};

const jsonString1 = JSON.stringify(person1);
console.log(jsonString1);

// Question 134: Take a JSON string and parse it into a JavaScript object.

const jsonString2 = '{"name":"Hamza","age":14,"city":"Karachi"}';
const person2 = JSON.parse(jsonString2);

console.log(person2);

// Question 135: Explain how you can format a JSON string with proper indentation for readability.

const person3 = {
    name: "Hamza",
    age: 14,
    city: "Karachi",
};

const jsonString3 = JSON.stringify(person3, null, 2);
console.log(jsonString3);
