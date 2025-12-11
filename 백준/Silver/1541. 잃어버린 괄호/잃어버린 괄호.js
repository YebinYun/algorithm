const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();

const minusParts = input.split("-");
// const plusParts = input.split("+");

let result = 0;
const firstTokens = minusParts[0].split("+");

for (let i = 0; i < firstTokens.length; i++) {
  result += Number(firstTokens[i]);
}

for (let i = 1; i < minusParts.length; i++) {
  const tokens = minusParts[i].split("+");

  let sum = 0;
  for (let j = 0; j < tokens.length; j++) {
    sum += Number(tokens[j]);
  }

  result -= sum;
}

console.log(result);