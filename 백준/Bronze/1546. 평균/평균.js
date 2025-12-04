const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

const N = input[0];

let max = input[1];
for (let i = 2; i <= N; i++) {
  if (input[i] > max) {
      max = input[i];
  }
}

let sum = 0;
for (let i = 1; i <= N; i++) {
  sum += (input[i] / max) * 100;
}

console.log(sum / N);
