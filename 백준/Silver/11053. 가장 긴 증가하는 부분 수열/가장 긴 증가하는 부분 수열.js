const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

const N = input[0];
const A = input.slice(1, N + 1);
const memo = new Array(N).fill(-1);

function dp(i) {
  if (memo[i] !== -1) return memo[i];

  let best = 1;

  for (let j = 0; j < i; j++) {
    if (A[j] < A[i]) {
      best = Math.max(best, dp(j) + 1);
    }
  }

  memo[i] = best;
  return best;
}

let result = 0;

for (let i = 0; i < N; i++) {
  result = Math.max(result, dp(i));
}
console.log(result);      