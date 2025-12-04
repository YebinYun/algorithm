const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

let min = input[1];
let max = input[1];

for (let i = 2; i < input.length; i++) {
  const v = input[i];
  if (v < min) min = v;
  if (v > max) max = v;
}

console.log(min, max);