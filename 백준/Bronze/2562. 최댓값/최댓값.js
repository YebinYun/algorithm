const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

let max = input[0];
let index = 1;

for (let i = 1; i < input.length; i++) {
  if (input[i] > max) {
    max = input[i];
    index = i + 1;
  }
}

console.log(max + "\n" + index);