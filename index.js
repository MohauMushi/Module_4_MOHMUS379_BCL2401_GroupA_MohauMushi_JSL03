// # [JSL04]: Monster Ternary Operator

// #### Challenge 1: Flavor Selection
// The variable below holds a user's preferred type of Monster Energy drink, and
// print whether the user prefers a "Regular" or "Sugar-free" variety. If the preference is not set, default to "Regular".

let userPreference = `Sugar-free`; // Possible values: 'Regular', 'Sugar-free', or undefined

let flavorSelection = (userPreference === `Sugar-free`) ?  `Sugar-free` : ` Regular`;
console.log("User prefers: " + flavorSelection + " variety");

// #### Challenge 2: Stock Check
// The variable below tracks the number of Monster Energy cans left in the fridge. 
// Uses a ternary operator to print "Time to restock!" if the number is less than 5, or "We're stocked!" if the number is 5 or more.

let cansLeft = 3; // Any number of cans
let stockCheck = (cansLeft < 5) ? "Time to restock": "We're stocked!";
console.log(stockCheck);


// #### Challenge 3: Workout Intensity
// Based on the current heart rate, code below determine if the user should drink a Monster Energy drink to boost their workout. 
// If the heart rate is below 100 bpm, print "Boost needed!", otherwise, print "Energy levels are high!".

let heartRate = 95; // Current heart rate in bpm

let workoutIntensity = (heartRate < 100) ? "Boost needed!" : "Energy levels are high!";

console.log(workoutIntensity);


// #### Challenge 4: Temperature Suitability
// Code below demostrate Monster Energy drinks are best served cold. Given the current temperature, use a ternary to print "Chilled to perfection!" 
// if the temperature is below or equal to 5°C, or "Needs a cooler!" if above 5°C.

let currentTemp = 4; // Current temperature in °C
let temperatureSuitability = (currentTemp <= 5) ? "Chilled to perfection!" : "Needs a cooler!" ;
console.log(temperatureSuitability);


// #### Challenge 5: Late Night Coding Session
// Determine if it's a good idea to have a Monster Energy drink based on the current hour.
// If it's between 7am and midnight (24-hour format), print "Unleash the beast!",
// otherwise, print "Better stick to water."

// Define the current hour in 24-hour format
let currentHour = 22; 

// Code below determine if it's a good idea to have a Monster Energy drink based on the current hour
// If it's between 7am and midnight (24-hour format), print "Unleash the beast!"
// Otherwise, print "Better stick to water."

let codingSession = (currentHour > 7 && currentHour < 24) ? "Unleash the beast" : "Better stick to water.";
console.log(codingSession);