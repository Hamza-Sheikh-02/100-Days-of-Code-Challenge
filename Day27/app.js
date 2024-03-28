// Question 79: Creating and Accessing Object Properties: Construct an object representing a car with properties for make, model, and year. Then, show how you can access the model property of the car.
var car1 = {
    make: "Toyota",
    model: "Corolla",
    year: 2022
};
console.log(car1.model);
// Question 80: Updating Object Properties: Add a property named color to the existing car object, and then update the year property to 2021. Show how to perform these operations.
var car2 = {
    make: "Toyota",
    model: "Supra",
    year: 2020,
    color: "red"
};
car2.color = "blue";
car2.year = 2021;
console.log(car2);
// Question 81: Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.
function logObjectProperties(obj) {
    for (var property in obj) {
        console.log("".concat(property, ": ").concat(obj[property]));
    }
}
logObjectProperties({ make: "Toyota", model: "Corolla", year: 2021, color: "black" });
