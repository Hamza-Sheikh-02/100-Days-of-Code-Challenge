// Question 118: Write a loop that logs numbers from 1 to 10 to the console.

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Question 119: Create a while loop that logs "Hello, World!" 5 times.

let count: number = 0;

while (count < 5) {
  console.log("Hello, World!");
  count++;
}

// Question 120: Use a for...of loop to iterate through an array of your favorite movies and log each one.

const favoriteMovies: string[] = ["The Amazing Spider-Man", "The Last of Us", "Fighter"];

for (const movie of favoriteMovies) {
  console.log(movie);
}
