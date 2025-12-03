const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

let result = [];

for (let i = 0; i < input.length; i += 2) {
  result.push(input[i] + input[i + 1]);
}

console.log(result.join('\n'));
