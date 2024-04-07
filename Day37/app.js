// Question 109: Write an if statement that logs "Good Morning" if the current time is before 12 PM.
var currentTime = new Date();
if (currentTime.getHours() < 12) {
    console.log("Good Morning");
}
// Question 110: Create a function that assigns a grade (A, B, C, D, F) based on a student's score.
function assignGrade(score) {
    if (score >= 80) {
        return "A";
    }
    else if (score >= 70) {
        return "B";
    }
    else if (score >= 60) {
        return "C";
    }
    else if (score >= 50) {
        return "D";
    }
    else {
        return "F";
    }
}
console.log(assignGrade(91));
console.log(assignGrade(70));
// Question 111: Use an if-else-if chain to categorize a person's age group (child, teenager, adult).
function categorizeAge(age) {
    if (age < 13) {
        return "child";
    }
    else if (age <= 19) {
        return "teenager";
    }
    else {
        return "adult";
    }
}
console.log(categorizeAge(10));
console.log(categorizeAge(14));
console.log(categorizeAge(21));
