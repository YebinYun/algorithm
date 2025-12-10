const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/);

const N = Number(input[0]);
const M = Number(input[1]);

const listen = input.slice(2, 2 + N);
const see = input.slice(2 + N, 2 + N + M);

const set = new Set(listen);
const result = [];

for (const name of see) {
  if (set.has(name)) result.push(name);
}

result.sort();

console.log(result.length);
console.log(result.join("\n"));
