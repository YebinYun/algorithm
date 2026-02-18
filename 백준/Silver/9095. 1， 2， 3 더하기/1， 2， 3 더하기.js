const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

const T = input[0];
const N = input.slice(1);

const dp = new Array(11).fill(0);
dp[0] = 1;

for (let i = 1; i < 11; i++) {
  for (let j = 1; j <= 3; j++) {
    if (i - j >= 0) {
        dp[i] += dp[i - j];
    }
  }
}

const results = N.map(n => dp[n]);

console.log(results.join("\n"));