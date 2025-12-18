const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const count = Number(input[0]);

for (let i = 1; i <= count; i++) {
  const command = input[i];
  let isValid = true;
  const stack = [];

  for (let char of command) {
    if (stack.length === 0 && char === ")") {
      isValid = false;
      break;
    }

    if (char === "(") {
      stack.push(char);
    } else if (char === ")") {
      stack.pop();
    }
  }

  console.log(stack.length === 0 && isValid ? "YES" : "NO");
}
