const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().toUpperCase();

const counts = new Array(26).fill(0);

for (let i = 0; i < input.length; i++) {
  const idx = input.charCodeAt(i) - 65;
  counts[idx]++;
}

let max = 0;
let maxIndex = -1;
let maxCount = 0; 

for (let i = 0; i < 26; i++) {
  if (counts[i] > max) {
    max = counts[i];
    maxIndex = i;
    maxCount = 1;
  } else if (counts[i] === max) {
    maxCount++; 
  }
}

console.log(maxCount > 1 ? "?" : String.fromCharCode(maxIndex + 65));
