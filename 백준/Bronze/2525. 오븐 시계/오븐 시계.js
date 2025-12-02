const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);

let A = Number(input[0]);
let B = Number(input[1]); 
let C = Number(input[2]); 

let totalMinutes = A * 60 + B + C;

let H = Math.floor(totalMinutes / 60) % 24;
let M = totalMinutes % 60;

console.log(H, M);
