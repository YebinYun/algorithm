const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/);

const N = parseInt(input[0]);
const M = parseInt(input[1]);

const numbers = input.slice(2, 2 + N).map(Number);
const prefix = new Array(N + 1).fill(0);

for (let i = 1; i <= N; i++) {
  prefix[i] = prefix[i - 1] + numbers[i - 1];
}

let result = "";
let index = 2 + N;

for (let q = 0; q < M; q++) {
  const start = parseInt(input[index++]);
  const end = parseInt(input[index++]);
  const sum = prefix[end] - prefix[start - 1];
  result += sum + "\n";
}

console.log(result.trim());
