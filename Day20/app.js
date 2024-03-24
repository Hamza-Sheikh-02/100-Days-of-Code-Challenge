// Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average.
function averageScore() {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    var total = scores.reduce(function (sum, score) { return sum + score; }, 0);
    return total / scores.length;
}
console.log(averageScore(70, 80, 100, 90));
// Question 59: Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.
function makeAdder(valueToAdd) {
    return function (number) {
        return number + valueToAdd;
    };
}
var addFive = makeAdder(5);
console.log(addFive(10));
// Question 60: Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.
var userProfile = (function () {
    var name = "Hamza";
    var age = 14;
    return {
        displayInfo: function () {
            console.log("Name: ".concat(name, ", Age: ").concat(age));
        }
    };
})();
userProfile.displayInfo();
