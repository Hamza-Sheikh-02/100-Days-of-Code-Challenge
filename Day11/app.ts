// Question 31: No Users: Ensure your user list isn’t empty.

let usernames: string[] = [];

if (usernames.length === 0) {
    console.log("We need to find some users!");
} 
else {
    for (let username of usernames) {
        if (username === 'Admin') {
            console.log("Hello Admin, would you like to see a status report?");
        } 
        else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}

// Question 32: Checking Usernames: Ensure uniqueness in usernames.

let current_users: string[] = ['hamza', 'kabeer', 'usman', 'zayan', 'admin'];
let new_users: string[] = ['asif', 'KABEER', 'aliyan', 'murtaza', 'HAMZA'];

for (let new_user of new_users) {
    let lowercase_new_user = new_user.toLowerCase();
    let username_exists = false;

    for (let current_user of current_users) {
        if (current_user.toLowerCase() === lowercase_new_user) {
            username_exists = true;
            break;
        }
    }

    if (username_exists) {
        console.log(`Sorry, ${new_user}, that username is already taken. Please enter a new username.`);
    } 
    else {
        console.log(`Congratulations, ${new_user}, the username is available!`);
    }
}

// Question 33: Ordinal Numbers: Display numbers with their ordinal suffixes.

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach(number => {
    let suffix = "th";
    if (number === 1) {
        suffix = "st";
    } else if (number === 2) {
        suffix = "nd";
    } else if (number === 3) {
        suffix = "rd";
    }
    console.log(`${number}${suffix}`);
});
