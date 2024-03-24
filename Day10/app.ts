// Question 28: Stages of Life: Determine a person’s life stage with an if-else chain.

let age: number = 25;

if (age < 2) {
    console.log("The person is a baby.");
} else if (age < 4) {
    console.log("The person is a toddler.");
} else if (age < 13) {
    console.log("The person is a kid.");
} else if (age < 20) {
    console.log("The person is a teenager.");
} else if (age < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}

// Question 29: Favorite Fruit: Create an array for your favorite fruits and check if certain fruits are included.

let favoriteFruits: string[] = ["apple", "banana", "mango"];

if (favoriteFruits.includes("mango")) {
    console.log("You really like magoes!");
}
if (favoriteFruits.includes("apple")) {
    console.log("You really like apples!");
}
if (favoriteFruits.includes("strawberry")) {
    console.log("You really like strawberries!");
}

// Question 30: Hello Admin: Greet users differently, especially 'admin'.

let usernames: string[] = ["admin", "user1", "user2", "user3"];

usernames.forEach(username => {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
});
