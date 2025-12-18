const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const N = Number(input[0].split(" ")[0]);
const M = Number(input[0].split(" ")[1]);

const nameToNumber = new Map();
const numberToName = [];

for (let i = 1; i <= N; i++) {
  const saveData = input[i];
  nameToNumber.set(saveData, i);
  numberToName[i] = saveData;
}

for (let j = N + 1; j <= N + M; j++) {
  const queryData = input[j];

  nameToNumber.has(queryData)
    ? console.log(nameToNumber.get(queryData))
    : console.log(numberToName[Number(queryData)]);
}
