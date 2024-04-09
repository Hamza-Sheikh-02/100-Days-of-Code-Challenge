// Question 115: Use a switch statement to log the days of the week based on a number (1-7).
function logDayOfWeek(dayNumber) {
    switch (dayNumber) {
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
        default:
            console.log("Invalid day number");
            break;
    }
}
logDayOfWeek(6);
// Question 116: Create a switch case that matches several cases to the same code block, representing seasons.
function logSeason(month) {
    switch (month) {
        case 12:
        case 1:
        case 2:
            console.log("Winter");
            break;
        case 3:
        case 4:
        case 5:
            console.log("Spring");
            break;
        case 6:
        case 7:
        case 8:
            console.log("Summer");
            break;
        case 9:
        case 10:
        case 11:
            console.log("Fall");
            break;
        default:
            console.log("Invalid month");
            break;
    }
}
logSeason(9);
// Question 117: Implement a switch statement that evaluates an expression and uses the default case if none of the cases match.
function evaluateGrade(grade) {
    switch (grade) {
        case "A1":
            console.log("Excellent");
            break;
        case "A":
            console.log("Good");
            break;
        case "B":
            console.log("Fair");
            break;
        case "C":
            console.log("Average");
            break;
        case "D":
            console.log("Poor");
            break;
        case "F":
            console.log("Fail");
            break;
        default:
            console.log("Invalid grade");
            break;
    }
}
evaluateGrade("A");
