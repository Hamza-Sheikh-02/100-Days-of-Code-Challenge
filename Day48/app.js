// Question 142: Create a Promise that resolves with "Hello, World!" after 2 seconds.
var helloPromise = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("Hello, World!");
    }, 2000);
});
helloPromise.then(function (message) { return console.log(message); });
// Question 143: Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.
var conditionalPromise = new Promise(function (resolve, reject) {
    var success = Math.random() > 0.5;
    if (success) {
        resolve("Success!");
    }
    else {
        reject(new Error("Failure"));
    }
});
conditionalPromise
    .then(function (result) { return console.log(result); }) // Handles a successful resolution
    .catch(function (error) { return console.log(error.message); }); // Handles a rejection
// Question 144: Explain the use of the Promise.all() method with an example.
var promise1 = Promise.resolve(3);
var promise2 = 25;
var promise3 = new Promise(function (resolve) {
    setTimeout(resolve, 100, "foo");
});
Promise.all([promise1, promise2, promise3]).then(function (values) {
    console.log(values);
});
