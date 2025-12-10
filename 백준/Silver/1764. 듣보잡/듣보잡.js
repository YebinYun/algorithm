const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const listen = new Set();

// 듣도 못한 사람 저장
for (let i = 1; i <= N; i++) {
  listen.add(input[i]);
}

const result = [];

// 보도 못한 사람은 즉시 비교만 하고 저장하지 않음
for (let i = N + 1; i <= N + M; i++) {
  const name = input[i];
  if (listen.has(name)) result.push(name);
}

result.sort();

console.log(result.length);
console.log(result.join("\n"));