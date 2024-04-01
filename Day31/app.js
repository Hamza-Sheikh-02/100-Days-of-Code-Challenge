// Question 91: Create an array of your three favorite fruits and add a new fruit to the end of the array.
var favoriteFruits = ["Mango", "Melon", "Kiwi"];
favoriteFruits.push("Apple");
console.log(favoriteFruits);
// Question 92: Write a function to remove the last element from an array and return the removed element.
function removeLastElement(arr) {
    return arr.pop();
}
var fruit = ["Mango", "Melon", "Kiwi"];
console.log(removeLastElement(fruit));
console.log(fruit);
// Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".
function replaceBananaWithMango(fruits) {
    var index = fruits.indexOf("Melon");
    if (index !== -1)
        fruits[index] = "Orange";
}
var fruits = ["Mango", "Melon", "Kiwi"];
replaceBananaWithMango(fruits);
console.log(fruits);
