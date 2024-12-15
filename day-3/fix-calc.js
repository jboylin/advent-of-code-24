const fs = require("fs");
calcInput = fs.readFile("./test.txt", "utf-8", (err, data) => {
  const regexPattern = /mul\(\d{1,3},\d{1,3}\)/g;
  const regexPatternEnableDisable = /mul\(\d{1,3},\d{1,3}\)|do\(\)|don't\(\)/g;

  const instructions = data.match(regexPattern);

  console.log(instructions);

  let acc = 0;
  instructions.forEach((sum) => {
    const [a, b] = sum.slice(4, -1).split(",").map(Number);
    acc += a * b;
  });

  console.log("accumulator:", acc);

  let newAcc = 0;
  let isEnabled = true;
  const instructions2 = data.match(regexPatternEnableDisable);

  instructions2.forEach((instruction, i) => {
    if (instruction === "do()") {
      isEnabled = true;
    } else if (instruction === "don't()") {
      isEnabled = false;
    } else if (isEnabled) {
      const [a, b] = instruction.slice(4, -1).split(",").map(Number);
      newAcc += a * b;
    }
  });
  console.log("accumulator after fixing the program:", newAcc);
});
