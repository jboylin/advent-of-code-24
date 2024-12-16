const fs = require("fs");

fs.readFile("./puzzle-input.txt", "utf-8", (err, data) => {
  if (err) throw err;

  const wordGrid = data.split("\n").map((line) => line.split(""));
  const rows = wordGrid.length;
  const cols = wordGrid[0].length;
  const target = "XMAS".split("");

  let count = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (target.every((char, index) => char === wordGrid?.[i]?.[j + index]))
        count++;
      if (target.every((char, index) => char === wordGrid?.[i]?.[j - index]))
        count++;
      if (target.every((char, index) => char === wordGrid?.[i + index]?.[j]))
        count++;
      if (target.every((char, index) => char === wordGrid?.[i - index]?.[j]))
        count++;
      if (
        target.every(
          (char, index) => char === wordGrid?.[i + index]?.[j + index]
        )
      )
        count++;
      if (
        target.every(
          (char, index) => char === wordGrid?.[i + index]?.[j - index]
        )
      )
        count++;
      if (
        target.every(
          (char, index) => char === wordGrid?.[i - index]?.[j + index]
        )
      )
        count++;
      if (
        target.every(
          (char, index) => char === wordGrid?.[i - index]?.[j - index]
        )
      )
        count++;
    }
  }

  // Count occurrences of "XMAS"
  console.log("\n--- Count Result ---");
  console.log("Total XMAS count:", count);

  // Part 2

  //   M   M   S   M   S   S   M   S
  //     A       A       A       A
  //   S   S   S   M   M   M   M   S

  let xMassCount = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (wordGrid[i][j] === "A") {
        if (
          wordGrid?.[i - 1]?.[j - 1] === "M" &&
          wordGrid?.[i - 1]?.[j + 1] === "M" &&
          wordGrid?.[i + 1]?.[j - 1] === "S" &&
          wordGrid?.[i + 1]?.[j + 1] === "S"
        ) {
          xMassCount++;
        }
        if (
          wordGrid?.[i - 1]?.[j - 1] === "S" &&
          wordGrid?.[i - 1]?.[j + 1] === "M" &&
          wordGrid?.[i + 1]?.[j - 1] === "S" &&
          wordGrid?.[i + 1]?.[j + 1] === "M"
        ) {
          xMassCount++;
        }
        if (
          wordGrid?.[i - 1]?.[j - 1] === "S" &&
          wordGrid?.[i - 1]?.[j + 1] === "S" &&
          wordGrid?.[i + 1]?.[j - 1] === "M" &&
          wordGrid?.[i + 1]?.[j + 1] === "M"
        ) {
          xMassCount++;
        }
        if (
          wordGrid?.[i - 1]?.[j - 1] === "M" &&
          wordGrid?.[i - 1]?.[j + 1] === "S" &&
          wordGrid?.[i + 1]?.[j - 1] === "M" &&
          wordGrid?.[i + 1]?.[j + 1] === "S"
        ) {
          xMassCount++;
        }
      }
    }
  }

  console.log("\n--- Part 2 Count Result ---");
  console.log("Total XMAS count in Part 2:", xMassCount);
});
