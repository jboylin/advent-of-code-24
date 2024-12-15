const fs = require("fs");
const reports = fs
  .readFileSync("./puzzle-input.txt", "utf-8")
  .split("\n")
  .map((report) => {
    return report.split(" ").map(Number);
  });

let noOfSafeReports = 0;

function isAscending(arr) {
  return arr.every(function (x, i) {
    return i === 0 || x >= arr[i - 1];
  });
}

function isDescending(arr) {
  return arr.every(function (x, i) {
    return i === 0 || x <= arr[i - 1];
  });
}

function checkSortedArray(arr) {
  return isAscending(arr) || isDescending(arr);
}

function checkDifference(arr) {
  const sortedArr = [...arr].sort((a, b) => a - b);
  for (let i = 1; i < sortedArr.length; i++) {
    const diff = sortedArr[i] - sortedArr[i - 1];
    if (diff < 1 || diff > 3) {
      return false;
    }
  }
  return true;
}

function isSafe(report) {
  if (checkSortedArray(report) && checkDifference(report)) {
    noOfSafeReports++;
    return;
  } else {
    for (let i = 0; i < report.length - 1; i++) {
      const newReport = [...report.slice(0, i), ...report.slice(i + 1)];
      if (checkSortedArray(newReport) && checkDifference(newReport)) {
        noOfSafeReports++;
      }
    }
  }
}

reports.forEach((report) => {
  isSafe(report);
});
console.log("Total number of safe reports: ", noOfSafeReports);
