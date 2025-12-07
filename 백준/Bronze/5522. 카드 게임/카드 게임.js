const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n").map(Number);

const sum = input.reduce((a, b) => a + b, 0);

console.log(sum);
