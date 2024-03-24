"use strict";
// Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.
let guests = ["Babar Azam", "Mohammad Rizwan", "Iftikhar Ahmed"];
console.log("Great news! I found a bigger dinner table!");
guests.unshift("Hasan Ali");
guests.splice(guests.length / 2, 0, "Mohammad Wasim");
guests.push("Haris Rauf");
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
// Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.
console.log("Unfortunately, I can only invite two people for dinner.");
while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}
guests.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});
guests.splice(0, guests.length);
console.log(guests);
// Question 18: Seeing the World: Think of at least five places you’d like to visit.
let places = ["Makkah", "Madina", "Dubai", "Pakistan", "Japan"];
console.log("Original order:", places);
console.log("Alphabetical order:", [...places].sort());
console.log("Original order:", places);
console.log("Reverse alphabetical order:", [...places].sort().reverse());
console.log("Original order:", places);
places.reverse();
console.log("Reversed order:", places);
places.reverse();
console.log("Original order:", places);
places.sort();
console.log("Alphabetical order:", places);
places.reverse();
console.log("Reverse alphabetical order:", places);
