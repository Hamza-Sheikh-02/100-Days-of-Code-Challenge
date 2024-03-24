"use strict";
// Question 37: Large Shirts: Default values in make_shirt().
function make_shirt(size = "large", message = "I love TypeScript") {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}
make_shirt();
make_shirt("medium");
make_shirt("small", "I love Javascript");
// Question 38: Cities: Describing cities with a function.
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("Dubai", "UAE");
// Question 39: City Names: Formatting city-country pairs.
function city_country(city, country) {
    return `${city}, ${country}`;
}
console.log(city_country("Islamabad", "Pakistan"));
console.log(city_country("London", "United Kingdom"));
console.log(city_country("New York", "United States"));
