const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const nameToNumber = new Map();
const numberToName = [];
const result = [];

for (let i = 1; i <= N; i++) {
  const name = input[i];
  nameToNumber.set(name, i);
  numberToName[i] = name;
}

for (let j = N + 1; j <= N + M; j++) {
  const query = input[j];

  if (nameToNumber.has(query)) {
    result.push(String(nameToNumber.get(query)));
  } else {
    result.push(numberToName[Number(query)]);
  }
}

console.log(result.join("\n"));
