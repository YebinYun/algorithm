const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

const N = input[0];
const totalScore = input.slice(1);

const memo = Array.from({ length: N }, () => [-1, -1, -1]);

function dp(i, j) {
    if (i < 0) return 0;
    if (memo[i][j] !== -1) return memo[i][j];

    if (j === 1) {
        memo[i][j] = Math.max(dp(i - 2, 1), dp(i - 2, 2)) + totalScore[i];
    } else {
        memo[i][j] = dp(i - 1, 1) + totalScore[i];
    }

    return memo[i][j];
}

const result = Math.max(dp(N - 1, 1), dp(N - 1, 2));
console.log(result);