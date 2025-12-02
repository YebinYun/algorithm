const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(' ');

const a = Number(input[0]);
const b = Number(input[1]);
const c = Number(input[2]);

let prize;

if (a === b && b === c) {
  prize = 10000 + a * 1000;
} else if (a === b || a === c) {
  prize = 1000 + a * 100;
} else if (b === c) {
  prize = 1000 + b * 100;
} else {
  prize = Math.max(a, b, c) * 100;
}

console.log(prize);