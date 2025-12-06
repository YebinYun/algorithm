const fs = require('fs');
const s = fs.readFileSync(0, 'utf8').trim();

const alphabet = "abcdefghijklmnopqrstuvwxyz";
let result = [];

for (let i = 0; i < alphabet.length; i++) {
  result.push(s.indexOf(alphabet[i]));
}

console.log(result.join(' '));
