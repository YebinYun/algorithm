const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

const N = input[0];
const tree = Array.from({ length: N + 1 }, () => ({ left: null, right: null }));

let index = 1;

for (let i = 0; i < N; i++) {
  const a = input[index++];
  const b = input[index++];
  const c = input[index++];

  tree[a].left = b === -1 ? null : b;
  tree[a].right = c === -1 ? null : c;
}

let depth = 0;
let current = 1;

while (tree[current].right !== null) {
  current = tree[current].right;
  depth++;
}

const result = 2 * (N - 1) - depth;

console.log(result);
