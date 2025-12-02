const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(' ');

let H = Number(input[0]);
let M = Number(input[1]);

const isBefore45 = M < 45;

H = isBefore45 ? (H === 0 ? 23 : H - 1) : H;
M = isBefore45 ? M + 60 - 45 : M - 45;

console.log(H, M);
