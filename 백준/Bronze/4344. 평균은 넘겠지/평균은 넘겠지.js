const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const C = Number(input[0]);

for (let i = 1; i <= C; i++) {
  const arr = input[i].split(" ").map(Number);
  const N = arr[0];
  const scores = arr.slice(1);

  let sum = 0;
  for (const s of scores) sum += s;
  const average = sum / N;

  let count = 0;
  for (const s of scores) {
    if (s > average) count++;
  }

  const percent = (count / N) * 100;
  console.log(percent.toFixed(3) + "%");
}
