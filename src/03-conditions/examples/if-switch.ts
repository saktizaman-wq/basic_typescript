/**
 * Module 03: Conditions — Examples
 *
 * Run: npm run example src/03-conditions/examples/if-switch.ts
 */

const temperature = 28;

// if / else if / else
console.log("=== if / else ===");
if (temperature > 30) {
  console.log("It's hot outside!");
} else if (temperature >= 20) {
  console.log("It's warm outside.");
} else {
  console.log("It's cool outside.");
}

// switch statement
const day: string = "Monday";

console.log("\n=== switch ===");
switch (day) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    console.log("It's a weekday — time to study!");
    break;
  case "Saturday":
  case "Sunday":
    console.log("It's the weekend — relax!");
    break;
  default:
    console.log("Unknown day.");
}

// Nested conditions
const score = 85;
const hasBonus = true;

console.log("\n=== Nested conditions ===");
if (score >= 60) {
  const finalScore = hasBonus ? score + 5 : score;
  console.log(`Passed with score: ${finalScore}`);
} else {
  console.log("Failed — keep practicing!");
}

