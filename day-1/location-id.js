const fs = require("fs");
const locationPairs = fs
  .readFileSync("./puzzle-input.txt", "utf-8")
  .split("\n")
  .map((row) => row.split("   "));

const leftIds = locationPairs.map(([leftId]) => +leftId).sort();
const rightIds = locationPairs.map(([, rightId]) => +rightId).sort();

let sum = 0;

leftIds.forEach((element, i) => {
  sum += Math.abs(leftIds[i] - rightIds[i]);
});

let similarityScore = 0;

leftIds.forEach((element) => {
  similarityScore += rightIds.filter((x) => x === element).length * element;
});

console.log("sum: ", sum);
console.log("similarity score: ", similarityScore);
