const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const count = Number(input[0]);
const deque = [];
const output = [];

for (let i = 1; i <= count; i++) {
  const commandLine = input[i];

  if (commandLine.startsWith("push_front")) {
    const [, value] = commandLine.split(" ");
    deque.unshift(Number(value));
    continue;
  }

  if (commandLine.startsWith("push_back")) {
    const [, value] = commandLine.split(" ");
    deque.push(Number(value));
    continue;
  }

  switch (commandLine) {
    case "pop_front":
      output.push(deque.length === 0 ? "-1" : String(deque.shift()));
      break;

    case "pop_back":
      output.push(deque.length === 0 ? "-1" : String(deque.pop()));
      break;

    case "front":
      output.push(deque.length === 0 ? "-1" : String(deque[0]));
      break;

    case "back":
      output.push(deque.length === 0 ? "-1" : String(deque[deque.length - 1]));
      break;

    case "size":
      output.push(String(deque.length));
      break;

    case "empty":
      output.push(deque.length === 0 ? "1" : "0");
      break;
  }
}

console.log(output.join("\n"));
