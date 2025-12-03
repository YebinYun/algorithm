const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);

const T = Number(input[0]);
let result = [];

for (let i = 0; i < T; i++) {
  const A = Number(input[i * 2 + 1]);
  const B = Number(input[i * 2 + 2]);
  result.push(A + B);
}

console.log(result.join('\n'));
