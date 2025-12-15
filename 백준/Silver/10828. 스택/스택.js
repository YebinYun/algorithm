const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/);

const count = Number(input[0]);
const stack = [];
const output = [];

let idx = 1;

for (let i = 0; i < count; i++) {
  const command = input[idx];

  switch (command) {
    case "push": {
      const value = Number(input[idx + 1]);
      stack.push(value);
      idx += 2;
      break;
    }

    case "pop": {
      if (stack.length === 0) {
        output.push("-1");
      } else {
        output.push(String(stack.pop()));
      }
      idx += 1;
      break;
    }

    case "size": {
      output.push(String(stack.length));
      idx += 1;
      break;
    }

    case "empty": {
      output.push(stack.length === 0 ? "1" : "0");
      idx += 1;
      break;
    }

    case "top": {
      if (stack.length === 0) {
        output.push("-1");
      } else {
        output.push(String(stack[stack.length - 1]));
      }
      idx += 1;
      break;
    }
  }
}

console.log(output.join("\n"));