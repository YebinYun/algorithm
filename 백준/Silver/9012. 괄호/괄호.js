const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const count = Number(input[0]);

for (let i = 1; i <= count; i++) {
  const command = input[i];
  const stack = [];
  let isValid = true;

  for (let char of command) {
    if (char === "(") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.length === 0) {
        isValid = false;
        break;
      }
      stack.pop();
    }
  }
  console.log(stack.length === 0 && isValid ? "YES" : "NO");
}
