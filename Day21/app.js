// Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
var VehicleType;
(function (VehicleType) {
    VehicleType[VehicleType["Car"] = 0] = "Car";
    VehicleType[VehicleType["Truck"] = 1] = "Truck";
    VehicleType[VehicleType["Motorcycle"] = 2] = "Motorcycle";
})(VehicleType || (VehicleType = {}));
console.log(VehicleType.Car);
var student = {
    name: "Hamza",
    age: 14,
    courses: ["Computer", "Math", "Physics"]
};
console.log(student);
var circle = {
    kind: "circle",
    radius: 6
};
var rectangle = {
    kind: "rectangle",
    width: 15,
    height: 25
};
console.log(circle);
console.log(rectangle);
