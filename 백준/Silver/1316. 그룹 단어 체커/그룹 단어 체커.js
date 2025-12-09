const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const N = Number(input[0]);
let groupCount = 0;

for (let i = 1; i <= N; i++) {
  const word = input[i];
  const visited = new Array(26).fill(false);

  let prev = word[0];
  visited[prev.charCodeAt(0) - 97] = true;

  let isGroup = true;

  for (let j = 1; j < word.length; j++) {
    const cur = word[j];

    if (cur !== prev) {
      const idx = cur.charCodeAt(0) - 97;

      if (visited[idx]) {
        isGroup = false;
        break;
      }

      visited[idx] = true;
      prev = cur; 
    }
  }

  if (isGroup) {
      groupCount++
  };
}

console.log(groupCount);