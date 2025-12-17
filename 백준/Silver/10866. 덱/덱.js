const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/);

const count = Number(input[0]);
const deque = [];
const output = [];

let idx = 1;

for (let processed = 0; processed < count; processed++) {
  const cmd = input[idx++];

  switch (cmd) {
    case "push_front": {
      const value = Number(input[idx++]);
      deque.unshift(value);
      break;
    }

    case "push_back": {
      const value = Number(input[idx++]);
      deque.push(value);
      break;
    }

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
