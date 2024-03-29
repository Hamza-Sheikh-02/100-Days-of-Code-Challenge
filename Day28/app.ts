// Question 82: Find the Length of a String: Write a function that takes a string as an argument and returns the number of characters in the string.

function stringLength(str: string): number {
    return str.length;
}

console.log(stringLength("Hamza"));

// Question 83: Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, then to lowercase, and logs both.

function convertCase(str: string) {
    let upperStr = str.toUpperCase();
    let lowerStr = str.toLowerCase();

    console.log(`Uppercase: ${upperStr}, Lowercase: ${lowerStr}`);
}

convertCase("Hamza Sheikh");

// Question 84: Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word "JavaScript" with "TypeScript".

function replaceJavaScriptWithTypeScript(sentence: string): string {
    return sentence.replace(/JavaScript/g, "TypeScript");
}

console.log(replaceJavaScriptWithTypeScript("I love JavaScript because JavaScript is awesome!"));
