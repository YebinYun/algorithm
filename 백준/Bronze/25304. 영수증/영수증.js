const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);

let X = Number(input[0]);
let N = Number(input[1]);

let sum = 0;

for (let i = 2; i < 2 + N * 2; i += 2) {
  const a = Number(input[i]);    
  const b = Number(input[i + 1]); 
  sum += a * b;
}

console.log(sum === X ? "Yes" : "No");
